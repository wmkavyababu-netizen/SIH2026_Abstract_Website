import React, { useEffect, useRef, useState } from 'react';

const BubbleOverlay = () => {
  const canvasRef = useRef(null);
  const pointerPos = useRef({ x: -100, y: -100 });
  const [isFinePointer, setIsFinePointer] = useState(false);
  const particles = useRef([]);
  const lastSpawn = useRef(0);

  useEffect(() => {
    // Check if pointer is fine (desktop/laptop) or coarse (mobile)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);
    
    const handler = (e) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    // Add custom cursor class to body if pointer is fine
    if (mediaQuery.matches) {
      document.body.classList.add('custom-cursor-active');
    }

    return () => {
      mediaQuery.removeEventListener('change', handler);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle spawn function
    const spawnBubble = (x, y, force = false) => {
      const now = performance.now();
      if (!force && now - lastSpawn.current < 20) return; // limit spawn rate
      lastSpawn.current = now;

      // Add a couple of bubbles
      const count = force ? 4 : 2;
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: x + (Math.random() * 12 - 6),
          y: y + (Math.random() * 12 - 6),
          vx: (Math.random() * 1.5 - 0.75),
          vy: -(Math.random() * 1.5 + 0.8), // float upwards
          size: Math.random() * 3.5 + 1.5,
          alpha: Math.random() * 0.4 + 0.3,
          maxLife: Math.random() * 60 + 40,
          life: 0,
          wobbleSpeed: Math.random() * 0.05 + 0.02,
          wobbleWeight: Math.random() * 1.5 + 0.5,
        });
      }
    };

    // Event Listeners
    const handleMouseMove = (e) => {
      pointerPos.current = { x: e.clientX, y: e.clientY };
      spawnBubble(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        pointerPos.current = { x: touch.clientX, y: touch.clientY };
        spawnBubble(touch.clientX, touch.clientY, true);
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        pointerPos.current = { x: touch.clientX, y: touch.clientY };
        spawnBubble(touch.clientX, touch.clientY, true);
      }
    };

    const handleMouseDown = () => {
      // Spawn burst of bubbles on click
      for (let i = 0; i < 8; i++) {
        spawnBubble(pointerPos.current.x, pointerPos.current.y, true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);

    // Animation Loop
    let angle = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angle += 0.02;

      // 1. Draw bubble particles
      const activeParticles = [];
      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.life++;

        // Physics: lift + horizontal float drift
        p.x += p.vx + Math.sin(p.life * p.wobbleSpeed) * p.wobbleWeight * 0.1;
        p.y += p.vy;
        
        // Fade out as it nears end of life
        const lifeRatio = p.life / p.maxLife;
        const currentAlpha = p.alpha * (1 - lifeRatio);

        // Draw bubble
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${currentAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Bubble highlight reflection
        ctx.beginPath();
        ctx.arc(p.x - p.size * 0.3, p.y - p.size * 0.3, p.size * 0.15, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.8})`;
        ctx.fill();

        if (p.life < p.maxLife && p.y > 0) {
          activeParticles.push(p);
        }
      }
      particles.current = activeParticles;

      // 2. Draw Custom Cursor Reticle (Starfish-inspired) if fine pointer active
      if (isFinePointer && pointerPos.current.x > 0) {
        const { x, y } = pointerPos.current;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        // Outer glowing ring
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 210, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw Starfish pointer (5-pointed star shape made of soft curved nodes)
        ctx.beginPath();
        const points = 5;
        const outerRadius = 8;
        const innerRadius = 3;
        
        for (let i = 0; i < points * 2; i++) {
          const r = i % 2 === 0 ? outerRadius : innerRadius;
          const a = (Math.PI / points) * i;
          const px = Math.cos(a) * r;
          const py = Math.sin(a) * r;
          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 210, 255, 0.75)';
        ctx.shadowColor = '#00d2ff';
        ctx.shadowBlur = 8;
        ctx.fill();

        // Little center dot
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isFinePointer]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default BubbleOverlay;
