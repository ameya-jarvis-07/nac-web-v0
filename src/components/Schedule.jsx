import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Tag, Filter, CheckCircle2 } from 'lucide-react';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  const [filterCategory, setFilterCategory] = useState('all');

  const scheduleDay1 = [
    {
      time: '11:00 AM',
      title: 'Grand Festival Opening & Taiko Drums',
      category: 'stage',
      categoryLabel: 'Main Stage',
      location: 'Torii Central Arena',
      desc: 'Opening ceremony presented by Nagpur Anime Club organizers & Ota Tokyo partners, welcoming speech & traditional ceremonial drum performance.',
    },
    {
      time: '12:00 PM',
      title: 'Artist Alley & Ramen Street Inauguration',
      category: 'culture',
      categoryLabel: 'Culture & Food',
      location: 'Food Court & Alley',
      desc: '25+ anime illustrators unveil exclusive prints, manga volume pop-up opens, and the Japanese street food booths start serving hot miso ramen & takoyaki.',
    },
    {
      time: '01:00 PM',
      title: 'Tekken 8 & Naruto Storm 4 Qualifiers',
      category: 'gaming',
      categoryLabel: 'Gaming Arena',
      location: 'Esports Zone',
      desc: 'Nagpur’s finest fighting game players battle through single-elimination pools on PlayStation 5 tournament stations.',
    },
    {
      time: '02:30 PM',
      title: 'Otaku Anime Quiz — Round 1 Preliminary',
      category: 'contests',
      categoryLabel: 'Contest',
      location: 'Stage B Hall',
      desc: 'Rapid-fire buzzer quiz covering classic 90s, Shonen Big 3, and Modern hits. Top 6 squads qualify for the Grand Sunday Final.',
    },
    {
      time: '04:00 PM',
      title: 'Cosplay Crafting Workshop & Prop Safety Talk',
      category: 'culture',
      categoryLabel: 'Workshop',
      location: 'Manga Workshop Lounge',
      desc: 'Masterclass on EVA foam armor fabrication, wig styling hacks, and 3D printing techniques for beginner and intermediate cosplayers.',
    },
    {
      time: '05:30 PM',
      title: 'Live Anime Acoustic Covers by Tokyo Echoes',
      category: 'stage',
      categoryLabel: 'Main Stage',
      location: 'Main Stage',
      desc: 'Heartfelt live acoustic renditions of iconic themes from Your Name, Demon Slayer, Suzume, and Violet Evergarden.',
    },
    {
      time: '07:30 PM',
      title: 'Night 1 DJ Anime Rave & Glowstick Party',
      category: 'stage',
      categoryLabel: 'Music & Rave',
      location: 'Central Arena',
      desc: 'High-octane remixed anime club anthems, laser light show, and crowd singalongs to close Day 1 in style!',
    },
  ];

  const scheduleDay2 = [
    {
      time: '11:00 AM',
      title: 'Gates Open & Free Merch Check-In',
      category: 'culture',
      categoryLabel: 'General',
      location: 'Registration Desk',
      desc: 'Early attendees claim their official CosCon stickers and lanyard packets. Cosplay green rooms open for contestants.',
    },
    {
      time: '12:00 PM',
      title: 'Super Smash Bros & Genshin Impact Challenge',
      category: 'gaming',
      categoryLabel: 'Gaming Arena',
      location: 'Esports Zone',
      desc: 'Open gaming bracket with community prizes and speedrun time trials on high-tier Abyss runs.',
    },
    {
      time: '01:30 PM',
      title: 'Iaido & Kendo Samurai Swordplay Exhibition',
      category: 'culture',
      categoryLabel: 'Culture',
      location: 'Main Stage',
      desc: 'Traditional Japanese martial artists showcase precision forms, katana draws, and historical culture.',
    },
    {
      time: '02:45 PM',
      title: 'Grand Otaku Anime Quiz Finals',
      category: 'contests',
      categoryLabel: 'Contest',
      location: 'Main Stage',
      desc: 'The best anime trivia buffs face off in audio-visual, silhouette, and manga speed rounds for the CosCon 2026 Golden Cup.',
    },
    {
      time: '04:30 PM',
      title: 'NAGPUR COSPLAY CHAMPIONSHIP GRAND RUNWAY',
      category: 'stage',
      categoryLabel: 'Highlight Event',
      location: 'Main Stage',
      desc: 'The centerpiece of the convention! Over 60 costumed heroes, villains, and armored gladiators take the runway competing for ₹50,000+ prize pool.',
    },
    {
      time: '07:00 PM',
      title: 'J-Rock Band Headline Performance',
      category: 'stage',
      categoryLabel: 'Main Stage',
      location: 'Main Stage',
      desc: 'Live high-energy Japanese rock concert performing tracks from Bleach, Jujutsu Kaisen, and Attack on Titan.',
    },
    {
      time: '08:30 PM',
      title: 'Awards Ceremony & Grand Finale',
      category: 'stage',
      categoryLabel: 'Ceremony',
      location: 'Central Arena',
      desc: 'Crowning the Nagpur Cosplay Champion, gaming tournament winners, and massive community group photo!',
    },
  ];

  const currentList = activeDay === 1 ? scheduleDay1 : scheduleDay2;

  const filteredSchedule = currentList.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  return (
    <section
      id="schedule"
      style={{
        padding: '90px 0',
        backgroundColor: '#16151B',
        position: 'relative',
        borderTop: '1px solid rgba(247, 200, 216, 0.1)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <span className="badge-tag" style={{ marginBottom: '12px' }}>
            <Calendar size={14} color="#D36B8F" />
            <span>2-Day Festival Lineup</span>
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              color: '#FFF',
              margin: '0 0 14px 0',
            }}
          >
            TIMETABLE & LINEUP
          </h2>
          <p style={{ color: '#A7A1AA', fontSize: '1.05rem', margin: 0 }}>
            10 hours of non-stop excitement each day from 11:00 AM to 9:00 PM at Sequel Toyota.
          </p>
        </div>

        {/* Day Selector Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
          <button
            onClick={() => setActiveDay(1)}
            style={{
              padding: '14px 28px',
              borderRadius: '16px',
              background: activeDay === 1
                ? 'linear-gradient(135deg, #FF6633 0%, #FF385C 100%)'
                : 'rgba(255, 255, 255, 0.04)',
              border: activeDay === 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
              color: '#FFF',
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: activeDay === 1 ? '0 8px 24px rgba(255, 102, 51, 0.35)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            <Calendar size={18} />
            <span>DAY 1: SATURDAY (21 NOV)</span>
          </button>

          <button
            onClick={() => setActiveDay(2)}
            style={{
              padding: '14px 28px',
              borderRadius: '16px',
              background: activeDay === 2
                ? 'linear-gradient(135deg, #D36B8F 0%, #6B2E3B 100%)'
                : 'rgba(255, 255, 255, 0.04)',
              border: activeDay === 2 ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
              color: '#FFF',
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: activeDay === 2 ? '0 8px 24px rgba(211, 107, 143, 0.35)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            <Calendar size={18} />
            <span>DAY 2: SUNDAY (22 NOV)</span>
          </button>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {[
            { id: 'all', label: 'All Activities' },
            { id: 'stage', label: 'Main Stage & Music' },
            { id: 'gaming', label: 'Gaming Tournaments' },
            { id: 'contests', label: 'Contests & Quizzes' },
            { id: 'culture', label: 'Culture & Alley' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '999px',
                background: filterCategory === cat.id ? 'rgba(211, 107, 143, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                border: filterCategory === cat.id ? '1px solid #D36B8F' : '1px solid rgba(255, 255, 255, 0.08)',
                color: filterCategory === cat.id ? '#FBD7E1' : '#A7A1AA',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline Items */}
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredSchedule.map((slot, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '20px',
                alignItems: 'flex-start',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Time Column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  borderRight: '1px solid rgba(247, 200, 216, 0.15)',
                  paddingRight: '14px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FF7A00', fontWeight: 800, fontSize: '1rem' }}>
                  <Clock size={16} />
                  <span>{slot.time}</span>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: '#A7A1AA',
                    marginTop: '4px',
                  }}
                >
                  {slot.location}
                </span>
              </div>

              {/* Event Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '1.25rem', color: '#FFF', margin: 0, fontWeight: 700 }}>
                    {slot.title}
                  </h4>
                  <span
                    style={{
                      background: 'rgba(211, 107, 143, 0.15)',
                      color: '#FBD7E1',
                      border: '1px solid rgba(211, 107, 143, 0.3)',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    {slot.categoryLabel}
                  </span>
                </div>

                <p style={{ color: '#D1CDD5', fontSize: '0.92rem', margin: 0, lineHeight: 1.5 }}>
                  {slot.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
