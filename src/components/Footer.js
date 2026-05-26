'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--color-maroon-dark)',
      borderTop: '2px solid var(--color-gold-primary)',
      color: 'var(--color-white)',
      padding: '80px 0 40px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Golden Pattern overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 50% 90%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '60px',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="text-gold" style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                OneDestiny
              </span>
              <span style={{
                width: '6px',
                height: '6px',
                backgroundColor: 'var(--color-gold-primary)',
                borderRadius: '50%'
              }}></span>
            </Link>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              The ultimate wedding vendor booking platform. We connect couples with top-tier, trusted local wedding professionals to craft their perfect day.
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '5px' }}>
              {/* Instagram */}
              <a href="#" style={{ color: 'var(--color-gold-primary)', hover: { color: '#fff' } }} className="social-icon" aria-label="Follow us on Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Facebook */}
              <a href="#" style={{ color: 'var(--color-gold-primary)' }} className="social-icon" aria-label="Follow us on Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* Pinterest */}
              <a href="#" style={{ color: 'var(--color-gold-primary)' }} className="social-icon" aria-label="Follow us on Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
              </a>
              {/* Twitter */}
              <a href="#" style={{ color: 'var(--color-gold-primary)' }} className="social-icon" aria-label="Follow us on Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: 'var(--color-gold-primary)', fontSize: '1.1rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/#categories" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }} className="footer-link">Vendor Categories</Link></li>
              <li><Link href="/#how-it-works" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }} className="footer-link">How It Works</Link></li>
              <li><Link href="/#pricing" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }} className="footer-link">Subscription Plans</Link></li>
              <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }} className="footer-link">About Our Mission</Link></li>
              <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }} className="footer-link">Support & Contact</Link></li>
            </ul>
          </div>

          {/* Vendors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: 'var(--color-gold-primary)', fontSize: '1.1rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              For Vendors
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/register-vendor" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }} className="footer-link">Join as a Partner</Link></li>
              <li><Link href="/#growth" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }} className="footer-link">Vendor Growth Hub</Link></li>
              <li><Link href="/#pricing" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }} className="footer-link">Featured Placements</Link></li>
              <li><a href="mailto:vendor-support@onedestiny.com" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }} className="footer-link">Vendor Enquiries</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: 'var(--color-gold-primary)', fontSize: '1.1rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Get In Touch
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:support@onedestiny.com" className="footer-link">support@onedestiny.com</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+1 (800) 555-DESTINY</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Luxury Suites, DLF Phase 5, Gurugram, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Thick divider with design diamond */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          margin: '40px 0 30px 0'
        }}>
          <div style={{ flexGrow: 1, height: '1px', background: 'linear-gradient(to right, transparent, var(--color-gold-primary))' }}></div>
          <div style={{
            width: '12px',
            height: '12px',
            transform: 'rotate(45deg)',
            border: '2px solid var(--color-gold-primary)',
            backgroundColor: 'var(--color-maroon-dark)'
          }}></div>
          <div style={{ flexGrow: 1, height: '1px', background: 'linear-gradient(to left, transparent, var(--color-gold-primary))' }}></div>
        </div>

        {/* Lower Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          position: 'relative',
          zIndex: 1
        }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
            &copy; {currentYear} OneDestiny. All rights reserved. Crafting beautiful destinies, one wedding at a time.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }} className="footer-link">Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }} className="footer-link">Terms & Conditions</Link>
            <Link href="/refund" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }} className="footer-link">Refund Policy</Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer-link {
          transition: var(--transition-smooth);
        }
        .footer-link:hover {
          color: var(--color-gold-primary) !important;
          padding-left: 4px;
        }
        .social-icon {
          transition: var(--transition-bounce);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: rgba(255, 255, 255, 0.02);
        }
        .social-icon:hover {
          transform: scale(1.1) translateY(-2px);
          background: var(--color-gold-primary);
          color: var(--color-maroon-dark) !important;
          box-shadow: var(--shadow-gold);
        }
      `}</style>
    </footer>
  );
}
