"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export default function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1400,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, duration]);

  const formatted =
    to >= 1000
      ? Math.round(val).toLocaleString()
      : Number.isInteger(to)
      ? Math.round(val).toString()
      : val.toFixed(2);

  return (
    <span ref={ref}>
      {prefix}
      {started ? formatted : Number.isInteger(to) ? "0" : "0.00"}
      {suffix}
    </span>
  );
}
