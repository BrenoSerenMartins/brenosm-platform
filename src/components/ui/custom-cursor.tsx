"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useAnimationFrame, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for cursor position
  const cursorX = useSpring(-100, { stiffness: 400, damping: 30, mass: 0.5 });
  const cursorY = useSpring(-100, { stiffness: 400, damping: 30, mass: 0.5 });

  // Raw mouse tracking for stable delta calculations
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Stretch and rotation values
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);
  const rotate = useMotionValue(0);

  // Animation frame loop: Stretch based on distance between raw mouse and spring cursor
  useAnimationFrame(() => {
    const dx = mouseX.get() - cursorX.get();
    const dy = mouseY.get() - cursorY.get();
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Efeito elástico sutil (máximo de 15% de deformação ao invés de 120%)
    const stretch = 1 + Math.min(distance / 600, 0.15);

    scaleX.set(stretch);
    scaleY.set(1 / stretch);

    if (distance > 2) {
      rotate.set(Math.atan2(dy, dx) * (180 / Math.PI));
    }
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);
    const handleTextStart = () => setIsTextInput(true);
    const handleTextEnd = () => setIsTextInput(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    const addListeners = () => {
      // Botões e links: bolha expandida
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], .magnetic'
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });

      // Campos de texto: I-beam estilizado
      const textFields = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="url"], input[type="tel"], input[type="number"], input:not([type]), textarea, [contenteditable="true"]'
      );
      textFields.forEach((el) => {
        el.addEventListener("mouseenter", handleTextStart);
        el.addEventListener("mouseleave", handleTextEnd);
      });
    };

    addListeners();
    let debounceTimer: ReturnType<typeof setTimeout>;
    const observer = new MutationObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(addListeners, 500);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], .magnetic'
      );
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });

      const textFields = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="url"], input[type="tel"], input[type="number"], input:not([type]), textarea, [contenteditable="true"]'
      );
      textFields.forEach((el) => {
        el.removeEventListener("mouseenter", handleTextStart);
        el.removeEventListener("mouseleave", handleTextEnd);
      });
    };
  }, [cursorX, cursorY, isVisible, mouseX, mouseY]);

  if (typeof window !== "undefined" && (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )) {
    return null;
  }

  // Calcula o tamanho e forma com base no estado
  const getSize = () => {
    if (isTextInput) return { width: "2px", height: "24px", borderRadius: "1px" };
    if (isHovering) return { width: "56px", height: "56px", borderRadius: "50%" };
    return { width: "12px", height: "12px", borderRadius: "50%" };
  };

  const size = getSize();

  return (
    <motion.div
      style={{
        left: cursorX,
        top: cursorY,
        x: "-50%",
        y: "-50%",
        scaleX: isTextInput ? 1 : scaleX,
        scaleY: isTextInput ? 1 : scaleY,
        rotate: isTextInput ? 0 : rotate,
        opacity: isVisible ? 1 : 0,
        position: "fixed",
        zIndex: 9999,
        pointerEvents: "none",
        mixBlendMode: "difference", 
        willChange: "transform",
      }}
      initial={false}
      animate={{
        width: size.width,
        height: size.height,
        borderRadius: size.borderRadius,
        backgroundColor: "rgba(255, 255, 255, 1)",
        border: "none",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.5 }}
    />
  );
}
