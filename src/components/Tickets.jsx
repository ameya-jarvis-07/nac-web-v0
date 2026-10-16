import React, { useState } from 'react';
import { Ticket, Gift, Sparkles, Check, QrCode, Shield, Zap, ExternalLink, Download } from 'lucide-react';

export default function Tickets({ onOpenTicketModal }) {
  const [selectedTier, setSelectedTier] = useState('ota');

  return (
    <section
      id="tickets"
      style={{
        padding: '90px 0',
        position: 'relative',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(211, 107, 143, 0.12) 0%, rgba(26, 26, 31, 0.98) 75%)',
      }}
    >
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <span className="badge-tag" style={{ marginBottom: '12px' }}>
            <Ticket size={14} color="#D36B8F" />
            <span>Official Ticketing Options</span>
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              color: '#FFF',
              margin: '0 0 14px 0',
            }}
          >
            CHOOSE YOUR COSCON PASS
          </h2>
          <p style={{ color: '#A7A1AA', fontSize: '1.05rem', margin: 0 }}>
            Grab your passes early at festival discounted pricing. Both passes grant full entry to all 7 event zones!
          </p>
        </div>

        {/* Free Anime Merch Promo Hero Banner */}
        <div
          style={{
            maxWidth: '1020px',
            margin: '0 auto 50px',
            background: 'linear-gradient(135deg, rgba(255, 102, 51, 0.22) 0%, rgba(211, 107, 143, 0.22) 100%)',
            border: '2px solid #FF7A00',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(255, 122, 0, 0.2)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'center' }}>
            <div style={{ padding: '36px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#FF7A00',
                  color: '#FFF',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                <Gift size={14} />
                <span>Special Festival Offer</span>
              </div>

              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '2.5rem',
                  color: '#FFF',
                  lineHeight: 1.05,
                  letterSpacing: '0.04em',
                  margin: '0 0 10px 0',
                }}
              >
                BUY YOUR COSCON TICKET HERE, SHOW US THE CONFIRMATION AND GET{' '}
                <span style={{ color: '#FF7A00' }}>FREE ANIME MERCH!</span>
              </h3>

              <p style={{ color: '#FBD7E1', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Every ticket booked online receives a verified digital voucher redeemable at the CosCon Registration Desk for official anime goodies including manga sticker sets, custom metal button badges, and acrylic memorabilia!
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenTicketModal('ota')}
                  className="btn btn-primary"
                  style={{ fontSize: '0.95rem', padding: '12px 24px' }}
                >
                  <Gift size={18} />
                  <span>Claim Your Merch Pass (₹99)</span>
                </button>
                <span style={{ fontSize: '0.85rem', color: '#FAF6F2', opacity: 0.9 }}>
                  *Limited to first 500 ticket claims
                </span>
              </div>
            </div>

            {/* Merch showcase image */}
            <div style={{ position: 'relative', height: '100%', minHeight: '260px' }}>
              <img
                src="/anime-merch.jpg"
                alt="Free Anime Merch for attendees"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderLeft: '1px solid rgba(255, 122, 0, 0.3)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(26, 26, 31, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#FF9E66',
                  border: '1px solid rgba(255, 122, 0, 0.4)',
                }}
              >
                Included with Ticket
              </div>
            </div>
          </div>
        </div>

        {/* 2 Ticket Cards Exactly Matching the Flyer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            maxWidth: '980px',
            margin: '0 auto',
          }}
        >
          {/* Card 1: OTA TICKET */}
          <div
            className="glass-panel"
            style={{
              padding: '36px 30px',
              borderRadius: '24px',
              border: '2px solid rgba(211, 107, 143, 0.4)',
              background: 'linear-gradient(180deg, rgba(34, 28, 38, 0.95) 0%, rgba(20, 18, 24, 0.98) 100%)',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Japanese paper top border accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, #FF7A00, #FF3D3D)',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#FF7A00', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  DIRECT OTAKU PASS
                </span>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '2.8rem',
                    color: '#FFF',
                    margin: 0,
                    letterSpacing: '0.04em',
                  }}
                >
                  OTA TICKET
                </h3>
              </div>

              <div
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  color: '#FFF',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                }}
              >
                BEST VALUE
              </div>
            </div>

            {/* Flyer QR Code Mock Display */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                width: '180px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              {/* SVG QR Code Simulation */}
              <svg width="140" height="140" viewBox="0 0 100 100" fill="#1A1A1F">
                {/* QR Positioning squares */}
                <rect x="5" y="5" width="28" height="28" rx="2" fill="#1A1A1F" />
                <rect x="9" y="9" width="20" height="20" rx="1" fill="#FFFFFF" />
                <rect x="13" y="13" width="12" height="12" rx="1" fill="#1A1A1F" />

                <rect x="67" y="5" width="28" height="28" rx="2" fill="#1A1A1F" />
                <rect x="71" y="9" width="20" height="20" rx="1" fill="#FFFFFF" />
                <rect x="75" y="13" width="12" height="12" rx="1" fill="#1A1A1F" />

                <rect x="5" y="67" width="28" height="28" rx="2" fill="#1A1A1F" />
                <rect x="9" y="71" width="20" height="20" rx="1" fill="#FFFFFF" />
                <rect x="13" y="75" width="12" height="12" rx="1" fill="#1A1A1F" />

                {/* Data blocks */}
                <rect x="38" y="10" width="8" height="8" />
                <rect x="50" y="6" width="8" height="6" />
                <rect x="38" y="24" width="6" height="8" />
                <rect x="48" y="20" width="8" height="8" />
                <rect x="10" y="38" width="8" height="8" />
                <rect x="22" y="44" width="8" height="6" />
                <rect x="36" y="38" width="10" height="10" />
                <rect x="52" y="38" width="10" height="8" />
                <rect x="68" y="38" width="8" height="8" />
                <rect x="82" y="42" width="8" height="8" />
                <rect x="38" y="54" width="8" height="8" />
                <rect x="50" y="50" width="14" height="6" />
                <rect x="70" y="52" width="10" height="12" />
                <rect x="84" y="68" width="8" height="14" />
                <rect x="38" y="68" width="8" height="8" />
                <rect x="50" y="68" width="8" height="8" />
                <rect x="38" y="82" width="14" height="8" />
                <rect x="58" y="82" width="8" height="8" />
                <rect x="72" y="80" width="8" height="10" />
              </svg>
              <span style={{ color: '#1A1A1F', fontSize: '0.72rem', fontWeight: 800, marginTop: '8px', letterSpacing: '0.05em' }}>
                SCAN OR TAP TO BUY
              </span>
            </div>

            {/* Price Badge Matching Flyer */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(255, 94, 54, 0.2) 0%, rgba(211, 107, 143, 0.2) 100%)',
                border: '1px solid rgba(255, 94, 54, 0.4)',
                borderRadius: '16px',
                padding: '12px 20px',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '3rem',
                  color: '#FF6633',
                  lineHeight: 1,
                }}
              >
                ₹99
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF', marginLeft: '6px' }}>
                ONLY
              </span>
              <div style={{ fontSize: '0.78rem', color: '#FBD7E1', marginTop: '2px' }}>
                Standard Festival Entry Pass
              </div>
            </div>

            {/* Inclusions */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              {[
                'Full access to all 7 event zones & stages',
                'FREE Anime Merch claim at check-in counter',
                'Access to Gaming Arena & Free-Play zones',
                'Anime Screening & J-Pop stage entry',
                'Valid for full 10-hour festival day',
                'Nagpur Anime Club Community Discord badge',
              ].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#FAF6F2' }}>
                  <Check size={16} color="#4ADE80" style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onOpenTicketModal('ota')}
              className="btn btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '1.05rem' }}
            >
              <Ticket size={20} />
              <span>Book OTA Pass (₹99)</span>
            </button>
          </div>

          {/* Card 2: BOOKMYSHOW TICKET */}
          <div
            className="glass-panel"
            style={{
              padding: '36px 30px',
              borderRadius: '24px',
              border: '2px solid rgba(236, 72, 153, 0.4)',
              background: 'linear-gradient(180deg, rgba(38, 26, 36, 0.95) 0%, rgba(20, 18, 24, 0.98) 100%)',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top border accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, #D36B8F, #EC4899)',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#EC4899', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  PREMIUM FAST-TRACK
                </span>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '2.8rem',
                    color: '#FFF',
                    margin: 0,
                    letterSpacing: '0.04em',
                  }}
                >
                  BOOKMYSHOW TICKET
                </h3>
              </div>

              <div
                style={{
                  background: 'linear-gradient(135deg, #E11D48, #BE185D)',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  color: '#FFF',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                }}
              >
                VIP PERKS
              </div>
            </div>

            {/* Flyer QR Code Mock Display */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                width: '180px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              {/* SVG QR Code Simulation */}
              <svg width="140" height="140" viewBox="0 0 100 100" fill="#1A1A1F">
                <rect x="5" y="5" width="28" height="28" rx="2" fill="#BE185D" />
                <rect x="9" y="9" width="20" height="20" rx="1" fill="#FFFFFF" />
                <rect x="13" y="13" width="12" height="12" rx="1" fill="#BE185D" />

                <rect x="67" y="5" width="28" height="28" rx="2" fill="#BE185D" />
                <rect x="71" y="9" width="20" height="20" rx="1" fill="#FFFFFF" />
                <rect x="75" y="13" width="12" height="12" rx="1" fill="#BE185D" />

                <rect x="5" y="67" width="28" height="28" rx="2" fill="#BE185D" />
                <rect x="9" y="71" width="20" height="20" rx="1" fill="#FFFFFF" />
                <rect x="13" y="75" width="12" height="12" rx="1" fill="#BE185D" />

                <rect x="38" y="8" width="6" height="12" fill="#1A1A1F" />
                <rect x="48" y="12" width="10" height="6" fill="#1A1A1F" />
                <rect x="40" y="24" width="8" height="8" fill="#1A1A1F" />
                <rect x="12" y="40" width="8" height="6" fill="#1A1A1F" />
                <rect x="24" y="38" width="6" height="10" fill="#1A1A1F" />
                <rect x="38" y="40" width="12" height="6" fill="#1A1A1F" />
                <rect x="54" y="38" width="8" height="12" fill="#1A1A1F" />
                <rect x="68" y="40" width="14" height="6" fill="#1A1A1F" />
                <rect x="86" y="40" width="6" height="10" fill="#1A1A1F" />
                <rect x="40" y="52" width="10" height="8" fill="#1A1A1F" />
                <rect x="54" y="54" width="10" height="6" fill="#1A1A1F" />
                <rect x="70" y="52" width="8" height="10" fill="#1A1A1F" />
                <rect x="84" y="68" width="8" height="8" fill="#1A1A1F" />
                <rect x="38" y="68" width="8" height="10" fill="#1A1A1F" />
                <rect x="50" y="72" width="10" height="8" fill="#1A1A1F" />
                <rect x="66" y="70" width="8" height="8" fill="#1A1A1F" />
                <rect x="40" y="84" width="12" height="8" fill="#1A1A1F" />
                <rect x="56" y="84" width="8" height="8" fill="#1A1A1F" />
                <rect x="70" y="82" width="10" height="10" fill="#1A1A1F" />
              </svg>
              <span style={{ color: '#BE185D', fontSize: '0.72rem', fontWeight: 800, marginTop: '8px', letterSpacing: '0.05em' }}>
                BOOKMYSHOW OFFICIAL
              </span>
            </div>

            {/* Price Badge Matching Flyer */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(190, 24, 93, 0.2) 100%)',
                border: '1px solid rgba(236, 72, 153, 0.4)',
                borderRadius: '16px',
                padding: '12px 20px',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '3rem',
                  color: '#EC4899',
                  lineHeight: 1,
                }}
              >
                ₹169
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF', marginLeft: '6px' }}>
                ONLY
              </span>
              <div style={{ fontSize: '0.78rem', color: '#FBD7E1', marginTop: '2px' }}>
                VIP Fast-Track & Reserved Stage Pass
              </div>
            </div>

            {/* Inclusions */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              {[
                'Everything in OTA Pass (All 7 event zones)',
                'Priority Express Fast-Track Entry Gate (No queues!)',
                'Reserved Front-Row Seating for Cosplay Championship',
                'Commemorative holographic physical badge & wristband',
                'FREE Upgraded Anime Merch Kit (Lanyard + Stickers)',
                'Exclusive access to Cosplayer Photo Studio lounge',
              ].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#FAF6F2' }}>
                  <Check size={16} color="#EC4899" style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onOpenTicketModal('bms')}
              className="btn btn-sakura"
              style={{ width: '100%', padding: '14px', fontSize: '1.05rem' }}
            >
              <Ticket size={20} />
              <span>Book BookMyShow Pass (₹169)</span>
            </button>
          </div>
        </div>

        {/* Security & Verification Guarantee */}
        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            color: '#A7A1AA',
            fontSize: '0.86rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Shield size={16} color="#4ADE80" />
            <span>Official Nagpur Anime Club Authorized Partner</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Zap size={16} color="#FF7A00" />
            <span>Instant Digital Pass SMS & Email Delivery</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={16} color="#EC4899" />
            <span>Guaranteed Free Anime Goodies on Entry</span>
          </div>
        </div>
      </div>
    </section>
  );
}
