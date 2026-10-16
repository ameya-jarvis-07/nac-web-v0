import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Sparkles, Calendar, MapPin, Gift, Ticket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TOTAL_FRAMES = 60;

export default function ScrollVideoCanvas({ onOpenTicketModal }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Preload frames
  useEffect(() => {
    let isMounted = true;
    const images = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/frames/frame_${frameNum}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        setLoadedCount((prev) => prev + 1);
        if (i === 1) {
          // Render initial frame as soon as frame 1 arrives
          renderFrame(img);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      isMounted = false;
    };
  }, []);

  // Canvas drawing with object-fit: cover
  const renderFrame = (img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;

    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Compute cover dimensions
    const imgRatio = img.width / img.height;
    const canvasRatio = cw / ch;

    let renderW, renderH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderW = cw;
      renderH = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - renderH) / 2;
    } else {
      renderH = ch;
      renderW = ch * imgRatio;
      offsetX = (cw - renderW) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);

    // Subtle dark gradient vignette for better text contrast
    const grad = ctx.createRadialGradient(cw / 2, ch / 2, Math.min(cw, ch) * 0.3, cw / 2, ch / 2, Math.max(cw, ch) * 0.8);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.15)');
    grad.addColorStop(1, 'rgba(15, 14, 18, 0.75)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, cw, ch);

    ctx.restore();
  };

  // Scroll listener to scrub frames
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const container = containerRef.current;
          if (!container) return;

          const rect = container.getBoundingClientRect();
          const totalHeight = rect.height - window.innerHeight;
          const scrolled = -rect.top;

          const progress = Math.max(0, Math.min(1, scrolled / totalHeight));
          setScrollProgress(progress);

          const frameIdx = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
          );

          setCurrentFrame(frameIdx);

          const img = imagesRef.current[frameIdx];
          if (img && img.complete) {
            renderFrame(img);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const progressPercent = Math.round(scrollProgress * 100);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '350vh', // 3.5x viewport height for smooth scroll scrub
        background: '#1A1A1F',
      }}
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />

        {/* Loading status bar if frames still caching */}
        {loadedCount < TOTAL_FRAMES && (
          <div
            style={{
              position: 'absolute',
              top: '80px',
              right: '24px',
              background: 'rgba(26, 26, 31, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(211, 107, 143, 0.3)',
              borderRadius: '999px',
              padding: '6px 14px',
              fontSize: '0.74rem',
              color: '#FBD7E1',
              zIndex: 30,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>🌸 Caching 3D Frames</span>
            <span>{Math.round((loadedCount / TOTAL_FRAMES) * 100)}%</span>
          </div>
        )}

        {/* Scroll Progress Scrubbing Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(280px, 80%)',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '999px',
            overflow: 'hidden',
            zIndex: 30,
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progressPercent}%`,
              background: 'linear-gradient(90deg, #FF6633, #FF385C)',
              transition: 'width 0.05s linear',
            }}
          />
        </div>

        {/* ---------------- SCROLL PHASE OVERLAYS ---------------- */}

        {/* Phase 1: 0% to 28% - Introduction / Welcome */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: 'min(920px, 90%)',
            zIndex: 20,
            pointerEvents: scrollProgress <= 0.28 ? 'auto' : 'none',
            opacity: scrollProgress <= 0.28 ? Math.max(0, 1 - scrollProgress * 3.5) : 0,
            transition: 'opacity 0.2s ease-out',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(26, 26, 31, 0.8)',
              backdropFilter: 'blur(12px)',
              padding: '8px 20px',
              borderRadius: '999px',
              border: '1px solid rgba(211, 107, 143, 0.35)',
              marginBottom: '18px',
            }}
          >
            <img src="/nac-logo.png" alt="NAC" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
            <span style={{ fontWeight: 800, color: '#FBD7E1', fontSize: '0.86rem', letterSpacing: '0.08em' }}>
              NAGPUR ANIME CLUB PRESENTS
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(3rem, 7.5vw, 5.5rem)',
              fontFamily: "'Bebas Neue', sans-serif",
              color: '#FFF',
              lineHeight: 0.95,
              letterSpacing: '0.04em',
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(211, 107, 143, 0.4)',
              margin: '0 0 16px 0',
            }}
          >
            CENTRAL INDIA’S PREMIERE
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #FF9E66 0%, #FF6633 50%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ANIME & CULTURE FESTIVAL
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
              color: '#F5E9E2',
              fontWeight: 500,
              textShadow: '0 2px 8px rgba(0,0,0,0.9)',
              maxWidth: '680px',
              margin: '0 auto 28px',
            }}
          >
            Scroll down to step into the world of Japanese pop-culture, cosplay, gaming, music, and food in Nagpur.
          </p>

        </div>

        {/* Phase 2: 28% to 65% - Event Showcase (CosCon x Ota Tokyo) */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: 'min(940px, 90%)',
            zIndex: 20,
            pointerEvents: scrollProgress > 0.28 && scrollProgress < 0.68 ? 'auto' : 'none',
            opacity:
              scrollProgress > 0.28 && scrollProgress < 0.68
                ? Math.min(1, (scrollProgress - 0.28) * 4) * Math.min(1, (0.68 - scrollProgress) * 4)
                : 0,
            transition: 'opacity 0.2s ease-out',
          }}
        >
          <div
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#F7C8D8',
              letterSpacing: '0.3em',
              fontSize: '0.95rem',
              fontWeight: 700,
              marginBottom: '10px',
              textTransform: 'uppercase',
            }}
          >
            コスコン × オタ東京 • 2026
          </div>

          <h2
            style={{
              fontSize: 'clamp(3.5rem, 8.5vw, 6.2rem)',
              fontFamily: "'Bebas Neue', sans-serif",
              color: '#FFF',
              lineHeight: 0.95,
              letterSpacing: '0.04em',
              margin: '0 0 14px 0',
              textShadow: '0 0 40px rgba(255, 94, 54, 0.5), 0 4px 14px rgba(0,0,0,0.8)',
            }}
          >
            COSCON ✕ OTA TOKYO
          </h2>

          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(26, 26, 31, 0.85)',
                backdropFilter: 'blur(10px)',
                padding: '8px 18px',
                borderRadius: '12px',
                border: '1px solid rgba(211, 107, 143, 0.3)',
              }}
            >
              <Calendar size={18} color="#FF7A00" />
              <span style={{ fontWeight: 800, color: '#FFF', fontSize: '0.95rem' }}>21 – 22 NOV 2026</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(26, 26, 31, 0.85)',
                backdropFilter: 'blur(10px)',
                padding: '8px 18px',
                borderRadius: '12px',
                border: '1px solid rgba(211, 107, 143, 0.3)',
              }}
            >
              <MapPin size={18} color="#FB7185" />
              <span style={{ fontWeight: 800, color: '#FFF', fontSize: '0.95rem' }}>SEQUEL TOYOTA, NAGPUR</span>
            </div>
          </div>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: '#FAF6F2',
              fontWeight: 500,
              textShadow: '0 2px 10px rgba(0,0,0,0.9)',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            A 2-day Japanese festival uniting cosplayers, fighting game champions, J-Pop musicians, and anime artists.
          </p>
        </div>

        {/* Phase 3: 68% to 100% - Grand Finale CTA & Quick Action */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: 'min(940px, 90%)',
            zIndex: 20,
            pointerEvents: scrollProgress >= 0.68 ? 'auto' : 'none',
            opacity: scrollProgress >= 0.68 ? Math.min(1, (scrollProgress - 0.68) * 3.8) : 0,
            transition: 'opacity 0.2s ease-out',
          }}
        >
          {/* Merch Offer Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, rgba(255, 94, 54, 0.9) 0%, rgba(211, 107, 143, 0.9) 100%)',
              padding: '8px 22px',
              borderRadius: '999px',
              color: '#FFF',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.04em',
              boxShadow: '0 4px 20px rgba(255, 94, 54, 0.4)',
              marginBottom: '16px',
            }}
          >
            <Gift size={16} />
            <span>FREE ANIME MERCH WITH EVERY TICKET!</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(3rem, 7.5vw, 5.2rem)',
              fontFamily: "'Bebas Neue', sans-serif",
              color: '#FFF',
              lineHeight: 0.95,
              letterSpacing: '0.04em',
              margin: '0 0 14px 0',
              textShadow: '0 4px 20px rgba(0,0,0,0.8)',
            }}
          >
            FESTIVAL PASSES FROM ₹99 ONLY
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: '#FBD7E1',
              maxWidth: '680px',
              margin: '0 auto 28px',
              textShadow: '0 2px 10px rgba(0,0,0,0.9)',
            }}
          >
            Access all 7 event zones: Cosplay Runway, Esports Tournament, Live J-Rock Bands, Anime Quiz, Ramen Street & 25+ Artist Tables!
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => onOpenTicketModal('ota')}
              className="btn btn-primary"
              style={{
                fontSize: '1.05rem',
                padding: '14px 28px',
                borderRadius: '999px',
              }}
            >
              <Ticket size={20} />
              <span>Book Pass (₹99)</span>
            </button>

            <Link
              to="/tickets"
              className="btn btn-sakura"
              style={{
                fontSize: '1.05rem',
                padding: '14px 28px',
                borderRadius: '999px',
              }}
            >
              <span>Explore Passes & Perks</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
