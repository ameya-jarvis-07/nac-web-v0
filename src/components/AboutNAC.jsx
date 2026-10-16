import React from 'react';
import { Users, Heart, Share2, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';

export default function AboutNAC() {
  const stats = [
    { number: '5,000+', label: 'COMMUNITY MEMBERS' },
    { number: '20+', label: 'PAST MEETUPS & SCREENINGS' },
    { number: '100+', label: 'COSPLAY CREATORS' },
    { number: '100%', label: 'OTAKU PASSION' },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '90px 0',
        backgroundColor: '#16151B',
        position: 'relative',
        borderTop: '1px solid rgba(247, 200, 216, 0.1)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <span className="badge-tag" style={{ marginBottom: '12px' }}>
            <Users size={14} color="#D36B8F" />
            <span>Community Spotlight</span>
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              color: '#FFF',
              margin: '0 0 14px 0',
            }}
          >
            NAGPUR ANIME CLUB × OTA TOKYO
          </h2>
          <p style={{ color: '#A7A1AA', fontSize: '1.05rem', margin: 0 }}>
            Uniting anime lovers, manga readers, artists, and gamers across Nagpur, Vidarbha, and Central India.
          </p>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto 50px',
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px',
                textAlign: 'center',
                borderColor: 'rgba(211, 107, 143, 0.25)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '2.8rem',
                  color: '#FF6633',
                  lineHeight: 1,
                  letterSpacing: '1px',
                }}
              >
                {item.number}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FBD7E1', letterSpacing: '0.08em', marginTop: '6px' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story & Collaboration Description */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '40px',
            borderRadius: '24px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D36B8F', fontWeight: 800, fontSize: '0.9rem', marginBottom: '8px' }}>
                <Sparkles size={18} />
                <span>ABOUT NAGPUR ANIME CLUB (@nagpuranimeclub)</span>
              </div>

              <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '16px' }}>
                From Local Meetups to Central India’s Flagship Anime Con
              </h3>

              <p style={{ color: '#D1CDD5', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '16px' }}>
                Founded by passionate otaku in Nagpur, Nagpur Anime Club (NAC) began with movie screenings, cosplay meetups in city gardens, and manga exchanges. Over the years, the club has grown into a vibrant haven where anyone who loves anime—from Studio Ghibli classics to modern seasonal hits—feels at home.
              </p>

              <p style={{ color: '#D1CDD5', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Partnering with <b>OTA TOKYO</b> brings authentic Japanese pop-culture, exclusive official merchandise, and international festival standards directly to the City of Oranges for <b>COSCON 2026</b>.
              </p>

              {/* Social links */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://instagram.com/nagpuranimeclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sakura"
                  style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                >
                  <InstagramIcon size={18} color="#FFF" />
                  <span>@nagpuranimeclub</span>
                </a>
                <a
                  href="https://youtube.com/@nagpuranimeclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                >
                  <YoutubeIcon size={18} color="#FFF" />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://facebook.com/nagpuranimeclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                >
                  <FacebookIcon size={18} color="#FFF" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Visual community badge card */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(211, 107, 143, 0.15) 0%, rgba(255, 94, 54, 0.15) 100%)',
                border: '1px solid rgba(247, 200, 216, 0.25)',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  border: '3px dashed #D36B8F',
                  background: '#1A1A1F',
                  margin: '0 auto 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 900,
                  boxShadow: '0 0 25px rgba(211, 107, 143, 0.4)',
                }}
              >
                <span style={{ color: '#4ADE80' }}>N</span>
                <span style={{ color: '#FBD7E1' }}>A</span>
                <span style={{ color: '#F43F5E' }}>C</span>
              </div>

              <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#FFF', margin: '0 0 4px 0' }}>
                JOIN THE NAGPUR ANIME CLUB SQUAD
              </h4>

              <p style={{ color: '#A7A1AA', fontSize: '0.88rem', marginBottom: '20px' }}>
                Connect with local cosplayers, participate in monthly anime screenings, voice acting challenges, and art showcases!
              </p>

              <div
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  padding: '12px',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  color: '#FF9E66',
                  fontWeight: 700,
                }}
              >
                🎉 100+ Free Anime Posters given at every meetup!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
