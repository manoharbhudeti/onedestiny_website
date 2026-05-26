'use client';

import { useState } from 'react';

export default function AppScreenshots() {
  const [activeScreen, setActiveScreen] = useState('analytics');

  const screens = [
    { id: 'home', label: 'Homepage' },
    { id: 'profile', label: 'Vendor Profile' },
    { id: 'booking', label: 'Booking App' },
    { id: 'analytics', label: 'Analytics Panel' }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px',
      width: '100%'
    }}>
      {/* Tab selectors with gold and maroon borders */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '12px',
        maxWidth: '600px'
      }}>
        {screens.map((screen) => (
          <button
            key={screen.id}
            onClick={() => setActiveScreen(screen.id)}
            className="btn"
            style={{
              padding: '10px 24px',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-full)',
              background: activeScreen === screen.id 
                ? 'linear-gradient(135deg, var(--color-maroon-primary) 0%, var(--color-maroon-dark) 100%)' 
                : 'var(--color-white)',
              color: activeScreen === screen.id ? 'var(--color-white)' : 'var(--color-maroon-dark)',
              border: activeScreen === screen.id 
                ? '1px solid var(--color-gold-primary)' 
                : '1px solid var(--color-gray-light)',
              boxShadow: activeScreen === screen.id ? 'var(--shadow-gold)' : 'none',
              transform: activeScreen === screen.id ? 'translateY(-2px)' : 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {screen.label}
          </button>
        ))}
      </div>

      {/* Simulator Device Frame */}
      <div style={{ position: 'relative' }}>
        {/* Glow behind the phone */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '280px',
          height: '560px',
          background: 'radial-gradient(circle, var(--color-gold-glow) 0%, transparent 70%)',
          filter: 'blur(30px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="phone-frame" style={{ zIndex: 1 }}>
          <div className="phone-notch"></div>
          
          <div className="phone-screen">
            {/* Top Status Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.75rem',
              fontWeight: '600',
              color: activeScreen === 'analytics' ? '#999' : 'rgba(255, 255, 255, 0.8)',
              backgroundColor: activeScreen === 'analytics' ? '#ffffff' : 'var(--color-maroon-dark)',
              padding: '14px 4px 6px 4px',
              marginTop: '-16px',
              marginLeft: '-16px',
              marginRight: '-16px',
              paddingLeft: '16px',
              paddingRight: '16px',
              zIndex: 99
            }}>
              <span>9:41</span>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.17 19.58 10.53 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <span style={{ fontSize: '0.65rem' }}>100%</span>
              </div>
            </div>

            {/* SCREEN 1: HOMEPAGE SCREEN */}
            {activeScreen === 'home' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', pt: '10px' }}>
                {/* Brand Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#888', display: 'block' }}>Welcome to</span>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-maroon-dark)' }}>OneDestiny</span>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-gold-soft)', display: 'flex', alignItems: 'center', justify: 'center', border: '1px solid var(--color-gold-primary)' }}>
                    <span style={{ color: 'var(--color-gold-deep)', fontWeight: '700', fontSize: '0.8rem' }}>OD</span>
                  </div>
                </div>

                {/* Simulated search bar */}
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Search wedding photographers..."
                    disabled
                    style={{
                      width: '100%',
                      padding: '8px 12px 8px 32px',
                      borderRadius: '20px',
                      border: '1px solid #ddd',
                      fontSize: '0.8rem',
                      backgroundColor: '#fff'
                    }}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '14px', height: '14px', position: 'absolute', left: '12px', top: '11px', color: '#999' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                  </svg>
                </div>

                {/* Quick categories horizontal scrolling list */}
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-maroon-dark)', marginBottom: '8px', display: 'block' }}>Categories</span>
                  <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                    {['Photography', 'Makeup', 'Catering', 'Venues'].map((cat, idx) => (
                      <span key={cat} style={{
                        padding: '5px 12px',
                        borderRadius: '12px',
                        backgroundColor: idx === 0 ? 'var(--color-maroon-primary)' : '#fff',
                        color: idx === 0 ? '#fff' : '#555',
                        border: idx === 0 ? 'none' : '1px solid #eee',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        whiteSpace: 'nowrap'
                      }}>{cat}</span>
                    ))}
                  </div>
                </div>

                {/* Featured Vendor Card */}
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-maroon-dark)', marginBottom: '8px', display: 'block' }}>Featured Vendors</span>
                  <div className="mini-card" style={{ padding: '0', overflow: 'hidden' }}>
                    <div style={{
                      height: '100px',
                      backgroundColor: 'var(--color-maroon-medium)',
                      backgroundSize: 'cover',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '8px',
                      color: '#fff',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(58,6,12,0.85)',
                        border: '1px solid var(--color-gold-primary)',
                        borderRadius: '10px',
                        padding: '2px 8px',
                        fontSize: '0.6rem',
                        color: 'var(--color-gold-primary)',
                        fontWeight: '700'
                      }}>VERIFIED</div>
                      <div>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Raj Heritage Studios</span>
                        <span style={{ fontSize: '0.65rem', color: 'var(--color-gold-light)', display: 'block' }}>Photography & Cinematography</span>
                      </div>
                    </div>
                    <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#333' }}>⭐ 4.9 (124 reviews)</span>
                        <span style={{ fontSize: '0.65rem', color: '#888', display: 'block' }}>Delhi NCR • ₹1.5L / Day</span>
                      </div>
                      <button style={{
                        padding: '6px 12px',
                        backgroundColor: 'var(--color-gold-primary)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'var(--color-maroon-dark)',
                        fontWeight: '700',
                        fontSize: '0.65rem',
                        cursor: 'pointer'
                      }}>View</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 2: VENDOR PROFILE */}
            {activeScreen === 'profile' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                {/* Back Button and action */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                  <span style={{ fontSize: '1.2rem', color: 'var(--color-maroon-dark)', fontWeight: '700' }}>← Studio Detail</span>
                  <span style={{ fontSize: '1.2rem', color: 'var(--color-gold-primary)' }}>♥</span>
                </div>

                {/* Profile Cover Photo banner */}
                <div style={{
                  height: '110px',
                  backgroundColor: 'var(--color-maroon-primary)',
                  borderRadius: '16px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  border: '1px solid var(--color-gold-soft)'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    backgroundColor: 'var(--color-gold-primary)',
                    color: 'var(--color-maroon-dark)',
                    padding: '2px 8px',
                    borderRadius: '8px',
                    fontSize: '0.6rem',
                    fontWeight: '700'
                  }}>PRO PARTNER</div>
                  <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', zIndex: 1 }}>Sabyasachi Decorators</span>
                </div>

                {/* Profile Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div className="mini-card" style={{ padding: '8px 4px', margin: 0 }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-maroon-dark)', display: 'block' }}>4.8 ★</span>
                    <span style={{ fontSize: '0.6rem', color: '#999' }}>98 Ratings</span>
                  </div>
                  <div className="mini-card" style={{ padding: '8px 4px', margin: 0 }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-maroon-dark)', display: 'block' }}>150+</span>
                    <span style={{ fontSize: '0.6rem', color: '#999' }}>Weddings</span>
                  </div>
                  <div className="mini-card" style={{ padding: '8px 4px', margin: 0 }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-maroon-dark)', display: 'block' }}>Verified</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--color-gold-deep)', fontWeight: '600' }}>Guaranteed</span>
                  </div>
                </div>

                {/* About and Pricing */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-maroon-dark)' }}>About Vendor</span>
                  <p style={{ fontSize: '0.7rem', color: '#666', margin: 0, lineHeight: '1.4' }}>
                    Sabyasachi Decorators provides luxury wedding arrangements, classic floral designs, and premium mandap setups with exquisite royal motifs.
                  </p>
                </div>

                <div className="mini-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', marginTop: 'auto' }}>
                  <div>
                    <span style={{ fontSize: '0.6rem', color: '#999', display: 'block' }}>Starting Package</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--color-maroon-dark)' }}>₹3,50,000</span>
                  </div>
                  <button style={{
                    padding: '8px 18px',
                    backgroundColor: 'var(--color-maroon-primary)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '0.75rem',
                    cursor: 'pointer'
                  }}>Book Now</button>
                </div>
              </div>
            )}

            {/* SCREEN 3: BOOKING SCREEN */}
            {activeScreen === 'booking' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>
                <div style={{ marginTop: '10px' }}>
                  <span style={{ fontSize: '0.7rem', color: '#999', display: 'block' }}>Direct Booking</span>
                  <span style={{ fontSize: '1.1rem', color: 'var(--color-maroon-dark)', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>Secure Reservation</span>
                </div>

                {/* Step form simulator */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--color-maroon-dark)', display: 'block', marginBottom: '4px' }}>SELECT DATE</label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      gap: '4px'
                    }}>
                      {['24 Oct', '25 Oct', '26 Oct', '27 Oct', '28 Oct'].map((date, idx) => (
                        <div key={date} style={{
                          padding: '6px 2px',
                          border: idx === 1 ? '1px solid var(--color-gold-primary)' : '1px solid #eee',
                          backgroundColor: idx === 1 ? 'var(--color-maroon-dark)' : '#fff',
                          color: idx === 1 ? 'var(--color-gold-primary)' : '#555',
                          borderRadius: '8px',
                          textAlign: 'center',
                          fontSize: '0.6rem',
                          fontWeight: '600'
                        }}>
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--color-maroon-dark)', display: 'block', marginBottom: '4px' }}>CHOOSE SERVICE PACKAGE</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {[
                        { title: 'Standard Photography', desc: '1 Day coverage, 1 lead photographer', price: '₹75,000' },
                        { title: 'Premium Cinema Pack', desc: '2 Days coverage, cinematic video, albums', price: '₹1,50,000' }
                      ].map((pkg, idx) => (
                        <div key={pkg.title} style={{
                          padding: '8px',
                          border: idx === 1 ? '1px solid var(--color-gold-primary)' : '1px solid #eee',
                          backgroundColor: idx === 1 ? 'rgba(212,175,55,0.05)' : '#fff',
                          borderRadius: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div>
                            <span style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--color-maroon-dark)', display: 'block' }}>{pkg.title}</span>
                            <span style={{ fontSize: '0.55rem', color: '#888', display: 'block' }}>{pkg.desc}</span>
                          </div>
                          <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-maroon-dark)' }}>{pkg.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mini-card" style={{ padding: '10px', backgroundColor: '#fcfcfc', borderStyle: 'dashed' }}>
                    <span style={{ fontSize: '0.6rem', color: '#999', display: 'block' }}>Payment Terms</span>
                    <span style={{ fontSize: '0.65rem', color: '#333', fontWeight: '600', display: 'block' }}>• Pay 20% advance (₹30,000) to secure booking.</span>
                    <span style={{ fontSize: '0.65rem', color: '#333', fontWeight: '600', display: 'block' }}>• 100% Refundable up to 30 days before event.</span>
                  </div>
                </div>

                <button style={{
                  width: '100%',
                  padding: '10px',
                  background: 'linear-gradient(135deg, var(--color-maroon-primary) 0%, var(--color-maroon-dark) 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '20px',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  boxShadow: 'var(--shadow-dark)',
                  marginTop: 'auto',
                  cursor: 'pointer'
                }}>Pay Advance & Book</button>
              </div>
            )}

            {/* SCREEN 4: ANALYTICS PANEL (HIGH-FIDELITY RECREATION OF USER SCREENSHOT) */}
            {activeScreen === 'analytics' && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#ffffff', color: '#000000', margin: '-16px', padding: '16px', pt: '32px' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#000', fontFamily: 'sans-serif', marginBottom: '14px', display: 'block' }}>Analytics</span>

                {/* Section 1: Monthly Revenue Chart */}
                <div style={{
                  border: '1px solid #f2f2f2',
                  borderRadius: '16px',
                  padding: '14px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.02)',
                  marginBottom: '14px'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#000', fontFamily: 'sans-serif', display: 'block', marginBottom: '16px' }}>Monthly Revenue</span>
                  
                  {/* Bar Chart Container */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    height: '80px',
                    paddingBottom: '4px',
                    borderBottom: '1px solid #eaeaea'
                  }}>
                    {[
                      { month: 'Oct', height: '40%' },
                      { month: 'Nov', height: '25%' },
                      { month: 'Dec', height: '55%' },
                      { month: 'Jan', height: '62%' },
                      { month: 'Feb', height: '62%' },
                      { month: 'Mar', height: '95%' },
                      { month: 'Apr', height: '50%' }
                    ].map((item) => (
                      <div key={item.month} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '10%'
                      }}>
                        <div style={{
                          width: '100%',
                          height: '65px',
                          display: 'flex',
                          alignItems: 'flex-end'
                        }}>
                          <div style={{
                            width: '100%',
                            height: item.height,
                            backgroundColor: '#c5b3e6',
                            borderRadius: '4px'
                          }}></div>
                        </div>
                        <span style={{ fontSize: '0.55rem', color: '#888', marginTop: '6px', fontWeight: '600' }}>{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2: Lead Conversion Funnel */}
                <div style={{
                  border: '1px solid #f2f2f2',
                  borderRadius: '16px',
                  padding: '14px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.02)',
                  marginBottom: '14px'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#000', display: 'block', marginBottom: '14px' }}>Lead Conversion Funnel</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { label: 'New Leads', count: '45', width: '100%' },
                      { label: 'Contacted', count: '18', width: '70%' },
                      { label: 'Negotiation', count: '12', width: '50%' },
                      { label: 'Won', count: '10', width: '38%' }
                    ].map((funnel) => (
                      <div key={funnel.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                        <div style={{ flexGrow: 1, backgroundColor: '#f2edf8', borderRadius: '8px', height: '24px', position: 'relative', overflow: 'hidden', width: '75%' }}>
                          <div style={{
                            height: '100%',
                            backgroundColor: '#c5b3e6',
                            width: funnel.width,
                            borderRadius: '8px',
                            transition: 'var(--transition-smooth)'
                          }}></div>
                          <span style={{
                            position: 'absolute',
                            left: '8px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontSize: '0.6rem',
                            fontWeight: '700',
                            color: '#000'
                          }}>{funnel.label}</span>
                        </div>
                        <span style={{ fontSize: '0.65rem', fontWeight: '700', color: '#555', width: '15%', textAlign: 'right' }}>{funnel.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Top Services */}
                <div style={{
                  border: '1px solid #f2f2f2',
                  borderRadius: '16px',
                  padding: '14px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.02)',
                  marginBottom: '14px'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#000', display: 'block', marginBottom: '10px' }}>Top Services</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { name: 'Wedding Photography', bookings: '23 Bookings', val: '₹42.0L' },
                      { name: 'Pre-Wedding Shoot', bookings: '15 Bookings', val: '₹7.8L' },
                      { name: 'Videography', bookings: '12 Bookings', val: '₹20.0L' },
                      { name: 'Album Design', bookings: '33 Bookings', val: '₹5.5L' }
                    ].map((srv) => (
                      <div key={srv.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#000', display: 'block' }}>{srv.name}</span>
                          <span style={{ fontSize: '0.55rem', color: '#999', display: 'block' }}>{srv.bookings}</span>
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#000' }}>{srv.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 4: Booking Trends Grid */}
                <div style={{
                  border: '1px solid #f2f2f2',
                  borderRadius: '16px',
                  padding: '14px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.02)',
                  marginBottom: '60px' // spacing to not hide behind bottom nav
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#000', display: 'block', marginBottom: '10px' }}>Booking Trends</span>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px'
                  }}>
                    {[
                      { num: '42', desc: 'This Month' },
                      { num: '78%', desc: 'Conversion Rate' },
                      { num: '₹1.2L', desc: 'Avg. ticket size' },
                      { num: '4.8★', desc: 'Avg. rating' }
                    ].map((trend) => (
                      <div key={trend.desc} style={{
                        backgroundColor: '#f6f2fc',
                        borderRadius: '10px',
                        padding: '10px',
                        textAlign: 'center'
                      }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: '800', color: '#000', display: 'block', marginBottom: '2px' }}>{trend.num}</span>
                        <span style={{ fontSize: '0.55rem', color: '#888', display: 'block', fontWeight: '600' }}>{trend.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom App Navigation Bar (Sticker Fixed style) */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '56px',
                  backgroundColor: '#ffffff',
                  borderTop: '1px solid #eaeaea',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  padding: '0 10px',
                  zIndex: 100
                }}>
                  {[
                    { label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                    { label: 'Leads', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                    { label: 'Calendar', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                    { label: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zm9-10v12a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2z', active: true },
                    { label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
                  ].map((tab) => (
                    <div key={tab.label} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                      gap: '2px'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke={tab.active ? '#9575cd' : '#999'} style={{ width: '18px', height: '18px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                      </svg>
                      <span style={{
                        fontSize: '0.55rem',
                        fontWeight: '700',
                        color: tab.active ? '#9575cd' : '#999'
                      }}>{tab.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
