import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How do I claim the FREE ANIME MERCH mentioned on the flyer?',
      a: 'Simply purchase either the OTA Ticket (₹99) or BookMyShow Ticket (₹169). Present your booking confirmation QR code or SMS at the CosCon Registration & Merch Counter upon arrival at Sequel Toyota. You will receive official anime goodies including stickers, badges, or collectible prints while stocks last!',
    },
    {
      q: 'What is the difference between OTA Ticket (₹99) and BookMyShow Ticket (₹169)?',
      a: 'Both tickets grant access to all 7 event zones, stages, gaming competitions, and anime quiz sessions for the entire day. The BookMyShow VIP ticket includes priority fast-track entry queues, reserved front-row seating for the Cosplay Championship & J-Rock Concert, and an upgraded collectible holographic souvenir badge.',
    },
    {
      q: 'Is CosCon suitable for all age groups and families?',
      a: 'Yes, absolutely! The flyer explicitly welcomes ALL AGE GROUPS. CosCon is a family-friendly, inclusive celebration with gaming setups, cultural origami and calligraphy workshops, photo studios, and delicious Japanese food suitable for kids, teens, and adults alike. Children below 5 enter free when accompanied by a ticket-holding adult.',
    },
    {
      q: 'What are the rules for Cosplay props and weapon replicas?',
      a: 'Prop safety is our top priority. All costume swords, scythes, or guns must be made of soft materials such as EVA foam, lightweight wood, cardboard, or 3D printed resin. Real metal blades, sharpened points, and airsoft or pellet guns are strictly prohibited. Security will tag all inspected props at the entrance.',
    },
    {
      q: 'Can I re-enter the venue during the day?',
      a: 'Yes! Upon initial check-in, you will receive an official CosCon tamper-proof wristband allowing unlimited re-entry between 11:00 AM and 9:00 PM on the day your ticket is valid.',
    },
    {
      q: 'Is photography and videography permitted?',
      a: 'Yes! Personal smartphone photography and enthusiast DSLRs are warmly welcome. We only ask that you follow the universal cosplay golden rule: "Cosplay is not consent"—always ask politely before taking photos or videos of cosplayers and fellow attendees.',
    },
  ];

  return (
    <section
      id="faq"
      style={{
        padding: '90px 0',
        backgroundColor: '#121117',
        position: 'relative',
        borderTop: '1px solid rgba(247, 200, 216, 0.1)',
      }}
    >
      <div className="container" style={{ maxWidth: '880px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="badge-tag" style={{ marginBottom: '12px' }}>
            <HelpCircle size={14} color="#D36B8F" />
            <span>Got Questions?</span>
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#FFF',
              margin: '0 0 14px 0',
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p style={{ color: '#A7A1AA', fontSize: '1.05rem', margin: 0 }}>
            Everything you need to know before stepping into Sequel Toyota on 21-22 November 2026.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '20px 24px',
                  cursor: 'pointer',
                  borderColor: isOpen ? '#D36B8F' : 'rgba(247, 200, 216, 0.12)',
                }}
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <h4 style={{ fontSize: '1.08rem', color: isOpen ? '#FBD7E1' : '#FFF', margin: 0, fontWeight: 700 }}>
                    {faq.q}
                  </h4>
                  <div style={{ color: '#D36B8F', flexShrink: 0 }}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {isOpen && (
                  <p
                    style={{
                      margin: '14px 0 0 0',
                      color: '#D1CDD5',
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingTop: '14px',
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
