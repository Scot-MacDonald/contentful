"use client";
import { gsap } from "gsap";
import { useEffect } from "react";

const FadeInAnimation = () => {
  useEffect(() => {
    gsap.to(".animation-target", {
      opacity: 1,
      duration: 0.2,
      y: -20,
      ease: "back.out",
    });
  }, []);

  return <div className="animation-target">Hello, World!</div>;
};

export default FadeInAnimation;
