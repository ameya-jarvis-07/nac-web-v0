import React, { useState } from 'react';
import CosplaySection from '../components/CosplaySection';
import { Cat, Award, Sparkles, CheckCircle2, ShieldCheck, Send, User, Upload } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CosplayPage({ onOpenTicketModal }) {
  const [formData, setFormData] = useState({
    name: '',
    cosplayName: '',
    character: '',
    anime: '',
    category: 'Solo Anime / Manga',
    email: '',
    phone: '',
  });

  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.character) return;

    confetti({
      particleCount: 90,
      spread: 70,
      colors: ['#A855F7', '#EC4899', '#FBD7E1', '#FF7A00'],
    });

    setRegistered(true);
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#1A1A1F' }}>
      {/* Top Banner */}
      <section
        style={{
          padding: '60px 0 30px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(168, 85, 247, 0.22) 0%, rgba(26, 26, 31, 0.98) 75%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(247, 200, 216, 0.1)',
        }}
      >
        <div className="container">
          <span className="badge-tag" style={{ marginBottom: '14px', borderColor: '#A855F7', color: '#D8B4FE' }}>
            <Cat size={14} color="#A855F7" />
            <span>Nagpur Cosplay Championship 2026</span>
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
            COSPLAY ARENA & RUNWAY REGISTRATION
          </h1>
          <p
            style={{
              color: '#A7A1AA',
              fontSize: '1.1rem',
              maxWidth: '820px',
              margin: '0 auto 24px',
            }}
          >
            Over ₹50,000 in cash prizes, red carpet photographers, professional AC green rooms, and Nagpur's grandest runway on Sunday, 22 Nov 2026!
          </p>
        </div>
      </section>

      {/* Embedded Cosplay Core Overview */}
      <CosplaySection onOpenTicketModal={onOpenTicketModal} />

      {/* Interactive Cosplayer Registration Form */}
      <section style={{ padding: '60px 0 90px', backgroundColor: '#141318' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              borderRadius: '24px',
              border: '2px solid rgba(168, 85, 247, 0.35)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <span className="badge-tag" style={{ background: 'rgba(168, 85, 247, 0.15)', borderColor: '#A855F7', color: '#C084FC', marginBottom: '10px' }}>
                <Sparkles size={14} />
                <span>Runway Contest Entry</span>
              </span>
              <h2 style={{ fontSize: '2.4rem', color: '#FFF', fontFamily: "'Bebas Neue', sans-serif", margin: '0 0 8px 0' }}>
                REGISTER AS A RUNWAY CONTESTANT
              </h2>
              <p style={{ color: '#A7A1AA', fontSize: '0.92rem', margin: 0 }}>
                Open to all attendees holding an OTA or BookMyShow ticket. Fill in your character information below to secure your runway queue number.
              </p>
            </div>

            {!registered ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#A7A1AA', marginBottom: '6px' }}>
                      YOUR REAL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanmay Joshi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(247, 200, 216, 0.2)',
                        color: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#A7A1AA', marginBottom: '6px' }}>
                      COSPLAYER / STAGE ALIAS
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ShadowKage / SakuraCos"
                      value={formData.cosplayName}
                      onChange={(e) => setFormData({ ...formData, cosplayName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(247, 200, 216, 0.2)',
                        color: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#A7A1AA', marginBottom: '6px' }}>
                      CHARACTER NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Roronoa Zoro / Gojo Satoru"
                      value={formData.character}
                      onChange={(e) => setFormData({ ...formData, character: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(247, 200, 216, 0.2)',
                        color: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#A7A1AA', marginBottom: '6px' }}>
                      ANIME / GAME FRANCHISE *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. One Piece / Jujutsu Kaisen / Genshin"
                      value={formData.anime}
                      onChange={(e) => setFormData({ ...formData, anime: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(247, 200, 216, 0.2)',
                        color: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#A7A1AA', marginBottom: '6px' }}>
                    CONTEST CATEGORY
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: '#1F1C25',
                      border: '1px solid rgba(247, 200, 216, 0.2)',
                      color: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Masterclass Champion">Masterclass Champion (Advanced Armor & Props)</option>
                    <option value="Solo Anime / Manga">Solo Anime / Manga (Screen accuracy & performance)</option>
                    <option value="Duo / Group Skit">Duo / Group Skit (Choreographed performance)</option>
                    <option value="Best Prop & Craftsmanship">Best Prop & Craftsmanship (Fabrication only)</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#A7A1AA', marginBottom: '6px' }}>
                      CONTACT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(247, 200, 216, 0.2)',
                        color: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#A7A1AA', marginBottom: '6px' }}>
                      WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(247, 200, 216, 0.2)',
                        color: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    padding: '16px',
                    fontSize: '1.05rem',
                    marginTop: '10px',
                  }}
                >
                  <Send size={18} />
                  <span>Submit Cosplay Registration</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#10B981',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', color: '#FFF', margin: '0 0 6px 0' }}>
                  REGISTRATION CONFIRMED!
                </h3>
                <p style={{ color: '#FBD7E1', fontSize: '0.95rem', marginBottom: '20px' }}>
                  Awesome! You are registered as <b>{formData.character}</b> ({formData.anime}) in the {formData.category} category.
                </p>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '16px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    color: '#A7A1AA',
                    marginBottom: '20px',
                  }}
                >
                  Please report to the Cosplay Green Room at Sequel Toyota on Sunday, 22 Nov at 2:30 PM for roll call and badge allocation.
                </div>
                <button
                  onClick={() => setRegistered(false)}
                  className="btn btn-outline"
                  style={{ padding: '10px 20px' }}
                >
                  <span>Register Another Cosplayer</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
