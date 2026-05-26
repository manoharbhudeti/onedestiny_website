'use client';

import { useState } from 'react';

export default function RegisterVendorPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brandName: '',
    contactPerson: '',
    phone: '',
    email: '',
    category: 'Photography',
    city: 'Delhi NCR',
    startingPrice: '',
    description: '',
    portfolioLink: '',
    idProofType: 'PAN Card',
    subscriptionTier: 'premium'
  });
  const [error, setError] = useState('');

  const nextStep = () => {
    if (step === 1) {
      if (!formData.brandName || !formData.contactPerson || !formData.phone || !formData.email) {
        setError('Please fill in all company information fields before proceeding.');
        return;
      }
    }
    if (step === 2) {
      if (!formData.startingPrice || !formData.description) {
        setError('Please provide your package pricing and brand description.');
        return;
      }
    }
    setError('');
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setError('');
    setStep((prev) => prev - 1);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    setStep(4);
  };

  const categories = [
    'Photography', 'Makeup Artists', 'Catering', 'Venues', 
    'Decoration', 'Pandits', 'Mehendi Artists', 'DJ & Music', 
    'Cinematography', 'Wedding Cars'
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-cream)', minHeight: '85vh', paddingBottom: '60px' }}>
      {/* Header Banner */}
      <section style={{
        padding: '60px 0',
        backgroundImage: 'linear-gradient(rgba(58, 6, 12, 0.8), rgba(58, 6, 12, 0.95)), url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge-gold" style={{ marginBottom: '16px' }}>Onboarding Portal</span>
          <h1 style={{
            fontSize: '2.5rem',
            color: 'var(--color-white)',
            marginBottom: '12px',
            fontFamily: 'var(--font-heading)'
          }}>
            Become a OneDestiny Partner
          </h1>
          <p style={{ color: 'var(--color-cream-dark)', fontSize: '1.05rem', margin: 0 }}>
            List your brand, secure customer booking advances, and scale your wedding business.
          </p>
        </div>
      </section>

      {/* Onboarding Wizard Container */}
      <section className="container" style={{ maxWidth: '750px', marginTop: '40px' }}>
        {/* Stepper Progress bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          position: 'relative',
          padding: '0 10px'
        }}>
          {/* Horizontal connecting line */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '40px',
            right: '40px',
            height: '2px',
            backgroundColor: 'var(--color-gray-light)',
            zIndex: 0
          }}></div>
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '40px',
            width: step === 1 ? '0%' : step === 2 ? '50%' : '100%',
            height: '2px',
            backgroundColor: 'var(--color-gold-primary)',
            transition: 'var(--transition-smooth)',
            zIndex: 0
          }}></div>

          {[
            { stepNum: 1, label: 'Company' },
            { stepNum: 2, label: 'Portfolio' },
            { stepNum: 3, label: 'Verification' }
          ].map((item) => (
            <div key={item.stepNum} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 1,
              position: 'relative'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: step >= item.stepNum ? 'var(--color-maroon-dark)' : 'var(--color-white)',
                color: step >= item.stepNum ? 'var(--color-gold-primary)' : 'var(--color-gray-medium)',
                border: step >= item.stepNum ? '2px solid var(--color-gold-primary)' : '2px solid var(--color-gray-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '0.95rem',
                transition: 'var(--transition-smooth)'
              }}>
                {item.stepNum}
              </div>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                marginTop: '8px',
                color: step >= item.stepNum ? 'var(--color-maroon-dark)' : 'var(--color-gray-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Form Body Glass Card */}
        <div className="glass-card-light" style={{
          padding: '40px',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          boxShadow: 'var(--shadow-dark)'
        }}>
          {error && (
            <div style={{
              backgroundColor: 'rgba(244, 67, 54, 0.1)',
              border: '1px solid #f44336',
              borderRadius: '8px',
              padding: '12px',
              fontSize: '0.85rem',
              color: '#d32f2f',
              marginBottom: '20px'
            }}>
              ⚠️ {error}
            </div>
          )}

          {/* STEP 1: COMPANY INFO */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.4rem', marginBottom: '20px' }}>Step 1: Brand & Contact Info</h3>
              
              <div className="input-group">
                <label className="input-label">Wedding Brand Name *</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g. Sabyasachi Decorators"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">Primary Contact Person *</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g. Rajat Sharma"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="mobile-stack">
                <div className="input-group">
                  <label className="input-label">Business Phone *</label>
                  <input
                    type="tel"
                    className="input-field"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Business Email *</label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="e.g. contact@sabyadecors.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="mobile-stack">
                <div className="input-group">
                  <label className="input-label">Primary Specialization Category</label>
                  <select
                    className="input-field"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{ height: '50px' }}
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label className="input-label">City Base</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="e.g. Delhi NCR"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <button onClick={nextStep} className="btn btn-maroon" style={{ width: '100%', marginTop: '20px' }}>
                Next: Portfolio & Pricing
              </button>
            </div>
          )}

          {/* STEP 2: PORTFOLIO & PRICING */}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.4rem', marginBottom: '20px' }}>Step 2: Service Details & Portfolio</h3>
              
              <div className="input-group">
                <label className="input-label">Starting Package Pricing (in INR) *</label>
                <input
                  type="number"
                  className="input-field"
                  placeholder="e.g. 150000"
                  value={formData.startingPrice}
                  onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">Portfolio Link (Google Drive / Website) *</label>
                <input
                  type="url"
                  className="input-field"
                  placeholder="e.g. https://drive.google.com/..."
                  value={formData.portfolioLink}
                  onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">Description of Wedding Services *</label>
                <textarea
                  className="input-field textarea-field"
                  placeholder="Describe your styling, equipment, camera gear, catering cuisines, or special themes you offer..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
                <button onClick={prevStep} className="btn btn-outline-gold" style={{ flexGrow: 1 }}>
                  Back
                </button>
                <button onClick={nextStep} className="btn btn-maroon" style={{ flexGrow: 1 }}>
                  Next: Verification & Subscriptions
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: VERIFICATION & SUBSCRIPTIONS */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h3 style={{ color: 'var(--color-maroon-dark)', fontSize: '1.4rem', marginBottom: '20px' }}>Step 3: Business Verification</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="mobile-stack">
                <div className="input-group">
                  <label className="input-label">Identity Proof Type</label>
                  <select
                    className="input-field"
                    value={formData.idProofType}
                    onChange={(e) => setFormData({ ...formData, idProofType: e.target.value })}
                    style={{ height: '50px' }}
                  >
                    <option value="PAN Card">PAN Card</option>
                    <option value="GST Certificate">GST Certificate</option>
                    <option value="Aadhaar Card">Aadhaar Card</option>
                  </select>
                </div>
                <div className="input-group">
                  <label className="input-label">Upload Business ID Document</label>
                  <input
                    type="file"
                    className="input-field"
                    style={{ padding: '10px 14px' }}
                    disabled
                  />
                </div>
              </div>

              {/* Tier Selection */}
              <div style={{ marginBottom: '20px' }}>
                <label className="input-label">Choose Listing Membership Plan</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { id: 'free', name: 'Basic Free Listing', desc: '₹0 forever - Standard search directories.' },
                    { id: 'premium', name: 'Premium Placements (Recommended)', desc: '₹1,499/mo - Priority search rankings & Verified badge.' },
                    { id: 'featured', name: 'Featured Partner Boost', desc: '₹3,999/mo - Top banner showcases & push lead routing.' }
                  ].map((tier) => (
                    <label key={tier.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 20px',
                      border: formData.subscriptionTier === tier.id ? '2px solid var(--color-gold-primary)' : '1px solid #eee',
                      backgroundColor: formData.subscriptionTier === tier.id ? 'rgba(212,175,55,0.06)' : '#fff',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'var(--transition-smooth)'
                    }}>
                      <input
                        type="radio"
                        name="subscriptionTier"
                        value={tier.id}
                        checked={formData.subscriptionTier === tier.id}
                        onChange={(e) => setFormData({ ...formData, subscriptionTier: e.target.value })}
                        style={{ accentColor: 'var(--color-maroon-primary)', width: '18px', height: '18px' }}
                      />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-maroon-dark)' }}>{tier.name}</strong>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-medium)' }}>{tier.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
                <button onClick={prevStep} className="btn btn-outline-gold" style={{ flexGrow: 1 }}>
                  Back
                </button>
                <button onClick={handleFinish} className="btn btn-maroon" style={{ flexGrow: 1 }}>
                  Submit Onboarding Form
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: ONBOARDING COMPLETE SUCCESS SCREEN */}
          {step === 4 && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '24px',
              padding: '20px 0'
            }}>
              <div style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-gold-primary)',
                color: 'var(--color-maroon-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{ width: '38px', height: '38px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-maroon-dark)', marginBottom: '12px' }}>Welcome Partner! Onboarding Logged.</h3>
                <p style={{ maxWidth: '480px', margin: '0 auto' }}>
                  Thank you for submitting your onboarding form for <strong>{formData.brandName}</strong>. Our quality audit team will review your business license and portfolio credentials within 24 hours.
                </p>
                <p style={{ maxWidth: '420px', margin: '14px auto 0 auto', fontSize: '0.82rem', color: 'var(--color-gold-deep)', fontWeight: '600' }}>
                  A partner onboarding guide has been sent to <strong>{formData.email}</strong>. Download the OneDestiny Partner App on your phone to complete your security payout verification!
                </p>
              </div>
              <button onClick={() => setStep(1)} className="btn btn-outline-gold" style={{ marginTop: '20px' }}>
                Restart Registration Demo
              </button>
            </div>
          )}
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 576px) {
          .mobile-stack {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
