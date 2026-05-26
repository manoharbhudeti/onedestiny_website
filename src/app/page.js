'use client';

import Link from 'next/link';
import CategoryGrid from '@/components/CategoryGrid';
import AppScreenshots from '@/components/AppScreenshots';
import BudgetCalculator from '@/components/BudgetCalculator';
import RecommendationAI from '@/components/RecommendationAI';
import Testimonials from '@/components/Testimonials';
import PricingTable from '@/components/PricingTable';

export default function Home() {
  const whyUs = [
    { title: 'Verified Wedding Professionals', desc: 'Every photographer, venue, and makeup artist undergoes a stringent 4-step background check and portfolio verification before listing.', icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' },
    { title: 'Secure Escrow Payments', desc: 'Your money is safe. Pay a standard 20% security deposit to lock the date, with the balance disbursed only after successful delivery of the services.', icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 00-2.25 2.25z' },
    { title: 'Frictionless Booking Guarantee', desc: 'No back-and-forth phone negotiations. View clear starting prices, custom service packages, real-time availability calendar, and book in 2 taps.', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z' },
    { title: 'Local Expertise & Planners', desc: 'Access highly rated pandits, decorators, caterers, and choreographers rooted in your city’s traditions and wedding locales.', icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' },
    { title: '24/7 Dedicated Support', desc: 'Our customer success squad is always on standby to manage emergency schedule shifts, vendor backups, or quick refunds.', icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.023 7.478 7.478 0 01-2.735-2.67C2.261 14.996 2 13.565 2 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z' }
  ];

  const faqs = [
    { q: "How do I browse and book a vendor through OneDestiny?", a: "Simply search by location or category (e.g., Delhi, Photography) or consult our destiny AI assistant to find curated recommendations. Compare real portfolios, pricing details, and reviews. Click 'Book Now', select your packages/dates, and pay a secure 20% security deposit to lock the date instantly." },
    { q: "How can vendors register and verify their accounts?", a: "Vendors can join by clicking the 'Become a Vendor' button and filling out the registration form. Once signed up, our quality assurance team conducts a 4-step check: verifying business licenses, reviewing past wedding portfolios, auditing customer feedback, and scheduling a call. Approved partners receive a 'Verified Badge'." },
    { q: "What is your booking cancellation and refund policy?", a: "We believe in client flexibility. Your 20% security deposit is kept in a secure escrow. If you cancel your reservation up to 30 days before the wedding event, you will receive a 100% full refund immediately. Within 30 days of the wedding, the deposit is disbursed to the vendor to cover booking loss." },
    { q: "How do subscription packages work for wedding vendors?", a: "Listing a basic profile is 100% free! Vendors looking to grow can subscribe to our 'Premium Plan' (₹1,499/mo) which grants priority listing placements, verified badges, and lead analytics dashboards. Top-tier vendors can join our 'Featured Partner' tier (₹3,999/mo) for top banner exposure and custom CRM support." },
    { q: "How is vendor availability guaranteed during busy seasons?", a: "OneDestiny features a real-time calendar syncing mechanism. Once a vendor is booked on a specific date, that slot automatically closes on our platform across all client requests, ensuring zero double-bookings or reservation overlaps." }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* 1. HERO SECTION */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        color: 'var(--color-white)',
        backgroundImage: 'linear-gradient(rgba(58, 6, 12, 0.75), rgba(58, 6, 12, 0.85)), url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden'
      }} id="hero">
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px',
          padding: '60px 24px',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '850px'
        }}>
          <div>
            <span className="badge-gold" style={{ marginBottom: '16px', display: 'inline-block' }}>
              ✦ Luxury Wedding Vendor Network ✦
            </span>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--color-white)',
              marginBottom: '20px',
              textShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
              lineHeight: '1.15'
            }}>
              Craft Your Dream Wedding with <span className="text-gold">Verified Pros</span>
            </h1>
            <p style={{
              color: 'var(--color-cream-dark)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.6',
              marginBottom: '40px',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
              Connect and book top-tier wedding photographers, elite makeup artists, royal catering services, and premium venues. Experience stress-free bookings protected by secure escrow payment guarantees.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#download">
                <button className="btn btn-gold">Download App</button>
              </a>
              <Link href="/register-vendor">
                <button className="btn btn-outline-white">Become a Vendor</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal border transition separator */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40px',
          backgroundColor: 'var(--color-cream)',
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
        }}></div>
      </section>

      {/* 2. VENDOR CATEGORIES */}
      <section id="categories" className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="badge-maroon" style={{ marginBottom: '12px' }}>Directory Services</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-maroon-dark)', marginBottom: '16px' }}>
              Explore Elite Vendor Categories
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', margin: '0 auto 20px auto' }}></div>
            <p style={{ maxWidth: '650px', margin: '0 auto' }}>
              Select from our 10 verified specialist wedding categories. Tap into direct booking availability and customized luxury partner packages.
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="section-padding" style={{
        backgroundColor: 'var(--color-cream-dark)',
        borderTop: '1px solid var(--color-gray-light)',
        borderBottom: '1px solid var(--color-gray-light)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="badge-gold" style={{ marginBottom: '12px' }}>Frictionless Booking</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-maroon-dark)', marginBottom: '16px' }}>
              How OneDestiny Works
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', margin: '0 auto 20px auto' }}></div>
            <p style={{ maxWidth: '650px', margin: '0 auto' }}>
              Reserve your complete wedding crew in three simple, protected steps right from your laptop or smartphone.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            position: 'relative'
          }}>
            {[
              { step: '01', title: 'Search Wedding Pros', desc: 'Browse verified high-resolution portfolios, package inclusions, price lists, and authentic client reviews in your local city.' },
              { step: '02', title: 'Plan & Consult AI', desc: 'Estimate allocations using our integrated budget calculator, compare availability dates, and get quick answers from our Destiny AI.' },
              { step: '03', title: 'Book with Escrow Trust', desc: 'Confirm availability instantly. Transact a 20% advance booking deposit through our secure escrow to lock the date, backed by a 100% refund policy.' }
            ].map((item, idx) => (
              <div key={item.step} className="glass-card-light" style={{
                padding: '40px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <span style={{
                  fontSize: '4.5rem',
                  fontWeight: '800',
                  color: 'rgba(212,175,55,0.15)',
                  fontFamily: 'var(--font-heading)',
                  position: 'absolute',
                  top: '10px',
                  right: '24px',
                  lineHeight: '1'
                }}>{item.step}</span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-maroon-dark)', marginTop: '20px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VENDOR GROWTH SECTION */}
      <section id="growth" className="section-padding grad-maroon-gold" style={{ color: 'var(--color-white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span className="badge-gold" style={{ alignSelf: 'flex-start' }}>Business Growth</span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-white)', margin: 0 }}>
                Scale Your Wedding Brand to 10x with <span className="text-gold">OneDestiny</span>
              </h2>
              <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)' }}></div>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                Stop chasing cold leads on social media or paying heavy commissions. OneDestiny connects elite photographers, makeup artists, and coordinators directly with couples looking for high-end wedding services.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', color: 'rgba(255,255,255,0.9)' }}>
                {[
                  { title: 'Priority Lead Pipeline', text: 'Get directly matched with clients looking for services in your exact budget and style preference.' },
                  { title: 'Real-time Analytics Dashboard', text: 'Check monthly revenue, conversion metrics, popular service analytics, and upcoming schedule slots at a glance.' },
                  { title: 'Advance Payout Guarantees', text: 'Lock client slots with upfront advance escrow deposits. Protect your schedule from late cancel losses.' }
                ].map((pt) => (
                  <li key={pt.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="var(--color-gold-primary)" style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '3px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <div>
                      <strong style={{ color: 'var(--color-gold-light)', display: 'block', marginBottom: '2px' }}>{pt.title}</strong>
                      <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{pt.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/register-vendor" style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
                <button className="btn btn-gold">Join as a Partner</button>
              </Link>
            </div>

            {/* Dashboard Graphics Recreate Panel */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="glass-card" style={{
                padding: '30px',
                border: '1px solid rgba(212,175,55,0.3)',
                boxShadow: 'var(--shadow-gold-hover)',
                maxWidth: '450px',
                width: '100%'
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-gold-primary)', display: 'block', marginBottom: '8px' }}>Partner App Screen Preview</span>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '16px' }}>Business Metrics</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>
                      <span>Profile Visibility</span>
                      <span>92% growth</span>
                    </div>
                    <div style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                      <div style={{ height: '100%', width: '92%', backgroundColor: 'var(--color-gold-primary)', borderRadius: '4px' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>
                      <span>Escrow Security Payouts</span>
                      <span>Verified</span>
                    </div>
                    <div style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                      <div style={{ height: '100%', width: '100%', backgroundColor: '#4CAF50', borderRadius: '4px' }}></div>
                    </div>
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', display: 'block' }}>Monthly Payouts</span>
                      <strong style={{ fontSize: '1.4rem', color: 'var(--color-gold-primary)' }}>₹4.2 Lakhs</strong>
                    </div>
                    <span className="badge-gold" style={{ fontSize: '0.65rem', padding: '4px 10px' }}>Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APP SCREENSHOTS */}
      <section id="download" className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="badge-maroon" style={{ marginBottom: '12px' }}>Interactive App Simulator</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-maroon-dark)', marginBottom: '16px' }}>
              OneDestiny Mobile App Showcase
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', margin: '0 auto 20px auto' }}></div>
            <p style={{ maxWidth: '650px', margin: '0 auto' }}>
              Toggle the screens below to preview our intuitive interface. Explore the homepage, view deep vendor profiles, book seamlessly, or monitor vendor dashboard analytics!
            </p>
          </div>
          <AppScreenshots />
        </div>
      </section>

      {/* 6. INNOVATION PLANNER LAB (BUDGET CALCULATOR & AI ASSISTANT) */}
      <section id="innovation-lab" className="section-padding" style={{
        backgroundColor: 'var(--color-cream-dark)',
        borderTop: '1px solid var(--color-gray-light)',
        borderBottom: '1px solid var(--color-gray-light)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="badge-gold" style={{ marginBottom: '12px' }}>Future Planning Tools</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-maroon-dark)', marginBottom: '16px' }}>
              Smart Wedding Planning Suite
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', margin: '0 auto 20px auto' }}></div>
            <p style={{ maxWidth: '650px', margin: '0 auto' }}>
              Take charge of your wedding arrangements using our reactive planning toolkit. Allocate budgets instantly and get recommendations using natural queries.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '80px'
          }}>
            {/* Planner 1: Budget Calculator */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <BudgetCalculator />
            </div>

            {/* Planner 2: Destiny AI Bot */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginTop: '20px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <span className="badge-gold" style={{ marginBottom: '10px' }}>AI Advisor</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-maroon-dark)', marginBottom: '8px' }}>Destiny AI Recommendation Agent</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-medium)', maxWidth: '550px' }}>
                  Type a preference or tap a suggestion chips below to discover verified vendor matching.
                </p>
              </div>
              <RecommendationAI />
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE ONEDESTINY */}
      <section id="why-choose-us" className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="badge-maroon" style={{ marginBottom: '12px' }}>Core Brand Values</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-maroon-dark)', marginBottom: '16px' }}>
              Why Couples & Vendors Trust OneDestiny
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', margin: '0 auto 20px auto' }}></div>
            <p style={{ maxWidth: '650px', margin: '0 auto' }}>
              We have redesigned the wedding booking experience to prioritize transparency, protection, and elite professional quality.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {whyUs.map((item) => (
              <div key={item.title} className="hover-lift hover-glow" style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                padding: '30px',
                border: '1px solid var(--color-gray-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold-soft)',
                  color: 'var(--color-gold-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" style={{ width: '22px', height: '22px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-maroon-dark)', margin: 0 }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section id="testimonials" className="section-padding grad-maroon-gold" style={{ color: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="badge-gold" style={{ marginBottom: '12px' }}>Real Feedback</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-white)', marginBottom: '16px' }}>
              Voices of Destiny
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', margin: '0 auto 20px auto' }}></div>
            <p style={{ maxWidth: '650px', margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}>
              Hear from our brides, grooms, and leading premium vendor partners about their booking success stories.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* 9. PRICING & SUBSCRIPTION */}
      <section id="pricing" className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="badge-maroon" style={{ marginBottom: '12px' }}>Vendor Memberships</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-maroon-dark)', marginBottom: '16px' }}>
              Transparent Subscription Pricing
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', margin: '0 auto 20px auto' }}></div>
            <p style={{ maxWidth: '650px', margin: '0 auto' }}>
              Choose a tier that matches your business targets. Grow your reach, receive premium badges, and double your booking rate.
            </p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section id="faqs" className="section-padding" style={{
        backgroundColor: 'var(--color-cream-dark)',
        borderTop: '1px solid var(--color-gray-light)'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge-gold" style={{ marginBottom: '12px' }}>Frequently Asked Questions</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-maroon-dark)', marginBottom: '16px' }}>
              Got Questions? We Have Answers
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-primary)', margin: '0 auto 20px auto' }}></div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {faqs.map((faq, idx) => (
              <details key={idx} className="faq-details" style={{ listStyle: 'none' }}>
                <summary className="faq-summary">
                  <span>{faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="faq-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="faq-content">
                  <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--color-gray-medium)' }}>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
