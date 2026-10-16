import React, { useEffect, useRef } from 'react';

export default function SakuraBackground({ active = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Sakura petal particle class
    const petals = [];
    const petalCount = Math.min(Math.floor(window.innerWidth / 35), 45);

    const colors = [
      'rgba(247, 200, 216, 0.75)', // Sakura Pink
      'rgba(251, 215, 225, 0.85)', // Blush Pink
      'rgba(211, 107, 143, 0.65)', // Deep Rose
      'rgba(255, 240, 245, 0.7)'   // Soft Blossom
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        r: Math.random() * 7 + 6,
        d: Math.random() * petalCount,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleInc: Math.random() * 0.05 + 0.02,
        tiltAngle: Math.random() * Math.PI,
        speedY: Math.random() * 1.4 + 0.8,
        speedX: Math.random() * 1.2 - 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.fillStyle = p.color;

        p.tiltAngle += p.tiltAngleInc;
        p.y += p.speedY;
        p.x += Math.sin(p.tiltAngle) * 1.5 + p.speedX;

        // Draw curved petal
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.tiltAngle);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 1.6, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();

        // Reset if offscreen
        if (p.y > height + 20 || p.x > width + 20 || p.x < -30) {
          petals[i].x = Math.random() * width;
          petals[i].y = -20;
          petals[i].tiltAngle = Math.random() * Math.PI;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="sakura-canvas"
      aria-hidden="true"
    />
  );
}
