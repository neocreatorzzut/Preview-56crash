"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 70;
const MAX_DIST = 150;
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

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      drift: number;
      phase: number;
    };

    const spawn = (atBottom = false): P => ({
      x: Math.random() * canvas.width,
      y: atBottom ? canvas.height + rand(0, 40) : Math.random() * canvas.height,
      vx: rand(-0.25, 0.25),
      vy: rand(-0.9, -0.45), // energía que sube
      r: rand(0.6, 2.2),
      drift: rand(0.4, 1.2),
      phase: Math.random() * Math.PI * 2,
    });

    const particles: P[] = Array.from({ length: PARTICLE_COUNT }, () => spawn());

    const tick = () => {
      t += 0.016;
      // Pulso rítmico tipo latido / ritmo de entreno (oleadas de energía)
      const pulse = 0.5 + 0.5 * Math.sin(t * 2.4);
      const speed = 0.85 + pulse * 0.9; // acelera en cada oleada

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // deriva horizontal ondulante para más dinamismo
        p.x += (p.vx + Math.sin(t * 1.5 + p.phase) * 0.35 * p.drift) * speed;
        p.y += p.vy * speed;

        // reciclar: al salir por arriba reaparece abajo (flujo continuo ascendente)
        if (p.y < -20) Object.assign(p, spawn(true));
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        const glow = 0.45 + pulse * 0.45;
        const r = p.r * (0.85 + pulse * 0.4); // laten con el pulso

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${RGB}, ${glow})`;
        ctx.fill();
      }

      const lineBoost = 0.18 + pulse * 0.22;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${RGB}, ${lineBoost * (1 - d / MAX_DIST)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
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
