import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, Trophy, RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractiveQuiz({ onOpenTicketModal }) {
  const questions = [
    {
      id: 1,
      question: "In Demon Slayer: Kimetsu no Yaiba, which Breathing Style is passed down through Tanjiro Kamado's family as the Hinokami Kagura dance?",
      options: [
        "Water Breathing (Mizu no Kokyu)",
        "Sun Breathing (Hi no Kokyu)",
        "Flame Breathing (Honō no Kokyu)",
        "Moon Breathing (Tsuki no Kokyu)",
      ],
      correct: 1,
      explanation: "Hinokami Kagura is the Sun Breathing technique passed down through the Kamado family generation after generation!",
    },
    {
      id: 2,
      question: "What is Satoru Gojo's signature Domain Expansion in Jujutsu Kaisen?",
      options: [
        "Malevolent Shrine (Fukuma Mizushi)",
        "Chimera Shadow Garden (Kangō An'eitei)",
        "Infinite Void (Muryōkūsho)",
        "Idle Death Gamble (Zanmu Shisatsu)",
      ],
      correct: 2,
      explanation: "Infinite Void (Muryōkūsho) floods the victim's mind with infinite raw information, incapacitating them completely!",
    },
    {
      id: 3,
      question: "Which anime feature film directed by Makoto Shinkai follows Taki and Mitsuha swapping bodies across space and time?",
      options: [
        "Weathering With You (Tenki no Ko)",
        "Your Name (Kimi no Na wa)",
        "Suzume (Suzume no Tojimari)",
        "5 Centimeters per Second (Byōsoku Go Senchimētoru)",
      ],
      correct: 1,
      explanation: "Your Name (Kimi no Na wa) released in 2016 became one of the highest-grossing anime masterpieces worldwide!",
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIdx];

  const handleSelect = (idx) => {
    if (answered) return;
    setSelectedOpt(idx);
    setAnswered(true);

    if (idx === currentQ.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOpt(null);
      setAnswered(false);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 80,
        spread: 60,
        colors: ['#F7C8D8', '#D36B8F', '#4ADE80'],
      });
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setAnswered(false);
    setIsFinished(false);
  };

  return (
    <section
      id="quiz"
      style={{
        padding: '90px 0',
        backgroundColor: '#121117',
        position: 'relative',
        borderTop: '1px solid rgba(247, 200, 216, 0.1)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <span className="badge-tag" style={{ marginBottom: '12px' }}>
            <HelpCircle size={14} color="#FF7A00" />
            <span>Official CosCon Activity Teaser</span>
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              color: '#FFF',
              margin: '0 0 14px 0',
            }}
          >
            OTAKU TRIVIA CHALLENGE
          </h2>
          <p style={{ color: '#A7A1AA', fontSize: '1.05rem', margin: 0 }}>
            Test your anime mastery with our 3-question warmup before the live stage buzzer rounds at Sequel Toyota!
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '36px',
            borderRadius: '24px',
            border: '1px solid rgba(211, 107, 143, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          {!isFinished ? (
            <div>
              {/* Progress & Counter */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.84rem', color: '#FBD7E1', fontWeight: 700 }}>
                  QUESTION {currentIdx + 1} OF {questions.length}
                </span>
                <span style={{ fontSize: '0.84rem', color: '#FF9E66', fontWeight: 800 }}>
                  CURRENT SCORE: {score}
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '999px',
                  marginBottom: '26px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${((currentIdx + (answered ? 1 : 0)) / questions.length) * 100}%`,
                    background: 'linear-gradient(90deg, #FF6633, #FF385C)',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>

              {/* Question Text */}
              <h3
                style={{
                  fontSize: '1.35rem',
                  color: '#FFF',
                  lineHeight: 1.45,
                  fontWeight: 700,
                  marginBottom: '24px',
                }}
              >
                {currentQ.question}
              </h3>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {currentQ.options.map((opt, i) => {
                  let btnBg = 'rgba(255, 255, 255, 0.04)';
                  let btnBorder = 'rgba(255, 255, 255, 0.12)';
                  let textColor = '#FFF';

                  if (answered) {
                    if (i === currentQ.correct) {
                      btnBg = 'rgba(74, 222, 128, 0.2)';
                      btnBorder = '#4ADE80';
                      textColor = '#86EFAC';
                    } else if (selectedOpt === i) {
                      btnBg = 'rgba(248, 113, 113, 0.2)';
                      btnBorder = '#F87171';
                      textColor = '#FCA5A5';
                    }
                  }

                  return (
                    <button
                      key={i}
                      disabled={answered}
                      onClick={() => handleSelect(i)}
                      style={{
                        padding: '14px 18px',
                        borderRadius: '12px',
                        background: btnBg,
                        border: `1px solid ${btnBorder}`,
                        color: textColor,
                        textAlign: 'left',
                        cursor: answered ? 'default' : 'pointer',
                        fontSize: '0.96rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s',
                      }}
                    >
                      <span>{opt}</span>
                      {answered && i === currentQ.correct && <CheckCircle size={18} color="#4ADE80" />}
                      {answered && selectedOpt === i && i !== currentQ.correct && <XCircle size={18} color="#F87171" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {answered && (
                <div style={{ animation: 'float 0.3s ease' }}>
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderLeft: '3px solid #D36B8F',
                      padding: '12px 16px',
                      borderRadius: '0 8px 8px 0',
                      marginBottom: '20px',
                      fontSize: '0.88rem',
                      color: '#F5E9E2',
                    }}
                  >
                    💡 {currentQ.explanation}
                  </div>

                  <button
                    onClick={handleNext}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '14px' }}
                  >
                    <span>{currentIdx + 1 === questions.length ? 'See Final Score' : 'Next Question'}</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Completed Results */
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 8px 24px rgba(245, 158, 11, 0.4)',
                }}
              >
                <Trophy size={36} />
              </div>

              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.6rem', color: '#FFF', margin: '0 0 6px 0' }}>
                TRIVIA SCORE: {score} / {questions.length}
              </h3>

              <p style={{ color: score === 3 ? '#4ADE80' : '#FBD7E1', fontWeight: 700, fontSize: '1.05rem', marginBottom: '20px' }}>
                {score === 3
                  ? '🎌 INCREDIBLE! You are a certified Elite Otaku!'
                  : score >= 2
                  ? '⚡ Great job! You know your anime lore very well!'
                  : '🔥 Good try! Come test your skills at CosCon live quiz!'}
              </p>

              <div
                style={{
                  background: 'rgba(211, 107, 143, 0.15)',
                  border: '1px dashed #D36B8F',
                  borderRadius: '16px',
                  padding: '20px',
                  marginBottom: '24px',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FBD7E1', fontWeight: 800, marginBottom: '4px' }}>
                  <Sparkles size={18} color="#FF7A00" />
                  <span>COSCON STAGE TRIVIA REMINDER:</span>
                </div>
                <div style={{ fontSize: '0.88rem', color: '#A7A1AA' }}>
                  The official stage quiz takes place both days at Sequel Toyota with prizes including authentic imported figures, manga collections, and trophies.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => onOpenTicketModal('ota')}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '12px' }}
                >
                  <span>Book Ticket (₹99)</span>
                </button>
                <button
                  onClick={handleReset}
                  className="btn btn-outline"
                  style={{ flex: 1, padding: '12px' }}
                >
                  <RotateCcw size={16} />
                  <span>Retry Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
