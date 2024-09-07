"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useMounted } from "../db/useMounted";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const mounted = useMounted();

  return (
    mounted && <NextThemesProvider {...props}>{children}</NextThemesProvider>
  );
}
