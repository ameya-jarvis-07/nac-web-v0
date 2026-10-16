import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Ticket } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';

export default function Footer({ onOpenTicketModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0D0C10',
        borderTop: '1px solid rgba(211, 107, 143, 0.2)',
        position: 'relative',
        padding: '70px 0 30px',
        overflow: 'hidden',
      }}
    >
      {/* Wave pattern accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #FBD7E1 0%, #D36B8F 30%, #FF6633 60%, #6B2E3B 100%)',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          {/* Brand Column with NAC Official Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'drop-shadow(0 0 12px rgba(211, 107, 143, 0.5))',
                }}
              >
                <img
                  src="/nac-logo.png"
                  alt="Nagpur Anime Club"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <div>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.7rem', color: '#FFF', letterSpacing: '0.04em', lineHeight: 1, display: 'block' }}>
                  COSCON ✕ OTA TOKYO
                </span>
                <span style={{ fontSize: '0.72rem', color: '#FF7A00', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Nagpur Anime Club
                </span>
              </div>
            </div>

            <p style={{ color: '#A7A1AA', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Central India’s official Japanese anime, cosplay, manga, gaming, music, and pop-culture convention. Organized by Nagpur Anime Club in partnership with Ota Tokyo.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://instagram.com/nagpuranimeclub"
                target="_blank"
                rel="noreferrer"
                aria-label="NAC on Instagram"
                style={{
                  color: '#FFF',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '9px',
                  borderRadius: '10px',
                  display: 'flex',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#E1306C')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
              >
                <InstagramIcon size={18} color="#FFF" />
              </a>
              <a
                href="https://youtube.com/@nagpuranimeclub"
                target="_blank"
                rel="noreferrer"
                aria-label="NAC on YouTube"
                style={{
                  color: '#FFF',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '9px',
                  borderRadius: '10px',
                  display: 'flex',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#FF0000')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
              >
                <YoutubeIcon size={18} color="#FFF" />
              </a>
              <a
                href="https://facebook.com/nagpuranimeclub"
                target="_blank"
                rel="noreferrer"
                aria-label="NAC on Facebook"
                style={{
                  color: '#FFF',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '9px',
                  borderRadius: '10px',
                  display: 'flex',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#1877F2')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
              >
                <FacebookIcon size={18} color="#FFF" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ color: '#FBD7E1', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Pages & Attractions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home Page', path: '/' },
                { label: '7 Main Attractions', path: '/events' },
                { label: 'Schedule & Timetable', path: '/schedule' },
                { label: 'Tickets & Free Merch', path: '/tickets' },
                { label: 'Cosplay Championship', path: '/cosplay' },
                { label: 'Otaku Anime Quiz', path: '/quiz' },
                { label: 'Venue & Travel Guide', path: '/venue' },
                { label: 'About Nagpur Anime Club', path: '/about' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    style={{ color: '#A7A1AA', textDecoration: 'none', fontSize: '0.86rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FF7A00')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#A7A1AA')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Quick Info */}
          <div>
            <h4 style={{ color: '#FBD7E1', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Festival Snapshot
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#A7A1AA' }}>
              <div>
                <b style={{ color: '#FFF' }}>Date:</b> 21 – 22 November 2026 (Sat – Sun)
              </div>
              <div>
                <b style={{ color: '#FFF' }}>Time:</b> 11:00 AM – 9:00 PM (10 Hours Daily)
              </div>
              <div>
                <b style={{ color: '#FFF' }}>Venue:</b> Sequel Toyota, Nagpur
              </div>
              <div>
                <b style={{ color: '#FFF' }}>Age:</b> All Age Groups Welcome
              </div>
              <div>
                <b style={{ color: '#FFF' }}>Languages:</b> English, Hindi, Japanese
              </div>
            </div>
          </div>

          {/* Direct Ticket Column */}
          <div>
            <h4 style={{ color: '#FBD7E1', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Instant Ticketing
            </h4>
            <p style={{ color: '#A7A1AA', fontSize: '0.85rem', marginBottom: '16px' }}>
              Book your ₹99 OTA pass or ₹169 BookMyShow VIP pass with verified Free Anime Merch claim voucher.
            </p>
            <button
              onClick={() => onOpenTicketModal('ota')}
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
            >
              <Ticket size={18} />
              <span>Book Pass (From ₹99)</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8rem',
            color: '#71717A',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>© 2026 Nagpur Anime Club (@nagpuranimeclub) & Ota Tokyo.</span>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#FFF',
              padding: '6px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
