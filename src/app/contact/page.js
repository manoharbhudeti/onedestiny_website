'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'couple',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields (Name, Email, and Message).');
      return;
    }
    setError('');
    setSubmitted(true);
    
    // Reset state after a brief demo delay or let success state stay visible
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', role: 'couple', date: '', message: '' });
    }, 4500);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-cream)', minHeight: '80vh' }}>
      {/* Header Banner */}
      <section style={{
        padding: '80px 0',
        backgroundImage: 'linear-gradient(rgba(58, 6, 12, 0.8), rgba(58, 6, 12, 0.95)), url("https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge-gold" style={{ marginBottom: '16px' }}>Support Center</span>
          <h1 style={{
            fontSize: '3rem',
            color: 'var(--color-white)',
            marginBottom: '16px',
            fontFamily: 'var(--font-heading)'
          }}>
            Contact Our Squad
          </h1>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', margin: '0 auto 20px auto' }}></div>
          <p style={{ color: 'var(--color-cream-dark)', fontSize: '1.15rem', lineHeight: '1.6' }}>
            Have a question about a reservation, vendor application, or escrow payout? We are here to support you 24/7.
          </p>
        </div>
      </section>

      {/* Main Form and details grid */}
      <section className="section-padding" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px'
          }}>
            {/* Info Cards Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div>
                <span className="badge-maroon" style={{ marginBottom: '12px' }}>Direct Support</span>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-maroon-dark)', marginBottom: '16px' }}>
                  Reach Out Instantly
                </h2>
                <p>
                  Fill out our priority inquiry form, and our dedicated wedding managers will review and respond to your email within 2 hours.
                </p>
              </div>

              {/* Direct Info list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    title: 'Customer Help Email',
                    detail: 'support@onedestiny.com',
                    icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  },
                  {
                    title: 'Wedding Partner Hotline',
                    detail: '+1 (800) 555-DESTINY',
                    icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.019a15.828 15.828 0 01-7.037-7.037l2.019-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                  },
                  {
                    title: 'Corporate Headquarters',
                    detail: 'Luxury Suites, DLF Phase 5, Gurugram, India',
                    icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                  }
                ].map((item) => (
                  <div key={item.title} className="glass-card-light" style={{
                    padding: '20px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    border: '1px solid rgba(212, 175, 55, 0.2)'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-gold-soft)',
                      color: 'var(--color-gold-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '18px', height: '18px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-maroon-dark)' }}>{item.title}</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-medium)' }}>{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Form Column */}
            <div className="glass-card-light" style={{
              padding: '40px',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              boxShadow: 'var(--shadow-dark)',
              position: 'relative'
            }}>
              {submitted ? (
                /* Success Animation Screen */
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  minHeight: '400px',
                  textAlign: 'center',
                  gap: '20px'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(76,175,80,0.4)',
                    animation: 'scaleUp 0.5s ease-out'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{ width: '32px', height: '32px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.75rem', color: 'var(--color-maroon-dark)' }}>Inquiry Received!</h3>
                  <p style={{ maxWidth: '350px' }}>
                    Thank you, <strong>{form.name}</strong>. Your support request has been logged. One of our destination managers will reach you within 2 hours.
                  </p>
                  <span style={{ fontSize: '0.75rem', color: '#999', marginTop: '10px' }}>
                    Demo: Auto-refreshing form in 5 seconds...
                  </span>
                </div>
              ) : (
                /* Form Display */
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.5rem', marginBottom: '20px' }}>Inquiry Details</h3>
                  
                  {error && (
                    <div style={{
                      backgroundColor: 'rgba(244, 67, 54, 0.1)',
                      border: '1px solid #f44336',
                      borderRadius: '8px',
                      padding: '12px',
                      fontSize: '0.85rem',
                      color: '#d32f2f',
                      marginBottom: '16px'
                    }}>
                      ⚠️ {error}
                    </div>
                  )}

                  <div className="input-group">
                    <label className="input-label">Full Name *</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="e.g. Riya Sen"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="mobile-stack">
                    <div className="input-group">
                      <label className="input-label">Email Address *</label>
                      <input
                        type="email"
                        className="input-field"
                        placeholder="e.g. riya@gmail.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Phone Number</label>
                      <input
                        type="tel"
                        className="input-field"
                        placeholder="e.g. +91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="mobile-stack">
                    <div className="input-group">
                      <label className="input-label">I am a...</label>
                      <select
                        className="input-field"
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        style={{ height: '50px' }}
                      >
                        <option value="couple">Bride / Groom</option>
                        <option value="vendor">Wedding Vendor</option>
                        <option value="planner">Wedding Planner</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label className="input-label">Date of Wedding</label>
                      <input
                        type="date"
                        className="input-field"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label className="input-label">How can we assist you? *</label>
                    <textarea
                      className="input-field textarea-field"
                      placeholder="Tell us about your wedding date, guest count, or help requests..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-maroon" style={{ width: '100%', marginTop: '10px' }}>
                    Send Priority Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes scaleUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @media (max-width: 576px) {
          .mobile-stack {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
