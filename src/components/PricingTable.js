'use client';

import Link from 'next/link';

export default function PricingTable() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '₹0',
      period: 'forever',
      desc: 'Perfect for local vendors getting started with digital bookings.',
      features: [
        'Standard profile directory listing',
        'Visible in basic category searches',
        'Email notifications for new leads',
        'Upload up to 5 portfolio photos',
        'Basic review collection tools'
      ],
      btnText: 'Join For Free',
      btnClass: 'btn-maroon',
      featured: false
    },
    {
      name: 'Premium Plan',
      price: '₹1,499',
      period: 'month',
      desc: 'Accelerate your client bookings with prime positioning and lead intelligence.',
      features: [
        'Priority directory placement',
        'Official "Verified Partner" badge',
        'Advanced analytics dashboard access',
        'Unlimited portfolio photo & video uploads',
        'Direct booking request manager',
        'Customer support chat priority'
      ],
      btnText: 'Go Premium',
      btnClass: 'btn-gold',
      featured: true
    },
    {
      name: 'Featured Partner',
      price: '₹3,999',
      period: 'month',
      desc: 'Ultimate brand visibility for established luxury wedding leaders.',
      features: [
        'Top banner slot in category searches',
        'Exclusive "Premium Featured" tag',
        'Instant SMS & WhatsApp lead notifications',
        '1-on-1 dedicated CRM account assistant',
        'Featured inclusion in newsletter campaigns',
        'Custom social media spotlight posts'
      ],
      btnText: 'Boost My Business',
      btnClass: 'btn-outline-gold',
      featured: false
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      width: '100%',
      alignItems: 'stretch'
    }}>
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="hover-lift"
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            border: plan.featured 
              ? '2px solid var(--color-gold-primary)' 
              : '1px solid var(--color-gray-light)',
            boxShadow: plan.featured ? 'var(--shadow-gold-hover)' : 'var(--shadow-dark)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            overflow: 'hidden'
          }}
        >
          {/* Featured Badge */}
          {plan.featured && (
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '-35px',
              backgroundColor: 'var(--color-gold-primary)',
              color: 'var(--color-maroon-dark)',
              padding: '6px 40px',
              transform: 'rotate(45deg)',
              fontSize: '0.7rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              Popular
            </div>
          )}

          {/* Plan Name & Price */}
          <div>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: plan.featured ? 'var(--color-gold-deep)' : 'var(--color-maroon-primary)',
              display: 'block',
              marginBottom: '12px'
            }}>
              {plan.name}
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: 'var(--color-maroon-dark)',
                fontFamily: 'var(--font-heading)'
              }}>
                {plan.price}
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-medium)' }}>
                /{plan.period}
              </span>
            </div>
            <p style={{
              fontSize: '0.88rem',
              color: 'var(--color-gray-medium)',
              lineHeight: '1.5',
              marginTop: '12px'
            }}>
              {plan.desc}
            </p>
          </div>

          <div style={{ height: '1px', backgroundColor: 'var(--color-gray-light)' }}></div>

          {/* Features List */}
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            flexGrow: 1
          }}>
            {plan.features.map((feature) => (
              <li key={feature} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                fontSize: '0.9rem',
                color: 'var(--color-gray-dark)',
                lineHeight: '1.4'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={plan.featured ? "var(--color-gold-primary)" : "var(--color-maroon-primary)"} style={{ width: '16px', height: '16px', flexShrink: 0, marginTop: '2px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Link */}
          <Link href="/register-vendor" style={{ width: '100%', marginTop: 'auto' }}>
            <button className={`btn ${plan.btnClass}`} style={{ width: '100%' }}>
              {plan.btnText}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
