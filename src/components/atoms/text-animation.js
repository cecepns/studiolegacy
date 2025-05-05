"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const TextAnimation = ({ children, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};
