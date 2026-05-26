'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const list = [
    {
      type: 'couple',
      quote: "We booked our luxury venue, wedding photographer, and makeup artist through OneDestiny. The escrow secure payments gave us absolute peace of mind, and the coordination was incredibly seamless!",
      author: "Riya & Aman",
      role: "Bride & Groom",
      location: "Delhi NCR",
      rating: 5,
      bg: '#FAF5EF'
    },
    {
      type: 'vendor',
      quote: "Our booking inquiries doubled within 3 months of joining OneDestiny as a partner. The dashboard analytics makes it super simple to track leads, manage dates, and collect secure advance payouts!",
      author: "Rajat Sharma",
      role: "Founder, Raj Heritage Studios",
      location: "Premium Partner",
      rating: 5,
      bg: '#F5EFEB'
    },
    {
      type: 'couple',
      quote: "Highly secure, premium curated vendor listings, and extremely fast customer support. OneDestiny made planning our royal destination wedding in Udaipur a breeze. Highly recommended!",
      author: "Sneha & Karan",
      role: "Bride & Groom",
      location: "Mumbai",
      rating: 5,
      bg: '#FAF5EF'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % list.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [list.length]);

  return (
    <div style={{
      maxWidth: '850px',
      width: '100%',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Testimonial card container with transition */}
      <div style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        boxShadow: 'var(--shadow-dark)',
        padding: '50px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Large Decorative Quote icon */}
        <span style={{
          position: 'absolute',
          top: '20px',
          left: '30px',
          fontFamily: 'var(--font-heading)',
          fontSize: '8rem',
          color: 'rgba(212, 175, 55, 0.08)',
          lineHeight: '0.8',
          userSelect: 'none'
        }}>“</span>

        {/* Rating Stars */}
        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
          {[...Array(list[activeIndex].rating)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="var(--color-gold-primary)" viewBox="0 0 24 24" style={{ width: '22px', height: '22px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.195-.59.882-.59 1.077 0l2.03 6.24a1 1 0 00.95.69h6.562c.622 0 .88.802.378 1.196l-5.304 3.855a1 1 0 00-.36 1.197l2.03 6.24c.196.59-.475 1.078-.978.736l-5.304-3.855a1 1 0 00-1.176 0l-5.304 3.855c-.503.34-1.174-.146-.978-.736l2.03-6.24a1 1 0 00-.36-1.197l-5.304-3.855c-.502-.394-.244-1.196.378-1.196h6.562a1 1 0 00.95-.69l2.03-6.24z" />
            </svg>
          ))}
        </div>

        {/* Testimonial Quote text */}
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.45rem',
          fontStyle: 'italic',
          color: 'var(--color-maroon-dark)',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0',
          transition: 'var(--transition-smooth)'
        }}>
          "{list[activeIndex].quote}"
        </p>

        {/* Author Details with category indicator */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{
            fontSize: '1.1rem',
            fontWeight: '700',
            color: 'var(--color-maroon-primary)'
          }}>
            {list[activeIndex].author}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-medium)', fontWeight: '600' }}>
              {list[activeIndex].role}
            </span>
            <span style={{ color: 'var(--color-gold-primary)' }}>•</span>
            <span className="badge-gold" style={{ fontSize: '0.65rem', padding: '2px 10px' }}>
              {list[activeIndex].location}
            </span>
          </div>
        </div>
      </div>

      {/* Pagination bullets */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '24px'
      }}>
        {list.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{
              width: activeIndex === idx ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: activeIndex === idx ? 'var(--color-maroon-primary)' : 'var(--color-gray-light)',
              border: activeIndex === idx ? '1px solid var(--color-gold-primary)' : 'none',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)'
            }}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
