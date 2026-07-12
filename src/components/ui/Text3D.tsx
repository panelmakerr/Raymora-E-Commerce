"use client";

import { useRef, useEffect, useState } from "react";

interface Text3DProps {
  text: string;
  className?: string;
  depth?: number;
  color?: string;
}

export default function Text3D({
  text,
  className = "",
  depth = 5,
  color = "#22C55E",
}: Text3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    const el = ref.current;
    el?.addEventListener("mousemove", handleMouse);
    return () => el?.removeEventListener("mousemove", handleMouse);
  }, []);

  const layers = Array.from({ length: depth }, (_, i) => {
    const factor = (i + 1) / depth;
    const offsetX = -mousePos.x * factor * 3;
    const offsetY = -mousePos.y * factor * 3;
    const scale = 1 - factor * 0.02;
    const opacity = 0.3 + (1 - factor) * 0.7;

    return (
      <span
        key={i}
        className="absolute inset-0"
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
          opacity,
          color: i === depth - 1 ? color : undefined,
          textShadow:
            i === 0
              ? `0 ${depth}px ${depth * 2}px rgba(0,0,0,0.4)`
              : undefined,
        }}
      >
        {text}
      </span>
    );
  });

  return (
    <div
      ref={ref}
      className={`relative inline-block select-none ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {layers}
      <span className="relative" style={{ color }}>
        {text}
      </span>
    </div>
  );
}
