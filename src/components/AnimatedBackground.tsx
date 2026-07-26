import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isLowPower = false;

    // Detect mobile / low power devices to adjust particle density
    if (typeof window !== 'undefined') {
      isLowPower = window.navigator.hardwareConcurrency ? window.navigator.hardwareConcurrency <= 4 : false;
    }

    const particleCount = isLowPower ? 35 : 65;

    interface Particle {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
      type: 'snow' | 'bubble' | 'mist';
      swayAmp: number;
      swayFreq: number;
      swayPhase: number;
    }

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const isSnow = Math.random() > 0.35;
        const isBubble = !isSnow && Math.random() > 0.5;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: isSnow
            ? Math.random() * 2.2 + 0.8
            : isBubble
            ? Math.random() * 3 + 1.2
            : Math.random() * 4 + 2,
          speedY: isSnow
            ? Math.random() * 0.6 + 0.25 // Falling snow
            : isBubble
            ? -(Math.random() * 0.4 + 0.15) // Rising water bubble
            : -(Math.random() * 0.2 + 0.05), // Gentle floating mist
          speedX: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.6 + 0.2,
          fadeSpeed: Math.random() * 0.005 + 0.002,
          type: isSnow ? 'snow' : isBubble ? 'bubble' : 'mist',
          swayAmp: Math.random() * 1.5 + 0.5,
          swayFreq: Math.random() * 0.02 + 0.005,
          swayPhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.swayPhase += p.swayFreq;
        const currentSway = Math.sin(p.swayPhase) * p.swayAmp;

        p.y += p.speedY;
        p.x += p.speedX + currentSway * 0.08;

        // Wrap around bounds smoothly
        if (p.type === 'snow') {
          if (p.y > height + 10) {
            p.y = -10;
            p.x = Math.random() * width;
          }
        } else {
          // Bubbles and mist float upwards
          if (p.y < -15) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
        }

        if (p.x > width + 10) p.x = -10;
        if (p.x < -10) p.x = width + 10;

        // Render particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.type === 'snow') {
          // Soft crisp white snowflake glow
          ctx.fillStyle = `rgba(240, 248, 255, ${p.opacity})`;
          ctx.shadowBlur = p.radius > 2 ? 6 : 0;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        } else if (p.type === 'bubble') {
          // Aqua bio-hydration spring bubble
          ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity * 0.7})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(0, 212, 255, 0.6)';
        } else {
          // Soft mountain water mist
          ctx.fillStyle = `rgba(180, 235, 255, ${p.opacity * 0.4})`;
          ctx.shadowBlur = 12;
          ctx.shadowColor = 'rgba(160, 230, 255, 0.4)';
        }

        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for performance
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Respect reduced motion & document visibility to save battery/GPU
    let isTabVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (isTabVisible) {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(circle at 50% 15%, rgba(14, 116, 144, 0.28) 0%, rgba(6, 182, 212, 0.12) 30%, transparent 70%),
          radial-gradient(circle at 10% 75%, rgba(2, 132, 199, 0.22) 0%, transparent 55%),
          radial-gradient(circle at 90% 85%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
          linear-gradient(180deg, #050d1a 0%, #08172b 45%, #081b33 75%, #050d1a 100%)
        `,
      }}
    >
      {/* Soft Mountain Ridgelines SVG Silhouette (Aabshar Mountain Spring Motif) */}
      <div className="absolute inset-x-0 bottom-0 h-[45vh] min-h-[320px] max-h-[600px] opacity-25 pointer-events-none">
        <svg
          className="w-full h-full object-cover object-bottom"
          viewBox="0 0 1440 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Back distant mountain range */}
          <path
            d="M0 480V260L180 180L380 280L580 140L780 230L980 120L1180 220L1380 150L1440 180V480H0Z"
            fill="url(#mountainGradFar)"
            opacity="0.6"
          />
          {/* Near mountain ridge with gentle spring contours */}
          <path
            d="M0 480V320L120 280L280 360L460 220L640 330L820 210L1020 310L1220 240L1360 290L1440 260V480H0Z"
            fill="url(#mountainGradNear)"
            opacity="0.85"
          />
          {/* Mountain Stream Glow Overlay */}
          <path
            d="M580 480L630 350L640 330L650 350L720 480H580Z"
            fill="url(#waterfallGlow)"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="mountainGradFar" x1="720" y1="120" x2="720" y2="480" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="1" stopColor="#030712" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="mountainGradNear" x1="720" y1="210" x2="720" y2="480" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0f4c81" stopOpacity="0.65" />
              <stop offset="1" stopColor="#050d1a" stopOpacity="0.98" />
            </linearGradient>
            <linearGradient id="waterfallGlow" x1="650" y1="330" x2="650" y2="480" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="1" stopColor="#0d9488" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* GPU Accelerated Snow & Spring Water Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      {/* Light subtle top atmospheric glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-sky-400/5 to-transparent pointer-events-none" />
    </div>
  );
}
