import React from 'react';
import VenueMap from '../components/VenueMap';
import { MapPin, Train, Plane, Car, Coffee, Hotel, ExternalLink, Ticket } from 'lucide-react';

export default function VenuePage({ onOpenTicketModal }) {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#1A1A1F' }}>
      {/* Top Banner */}
      <section
        style={{
          padding: '60px 0 30px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(244, 63, 94, 0.22) 0%, rgba(26, 26, 31, 0.98) 75%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(247, 200, 216, 0.1)',
        }}
      >
        <div className="container">
          <span className="badge-tag" style={{ marginBottom: '14px', borderColor: '#F43F5E', color: '#FDA4AF' }}>
            <MapPin size={14} color="#F43F5E" />
            <span>Sequel Toyota • Nagpur, Maharashtra</span>
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
            VENUE & NAGPUR TRAVEL GUIDE
          </h1>
          <p
            style={{
              color: '#A7A1AA',
              fontSize: '1.1rem',
              maxWidth: '820px',
              margin: '0 auto 24px',
            }}
          >
            Traveling to Nagpur for CosCon 2026? Find complete transit directions, venue zone maps, and local stay recommendations.
          </p>
        </div>
      </section>

      {/* Main Venue Map Component */}
      <VenueMap />

      {/* Out-of-Town Travelers Guide */}
      <section style={{ padding: '60px 0 90px', backgroundColor: '#141318' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge-tag" style={{ marginBottom: '10px' }}>
              <Train size={14} color="#38BDF8" />
              <span>Visitor Tips</span>
            </span>
            <h2 style={{ fontSize: '2.5rem', color: '#FFF', fontFamily: "'Bebas Neue', sans-serif" }}>
              GETTING TO NAGPUR & SEQUEL TOYOTA
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            <div className="glass-card" style={{ padding: '28px', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38BDF8', marginBottom: '12px' }}>
                <Train size={24} />
                <h3 style={{ fontSize: '1.25rem', color: '#FFF', margin: 0 }}>From Nagpur Railway Station</h3>
              </div>
              <p style={{ color: '#A7A1AA', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Nagpur Junction is approximately 4.5 km from Sequel Toyota. Direct autos and cabs (Ola, Uber, Rapido) take only 15–20 minutes to reach the venue.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '28px', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4ADE80', marginBottom: '12px' }}>
                <Plane size={24} />
                <h3 style={{ fontSize: '1.25rem', color: '#FFF', margin: 0 }}>From Nagpur Airport (NAG)</h3>
              </div>
              <p style={{ color: '#A7A1AA', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Dr. Babasaheb Ambedkar International Airport is about 8 km away. Airport pre-paid cabs reach the Sequel Toyota belt in roughly 20–25 minutes via Wardha Road.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '28px', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#F59E0B', marginBottom: '12px' }}>
                <Coffee size={24} />
                <h3 style={{ fontSize: '1.25rem', color: '#FFF', margin: 0 }}>Explore Nagpur Delicacies</h3>
              </div>
              <p style={{ color: '#A7A1AA', fontSize: '0.9rem', lineHeight: 1.6 }}>
                While in the City of Oranges, don't miss iconic spicy Nagpur Tarri Poha, Saoji delicacies, and famous Orange Burfi from Haldiram’s!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
