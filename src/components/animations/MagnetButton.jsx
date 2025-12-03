import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// The component accepts the ref to its container, content, and optional styles.
export const MagneticButton = ({
  children,
  href = "#",
  primaryColor = 'blue-500',
  textColor = 'white',
  innerClassName,
  wrapperClassName,
  maxPull = 30, // Default constraint values
  magnetStrength = 0.2,
}) => {
  const containerRef = useRef(null);
  const btnRef = useRef(null);

  // Default Inner & Wrapper className
  // const defaultInnerClassName = `bg-${primaryColor} text-${textColor} w-30 h-30 rounded-full`;
  const defaultInnerClassName = `bg-${primaryColor} text-${textColor} w-30 h-30 rounded-full`;
  const defaultWrapperClassName = `hover:border-12 border-${primaryColor} transform-all duration-300`;

  useGSAP(() => {
    const container = containerRef.current;

    // 2. QuickTo for smooth, interrupted animation
    const moveX = gsap.quickTo(btnRef.current, "x", {
      duration: 0.8,
      ease: "power3.out",
    });
    const moveY = gsap.quickTo(btnRef.current, "y", {
      duration: 0.8,
      ease: "power3.out",
    });

    // --- Event Handlers Setup ---
    const handleMouseEnter = () => {
      gsap.to(btnRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "power1.inOut",
      });
    };

    const handleMouseLeave = () => {
      // Reset position to center (0, 0) and scale down
      moveX(0);
      moveY(0);
      gsap.to(btnRef.current, {
        scale: 0,
        duration: 0.4,
        ease: "power1.inOut",
      });
    };

    const handleMouseMove = (e) => {
      // Crucially, you must calculate coordinates relative to the viewport/document
      if (window.innerWidth < 768) return;

      // Get the position and dimensions of the container
      const containerRect = container.getBoundingClientRect();

      // Calculate the center point of the container
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;

      // Calculate the mouse position relative to the container's center
      // This gives us the displacement (dx/dy) from the center
      const dx = e.clientX - containerRect.left - centerX;
      const dy = e.clientY - containerRect.top - centerY;

      // Apply magnetic strength and clamp to maxPull
      let targetX = dx * magnetStrength;
      let targetY = dy * magnetStrength;

      // Ensure the movement doesn't exceed the MAX_PULL limit
      targetX = Math.max(-maxPull, Math.min(maxPull, targetX));
      targetY = Math.max(-maxPull, Math.min(maxPull, targetY));

      // Apply the constrained target displacement
      moveX(targetX);
      moveY(targetY);
    };

    // Attach event listeners to the CONTAINER element
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef, maxPull, magnetStrength]); // Depend on the ref object, not its .current

  return (
    <a
      ref={containerRef}
      href={href}
      className={`absolute inset-0 z-20 flex items-center justify-center ${wrapperClassName || defaultWrapperClassName}`}
    >
      <div
        ref={btnRef}
        // Set to absolute position so it can be moved relative to its container
        style={{ position: "absolute" }}
        className={`text-center flex items-center justify-center font-medium uppercase tracking-widest text-lg scale-0 ${innerClassName || defaultInnerClassName}`}
      >
        {children}
      </div>
    </a>
  );
};

/*When Apply this component, you need to set the position 'relative' in the parent element.*/
