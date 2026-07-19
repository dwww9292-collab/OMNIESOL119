import { useEffect, useRef } from 'react';

interface ParticleProps {
  count?: number;
  color?: 'blue' | 'white';
  className?: string;
}

export default function ParticleEffect({ count = 7, color = 'blue', className = '' }: ParticleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const containerRect = container.getBoundingClientRect();

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 80 + 40;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 4 + 6;
      const delay = Math.random() * 5;

      p.className = `particle ${color === 'white' ? 'particle-white' : ''}`;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${left}%`;
      p.style.top = `${top}%`;
      p.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      p.style.opacity = String(Math.random() * 0.3 + 0.1);

      container.appendChild(p);
      particles.push(p);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, [count, color]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
}