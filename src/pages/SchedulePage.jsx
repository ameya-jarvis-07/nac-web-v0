import React, { useState } from 'react';
import Schedule from '../components/Schedule';
import { Calendar, Clock, Download, Ticket, Sparkles, MapPin } from 'lucide-react';

export default function SchedulePage({ onOpenTicketModal }) {
  const downloadSchedule = () => {
    const text =
`=============================================================
COSCON X OTA TOKYO 2026 — 2-DAY FESTIVAL SCHEDULE
Organized by Nagpur Anime Club (@nagpuranimeclub)
Venue: Sequel Toyota, Nagpur | Dates: 21 - 22 Nov 2026
=============================================================

DAY 1: SATURDAY, 21 NOV 2026 (11:00 AM - 9:00 PM)
-------------------------------------------------------------
11:00 AM - Grand Festival Opening & Taiko Drums (Main Stage)
12:00 PM - Artist Alley & Ramen Street Inauguration (Courtyard)
01:00 PM - Tekken 8 & Naruto Storm 4 Qualifiers (Esports Arena)
02:30 PM - Otaku Anime Quiz Round 1 (Stage B Hall)
04:00 PM - Cosplay Crafting & Prop Safety Workshop (Manga Lounge)
05:30 PM - Live Anime Acoustic Covers by Tokyo Echoes (Main Stage)
07:30 PM - Night 1 DJ Anime Rave & Glowstick Party (Central Arena)

DAY 2: SUNDAY, 22 NOV 2026 (11:00 AM - 9:00 PM)
-------------------------------------------------------------
11:00 AM - Gates Open & Free Merch Check-In (Registration Desk)
12:00 PM - Super Smash Bros & Genshin Impact Challenge (Esports Zone)
01:30 PM - Iaido & Kendo Samurai Swordplay Exhibition (Main Stage)
02:45 PM - Grand Otaku Anime Quiz Finals (Main Stage)
04:30 PM - NAGPUR COSPLAY CHAMPIONSHIP GRAND RUNWAY (Main Stage)
07:00 PM - J-Rock Band Headline Performance (Main Stage)
08:30 PM - Awards Ceremony & Grand Finale (Central Arena)
=============================================================`;

    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'CosCon-Nagpur-2026-Schedule.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#1A1A1F' }}>
      {/* Top Banner */}
      <section
        style={{
          padding: '60px 0 30px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(211, 107, 143, 0.22) 0%, rgba(26, 26, 31, 0.98) 75%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(247, 200, 216, 0.1)',
        }}
      >
        <div className="container">
          <span className="badge-tag" style={{ marginBottom: '14px' }}>
            <Calendar size={14} color="#D36B8F" />
            <span>21 - 22 Nov 2026 • Sequel Toyota, Nagpur</span>
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
            OFFICIAL FESTIVAL TIMETABLE
          </h1>
          <p
            style={{
              color: '#A7A1AA',
              fontSize: '1.1rem',
              maxWidth: '820px',
              margin: '0 auto 28px',
            }}
          >
            Plan your weekend at Nagpur's biggest anime convention! 10 full hours of stage events, gaming brackets, and live cosplay performances each day.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={downloadSchedule}
              className="btn btn-outline"
              style={{ padding: '12px 24px', fontSize: '0.92rem' }}
            >
              <Download size={18} />
              <span>Download Schedule (.txt)</span>
            </button>
            <button
              onClick={() => onOpenTicketModal('ota')}
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.92rem' }}
            >
              <Ticket size={18} />
              <span>Book Tickets to Attend (₹99)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Embed full interactive schedule */}
      <Schedule />
    </div>
  );
}
