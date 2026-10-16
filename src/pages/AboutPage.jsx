import React from 'react';
import AboutNAC from '../components/AboutNAC';
import { Users, Heart, Sparkles, MessageSquare, HandHeart, CheckCircle2, Ticket } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '../components/SocialIcons';

export default function AboutPage({ onOpenTicketModal }) {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#1A1A1F' }}>
      {/* Top Banner with Official NAC Logo */}
      <section
        style={{
          padding: '60px 0 30px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(211, 107, 143, 0.22) 0%, rgba(26, 26, 31, 0.98) 75%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(247, 200, 216, 0.1)',
        }}
      >
        <div className="container">
          <div
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 16px',
              filter: 'drop-shadow(0 0 16px rgba(211, 107, 143, 0.6))',
            }}
          >
            <img
              src="/nac-logo.png"
              alt="Nagpur Anime Club"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <span className="badge-tag" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} color="#D36B8F" />
            <span>Grassroots Otaku Movement</span>
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
            ABOUT NAGPUR ANIME CLUB
          </h1>

          <p
            style={{
              color: '#A7A1AA',
              fontSize: '1.1rem',
              maxWidth: '820px',
              margin: '0 auto 24px',
            }}
          >
            Founded by passionate fans, Nagpur Anime Club (@nagpuranimeclub) has grown to become the heartbeat of pop-culture, cosplay, manga, and gaming across Vidarbha and Central India.
          </p>
        </div>
      </section>

      {/* Embedded About NAC Core Component */}
      <AboutNAC />

      {/* Volunteer & Community Squad Section */}
      <section style={{ padding: '60px 0 90px', backgroundColor: '#141318' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid rgba(211, 107, 143, 0.3)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div>
                <span className="badge-tag" style={{ marginBottom: '10px' }}>
                  <HandHeart size={14} color="#4ADE80" />
                  <span>Join the Crew</span>
                </span>
                <h3 style={{ fontSize: '2.2rem', color: '#FFF', fontFamily: "'Bebas Neue', sans-serif", margin: '0 0 10px 0' }}>
                  VOLUNTEER AT COSCON 2026
                </h3>
                <p style={{ color: '#D1CDD5', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Want backstage access, exclusive volunteer merchandise, and certificate of recognition? Nagpur Anime Club is recruiting passionate community helpers for stage management, cosplay assistance, gaming coordination, and attendee check-in!
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Free Festival Crew T-Shirt & Food Vouchers',
                    'Official Volunteer Certificate from NAC x Ota Tokyo',
                    'Direct interaction with celebrity guests & judges',
                  ].map((perk, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#FFF' }}>
                      <CheckCircle2 size={16} color="#4ADE80" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://instagram.com/nagpuranimeclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sakura"
                  style={{ padding: '12px 24px', fontSize: '0.92rem' }}
                >
                  <InstagramIcon size={18} color="#FFF" />
                  <span>DM Us on Instagram to Volunteer</span>
                </a>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(247, 200, 216, 0.15)',
                  borderRadius: '20px',
                  padding: '30px',
                  textAlign: 'center',
                }}
              >
                <h4 style={{ color: '#FFF', fontSize: '1.25rem', marginBottom: '14px' }}>
                  Connect With Nagpur Anime Club
                </h4>
                <p style={{ color: '#A7A1AA', fontSize: '0.86rem', marginBottom: '20px' }}>
                  Follow our official channels for cosplay meetup dates, anime movie houseful screenings, and meme competitions!
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href="https://instagram.com/nagpuranimeclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'flex-start' }}
                  >
                    <InstagramIcon size={18} color="#E1306C" />
                    <span>Instagram: @nagpuranimeclub</span>
                  </a>
                  <a
                    href="https://youtube.com/@nagpuranimeclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'flex-start' }}
                  >
                    <YoutubeIcon size={18} color="#FF0000" />
                    <span>YouTube: Nagpur Anime Club</span>
                  </a>
                  <a
                    href="https://facebook.com/nagpuranimeclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'flex-start' }}
                  >
                    <FacebookIcon size={18} color="#1877F2" />
                    <span>Facebook: Nagpur Anime Club</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
