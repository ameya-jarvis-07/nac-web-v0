import React from 'react';
import { Cat, Award, ShieldAlert, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function CosplaySection({ onOpenTicketModal }) {
  const categories = [
    {
      title: 'Masterclass Champion',
      prize: '₹25,000 + Championship Trophy',
      desc: 'For experienced builders with custom crafted armor, advanced fabrication, lighting, and stage performance skits.',
    },
    {
      title: 'Solo Anime / Manga',
      prize: '₹12,000 + Medals',
      desc: 'Screen accuracy, character persona mimicry, and stage presence for individual anime, manga, and gaming cosplayers.',
    },
    {
      title: 'Duo / Group Skit',
      prize: '₹10,000 + Goodie Hampers',
      desc: 'Choreographed battle sequences, comedic skits, or emotional dialogues performed by pairs or teams.',
    },
    {
      title: 'Best Prop & Craftsmanship',
      prize: '₹5,000 + Merch Kit',
      desc: 'Judged purely on the technical precision of weaponry, wings, accessories, and intricate stitching.',
    },
  ];

  return (
    <section
      id="cosplay"
      style={{
        padding: '90px 0',
        backgroundColor: '#16151B',
        position: 'relative',
        borderTop: '1px solid rgba(247, 200, 216, 0.1)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <span className="badge-tag" style={{ marginBottom: '12px' }}>
            <Cat size={14} color="#D36B8F" />
            <span>Nagpur’s Grand Cosplay Runway</span>
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              color: '#FFF',
              margin: '0 0 14px 0',
            }}
          >
            COSPLAY CHAMPIONSHIP 2026
          </h2>
          <p style={{ color: '#A7A1AA', fontSize: '1.05rem', margin: 0 }}>
            Dress up as your favorite anime, gaming, or pop-culture icon. Over ₹50,000 in cash prizes, dedicated green rooms, and red-carpet photography sets!
          </p>
        </div>

        {/* Prize Pool Spotlight Card */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto 50px',
            padding: '36px',
            borderRadius: '24px',
            border: '2px solid rgba(211, 107, 143, 0.4)',
            background: 'linear-gradient(135deg, rgba(35, 27, 36, 0.95) 0%, rgba(20, 18, 24, 0.98) 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#FBD7E1', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Total Prize Pool
              </span>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: '#FF7A00', lineHeight: 1 }}>
                ₹50,000+ CASH & HAMPERS
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '0.72rem', color: '#A7A1AA' }}>RUNWAY DATE</div>
                <div style={{ fontWeight: 800, color: '#FFF' }}>Sunday, 22 Nov • 4:30 PM</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '0.72rem', color: '#A7A1AA' }}>REGISTRATION</div>
                <div style={{ fontWeight: 800, color: '#4ADE80' }}>Open to All Ticket Holders</div>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {categories.map((cat, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(20, 18, 24, 0.7)',
                  border: '1px solid rgba(247, 200, 216, 0.15)',
                  borderRadius: '16px',
                  padding: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FBD7E1', marginBottom: '8px' }}>
                  <Award size={18} color="#FF7A00" />
                  <h4 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 700 }}>{cat.title}</h4>
                </div>
                <div style={{ color: '#FF9E66', fontWeight: 800, fontSize: '0.95rem', marginBottom: '8px' }}>
                  {cat.prize}
                </div>
                <p style={{ color: '#A7A1AA', fontSize: '0.82rem', margin: 0, lineHeight: 1.5 }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cosplay Guidelines & Amenities */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Amenities */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={20} color="#D36B8F" />
              <span>Cosplayer Comfort & Amenities</span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Separate Air-Conditioned Green Rooms for Male & Female cosplayers',
                'Emergency Cosplay Repair Kit: Hot glue guns, safety pins, sewing threads & duct tape',
                'Complimentary water & hydration station in changing rooms',
                'Dedicated 360-degree Photo Booth with studio softbox lighting',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#D1CDD5' }}>
                  <CheckCircle2 size={16} color="#4ADE80" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Prop Rules */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert size={20} color="#FF7A00" />
              <span>Prop Weapons & Safety Policy</span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'All props must be made of foam (EVA), cardboard, 3D printed plastic, or lightweight wood.',
                'Real metal blades, knives, sharpened edges, and functioning projectile guns are strictly prohibited.',
                'Security desk at the gate will inspect and issue a Peace-Bond tag on all props.',
                'Respect all attendees: Cosplay is NOT consent. Always ask before taking photos!',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#D1CDD5' }}>
                  <CheckCircle2 size={16} color="#FF9E66" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA to get pass */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => onOpenTicketModal('ota')}
            className="btn btn-primary"
            style={{ padding: '14px 28px', fontSize: '1rem' }}
          >
            <span>Get Your Pass to Register for Cosplay (₹99)</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
