"use client";

import { useEffect } from "react";

const blockedShortcutKeys = new Set(["i", "j", "k", "c", "u"]);

function isBlockedShortcut(event: KeyboardEvent) {
  const key = event.key.toLowerCase();
  const modifier = event.ctrlKey || event.metaKey;

  if (key === "f12" || (event.shiftKey && key === "f10")) {
    return true;
  }

  if (modifier && event.shiftKey && blockedShortcutKeys.has(key)) {
    return true;
  }

  if (event.metaKey && event.altKey && blockedShortcutKeys.has(key)) {
    return true;
  }

  if (modifier && key === "u") {
    return true;
  }

  return false;
}

export function DevToolsGuard() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isBlockedShortcut(event)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };

    document.addEventListener("contextmenu", handleContextMenu, true);
    window.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, true);
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  return null;
}
