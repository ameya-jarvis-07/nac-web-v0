import React from 'react';
import InteractiveQuiz from '../components/InteractiveQuiz';
import { HelpCircle, Trophy, Sparkles, Award, Zap, Ticket } from 'lucide-react';

export default function QuizPage({ onOpenTicketModal }) {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#1A1A1F' }}>
      {/* Top Banner */}
      <section
        style={{
          padding: '60px 0 30px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(249, 115, 22, 0.22) 0%, rgba(26, 26, 31, 0.98) 75%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(247, 200, 216, 0.1)',
        }}
      >
        <div className="container">
          <span className="badge-tag" style={{ marginBottom: '14px', borderColor: '#F97316', color: '#FDBA74' }}>
            <HelpCircle size={14} color="#F97316" />
            <span>Official Stage Event Teaser</span>
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
            OTAKU TRIVIA ARCADE & QUIZ
          </h1>
          <p
            style={{
              color: '#A7A1AA',
              fontSize: '1.1rem',
              maxWidth: '820px',
              margin: '0 auto 24px',
            }}
          >
            Warm up your anime knowledge! The grand live quiz tournament takes place on both days of CosCon at Sequel Toyota with buzzer rounds, audio OST battles, and official anime figure prizes.
          </p>
        </div>
      </section>

      {/* Main Playable Interactive Quiz */}
      <InteractiveQuiz onOpenTicketModal={onOpenTicketModal} />

      {/* Stage Quiz Format Guide */}
      <section style={{ padding: '60px 0 90px', backgroundColor: '#141318' }}>
        <div className="container" style={{ maxWidth: '940px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge-tag" style={{ marginBottom: '10px' }}>
              <Trophy size={14} color="#FF7A00" />
              <span>Live Stage Tournament</span>
            </span>
            <h2 style={{ fontSize: '2.5rem', color: '#FFF', fontFamily: "'Bebas Neue', sans-serif" }}>
              HOW THE STAGE QUIZ WORKS AT COSCON
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              {
                title: 'Round 1: Rapid-Fire Audio Opening',
                desc: 'Teams hear 3 to 5 seconds of an iconic anime opening or ending theme. First team to buzz gets the points.',
              },
              {
                title: 'Round 2: Silhouette & Stand Guess',
                desc: 'Images with darkened character silhouettes, cursed tools, or Zanpakuto blades are flashed on stage screens.',
              },
              {
                title: 'Round 3: Grand Final Buzzer Duel',
                desc: 'Deep-lore questions spanning the Big 3, Mecha, Isekai, and Seinen. Winners walk away with the Golden Trophy and Manga box sets!',
              },
            ].map((round, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px', borderRadius: '16px' }}>
                <div style={{ color: '#FF7A00', fontWeight: 800, fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Stage Segment 0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '8px' }}>{round.title}</h3>
                <p style={{ color: '#A7A1AA', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{round.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
