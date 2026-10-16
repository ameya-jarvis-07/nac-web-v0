import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Languages, Sparkles, Gift, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export default function Hero({ onOpenTicketModal }) {
  // Target date: Nov 21, 2026, 11:00 AM IST
  const targetDate = new Date('2026-11-21T11:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 20%, rgba(211, 107, 143, 0.18) 0%, rgba(26, 26, 31, 0.98) 75%)',
      }}
    >
      {/* Decorative Traditional Japanese elements in background */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          fontSize: '12rem',
          fontFamily: "'Noto Sans JP', serif",
          fontWeight: 900,
          color: 'rgba(247, 200, 216, 0.03)',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        桜
      </div>

      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '2%',
          fontSize: '9rem',
          fontFamily: "'Noto Sans JP', serif",
          fontWeight: 900,
          color: 'rgba(255, 94, 54, 0.03)',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        祭
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Collaboration Tag with NAC Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div
            className="glass-panel"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              padding: '8px 24px',
              borderRadius: '999px',
              border: '1px solid rgba(211, 107, 143, 0.35)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="/nac-logo.png"
                alt="Nagpur Anime Club"
                style={{ width: '30px', height: '30px', objectFit: 'contain' }}
              />
              <span style={{ fontWeight: 800, color: '#FBD7E1', letterSpacing: '0.05em' }}>NAGPUR ANIME CLUB</span>
              <span style={{ color: '#D36B8F', fontSize: '0.85rem' }}>@nagpuranimeclub</span>
            </div>
            <span style={{ color: '#FF7A00', fontWeight: 900 }}>✕</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#EC4899', fontWeight: 800 }}>OTA TOKYO</span>
              <span style={{ fontSize: '0.75rem', background: '#EC4899', color: '#FFF', padding: '1px 6px', borderRadius: '4px' }}>
                JAPAN
              </span>
            </div>
          </div>
        </div>

        {/* Hero Title & Flyer Typography */}
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 36px' }}>
          <div
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#F7C8D8',
              letterSpacing: '0.3em',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '10px',
              textTransform: 'uppercase',
            }}
          >
            コスコン × オタ東京 • 日本文化体験
          </div>

          <h1
            style={{
              fontSize: 'clamp(3.4rem, 8vw, 6.2rem)',
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              letterSpacing: '0.04em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              margin: '0 0 14px 0',
              textShadow: '0 0 40px rgba(255, 94, 54, 0.4), 0 4px 10px rgba(0,0,0,0.8)',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F5E9E2 40%, #FF9E66 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                marginRight: '12px',
              }}
            >
              COSCON
            </span>
            <span
              style={{
                color: '#FF5E36',
                WebkitTextFillColor: '#FF5E36',
                fontFamily: "'Bebas Neue', sans-serif",
                marginRight: '12px',
              }}
            >
              ✕
            </span>
            <span
              style={{
                background: 'linear-gradient(180deg, #FBD7E1 0%, #D36B8F 60%, #6B2E3B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              OTA TOKYO
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.4vw, 1.45rem)',
              fontFamily: "'Cinzel', serif",
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: '#F5E9E2',
              textTransform: 'uppercase',
              margin: '0 auto 20px',
              maxWidth: '800px',
            }}
          >
            A Japanese Anime & Culture Experience at Nagpur
          </p>

          <p
            style={{
              fontSize: '1rem',
              color: '#A7A1AA',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Central India's premiere 2-day pop-culture celebration bringing together cosplayers, otaku gamers, anime artists, live J-Rock performers, Japanese street food, and authentic anime merchandise!
          </p>
        </div>

        {/* Free Merch Ribbon Callout (Flyer Highlight) */}
        <div style={{ maxWidth: '820px', margin: '0 auto 40px' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255, 94, 54, 0.25) 0%, rgba(211, 107, 143, 0.25) 100%)',
              border: '2px dashed #FF7A00',
              borderRadius: '16px',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
              boxShadow: '0 8px 30px rgba(255, 122, 0, 0.18)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #FF6633 0%, #FF385C 100%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                  flexShrink: 0,
                  boxShadow: '0 4px 15px rgba(255, 80, 60, 0.4)',
                }}
              >
                <Gift size={26} />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFF' }}>
                  EXCLUSIVE EVENT PERK: FREE ANIME MERCH!
                </div>
                <div style={{ fontSize: '0.86rem', color: '#FBD7E1' }}>
                  Buy your CosCon ticket here, show confirmation at the venue gate & get free stickers, lanyard or art prints!
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenTicketModal('ota')}
              className="btn btn-primary"
              style={{
                fontSize: '0.88rem',
                padding: '10px 18px',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Claim Merch Ticket</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Event Meta Badges Bar (Direct from Flyer) */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '1080px',
            margin: '0 auto 44px',
            padding: '24px 30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            alignItems: 'center',
            borderColor: 'rgba(247, 200, 216, 0.2)',
          }}
        >
          {/* Date */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                background: 'rgba(211, 107, 143, 0.15)',
                color: '#FBD7E1',
                padding: '12px',
                borderRadius: '12px',
              }}
            >
              <Calendar size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#A7A1AA', fontWeight: 600 }}>
                Date & Days
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#FFF' }}>
                21 - 22 NOV 2026
              </div>
              <div style={{ fontSize: '0.8rem', color: '#F7C8D8', fontWeight: 600 }}>
                SAT - SUN
              </div>
            </div>
          </div>

          {/* Time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                background: 'rgba(255, 122, 0, 0.15)',
                color: '#FF9E66',
                padding: '12px',
                borderRadius: '12px',
              }}
            >
              <Clock size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#A7A1AA', fontWeight: 600 }}>
                Festival Hours
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#FFF' }}>
                11:00 AM ONWARDS
              </div>
              <div style={{ fontSize: '0.8rem', color: '#FF9E66', fontWeight: 600 }}>
                10 HOURS OF NON-STOP FUN
              </div>
            </div>
          </div>

          {/* Venue */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                background: 'rgba(244, 63, 94, 0.15)',
                color: '#FB7185',
                padding: '12px',
                borderRadius: '12px',
              }}
            >
              <MapPin size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#A7A1AA', fontWeight: 600 }}>
                Official Venue
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#FFF' }}>
                SEQUEL TOYOTA
              </div>
              <div style={{ fontSize: '0.8rem', color: '#FB7185', fontWeight: 600 }}>
                NAGPUR, MAHARASHTRA
              </div>
            </div>
          </div>

          {/* Age Group */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                background: 'rgba(168, 85, 247, 0.15)',
                color: '#C084FC',
                padding: '12px',
                borderRadius: '12px',
              }}
            >
              <Users size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#A7A1AA', fontWeight: 600 }}>
                Audience
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#FFF' }}>
                ALL AGE GROUPS
              </div>
              <div style={{ fontSize: '0.8rem', color: '#C084FC', fontWeight: 600 }}>
                FAMILY & OTAKU FRIENDLY
              </div>
            </div>
          </div>

          {/* Languages */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38BDF8',
                padding: '12px',
                borderRadius: '12px',
              }}
            >
              <Languages size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#A7A1AA', fontWeight: 600 }}>
                Languages
              </div>
              <div style={{ fontWeight: 800, fontSize: '0.98rem', color: '#FFF' }}>
                ENGLISH, HINDI
              </div>
              <div style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 600 }}>
                & JAPANESE
              </div>
            </div>
          </div>
        </div>

        {/* Live Countdown & Hero Visual Display */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
          {/* Countdown & Ticket Callout */}
          <div className="glass-card" style={{ padding: '34px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span className="badge-tag">
                <Flame size={14} color="#FF7A00" />
                <span>Doors Open In</span>
              </span>
              <span style={{ fontSize: '0.82rem', color: '#A7A1AA' }}>Sequel Toyota • Nagpur</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
                marginBottom: '28px',
                textAlign: 'center',
              }}
            >
              {[
                { label: 'DAYS', val: timeLeft.days },
                { label: 'HOURS', val: timeLeft.hours },
                { label: 'MINUTES', val: timeLeft.minutes },
                { label: 'SECONDS', val: timeLeft.seconds },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(20, 18, 24, 0.85)',
                    border: '1px solid rgba(211, 107, 143, 0.3)',
                    borderRadius: '12px',
                    padding: '14px 6px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '2.5rem',
                      color: '#FBD7E1',
                      lineHeight: 1,
                      letterSpacing: '1px',
                    }}
                  >
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#A7A1AA', fontWeight: 700, letterSpacing: '0.08em', marginTop: '4px' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenTicketModal('ota')}
                  className="btn btn-primary"
                  style={{ flex: 1, minWidth: '160px', padding: '14px 20px', fontSize: '1rem' }}
                >
                  <span>OTA Ticket — ₹99</span>
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => onOpenTicketModal('bms')}
                  className="btn btn-sakura"
                  style={{ flex: 1, minWidth: '160px', padding: '14px 20px', fontSize: '1rem' }}
                >
                  <span>BookMyShow — ₹169</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.8rem', color: '#F7C8D8', marginTop: '4px' }}>
                <ShieldCheck size={16} />
                <span>Instant QR pass generation • Free anime merch on entry</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card (Event Graphic) */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(211, 107, 143, 0.25)',
              border: '1px solid rgba(247, 200, 216, 0.25)',
            }}
          >
            <img
              src="/coscon-hero.jpg"
              alt="CosCon x Ota Tokyo festival in Nagpur"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transform: 'scale(1.01)',
                transition: 'transform 0.5s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(26, 26, 31, 0.95) 85%)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <div>
                <span className="badge-tag" style={{ background: 'rgba(255, 94, 54, 0.2)', borderColor: '#FF5E36', color: '#FFA07A', marginBottom: '6px' }}>
                  Torii Gate & Anime Stalls
                </span>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#FFF' }}>
                  Sequel Toyota Festival Arena
                </div>
                <div style={{ fontSize: '0.84rem', color: '#D36B8F' }}>
                  100+ Cosplayers • 25+ Anime Stalls • Japanese Street Food
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  color: '#FAF6F2',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                Nagpur, IN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
