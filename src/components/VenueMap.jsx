import React from 'react';
import { MapPin, Navigation, Car, Train, Clock, Phone, ExternalLink, ShieldCheck } from 'lucide-react';

export default function VenueMap() {
  return (
    <section
      id="venue"
      style={{
        padding: '90px 0',
        backgroundColor: '#121117',
        position: 'relative',
        borderTop: '1px solid rgba(247, 200, 216, 0.1)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <span className="badge-tag" style={{ marginBottom: '12px' }}>
            <MapPin size={14} color="#D36B8F" />
            <span>Official Event Location</span>
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              color: '#FFF',
              margin: '0 0 14px 0',
            }}
          >
            VENUE & HOW TO REACH
          </h2>
          <p style={{ color: '#A7A1AA', fontSize: '1.05rem', margin: 0 }}>
            Sequel Toyota, Nagpur offers expansive air-conditioned exhibition spaces and an open-air festival courtyard.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            maxWidth: '1060px',
            margin: '0 auto',
          }}
        >
          {/* Venue Info & Directions Card */}
          <div className="glass-panel" style={{ padding: '36px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #FF6633 0%, #FF385C 100%)',
                  padding: '12px',
                  borderRadius: '14px',
                  color: '#FFF',
                }}
              >
                <MapPin size={26} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#FF7A00', fontWeight: 800, textTransform: 'uppercase' }}>
                  CONVENTION VENUE
                </span>
                <h3 style={{ fontSize: '1.8rem', color: '#FFF', margin: '2px 0 0 0' }}>
                  SEQUEL TOYOTA
                </h3>
              </div>
            </div>

            <p style={{ color: '#FBD7E1', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Great Nag Road / Central Automotive Belt, Nagpur, Maharashtra 440009. Fully equipped with spacious indoor halls, dedicated stage sound systems, and secure on-site parking.
            </p>

            {/* Travel Guides */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '8px', borderRadius: '8px', color: '#38BDF8' }}>
                  <Train size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFF', fontSize: '0.92rem' }}>By Nagpur Metro</div>
                  <div style={{ color: '#A7A1AA', fontSize: '0.84rem' }}>
                    Nearest Metro Station: Sitabuldi Interchange / Congress Nagar (10-12 mins by auto or e-rickshaw).
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '8px', borderRadius: '8px', color: '#4ADE80' }}>
                  <Car size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFF', fontSize: '0.92rem' }}>By Cab / Two-Wheeler</div>
                  <div style={{ color: '#A7A1AA', fontSize: '0.84rem' }}>
                    Easily accessible via Ola / Uber / Rapido by setting destination to "Sequel Toyota Nagpur". Dedicated free 2-wheeler and car parking on-site.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '8px', borderRadius: '8px', color: '#F472B6' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFF', fontSize: '0.92rem' }}>Entry Timings</div>
                  <div style={{ color: '#A7A1AA', fontSize: '0.84rem' }}>
                    Gates open at 11:00 AM sharp on Saturday (Nov 21) & Sunday (Nov 22). Re-entry allowed with attendee wristband.
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Sequel+Toyota+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
            >
              <Navigation size={18} />
              <span>Open in Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Interactive Venue Zone Map Card */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span className="badge-tag" style={{ marginBottom: '14px' }}>
                <ShieldCheck size={14} color="#4ADE80" />
                <span>Venue Layout Plan</span>
              </span>

              <h4 style={{ fontSize: '1.4rem', color: '#FFF', marginBottom: '18px' }}>
                Interactive Zone Breakdown
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                {[
                  { name: 'ZONE 1: Main Stage', desc: 'Cosplay Runway, J-Rock Band, Award Ceremony' },
                  { name: 'ZONE 2: Esports Hall', desc: 'Tekken 8, Naruto Storm, Smash Bros setups' },
                  { name: 'ZONE 3: Artist Alley', desc: '25+ Anime Merchandise, Manga & Art prints' },
                  { name: 'ZONE 4: Food Courtyard', desc: 'Japanese Ramen, Boba Tea, Street Food' },
                  { name: 'ZONE 5: Photo Studio', desc: 'Torii Gate backdrops, Softbox studio lights' },
                  { name: 'ZONE 6: Cosplay Green Rooms', desc: 'AC dressing rooms & repair station' },
                ].map((zone, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(247, 200, 216, 0.12)',
                      borderRadius: '12px',
                      padding: '12px',
                    }}
                  >
                    <div style={{ color: '#FBD7E1', fontWeight: 700, fontSize: '0.85rem' }}>{zone.name}</div>
                    <div style={{ color: '#A7A1AA', fontSize: '0.75rem', marginTop: '4px' }}>{zone.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help desk notice */}
            <div
              style={{
                background: 'rgba(211, 107, 143, 0.15)',
                border: '1px dashed #D36B8F',
                borderRadius: '14px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Phone size={20} color="#FF7A00" />
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#FFF' }}>
                  Need Help or Accessibility Assistance?
                </div>
                <div style={{ fontSize: '0.78rem', color: '#FBD7E1' }}>
                  Nagpur Anime Club volunteers will be stationed at the main entrance gate to assist you throughout the event.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
