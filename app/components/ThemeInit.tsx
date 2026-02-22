"use client";

import { useEffect } from "react";
import { useEleksUITheme } from "@eleks-ui/theme";

export function ThemeInit() {
  const { setTheme } = useEleksUITheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return null;
}
