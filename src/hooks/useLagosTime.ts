"use client";

import { useState, useEffect } from "react";

export function useLagosTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // We only update on the client to avoid server/client hydration mismatch
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(new Date()));
    };

    updateTime(); // initial paint
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
