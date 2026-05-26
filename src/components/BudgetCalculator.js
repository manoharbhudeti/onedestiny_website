'use client';

import { useState } from 'react';

export default function BudgetCalculator() {
  const [totalBudget, setTotalBudget] = useState(1500000); // 15 Lakhs default
  
  // Percentage allocation weights
  const [allocations, setAllocations] = useState({
    venue: 40,
    photo: 15,
    decor: 20,
    makeup: 8,
    entertainment: 12,
    ritual: 5
  });

  const handleSliderChange = (category, value) => {
    const newVal = parseInt(value);
    const difference = newVal - allocations[category];
    
    // Distribute the difference proportionally among other categories to maintain 100% total
    const otherKeys = Object.keys(allocations).filter(k => k !== category);
    const sumOthers = otherKeys.reduce((sum, k) => sum + allocations[k], 0);

    const newAllocations = { ...allocations };
    newAllocations[category] = newVal;

    if (sumOthers > 0) {
      otherKeys.forEach(k => {
        const ratio = allocations[k] / sumOthers;
        // Subtract or add difference proportionally
        newAllocations[k] = Math.max(0, Math.round(allocations[k] - difference * ratio));
      });
    } else {
      // If all others are 0, distribute evenly
      otherKeys.forEach(k => {
        newAllocations[k] = Math.max(0, Math.round((100 - newVal) / otherKeys.length));
      });
    }

    // Force sum to equal exactly 100 to fix rounding errors
    const currentSum = Object.values(newAllocations).reduce((a, b) => a + b, 0);
    if (currentSum !== 100) {
      const adjustment = 100 - currentSum;
      // Adjust the first other category
      newAllocations[otherKeys[0]] = Math.max(0, newAllocations[otherKeys[0]] + adjustment);
    }

    setAllocations(newAllocations);
  };

  const categories = [
    { key: 'venue', name: 'Venue & Catering', color: '#B28228' },
    { key: 'photo', name: 'Photography & Cinema', color: '#D4AF37' },
    { key: 'decor', name: 'Decoration & Florals', color: '#761E28' },
    { key: 'makeup', name: 'Makeup & Styling', color: '#9B313D' },
    { key: 'entertainment', name: 'Entertainment & DJ', color: '#540D15' },
    { key: 'ritual', name: 'Pandits & Rituals', color: '#3A060C' }
  ];

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="glass-card-light" style={{
      padding: '40px',
      maxWidth: '800px',
      width: '100%',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Decorative Gold Corner Borders */}
      <div style={{ position: 'absolute', top: '15px', left: '15px', width: '20px', height: '20px', borderTop: '2px solid var(--color-gold-primary)', borderLeft: '2px solid var(--color-gold-primary)' }}></div>
      <div style={{ position: 'absolute', top: '15px', right: '15px', width: '20px', height: '20px', borderTop: '2px solid var(--color-gold-primary)', borderRight: '2px solid var(--color-gold-primary)' }}></div>
      <div style={{ position: 'absolute', bottom: '15px', left: '15px', width: '20px', height: '20px', borderBottom: '2px solid var(--color-gold-primary)', borderLeft: '2px solid var(--color-gold-primary)' }}></div>
      <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '20px', height: '20px', borderBottom: '2px solid var(--color-gold-primary)', borderRight: '2px solid var(--color-gold-primary)' }}></div>

      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="badge-gold" style={{ marginBottom: '10px' }}>Budget Planner</span>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--color-maroon-dark)', marginBottom: '8px' }}>Interactive Wedding Budget Calculator</h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-medium)' }}>
          Select your total budget limit and fine-tune your priorities to estimate individual vendor costs.
        </p>
      </div>

      {/* Budget Input Slider Section */}
      <div className="mini-card" style={{ padding: '24px', backgroundColor: '#fff', border: '1px solid rgba(212, 175, 55, 0.25)', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.05)', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-maroon-dark)' }}>Total Estimated Budget:</span>
          <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-maroon-primary)' }}>
            {formatCurrency(totalBudget)}
          </span>
        </div>
        <input 
          type="range"
          min="200000"
          max="5000000"
          step="50000"
          value={totalBudget}
          onChange={(e) => setTotalBudget(parseInt(e.target.value))}
          className="budget-slider"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#999', marginTop: '10px', fontWeight: '600' }}>
          <span>₹2 Lakhs</span>
          <span>₹15 Lakhs</span>
          <span>₹30 Lakhs</span>
          <span>₹50 Lakhs</span>
        </div>
      </div>

      {/* Allocations Sliders breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {categories.map((cat) => {
          const catPercentage = allocations[cat.key] || 0;
          const catAmount = (totalBudget * catPercentage) / 100;
          
          return (
            <div key={cat.key} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '16px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              border: '1px solid #f0f0f0',
              boxShadow: '0 4px 10px rgba(0,0,0,0.01)',
              transition: 'var(--transition-smooth)'
            }} className="hover-glow">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-gray-dark)' }}>{cat.name}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-gold-deep)' }}>{catPercentage}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={catPercentage}
                onChange={(e) => handleSliderChange(cat.key, e.target.value)}
                className="budget-slider"
              />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '6px'
              }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--color-maroon-dark)' }}>
                  {formatCurrency(catAmount)}
                </span>
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  color: '#999',
                  textTransform: 'uppercase'
                }}>Avg. Allocation</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tip Banner */}
      <div style={{
        backgroundColor: 'rgba(212, 175, 55, 0.08)',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        borderRadius: '12px',
        padding: '16px',
        marginTop: '32px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--color-gold-primary)" style={{ width: '28px', height: '28px', flexShrink: 0 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a3 3 0 00-3-3H9.75m3 3h.008v.008H12v-.008zM12 3a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
        <span style={{ fontSize: '0.85rem', color: 'var(--color-maroon-dark)', fontWeight: '600' }}>
          💡 **Planner Tip:** Typically, venues and catering occupy about 40-50% of your total wedding budget. In OneDestiny, you can browse verified caterers and luxury banquets in your budget category directly!
        </span>
      </div>
    </div>
  );
}
