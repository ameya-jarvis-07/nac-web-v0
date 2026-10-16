import React from 'react';
import Tickets from '../components/Tickets';
import { Gift, ShieldCheck, Zap, Sparkles, Check, HelpCircle, Ticket, QrCode } from 'lucide-react';

export default function TicketsPage({ onOpenTicketModal }) {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#1A1A1F' }}>
      {/* Top Banner */}
      <section
        style={{
          padding: '60px 0 30px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(255, 102, 51, 0.22) 0%, rgba(26, 26, 31, 0.98) 75%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(247, 200, 216, 0.1)',
        }}
      >
        <div className="container">
          <span className="badge-tag" style={{ marginBottom: '14px', borderColor: '#FF7A00', color: '#FFA07A' }}>
            <Ticket size={14} color="#FF7A00" />
            <span>Official Ticketing Portal</span>
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              color: '#FFF',
              margin: '0 0 16px 0',
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: '0.04em',
            }}
          >
            COSCON 2026 PASSES & FREE MERCH
          </h1>
          <p
            style={{
              color: '#A7A1AA',
              fontSize: '1.1rem',
              maxWidth: '820px',
              margin: '0 auto 24px',
            }}
          >
            Get your guaranteed entry pass early. Every ticket booked online receives a verified claim code for FREE official anime merch at Sequel Toyota registration counter!
          </p>
        </div>
      </section>

      {/* Main Tickets Component */}
      <Tickets onOpenTicketModal={onOpenTicketModal} />

      {/* Merch Claim Step-by-Step Guide */}
      <section style={{ padding: '60px 0 90px', backgroundColor: '#141318' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge-tag" style={{ marginBottom: '10px' }}>
              <Gift size={14} color="#D36B8F" />
              <span>Redemption Procedure</span>
            </span>
            <h2 style={{ fontSize: '2.5rem', color: '#FFF', fontFamily: "'Bebas Neue', sans-serif" }}>
              HOW TO CLAIM YOUR FREE ANIME MERCH
            </h2>
            <p style={{ color: '#A7A1AA', fontSize: '0.98rem' }}>
              Follow these simple steps when arriving at Sequel Toyota on Nov 21-22, 2026.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                step: '01',
                title: 'Book Your Pass Online',
                desc: 'Select OTA Ticket (₹99) or BookMyShow (₹169). Complete booking and save your unique Pass ID with the Merch Voucher code.',
              },
              {
                step: '02',
                title: 'Show Confirmation at Entrance',
                desc: 'Upon arriving at Sequel Toyota, display your SMS, Email, or digital E-Pass QR code at the Fast-Track check-in counter.',
              },
              {
                step: '03',
                title: 'Collect Wristband & Merch Pack',
                desc: 'Our NAC volunteers will strap on your entry wristband and hand you your official Free Anime Merch gift pack immediately!',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '28px',
                  borderRadius: '18px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '2.8rem',
                    color: '#FF6633',
                    lineHeight: 1,
                    marginBottom: '10px',
                  }}
                >
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#A7A1AA', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={() => onOpenTicketModal('ota')}
              className="btn btn-primary"
              style={{ padding: '14px 32px', fontSize: '1.05rem' }}
            >
              <Gift size={20} />
              <span>Book Now to Lock Your Free Merch Pack</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
