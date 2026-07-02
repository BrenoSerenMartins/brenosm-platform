import React from "react";

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <div className={className} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
      <div style={{ display: "flex", gap: "0.15em", fontSize: "2.6em", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff" }}>
        <span>B</span>
        <span>S</span>
        <span>M</span>
      </div>
      <span style={{ 
        fontSize: "0.5em", 
        fontWeight: 500, 
        letterSpacing: "0.45em", 
        textTransform: "uppercase", 
        color: "rgba(236, 242, 255, 0.5)", 
        marginTop: "0.8em",
        marginRight: "-0.45em" // Compensa o letter-spacing da última letra para centralizar
      }}>
        Studio
      </span>
    </div>
  );
}
