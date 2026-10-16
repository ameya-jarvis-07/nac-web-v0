import React, { useState } from 'react';
import { Music, Gamepad2, Trophy, Mic2, Cat, HelpCircle, Sparkles, CheckCircle2, Ticket, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventsPage({ onOpenTicketModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const detailedEvents = [
    {
      id: 'music-stage',
      category: 'music',
      title: 'LIVE J-ROCK & ANIME OST STAGE',
      flyerCategory: 'MUSIC',
      icon: <Music size={26} />,
      badge: 'Main Stage',
      time: 'Day 1 & 2 • 3:00 PM – 9:00 PM',
      desc: 'Get ready for electrifying live performances playing your favorite anime openings and endings! Featuring headline set by Tokyo Echoes covering tracks from Jujutsu Kaisen, Attack on Titan, Naruto, Bleach, and Chainsaw Man.',
      features: [
        'Live 5-piece J-Rock band Tokyo Echoes headline concert',
        'DJ Anime Rave with state-of-the-art laser lighting',
        'Acoustic anime ballads lounge (Radwimps, LiSA, Aimer tributes)',
        'Audience Anime Karaoke Open Mic session with surprise prizes',
      ],
    },
    {
      id: 'gaming-arena',
      category: 'games',
      title: 'NAGPUR ESPORTS & GAMING ARENA',
      flyerCategory: 'GAMES',
      icon: <Gamepad2 size={26} />,
      badge: '₹25,000 Cash Pool',
      time: 'Both Days • 11:30 AM – 8:00 PM',
      desc: 'Central India’s premiere fighting game tournament on PlayStation 5 setups and low-latency gaming monitors. Casual free-play stations available all day long.',
      features: [
        'Tekken 8 Nagpur Open: Double Elimination bracket (₹15,000 cash pool)',
        'Naruto Shippuden: Ultimate Ninja Storm 4 1v1 showdown',
        'Super Smash Bros. Ultimate open bracket on Nintendo Switch OLED',
        'Genshin Impact & Honkai: Star Rail gacha pulls lounge and time trials',
      ],
    },
    {
      id: 'fan-contests',
      category: 'contests',
      title: 'CREATIVE FAN CONTESTS & ART BATTLE',
      flyerCategory: 'CONTESTS',
      icon: <Trophy size={26} />,
      badge: 'Trophies & Merch',
      time: 'Submissions close 2:00 PM Sunday',
      desc: 'Show off your creative talents! Open to digital artists, traditional illustrators, voice actors, and storytellers. Judged by leading Indian anime content creators.',
      features: [
        'Live 60-Minute Speed Manga Sketching Battle',
        'Digital Fan Art Showcase displayed on LED stage screens',
        'Anime Voice Acting & Lip-Sync Duel (Japanese & Hindi dubs)',
        'Original Otaku Meme & AMV Video Editing Contest',
      ],
    },
    {
      id: 'live-cultural-shows',
      category: 'shows',
      title: 'CULTURAL STAGE & MARTIAL ARTS SHOWS',
      flyerCategory: 'LIVE SHOWS',
      icon: <Mic2 size={26} />,
      badge: 'Cultural Arts',
      time: 'Hourly showcases',
      desc: 'Immerse yourself in authentic Japanese heritage blended with modern pop culture. Featuring certified martial artists demonstrating traditional forms.',
      features: [
        'Iaido & Kendo Japanese Katana Swordplay Exhibition',
        'Traditional Taiko ceremonial drum performance',
        'Anisong Choreography & J-Pop Dance Crew Battle',
        'Japanese Calligraphy (Shodo) & Origami Interactive Workshop',
      ],
    },
    {
      id: 'cosplay-experience',
      category: 'cosplay',
      title: 'COSPLAY RUNWAY & RED CARPET ZONE',
      flyerCategory: 'COSPLAY',
      icon: <Cat size={26} />,
      badge: '₹50,000+ Prize Pool',
      time: 'Sunday • 4:30 PM Grand Runway',
      desc: 'The beating heart of CosCon! Whether you are a beginner in your first wig or a veteran crafting mechanized armor, enjoy professional studio lighting, AC green rooms, and massive crowd applause.',
      features: [
        'Grand Cosplay Championship Runway on the Main Stage',
        '360-Degree Video Photobooth & Professional Themed Backdrops',
        'Separate Air-Conditioned Green Rooms for Male & Female Cosplayers',
        'Emergency Cosplay Repair Counter (glue guns, safety pins, threads, paint)',
      ],
    },
    {
      id: 'otaku-trivia-quiz',
      category: 'quiz',
      title: 'GRAND OTAKU ANIME QUIZ',
      flyerCategory: 'ANIME QUIZ',
      icon: <HelpCircle size={26} />,
      badge: 'Buzzer Rounds',
      time: 'Daily at 1:30 PM & 6:00 PM',
      desc: 'Are you the biggest anime fan in Nagpur? Prove your knowledge in front of a live crowd! High-tech buzzers, audio opening guess rounds, and rare manga box-set prizes.',
      features: [
        'Guess the Anime Opening Theme within 3 seconds audio round',
        'Weapon, Stand, and Silhouette identification round',
        'Shonen Big 3 vs. Modern Dark Shonen ultimate faceoff',
        'CosCon 2026 Golden Trivia Cup & official licensed figure prizes',
      ],
    },
    {
      id: 'ramen-and-alley',
      category: 'more',
      title: 'AUTHENTIC RAMEN STREET & ARTIST ALLEY',
      flyerCategory: 'AND MUCH MORE!',
      icon: <Sparkles size={26} />,
      badge: '25+ Creators',
      time: 'All Day (11:00 AM – 9:00 PM)',
      desc: 'Savor piping hot authentic Japanese street food and explore booths created by talented independent anime creators from across Central India.',
      features: [
        'Authentic Miso & Shoyu Ramen, Crispy Takoyaki, Boba Tea & Dango',
        'Artist Alley: 25+ creators selling custom acrylic standees, prints & keychains',
        'Pop-Up Maid & Butler Cafe with photo ops and themed desserts',
        'Official Manga Library Lounge for quiet reading and chilling',
      ],
    },
  ];

  const filteredEvents = activeCategory === 'all'
    ? detailedEvents
    : detailedEvents.filter((item) => item.category === activeCategory);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#1A1A1F' }}>
      {/* Page Header Banner */}
      <section
        style={{
          padding: '60px 0 40px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(211, 107, 143, 0.22) 0%, rgba(26, 26, 31, 0.98) 75%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(247, 200, 216, 0.1)',
        }}
      >
        <div className="container">
          <span className="badge-tag" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} color="#D36B8F" />
            <span>Featured on Official Flyer</span>
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
            THE 7 MAIN ATTRACTIONS & EXPERIENCES
          </h1>
          <p
            style={{
              color: '#A7A1AA',
              fontSize: '1.1rem',
              maxWidth: '820px',
              margin: '0 auto 28px',
            }}
          >
            Everything listed on the official Nagpur Anime Club flyer—from live anime rock shows and esports brackets to authentic Japanese street ramen and the grand cosplay runway!
          </p>

          {/* Quick Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All 7 Attractions' },
              { id: 'music', label: '🎵 Music & Rave' },
              { id: 'games', label: '🎮 Esports & Gaming' },
              { id: 'contests', label: '🏆 Fan Contests' },
              { id: 'shows', label: '🎤 Cultural Shows' },
              { id: 'cosplay', label: '🐱 Cosplay Runway' },
              { id: 'quiz', label: '❓ Anime Quiz' },
              { id: 'more', label: '✨ Food & Alley' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '999px',
                  background: activeCategory === tab.id ? 'linear-gradient(135deg, #FF6633, #FF385C)' : 'rgba(255, 255, 255, 0.05)',
                  border: activeCategory === tab.id ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFF',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: activeCategory === tab.id ? '0 4px 20px rgba(255, 80, 60, 0.35)' : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section style={{ padding: '60px 0 90px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', maxWidth: '1060px', margin: '0 auto' }}>
            {filteredEvents.map((ev, index) => (
              <div
                key={ev.id}
                className="glass-panel"
                style={{
                  padding: '36px',
                  borderRadius: '24px',
                  border: '1px solid rgba(211, 107, 143, 0.25)',
                  background: 'linear-gradient(135deg, rgba(30, 27, 36, 0.95) 0%, rgba(20, 18, 24, 0.98) 100%)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Accent glow line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #FF7A00, #D36B8F)',
                  }}
                />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                      <span className="badge-tag" style={{ background: 'rgba(255, 94, 54, 0.15)', borderColor: '#FF7A00', color: '#FFA07A' }}>
                        Flyer Category: {ev.flyerCategory}
                      </span>
                      <span style={{ fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.08)', padding: '3px 10px', borderRadius: '6px', color: '#FBD7E1', fontWeight: 700 }}>
                        {ev.badge}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '2rem', color: '#FFF', margin: '0 0 10px 0', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' }}>
                      {ev.title}
                    </h2>

                    <p style={{ color: '#D1CDD5', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '20px' }}>
                      {ev.desc}
                    </p>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.4)', padding: '8px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.84rem', color: '#FF9E66', fontWeight: 700, marginBottom: '20px' }}>
                      <span>⏱️ Timings:</span>
                      <span>{ev.time}</span>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(247, 200, 216, 0.15)',
                      borderRadius: '18px',
                      padding: '24px',
                    }}
                  >
                    <h3 style={{ fontSize: '0.9rem', color: '#F7C8D8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                      Key Experience Highlights
                    </h3>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {ev.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#F5E9E2' }}>
                          <CheckCircle2 size={16} color="#4ADE80" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => onOpenTicketModal('ota')}
                        className="btn btn-primary"
                        style={{ flex: 1, padding: '10px 14px', fontSize: '0.88rem' }}
                      >
                        <Ticket size={16} />
                        <span>Book Pass (₹99)</span>
                      </button>
                      <Link
                        to="/schedule"
                        className="btn btn-outline"
                        style={{ flex: 1, padding: '10px 14px', fontSize: '0.88rem' }}
                      >
                        <span>View Schedule</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div
            style={{
              maxWidth: '860px',
              margin: '60px auto 0',
              textAlign: 'center',
              padding: '36px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(211, 107, 143, 0.2) 0%, rgba(255, 102, 51, 0.2) 100%)',
              border: '2px dashed #D36B8F',
            }}
          >
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.4rem', color: '#FFF', margin: '0 0 10px 0' }}>
              ALL 7 ATTRACTIONS INCLUDED WITH YOUR FESTIVAL PASS!
            </h3>
            <p style={{ color: '#FBD7E1', fontSize: '0.96rem', maxWidth: '640px', margin: '0 auto 20px' }}>
              No extra fees or hidden charges to enter the gaming arena, cosplay runway, or live music stages. Standard passes are only ₹99!
            </p>
            <button
              onClick={() => onOpenTicketModal('ota')}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontSize: '1.05rem' }}
            >
              <span>Book Your Ticket & Claim Free Merch</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
