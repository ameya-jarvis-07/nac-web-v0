import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollVideoCanvas from '../components/ScrollVideoCanvas';
import {
  Sparkles,
  Calendar,
  MapPin,
  Ticket,
  Cat,
  Gamepad2,
  HelpCircle,
  Users,
  ArrowRight,
  Gift,
  Clock,
  Flame,
  ShieldCheck,
} from 'lucide-react';

export default function HomePage({ onOpenTicketModal }) {
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

  const portalCards = [
    {
      title: '7 MAIN ATTRACTIONS',
      subtitle: 'Music, Esports, Contests, Shows, Cosplay, Quiz & Ramen Alley',
      icon: <Gamepad2 size={28} />,
      link: '/events',
      color: '#FF6633',
      badge: 'Flyer Highlights',
      bgGrad: 'linear-gradient(135deg, rgba(255, 102, 51, 0.15) 0%, rgba(20, 18, 24, 0.95) 100%)',
    },
    {
      title: '2-DAY TIMETABLE',
      subtitle: 'Hour-by-hour schedule from 11:00 AM to 9:00 PM for Sat & Sun',
      icon: <Calendar size={28} />,
      link: '/schedule',
      color: '#EC4899',
      badge: 'Full Lineup',
      bgGrad: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(20, 18, 24, 0.95) 100%)',
    },
    {
      title: 'TICKETS & FREE MERCH',
      subtitle: 'OTA Pass (₹99) & BookMyShow (₹169) with Free Merch vouchers',
      icon: <Ticket size={28} />,
      link: '/tickets',
      color: '#F59E0B',
      badge: 'From ₹99',
      bgGrad: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(20, 18, 24, 0.95) 100%)',
    },
    {
      title: 'COSPLAY CHAMPIONSHIP',
      subtitle: '₹50,000+ Prize pool, runway categories, rules & contestant entry',
      icon: <Cat size={28} />,
      link: '/cosplay',
      color: '#A855F7',
      badge: '₹50,000 Pool',
      bgGrad: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(20, 18, 24, 0.95) 100%)',
    },
    {
      title: 'OTAKU TRIVIA ARCADE',
      subtitle: 'Play our 3-question anime teaser quiz & test your knowledge',
      icon: <HelpCircle size={28} />,
      link: '/quiz',
      color: '#3B82F6',
      badge: 'Playable Quiz',
      bgGrad: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(20, 18, 24, 0.95) 100%)',
    },
    {
      title: 'VENUE & TRAVEL GUIDE',
      subtitle: 'Sequel Toyota navigation, Nagpur Metro, parking & stay guide',
      icon: <MapPin size={28} />,
      link: '/venue',
      color: '#10B981',
      badge: 'Sequel Toyota',
      bgGrad: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(20, 18, 24, 0.95) 100%)',
    },
  ];

  return (
    <div>
      {/* 1. Cinematic 3D Scroll-Driven Video Canvas scrubbing Main Edit.mp4 frames */}
      <ScrollVideoCanvas onOpenTicketModal={onOpenTicketModal} />

      {/* 2. Decluttered Countdown & Fast Booking Strip */}
      <section
        style={{
          padding: '60px 0',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(211, 107, 143, 0.15) 0%, rgba(20, 18, 24, 0.98) 75%)',
          borderTop: '1px solid rgba(247, 200, 216, 0.15)',
          borderBottom: '1px solid rgba(247, 200, 216, 0.15)',
        }}
      >
        <div className="container">
          <div
            className="glass-panel"
            style={{
              maxWidth: '1060px',
              margin: '0 auto',
              padding: '36px 32px',
              borderRadius: '24px',
              border: '2px solid rgba(211, 107, 143, 0.35)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              alignItems: 'center',
            }}
          >
            {/* Countdown Numbers */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="badge-tag" style={{ background: 'rgba(255, 94, 54, 0.15)', borderColor: '#FF7A00', color: '#FFA07A' }}>
                  <Flame size={14} color="#FF7A00" />
                  <span>Countdown to Doors Open</span>
                </span>
                <span style={{ fontSize: '0.82rem', color: '#A7A1AA' }}>21 Nov 2026 • 11:00 AM</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', textAlign: 'center' }}>
                {[
                  { label: 'DAYS', val: timeLeft.days },
                  { label: 'HOURS', val: timeLeft.hours },
                  { label: 'MINS', val: timeLeft.minutes },
                  { label: 'SECS', val: timeLeft.seconds },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(20, 18, 24, 0.85)',
                      border: '1px solid rgba(211, 107, 143, 0.3)',
                      borderRadius: '12px',
                      padding: '12px 6px',
                    }}
                  >
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.4rem', color: '#FBD7E1', lineHeight: 1 }}>
                      {String(item.val).padStart(2, '0')}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#A7A1AA', fontWeight: 700, letterSpacing: '0.08em', marginTop: '2px' }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Booking Action */}
            <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF7A00', fontWeight: 800, fontSize: '0.9rem', marginBottom: '6px' }}>
                <Gift size={18} />
                <span>SPECIAL PROMO: FREE ANIME MERCH</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#FFF', fontFamily: "'Bebas Neue', sans-serif", margin: '0 0 10px 0' }}>
                SECURE YOUR ENTRY PASS ONLINE
              </h3>

              <p style={{ color: '#D1CDD5', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '20px' }}>
                Passes start at only ₹99 with all 7 zones included. Show confirmation at the gate and claim your free anime goodies!
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenTicketModal('ota')}
                  className="btn btn-primary"
                  style={{ padding: '12px 22px', fontSize: '0.95rem' }}
                >
                  <Ticket size={18} />
                  <span>OTA Pass — ₹99</span>
                </button>

                <button
                  onClick={() => onOpenTicketModal('bms')}
                  className="btn btn-sakura"
                  style={{ padding: '12px 22px', fontSize: '0.95rem' }}
                >
                  <Ticket size={18} />
                  <span>BookMyShow — ₹169</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Decluttered Festival Portal Directory (6 Dedicated Gateways) */}
      <section style={{ padding: '90px 0', backgroundColor: '#16151B' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="badge-tag" style={{ marginBottom: '12px' }}>
              <Sparkles size={14} color="#D36B8F" />
              <span>Explore The Festival</span>
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#FFF',
                margin: '0 0 14px 0',
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: '0.04em',
              }}
            >
              FESTIVAL DIRECTORY & HUBS
            </h2>
            <p style={{ color: '#A7A1AA', fontSize: '1.02rem', margin: 0 }}>
              Discover detailed schedules, tournament registrations, cosplay rules, and venue travel guides across our dedicated event portals.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              maxWidth: '1120px',
              margin: '0 auto',
            }}
          >
            {portalCards.map((card, idx) => (
              <Link
                key={idx}
                to={card.link}
                className="glass-card"
                style={{
                  padding: '32px 28px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: card.bgGrad,
                  border: '1px solid rgba(247, 200, 216, 0.15)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      style={{
                        color: card.color,
                        background: 'rgba(255, 255, 255, 0.08)',
                        padding: '12px',
                        borderRadius: '14px',
                        display: 'flex',
                      }}
                    >
                      {card.icon}
                    </div>

                    <span
                      style={{
                        fontSize: '0.74rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#FBD7E1',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.9rem',
                      color: '#FFF',
                      margin: '0 0 8px 0',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {card.title}
                  </h3>

                  <p style={{ color: '#A7A1AA', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                    {card.subtitle}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: card.color,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    marginTop: '24px',
                  }}
                >
                  <span>Explore Portal</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Minimalist Community & Organizer Spotlight */}
      <section
        style={{
          padding: '60px 0 80px',
          background: 'linear-gradient(180deg, #16151B 0%, #121117 100%)',
          borderTop: '1px solid rgba(247, 200, 216, 0.1)',
        }}
      >
        <div className="container" style={{ maxWidth: '920px' }}>
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src="/nac-logo.png"
                alt="Nagpur Anime Club"
                style={{ width: '56px', height: '56px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(211, 107, 143, 0.5))' }}
              />
              <div>
                <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#FFF', margin: '0 0 4px 0' }}>
                  POWERED BY NAGPUR ANIME CLUB
                </h4>
                <p style={{ color: '#A7A1AA', fontSize: '0.86rem', margin: 0 }}>
                  5,000+ members strong across Vidarbha & Central India.
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="btn btn-outline"
              style={{ padding: '10px 20px', fontSize: '0.88rem' }}
            >
              <Users size={16} />
              <span>Learn About NAC & Volunteer</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
