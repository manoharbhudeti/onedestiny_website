'use client';

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-cream)', minHeight: '80vh' }}>
      {/* 1. Header Banner */}
      <section style={{
        padding: '80px 0',
        backgroundImage: 'linear-gradient(rgba(58, 6, 12, 0.8), rgba(58, 6, 12, 0.95)), url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge-gold" style={{ marginBottom: '16px' }}>Our Story</span>
          <h1 style={{
            fontSize: '3rem',
            color: 'var(--color-white)',
            marginBottom: '16px',
            fontFamily: 'var(--font-heading)'
          }}>
            About OneDestiny
          </h1>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', margin: '0 auto 20px auto' }}></div>
          <p style={{ color: 'var(--color-cream-dark)', fontSize: '1.15rem', lineHeight: '1.6' }}>
            We are redefining the wedding planning experience by connecting premium, verified vendors with couples to craft flawless, beautiful destinies.
          </p>
        </div>
      </section>

      {/* 2. Core Story & Mission */}
      <section className="section-padding" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge-maroon" style={{ marginBottom: '12px' }}>Why We Exist</span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--color-maroon-dark)', marginBottom: '16px' }}>
                Simplifying Luxury Weddings
              </h2>
              <p style={{ marginBottom: '20px' }}>
                Planning a wedding is one of life's most beautiful milestones, yet it often becomes overshadowed by complex negotiations, untrustworthy agreements, and double-booking stress.
              </p>
              <p style={{ marginBottom: '20px' }}>
                OneDestiny was founded with a singular purpose: to bring trust, transparency, and high-fidelity simplicity back to wedding booking. We carefully handpick local wedding pros, confirm real-time availability, and protect every deposit using secure escrow structures.
              </p>
              <blockquote style={{
                borderLeft: '4px solid var(--color-gold-primary)',
                padding: '0 0 0 20px',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: 'var(--color-maroon-primary)',
                margin: '30px 0 0 0'
              }}>
                "Crafting beautiful destinies, one seamless detail at a time."
              </blockquote>
            </div>

            <div className="glass-card-light" style={{
              padding: '40px',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              boxShadow: 'var(--shadow-dark)'
            }}>
              <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.5rem', marginBottom: '24px' }}>Our Core Pillars</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { title: 'Absolute Verification', desc: 'No fake profiles or exaggerated portfolios. We check and audit every vendor listing physically.' },
                  { title: 'Escrow Payout Protection', desc: 'We shield customer advances from fraud, and ensure partners get paid accurately upon successful delivery.' },
                  { title: 'Uncompromising Convenience', desc: 'Book verified caterers, photographers, and ritual leaders in under two taps with instant calendar locks.' }
                ].map((pillar) => (
                  <div key={pillar.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="var(--color-gold-primary)" style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '4px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <div>
                      <strong style={{ color: 'var(--color-maroon-dark)', fontSize: '1rem', display: 'block', marginBottom: '4px' }}>{pillar.title}</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-medium)' }}>{pillar.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
