"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = ["B", "S", "M"];

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setIsLoading(false), reducedMotion ? 0 : 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#02040a",
            overflow: "hidden",
          }}
        >
          {/* Aurora pulsante no fundo */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            style={{
              position: "absolute",
              width: "clamp(300px, 50vw, 600px)",
              height: "clamp(300px, 50vw, 600px)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(43, 183, 255, 0.08) 0%, rgba(109, 101, 255, 0.04) 40%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          {/* Letras B S M com stagger */}
          <div style={{ display: "flex", gap: "clamp(0.3rem, 1vw, 0.6rem)", position: "relative" }}>
            {letters.map((letter, i) => (
              <motion.span
                key={letter}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  display: "inline-block",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtítulo "Studio" */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(236, 242, 255, 0.5)",
              marginTop: "0.6rem",
            }}
          >
            Studio
          </motion.span>

          {/* Barra de progresso na base */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "2px",
              background: "linear-gradient(90deg, var(--accent-cyan, #2bb7ff), var(--accent-violet, #6d65ff))",
              transformOrigin: "left",
            }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
