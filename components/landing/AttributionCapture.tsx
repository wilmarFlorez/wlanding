"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/components/landing/attribution";

export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
