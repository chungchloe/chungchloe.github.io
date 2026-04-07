import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function getDistance(p1, p2) {
  return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
}

export default function HeroCanvas() {
  const homeRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const home = homeRef.current;
    const canvas = canvasRef.current;
    if (!home || !canvas) return undefined;

    let width;
    let height;
    let ctx;
    let points;
    const target = { x: 0, y: 0 };
    let animateHeader = true;
    let rafId = 0;

    function createCircle(pos, rad) {
      const hue = Math.floor(Math.random() * 360);
      const pastel = `hsl(${hue}, 100%, 76.5%)`;
      return {
        active: 0,
        draw() {
          if (!this.active) return;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, rad, 0, 2 * Math.PI, false);
          ctx.fillStyle = pastel;
          ctx.fill();
        },
      };
    }

    function initHeader() {
      width = home.clientWidth || window.innerWidth;
      height = window.innerHeight;
      target.x = width / 2;
      target.y = height / 2;

      home.style.height = `${height}px`;
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      points = [];
      for (let x = 0; x < width; x += width / 15) {
        for (let y = 0; y < height; y += height / 15) {
          const px = x + Math.random() * (width / 15);
          const py = y + Math.random() * (height / 15);
          points.push({ x: px, originX: px, y: py, originY: py });
        }
      }

      for (let i = 0; i < points.length; i += 1) {
        const closest = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j += 1) {
          const p2 = points[j];
          if (p1 === p2) continue;
          let placed = false;
          for (let k = 0; k < 3; k += 1) {
            if (!placed && closest[k] === undefined) {
              closest[k] = p2;
              placed = true;
            }
          }
          for (let k = 0; k < 3; k += 1) {
            if (!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
        p1.closest = closest;
      }

      points.forEach((p) => {
        const rad = 2 + Math.random() * 2;
        p.circle = createCircle(p, rad);
      });
    }

    function shiftPoint(p) {
      gsap.to(p, {
        duration: 1 + Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: 'circ.inOut',
        onComplete: () => shiftPoint(p),
      });
    }

    function drawLines(p) {
      if (!p.active) return;
      p.closest.forEach((c) => {
        if (!c) return;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = 'rgba(255,255,255,.3)';
        ctx.stroke();
      });
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        points.forEach((p) => {
          const d = Math.abs(getDistance(target, p));
          if (d < 4000) {
            p.active = 0.3;
            p.circle.active = 0.6;
          } else if (d < 20000) {
            p.active = 0.1;
            p.circle.active = 0.3;
          } else if (d < 40000) {
            p.active = 0.02;
            p.circle.active = 0.1;
          } else {
            p.active = 0;
            p.circle.active = 0;
          }
          drawLines(p);
          p.circle.draw();
        });
      }
      rafId = requestAnimationFrame(animate);
    }

    function mouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      target.x = (e.clientX - rect.left) * scaleX;
      target.y = (e.clientY - rect.top) * scaleY;
    }

    function scrollCheck() {
      animateHeader = window.scrollY <= height;
    }

    function resize() {
      gsap.killTweensOf(points);
      width = home.clientWidth || window.innerWidth;
      height = window.innerHeight;
      home.style.height = `${height}px`;
      canvas.width = width;
      canvas.height = height;
      initHeader();
      points.forEach((p) => shiftPoint(p));
    }

    initHeader();
    animate();
    points.forEach((p) => shiftPoint(p));

    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('scroll', scrollCheck, { passive: true });
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      if (points) gsap.killTweensOf(points);
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="section canvasWrap" id="home" ref={homeRef}>
      <div className="homepage-headings">
        <h1 data-aos="fade-up"> Chloe Chung</h1>
        <h2 data-aos="fade-up">Digital Designer</h2>
      </div>
      <canvas id="myCanvas" ref={canvasRef} />
    </section>
  );
}
