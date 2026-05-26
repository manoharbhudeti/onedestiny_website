'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Categories', href: '/#categories' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Growth', href: '/#growth' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQs', href: '/#faqs' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'var(--transition-smooth)',
      backgroundColor: scrolled ? 'rgba(58, 6, 12, 0.92)' : 'rgba(58, 6, 12, 0.75)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)',
      padding: scrolled ? '12px 0' : '20px 0',
      boxShadow: scrolled ? 'var(--shadow-glass)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        {/* Elegant Logo */}
        <Link href="/" onClick={handleLinkClick} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="text-gold" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            OneDestiny
          </span>
          <span style={{
            width: '8px',
            height: '8px',
            backgroundColor: 'var(--color-gold-primary)',
            borderRadius: '50%',
            display: 'inline-block',
            boxShadow: '0 0 10px var(--color-gold-primary)'
          }}></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="desktop-only">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '28px', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: '500',
                      fontSize: '0.9rem',
                      color: isActive ? 'var(--color-gold-primary)' : 'var(--color-white)',
                      position: 'relative',
                      letterSpacing: '0.5px',
                      textTransform: 'capitalize',
                      padding: '6px 0'
                    }}
                    className="nav-hover-line"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Buttons - Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-only">
          <Link href="/register-vendor">
            <button className="btn btn-outline-gold" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>
              Become a Vendor
            </button>
          </Link>
          <a href="#download">
            <button className="btn btn-gold" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>
              Download App
            </button>
          </a>
        </div>

        {/* Burger Button - Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-gold-primary)'
          }}
          className="burger-btn"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '28px', height: '28px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '28px', height: '28px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation Drawer */}
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-maroon-dark)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
          boxShadow: 'var(--shadow-dark)',
          padding: '24px',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'var(--transition-smooth)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          zIndex: 999
        }} className="mobile-drawer">
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    color: 'var(--color-white)',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    display: 'block',
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <Link href="/register-vendor" onClick={handleLinkClick}>
              <button className="btn btn-outline-gold" style={{ width: '100%', padding: '12px' }}>
                Become a Vendor
              </button>
            </Link>
            <a href="#download" onClick={handleLinkClick}>
              <button className="btn btn-gold" style={{ width: '100%', padding: '12px' }}>
                Download App
              </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 991px) {
          .desktop-only {
            display: none !important;
          }
          .burger-btn {
            display: flex !important;
          }
        }
        @media (min-width: 992px) {
          .mobile-drawer {
            display: none !important;
          }
        }
        .nav-hover-line::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1.5px;
          bottom: 0;
          left: 50%;
          background-color: var(--color-gold-primary);
          transition: var(--transition-bounce);
          transform: translateX(-50%);
        }
        .nav-hover-line:hover::after {
          width: 100%;
        }
        .nav-hover-line:hover {
          color: var(--color-gold-primary) !important;
        }
      `}</style>
    </header>
  );
}
