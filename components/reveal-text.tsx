"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface RevealTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function RevealText({
  children,
  as: Component = "p",
  className = "",
  delay = 0,
  direction = "up",
}: RevealTextProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });
  const contentRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Detect client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle animation when element is in view
  useEffect(() => {
    if (isClient && isIntersecting && contentRef.current) {
      const lines = contentRef.current.querySelectorAll(".reveal-line");
      lines.forEach((line, i) => {
        setTimeout(() => {
          line.classList.add("revealed");
        }, delay + i * 100);
      });
    }
  }, [isClient, isIntersecting, delay]);

  // Split text content into lines for animation
  const splitContent = () => {
    if (typeof children !== "string") {
      return <span className="reveal-line">{children}</span>;
    }
    return children.split(" ").map((word, i) => (
      <span
        key={i}
        className="reveal-line inline-block opacity-0 transition-all duration-700"
        style={{ transitionDelay: `${i * 50}ms` }}
      >
        {word}{" "}
      </span>
    ));
  };

  // Define animation style based on direction
  let animationStyle = "";
  switch (direction) {
    case "up":
      animationStyle = "translate-y-8";
      break;
    case "down":
      animationStyle = "-translate-y-8";
      break;
    case "left":
      animationStyle = "translate-x-8";
      break;
    case "right":
      animationStyle = "-translate-x-8";
      break;
  }

  // Add the animation class to the child elements' classNames
  const childClassName = `reveal-line opacity-0 ${animationStyle}`;
  
  // Server-side or initial rendering - return a simplified version
  if (!isClient) {
    return (
      <Component className={className}>
        {typeof children === "string" ? children : children}
      </Component>
    );
  }

  // Enhanced children with animation classes for client-side
  const enhancedChildren =
    typeof children === "string"
      ? splitContent()
      : React.Children.map(children as React.ReactElement[], (child) =>
          React.cloneElement(child, {
            className: `${child.props.className || ""} ${childClassName}`,
          })
        );

  return (
    <>
      <Component
        ref={(node: HTMLElement | null) => {
          if (node) {
            ref.current = node;
            contentRef.current = node;
          }
        }}
        className={className}
      >
        {enhancedChildren}
      </Component>
      <RevealTextStyles />
    </>
  );
}

// CSS style to make the animation work
export function RevealTextStyles() {
  return (
    <style jsx global>{`
      .reveal-line.revealed {
        opacity: 1 !important;
        transform: translate(0, 0) !important;
      }
    `}</style>
  );
}