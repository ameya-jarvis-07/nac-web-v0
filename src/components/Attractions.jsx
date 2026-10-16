import React, { useState } from 'react';
import { Music, Gamepad2, Trophy, Mic2, Cat, HelpCircle, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Attractions({ onSelectQuiz }) {
  const [activeTab, setActiveTab] = useState(0);

  const attractions = [
    {
      id: 'music',
      title: 'MUSIC',
      subtitle: 'Anime OSTs, J-Pop & DJ Anime Rave',
      icon: <Music size={28} />,
      color: '#FF4E74',
      badge: 'Main Stage',
      desc: 'Experience electric live performances featuring iconic anime opening themes, high-energy J-Pop choreography, acoustic anime ballad sessions, and a heart-thumping evening DJ Anime Rave spinning the greatest tracks from Attack on Titan, Naruto, Bleach, and Jujutsu Kaisen.',
      highlights: [
        'Live J-Rock Band: Tokyo Echoes',
        'Anime DJ Rave with Laser Visuals',
        'Acoustic Anime Openings Lounge',
        'Audience Anime Karaoke Stage',
      ],
      time: 'Both Days • 3:00 PM – 9:00 PM',
    },
    {
      id: 'games',
      title: 'GAMES',
      subtitle: 'Fighting Tournaments & Free-to-Play Arcades',
      icon: <Gamepad2 size={28} />,
      color: '#3B82F6',
      badge: 'Esports Arena',
      desc: 'Battle it out on high-refresh-rate console and PC gaming stations. Compete in Nagpur’s premiere fighting game brackets or chill out in the retro Japanese arcade and gacha lounge.',
      highlights: [
        'Tekken 8 Nagpur Open (₹15,000 Cash Pool)',
        'Naruto Shippuden: Ultimate Ninja Storm 4 Bracket',
        'Super Smash Bros. Ultimate 1v1 Tourney',
        'Genshin Impact & Honkai: Star Rail Showcase',
      ],
      time: 'Both Days • 11:30 AM – 8:00 PM',
    },
    {
      id: 'contests',
      title: 'CONTESTS',
      subtitle: 'Showcase Your Talent & Win Big',
      icon: <Trophy size={28} />,
      color: '#EAB308',
      badge: '₹50,000+ Prizes',
      desc: 'Compete in an exhilarating slate of fan competitions judged by prominent guest artists and community veterans from across India. Win prestigious trophies, cash rewards, and official licensed anime merchandise hampers.',
      highlights: [
        'Nagpur Cosplay Championship',
        'Digital & Traditional Anime Fan-Art Battle',
        'Anime Voice Acting & Lip-Sync Duel',
        'Speed Manga Sketching Showdown',
      ],
      time: 'Contests spread across Sat & Sun',
    },
    {
      id: 'live-shows',
      title: 'LIVE SHOWS',
      subtitle: 'Spectacular Stage Acts & Cultural Arts',
      icon: <Mic2 size={28} />,
      color: '#EC4899',
      badge: 'Live Experience',
      desc: 'Immerse yourself in authentic Japanese culture and modern entertainment. Featuring traditional martial arts demonstrations, katana swordplay, anisong dance troops, and interactive creator panels.',
      highlights: [
        'Iaido & Kendo Samurai Demonstration',
        'Nagpur Anime Dance Troupe Performance',
        'Voice Actor & Creator Q&A Session',
        'Otaku Culture & Cosplay Making Panels',
      ],
      time: 'Hourly on Main Stage',
    },
    {
      id: 'cosplay',
      title: 'COSPLAY',
      subtitle: 'The Heart of CosCon Nagpur',
      icon: <Cat size={28} />,
      color: '#A855F7',
      badge: 'Red Carpet',
      desc: 'Bring your favorite characters from anime, manga, and video games to life! Featuring a full-blown cosplay runway, dedicated photo studio sets with professional photographers, weapon prop inspection, and separate air-conditioned green rooms.',
      highlights: [
        'Grand Cosplay Masquerade & Catwalk',
        'Themed Photo Booths (Torii, Classroom, Cyberpunk)',
        'Dedicated AC Changing & Makeup Green Rooms',
        'Cosplay Repair & Crafting Emergency Station',
      ],
      time: 'Runway: Sunday 4:30 PM',
    },
    {
      id: 'anime-quiz',
      title: 'ANIME QUIZ',
      subtitle: 'Test Your Ultimate Otaku Knowledge',
      icon: <HelpCircle size={28} />,
      color: '#F97316',
      badge: 'Crowd Favorite',
      desc: 'Do you know your Shonen tropes from your Seinen deep cuts? Gather your squad or enter solo into the CosCon Grand Otaku Trivia with buzzer rounds, audio-visual questions, and rare manga box-set prizes.',
      highlights: [
        'Rapid-Fire Audio Opening Quiz Round',
        'Guess the Silhouette & Weapon Round',
        'Interactive Audience Mobile Trivia',
        'Exclusive Trophy & Manga Gift Hampers',
      ],
      time: 'Daily at 1:30 PM & 6:00 PM',
      hasQuizTrigger: true,
    },
    {
      id: 'much-more',
      title: 'AND MUCH MORE!',
      subtitle: 'Food, Merchandise & Authentic Japan',
      icon: <Sparkles size={28} />,
      color: '#10B981',
      badge: 'Full Venue',
      desc: 'Beyond the main stage, explore dozens of interactive attractions across Sequel Toyota’s festival zone—from steamy Japanese street cuisine to the massive indie artist alley.',
      highlights: [
        'Japanese Street Food: Authentic Ramen, Takoyaki, Boba & Dango',
        'Artist Alley: 25+ Indie Illustrators & Fan-merch Creators',
        'Maid & Butler Pop-Up Cafe Experience',
        'Japanese Calligraphy & Origami Cultural Workshop Zone',
      ],
      time: 'Open all day throughout the event',
    },
  ];

  return (
    <section
      id="attractions"
      style={{
        padding: '90px 0',
        backgroundColor: '#16151B',
        position: 'relative',
        borderTop: '1px solid rgba(247, 200, 216, 0.1)',
        borderBottom: '1px solid rgba(247, 200, 216, 0.1)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <span className="badge-tag" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} color="#D36B8F" />
            <span>Featured on Official Flyer</span>
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#FFF',
              margin: '0 0 14px 0',
            }}
          >
            7 MAIN EVENT HIGHLIGHTS
          </h2>
          <p style={{ color: '#A7A1AA', fontSize: '1.05rem', margin: 0 }}>
            Curated by Nagpur Anime Club & Ota Tokyo to bring the most authentic, energetic Japanese anime experience to Nagpur.
          </p>
        </div>

        {/* Attractions Tabs for Quick Switching */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {attractions.map((item, index) => {
            const isSelected = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(211, 107, 143, 0.3) 0%, rgba(255, 94, 54, 0.25) 100%)'
                    : 'rgba(255, 255, 255, 0.04)',
                  border: isSelected
                    ? '1px solid #D36B8F'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isSelected ? '#FFF' : '#A7A1AA',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 20px rgba(211, 107, 143, 0.25)' : 'none',
                }}
              >
                <span style={{ color: isSelected ? '#FBD7E1' : '#A7A1AA' }}>{item.icon}</span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Attraction Spotlight Detail */}
        {(() => {
          const item = attractions[activeTab];
          return (
            <div
              className="glass-panel"
              style={{
                padding: '36px',
                borderRadius: '20px',
                border: '1px solid rgba(211, 107, 143, 0.3)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                marginBottom: '50px',
                background: 'linear-gradient(135deg, rgba(30, 27, 36, 0.95) 0%, rgba(20, 18, 24, 0.98) 100%)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <div
                      style={{
                        background: `rgba(211, 107, 143, 0.2)`,
                        color: item.color,
                        padding: '12px',
                        borderRadius: '14px',
                        display: 'flex',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <span className="badge-tag" style={{ background: 'rgba(255,255,255,0.06)', color: '#F7C8D8', borderColor: 'rgba(255,255,255,0.1)' }}>
                        {item.badge}
                      </span>
                      <h3 style={{ fontSize: '2.4rem', color: '#FFF', margin: '4px 0 0 0' }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <h4 style={{ color: '#FBD7E1', fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px' }}>
                    {item.subtitle}
                  </h4>

                  <p style={{ color: '#D1CDD5', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.4)', padding: '8px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.86rem', color: '#FF9E66', fontWeight: 600 }}>
                    <span>⏱️</span>
                    <span>{item.time}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(247, 200, 216, 0.15)',
                    borderRadius: '16px',
                    padding: '28px',
                  }}
                >
                  <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F7C8D8', marginBottom: '18px', fontWeight: 800 }}>
                    ⭐ Key Zone Experiences
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {item.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={18} color="#D36B8F" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ color: '#F5E9E2', fontSize: '0.98rem', fontWeight: 500 }}>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {item.hasQuizTrigger ? (
                    <a
                      href="#quiz"
                      onClick={() => onSelectQuiz && onSelectQuiz()}
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                    >
                      <span>Play Interactive Anime Quiz Teaser</span>
                      <ChevronRight size={18} />
                    </a>
                  ) : (
                    <a
                      href="#schedule"
                      className="btn btn-outline"
                      style={{ width: '100%' }}
                    >
                      <span>Check {item.title} In Timetable</span>
                      <ChevronRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Visual Cards Grid of all 7 Attractions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {attractions.map((att, idx) => (
            <div
              key={att.id}
              onClick={() => setActiveTab(idx)}
              className="glass-card"
              style={{
                padding: '24px',
                cursor: 'pointer',
                borderColor: activeTab === idx ? '#D36B8F' : 'rgba(247, 200, 216, 0.12)',
                background: activeTab === idx ? 'rgba(211, 107, 143, 0.12)' : undefined,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ color: att.color, background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  {att.icon}
                </div>
                <span style={{ fontSize: '0.74rem', background: 'rgba(255,255,255,0.08)', padding: '3px 8px', borderRadius: '6px', color: '#A7A1AA' }}>
                  {att.badge}
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFF', margin: '0 0 6px 0' }}>
                {att.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#A7A1AA', margin: 0, lineHeight: 1.5 }}>
                {att.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
