'use client';

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-cream)', minHeight: '80vh', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="badge-maroon" style={{ marginBottom: '12px' }}>Legal Center</span>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-maroon-dark)', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Terms & Conditions</h1>
        <span style={{ fontSize: '0.85rem', color: '#999', display: 'block', marginBottom: '24px' }}>Last Updated: May 26, 2026</span>
        <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', marginBottom: '32px' }}></div>

        <div className="glass-card-light" style={{
          padding: '40px',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          boxShadow: 'var(--shadow-dark)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          lineHeight: '1.6'
        }}>
          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>1. Introduction & Acceptance</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Welcome to OneDestiny. By accessing our landing portals, booking application, and partner registration setups, you agree to comply with and be bound by these terms. If you disagree, you must cease using our software tools.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>2. Vendor Listing & Account Verification</h3>
            <p style={{ fontSize: '0.95rem' }}>
              All vendors applying for priority placement plans must present active identity certifications and authentic event portfolios. OneDestiny retains absolute authority to suspend listing visibility or ban partners discovered using plagiarized images, false pricing descriptions, or presenting double-booking conflicts.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>3. Reservation Payments & Escrow Payouts</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Couples lock specific vendor dates by depositing a standard 20% advance payout. The security deposit is held in a protected third-party escrow. Upon successful event completion, the funds are automatically disbursed to the vendor account in full.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>4. Content Ownership</h3>
            <p style={{ fontSize: '0.95rem' }}>
              All photography portfolios, studio profiles, and logo branding displayed on the directory belong to their respective creators. OneDestiny is granted a non-exclusive license to showcase these elements under marketing campaigns and directory search queries.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>5. Limitation of Liability</h3>
            <p style={{ fontSize: '0.95rem' }}>
              While OneDestiny conducts exhaustive, 4-step partner checks, we act as a secure facilitator. We are not responsible for direct schedule delays, equipment malfunctions, or disputes during wedding day events. In such cases, our refund protection and backup coordination squads will assist you.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
