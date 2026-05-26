'use client';

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-cream)', minHeight: '80vh', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="badge-maroon" style={{ marginBottom: '12px' }}>Legal Center</span>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-maroon-dark)', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Privacy Policy</h1>
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
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>1. Information We Collect</h3>
            <p style={{ fontSize: '0.95rem' }}>
              We collect information you provide directly to us when setting up an account, submitting support enquiries, or registering as a wedding vendor. This includes full names, contact email addresses, mobile numbers, event locations, estimated budget selections, and identity proofs for business verification.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>2. How We Protect Your Data</h3>
            <p style={{ fontSize: '0.95rem' }}>
              All client profiles, vendor credentials, and payment details are encrypted using Secure Socket Layer (SSL) protocols. Portfolio links and public information are accessible under directory listings, while internal PAN proofs and payment payout codes are heavily shielded from public domains.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>3. Payouts & Third-Party Gateways</h3>
            <p style={{ fontSize: '0.95rem' }}>
              OneDestiny transacts payments using certified, secure bank escrow portals. We do not store credit card credentials directly on our web servers. Transaction details are processed strictly in compliance with national financial and escrow laws.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>4. Cookies & Lead Discovery</h3>
            <p style={{ fontSize: '0.95rem' }}>
              We utilize cookies to remember your search preferences, save interactive calculations in your session, and trace AI consultant interactions. This helps customize your directory discovery experience during future visits.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>5. Contact Legal Desk</h3>
            <p style={{ fontSize: '0.95rem' }}>
              For queries relating to this policy or to request account deletion, reach out to our legal desk at <a href="mailto:legal@onedestiny.com" style={{ color: 'var(--color-maroon-primary)', fontWeight: '700' }}>legal@onedestiny.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
