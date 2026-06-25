"use client";

import { useEffect, useState } from "react";

export function useSupportsHover() {
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => {
      setSupportsHover(media.matches);
    };

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return supportsHover;
}
