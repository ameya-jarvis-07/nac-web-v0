import React, { useState } from 'react';
import { X, Check, Gift, Sparkles, Download, Share2, Ticket, QrCode, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TicketModal({ isOpen, onClose, defaultTier = 'ota' }) {
  const [tier, setTier] = useState(defaultTier);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [passData, setPassData] = useState(null);

  if (!isOpen) return null;

  const pricePerTicket = tier === 'ota' ? 99 : 169;
  const totalPrice = pricePerTicket * quantity;

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F7C8D8', '#D36B8F', '#FF7A00', '#FBD7E1'],
    });

    const bookingId = `NAC-${tier.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;

    setPassData({
      id: bookingId,
      name,
      email,
      phone: phone || '+91 98765 43210',
      tier: tier === 'ota' ? 'OTA FESTIVAL PASS' : 'BOOKMYSHOW VIP PASS',
      tierType: tier,
      quantity,
      totalPrice,
      date: '21 - 22 NOV 2026',
      venue: 'Sequel Toyota, Nagpur',
      merchVoucher: `FREE-MERCH-${Math.floor(1000 + Math.random() * 9000)}`,
    });

    setIsSuccess(true);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([
      `===================================================\n` +
      `COSCON X OTA TOKYO 2026 - OFFICIAL ENTRY PASS\n` +
      `Organized by Nagpur Anime Club (@nagpuranimeclub)\n` +
      `===================================================\n` +
      `Booking ID: ${passData.id}\n` +
      `Primary Attendee: ${passData.name}\n` +
      `Contact: ${passData.email} | ${passData.phone}\n` +
      `Ticket Tier: ${passData.tier}\n` +
      `Quantity: ${passData.quantity} Pass(es)\n` +
      `Amount Paid: INR ${passData.totalPrice}\n` +
      `Date & Time: 21 - 22 Nov 2026, 11:00 AM Onwards\n` +
      `Venue: Sequel Toyota, Great Nag Road, Nagpur\n` +
      `---------------------------------------------------\n` +
      `★ SPECIAL PROMOTION VOUCHER ★\n` +
      `Free Anime Merch Claim Code: ${passData.merchVoucher}\n` +
      `Show this text or QR at the gate to claim your gift pack!\n` +
      `===================================================`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `CosCon-Nagpur-Pass-${passData.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 8, 12, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: isSuccess ? '520px' : '560px',
          background: 'linear-gradient(135deg, rgba(28, 25, 33, 0.98) 0%, rgba(18, 16, 22, 0.99) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(211, 107, 143, 0.4)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(211, 107, 143, 0.2)',
          padding: '32px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#A7A1AA',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF')}
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="badge-tag" style={{ background: 'rgba(255, 94, 54, 0.15)', borderColor: '#FF7A00', color: '#FFA07A' }}>
                Nagpur Anime Club Official
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2.4rem',
                color: '#FFF',
                letterSpacing: '0.04em',
                margin: '0 0 6px 0',
              }}
            >
              BOOK YOUR COSCON TICKET
            </h3>

            <p style={{ color: '#FBD7E1', fontSize: '0.9rem', marginBottom: '24px' }}>
              Select your preferred tier and claim instant verification + <b>FREE Anime Merch</b> on event check-in!
            </p>

            {/* Tier Selector */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <button
                type="button"
                onClick={() => setTier('ota')}
                style={{
                  padding: '16px',
                  borderRadius: '16px',
                  background: tier === 'ota' ? 'rgba(255, 94, 54, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  border: tier === 'ota' ? '2px solid #FF7A00' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFF',
                  textAlign: 'left',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#FF7A00', fontWeight: 700, textTransform: 'uppercase' }}>
                  DIRECT PASS
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', margin: '4px 0' }}>OTA Ticket</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#FF9E66', lineHeight: 1 }}>
                  ₹99 <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-body)' }}>each</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setTier('bms')}
                style={{
                  padding: '16px',
                  borderRadius: '16px',
                  background: tier === 'bms' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  border: tier === 'bms' ? '2px solid #EC4899' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFF',
                  textAlign: 'left',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#EC4899', fontWeight: 700, textTransform: 'uppercase' }}>
                  VIP EXPRESS
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', margin: '4px 0' }}>BookMyShow</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#F472B6', lineHeight: 1 }}>
                  ₹169 <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-body)' }}>each</span>
                </div>
              </button>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#A7A1AA', marginBottom: '6px' }}>
                  NUMBER OF ATTENDEES
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setQuantity(num)}
                      style={{
                        flex: 1,
                        padding: '10px 0',
                        borderRadius: '10px',
                        background: quantity === num ? '#D36B8F' : 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid ' + (quantity === num ? '#D36B8F' : 'rgba(255, 255, 255, 0.1)'),
                        color: '#FFF',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#A7A1AA', marginBottom: '6px' }}>
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma / Anime Fan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#A7A1AA', marginBottom: '6px' }}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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

              {/* Total Summary */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(211, 107, 143, 0.3)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.82rem', color: '#A7A1AA' }}>Total to Pay ({quantity} pass)</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF' }}>₹{totalPrice}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF7A00', fontSize: '0.8rem', fontWeight: 700 }}>
                  <Gift size={16} />
                  <span>Includes {quantity}x Free Merch Pack</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  padding: '16px',
                  fontSize: '1.1rem',
                  marginTop: '6px',
                }}
              >
                <span>Confirm & Generate E-Pass</span>
                <Sparkles size={18} />
              </button>
            </form>
          </div>
        ) : (
          /* Success Verified E-Ticket Display */
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)',
              }}
            >
              <Check size={32} />
            </div>

            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2.4rem',
                color: '#FFF',
                letterSpacing: '0.04em',
                margin: '0 0 4px 0',
              }}
            >
              TICKET CONFIRMED!
            </h3>

            <p style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.92rem', marginBottom: '20px' }}>
              Your CosCon pass is ready. Show this at Sequel Toyota registration desk.
            </p>

            {/* E-Pass Card Preview */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                color: '#1A1A1F',
                padding: '24px',
                textAlign: 'left',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                marginBottom: '24px',
                position: 'relative',
              }}
            >
              {/* Top Pass Brand with Official Logo */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed #CCC', paddingBottom: '14px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src="/nac-logo.png"
                    alt="NAC Logo"
                    style={{ width: '42px', height: '42px', objectFit: 'contain' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#D36B8F', textTransform: 'uppercase' }}>
                      Nagpur Anime Club Official Pass
                    </div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#1A1A1F', lineHeight: 1 }}>
                      COSCON X OTA TOKYO 2026
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: passData.tierType === 'ota' ? '#FF6633' : '#BE185D',
                    color: '#FFF',
                    fontWeight: 800,
                    fontSize: '0.72rem',
                    padding: '4px 10px',
                    borderRadius: '6px',
                  }}
                >
                  {passData.tierType === 'ota' ? 'OTA PASS' : 'VIP PASS'}
                </div>
              </div>

              {/* Pass details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#666', fontWeight: 600 }}>ATTENDEE</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1A1A1F' }}>{passData.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#666', fontWeight: 600 }}>PASS ID</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D36B8F', fontFamily: 'monospace' }}>
                    {passData.id}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#666', fontWeight: 600 }}>DATE & TIME</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1A1A1F' }}>21-22 NOV 2026 • 11:00 AM</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#666', fontWeight: 600 }}>VENUE</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1A1A1F' }}>Sequel Toyota, Nagpur</div>
                </div>
              </div>

              {/* Free Merch Claim Section on Pass */}
              <div
                style={{
                  background: '#FFF3E0',
                  border: '1px solid #FFB74D',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Gift size={20} color="#F57C00" />
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#E65100' }}>
                    FREE ANIME MERCH VOUCHER
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#555' }}>
                    Voucher: <b>{passData.merchVoucher}</b> (Claim at gate)
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handleDownload}
                className="btn btn-primary"
                style={{ flex: 1, padding: '12px 18px' }}
              >
                <Download size={18} />
                <span>Download Pass</span>
              </button>

              <button
                onClick={onClose}
                className="btn btn-outline"
                style={{ flex: 1, padding: '12px 18px' }}
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
