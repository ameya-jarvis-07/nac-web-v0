import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Ticket,
  Menu,
  X,
  Sparkles,
  Calendar,
  Gamepad2,
  Cat,
  HelpCircle,
  MapPin,
  Users,
  Home,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';

export default function Navbar({ sakuraActive, setSakuraActive, onOpenTicketModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const navLinks = [
    {
      name: 'Home',
      path: '/',
      desc: '3D Video Showcase & Gateway',
      icon: <Home size={20} />,
      color: '#F7C8D8',
    },
    {
      name: '7 Attractions',
      path: '/events',
      desc: 'Music, Esports, Shows, Ramen & Alley',
      icon: <Gamepad2 size={20} />,
      color: '#FF6633',
    },
    {
      name: 'Schedule & Lineup',
      path: '/schedule',
      desc: '2-Day Timetable (Sat & Sun)',
      icon: <Calendar size={20} />,
      color: '#EC4899',
    },
    {
      name: 'Tickets & Free Merch',
      path: '/tickets',
      desc: 'Passes from ₹99 with Merch Vouchers',
      icon: <Ticket size={20} />,
      color: '#F59E0B',
    },
    {
      name: 'Cosplay Championship',
      path: '/cosplay',
      desc: '₹50,000+ Prize Pool & Runway Entry',
      icon: <Cat size={20} />,
      color: '#A855F7',
    },
    {
      name: 'Otaku Trivia Arcade',
      path: '/quiz',
      desc: 'Playable Anime Quiz Teaser',
      icon: <HelpCircle size={20} />,
      color: '#3B82F6',
    },
    {
      name: 'Venue & Travel Guide',
      path: '/venue',
      desc: 'Sequel Toyota, Metro & Parking',
      icon: <MapPin size={20} />,
      color: '#10B981',
    },
    {
      name: 'About NAC',
      path: '/about',
      desc: 'Nagpur Anime Club Community',
      icon: <Users size={20} />,
      color: '#F43F5E',
    },
  ];

  return (
    <>
      {/* 1. Decluttered Floating Header Bar (100% transparent on load to show video bg) */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: scrolled ? '12px 0' : '18px 0',
          backgroundColor: scrolled ? 'rgba(18, 16, 22, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(247, 200, 216, 0.15)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo & Title on Left */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'drop-shadow(0 0 10px rgba(211, 107, 143, 0.6))',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src="/nac-logo.png"
                alt="Nagpur Anime Club Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.45rem',
                  color: '#FFF',
                  letterSpacing: '0.05em',
                  lineHeight: 1,
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                }}
              >
                COSCON 2026
              </span>
              <span
                style={{
                  fontSize: '0.62rem',
                  color: '#FF9E66',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                }}
              >
                Nagpur Anime Club
              </span>
            </div>
          </Link>

          {/* Right Controls: Sakura Toggle, Tickets CTA, and Side Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Sakura Toggle (compact) */}
            <button
              onClick={() => setSakuraActive(!sakuraActive)}
              title={sakuraActive ? 'Pause falling sakura petals' : 'Enable falling sakura petals'}
              style={{
                background: sakuraActive ? 'rgba(211, 107, 143, 0.25)' : 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid ' + (sakuraActive ? '#D36B8F' : 'rgba(255, 255, 255, 0.2)'),
                color: sakuraActive ? '#FBD7E1' : '#A7A1AA',
                padding: '7px 12px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.2s',
              }}
            >
              <span>🌸</span>
              <span className="hidden sm:inline">{sakuraActive ? 'Sakura' : 'Off'}</span>
            </button>

            {/* Direct Ticket CTA */}
            <button
              onClick={() => onOpenTicketModal('ota')}
              className="btn btn-primary"
              style={{
                fontSize: '0.85rem',
                padding: '9px 18px',
                borderRadius: '999px',
                boxShadow: '0 4px 18px rgba(255, 94, 54, 0.4)',
              }}
            >
              <Ticket size={16} />
              <span>Tickets (₹99)</span>
            </button>

            {/* Sleek Side Drawer Menu Trigger */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open Navigation Menu"
              style={{
                background: 'rgba(26, 26, 31, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(247, 200, 216, 0.25)',
                color: '#FFF',
                padding: '8px 16px',
                borderRadius: '999px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 700,
                fontSize: '0.86rem',
                letterSpacing: '0.04em',
                transition: 'all 0.2s',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF7A00';
                e.currentTarget.style.background = 'rgba(40, 36, 46, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(247, 200, 216, 0.25)';
                e.currentTarget.style.background = 'rgba(26, 26, 31, 0.75)';
              }}
            >
              <Menu size={18} color="#FF7A00" />
              <span>MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Seamless Side Drawer Navigation (Slides in from Right) */}

      {/* Backdrop Overlay with Smooth Fade */}
      <div
        onClick={() => setDrawerOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(10, 8, 14, 0.75)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 90,
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        aria-hidden="true"
      />

      {/* Drawer Panel Container */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(440px, 90vw)',
          height: '100%',
          backgroundColor: 'rgba(20, 18, 24, 0.96)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(211, 107, 143, 0.3)',
          boxShadow: '-15px 0 50px rgba(0, 0, 0, 0.8)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          overflowY: 'auto',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid rgba(247, 200, 216, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/nac-logo.png"
              alt="NAC"
              style={{ width: '38px', height: '38px', objectFit: 'contain' }}
            />
            <div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.45rem',
                  color: '#FFF',
                  lineHeight: 1,
                  letterSpacing: '0.04em',
                }}
              >
                COSCON ✕ OTA TOKYO
              </div>
              <div
                style={{
                  fontSize: '0.66rem',
                  color: '#D36B8F',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Festival Navigation
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFF',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FF6633';
              e.currentTarget.style.borderColor = '#FF6633';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items List */}
        <div style={{ padding: '24px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div
            style={{
              fontSize: '0.72rem',
              color: '#A7A1AA',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '10px',
              paddingLeft: '10px',
            }}
          >
            Pages & Portals
          </div>

          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setDrawerOpen(false)}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 16px',
                borderRadius: '14px',
                textDecoration: 'none',
                background: isActive ? 'rgba(211, 107, 143, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                border: isActive ? '1px solid #D36B8F' : '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.2s',
              })}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(247, 200, 216, 0.3)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div
                style={{
                  color: item.color,
                  background: 'rgba(255, 255, 255, 0.06)',
                  padding: '8px',
                  borderRadius: '10px',
                  display: 'flex',
                }}
              >
                {item.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ color: '#FFF', fontWeight: 800, fontSize: '0.96rem' }}>
                  {item.name}
                </div>
                <div style={{ color: '#A7A1AA', fontSize: '0.76rem', marginTop: '2px' }}>
                  {item.desc}
                </div>
              </div>

              <ArrowRight size={16} color="#A7A1AA" />
            </NavLink>
          ))}
        </div>

        {/* Drawer Footer Actions & Socials */}
        <div
          style={{
            padding: '24px 28px',
            borderTop: '1px solid rgba(247, 200, 216, 0.12)',
            background: 'rgba(15, 14, 18, 0.8)',
          }}
        >
          {/* Quick Ticket Action */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '18px' }}>
            <button
              onClick={() => {
                setDrawerOpen(false);
                onOpenTicketModal('ota');
              }}
              className="btn btn-primary"
              style={{ flex: 1, padding: '12px', fontSize: '0.9rem' }}
            >
              <Ticket size={16} />
              <span>OTA (₹99)</span>
            </button>

            <button
              onClick={() => {
                setDrawerOpen(false);
                onOpenTicketModal('bms');
              }}
              className="btn btn-sakura"
              style={{ flex: 1, padding: '12px', fontSize: '0.9rem' }}
            >
              <Ticket size={16} />
              <span>BMS (₹169)</span>
            </button>
          </div>

          {/* Socials & Event Tag */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.74rem', color: '#A7A1AA' }}>
              @nagpuranimeclub
            </span>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://instagram.com/nagpuranimeclub"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#FFF',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '7px',
                  borderRadius: '8px',
                  display: 'flex',
                }}
              >
                <InstagramIcon size={16} color="#FFF" />
              </a>
              <a
                href="https://youtube.com/@nagpuranimeclub"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#FFF',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '7px',
                  borderRadius: '8px',
                  display: 'flex',
                }}
              >
                <YoutubeIcon size={16} color="#FFF" />
              </a>
              <a
                href="https://facebook.com/nagpuranimeclub"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#FFF',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '7px',
                  borderRadius: '8px',
                  display: 'flex',
                }}
              >
                <FacebookIcon size={16} color="#FFF" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
