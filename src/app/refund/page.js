'use client';

export default function RefundPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-cream)', minHeight: '80vh', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="badge-maroon" style={{ marginBottom: '12px' }}>Legal Center</span>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-maroon-dark)', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Refund Policy</h1>
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
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>1. Flexible Cancellation Window</h3>
            <p style={{ fontSize: '0.95rem' }}>
              We understand that wedding arrangements and schedules are highly dynamic. Your 20% advance security deposit is stored safely inside our secure escrow database. If you cancel your vendor reservation up to **30 days before the scheduled event date**, you are entitled to a **100% full refund** with zero deduction fees.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>2. Cancellation Within 30 Days</h3>
            <p style={{ fontSize: '0.95rem' }}>
              If a booking cancellation is requested within 30 days of the scheduled wedding date, the 20% advance escrow deposit is released directly to the respective vendor. This compensation helps cover scheduling loss, as the vendor would have blocked out other client opportunities.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>3. Vendor No-Show Coverage</h3>
            <p style={{ fontSize: '0.95rem' }}>
              In the highly unlikely event that a verified partner fails to arrive or deliver their contracted wedding services, your complete advance deposit is refunded instantly. Additionally, our dedicated backup emergency squad will automatically match you with a replacement vendor in your area at no extra cost.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>4. Subscription Refunds</h3>
            <p style={{ fontSize: '0.95rem' }}>
              For wedding vendors subscribing to our Premium (₹1,499) or Featured (₹3,999) priority listing plans, subscriptions can be canceled at any time. Cancellations take effect at the end of the current billing cycle. Payouts for unused partial-month listings are non-refundable.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.3rem', marginBottom: '10px' }}>5. Requesting a Refund</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Refund requests can be filed in 1 tap through your booking history dashboard on the OneDestiny App, or by reaching out to our support staff at <a href="mailto:refunds@onedestiny.com" style={{ color: 'var(--color-maroon-primary)', fontWeight: '700' }}>refunds@onedestiny.com</a>. Verified refunds are cleared to your original payment card within 3-5 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
