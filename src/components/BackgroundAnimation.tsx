"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 220;
// Brand primary: #173DED = rgb(23, 61, 237)
const RGB = "23, 61, 237";

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const rand = (a: number, b: number) => Math.random() * (b - a) + a;

    type P = { x: number; y: number; speed: number; size: number; opacity: number };

    const particles: P[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: rand(1.0, 2.4),
      size: rand(0.5, 1.8),
      opacity: rand(0.12, 0.38),
    }));

    // Flow field: combined sine/cosine field that evolves over time
    // Creates swirling tornado + wave patterns
    const angle = (x: number, y: number, time: number): number => {
      const s = 0.0028;
      return (
        Math.sin(x * s + time * 0.45) * Math.cos(y * s - time * 0.35) * Math.PI * 2 +
        Math.cos(x * s * 0.6 - time * 0.25) * Math.sin(y * s * 0.8 + time * 0.2) * Math.PI
      );
    };

    const tick = () => {
      t += 0.007;

      // Semi-transparent fill instead of clearRect → builds trailing streaks
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        const a = angle(p.x, p.y, t);
        p.x += Math.cos(a) * p.speed;
        p.y += Math.sin(a) * p.speed;

        // Wrap around edges
        if (p.x < -2) p.x = canvas.width + 2;
        if (p.x > canvas.width + 2) p.x = -2;
        if (p.y < -2) p.y = canvas.height + 2;
        if (p.y > canvas.height + 2) p.y = -2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${RGB}, ${p.opacity})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    window.addEventListener("resize", setSize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
