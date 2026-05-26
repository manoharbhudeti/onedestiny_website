'use client';

export default function CategoryGrid() {
  const categories = [
    {
      name: 'Photography',
      count: 48,
      desc: 'Candid & cinematic memories',
      icon: 'M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316zM10.5 14.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm5.25 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
    },
    {
      name: 'Makeup Artists',
      count: 35,
      desc: 'Celebrity bridal glam',
      icon: 'M9.53 16.122a3 3 0 00-3.078 0 3 3 0 01-3.078 0 3 3 0 00-3.078 0 3 3 0 000 4.156 3 3 0 013.078 0 3 3 0 003.078 0 3 3 0 013.078 0 3 3 0 003.078 0 3 3 0 000-4.156z M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06L6.166 6.166a.75.75 0 010-1.06z'
    },
    {
      name: 'Catering',
      count: 29,
      desc: 'Royal multi-cuisine feasts',
      icon: 'M12 21a9.004 9.004 0 008.716-6.747c.224-.89-.53-1.753-1.45-1.753H4.734c-.92 0-1.674.862-1.45 1.753A9.004 9.004 0 0012 21zm-8.878-9h17.756c.394 0 .72-.284.773-.674A9.022 9.022 0 0012 3a9.022 9.022 0 00-9.651 8.326c.053.39.379.674.773.674z'
    },
    {
      name: 'Venues',
      count: 42,
      desc: 'Palaces, lawns, & resorts',
      icon: 'M2.25 21h19.5m-18-18v18m16.5-18v18m-15-18h13.5M3 7.5h18M4.5 12h3m-3 4.5h3m7.5-4.5h3m-3 4.5h3m-7.5-9h7.5'
    },
    {
      name: 'Decoration',
      count: 31,
      desc: 'Exquisite theme setups',
      icon: 'M12 3v18M3 12h18m-9-9c-2.5 0-4.5 2-4.5 4.5S11.5 12 12 12s4.5-2 4.5-4.5S14.5 3 12 3zm0 9c-2.5 0-4.5 2-4.5 4.5S9.5 21 12 21s4.5-2 4.5-4.5S14.5 12 12 12z'
    },
    {
      name: 'Pandits',
      count: 18,
      desc: 'Traditional Vedic ceremonies',
      icon: 'M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 14.25a4.5 4.5 0 110-9 4.5 4.5 0 010 9z'
    },
    {
      name: 'Mehendi Artists',
      count: 24,
      desc: 'Intricate traditional henna patterns',
      icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25'
    },
    {
      name: 'DJ & Music',
      count: 26,
      desc: 'High-energy entertainment',
      icon: 'M9 9l10.5-3m0 0v11.25m0-11.25L9 9v11.25m0-11.25l10.5-3M9 20.25a3 3 0 11-6-0 3 3 0 016-0zm10.5-3a3 3 0 11-6 0 3 3 0 016-0z'
    },
    {
      name: 'Cinematography',
      count: 22,
      desc: 'Visual cinematic storytelling',
      icon: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
    },
    {
      name: 'Wedding Cars',
      count: 15,
      desc: 'Luxury & classic ride entries',
      icon: 'M8.25 18.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15.75 18.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z M19.5 10.5c.394 0 .72-.284.773-.674l.951-7a.75.75 0 00-.773-.826H3.55a.75.75 0 00-.773.826l.951 7c.053.39.379.674.773.674h15z'
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '24px',
      width: '100%'
    }}>
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="hover-lift hover-glow"
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            padding: '24px',
            border: '1px solid var(--color-gray-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle gold line hover decoration */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '3px',
            background: 'linear-gradient(to right, var(--color-maroon-primary), var(--color-gold-primary))',
            opacity: 0,
            transition: 'var(--transition-smooth)'
          }} className="top-hover-line"></div>

          {/* Icon + Badge */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold-deep)'
            }} className="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" style={{ width: '26px', height: '26px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
              </svg>
            </div>
            <span className="badge-maroon" style={{ fontSize: '0.65rem', padding: '4px 10px' }}>
              {cat.count} Pros
            </span>
          </div>

          {/* Details */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              color: 'var(--color-maroon-dark)',
              marginBottom: '6px'
            }}>
              {cat.name}
            </h4>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--color-gray-medium)',
              lineHeight: '1.4'
            }}>
              {cat.desc}
            </p>
          </div>
        </div>
      ))}
      <style jsx global>{`
        .hover-lift:hover .top-hover-line {
          opacity: 1 !important;
        }
        .hover-lift:hover .icon-box {
          background-color: var(--color-maroon-primary) !important;
          color: var(--color-gold-primary) !important;
          transform: rotate(5deg) scale(1.05);
          transition: var(--transition-bounce);
        }
      `}</style>
    </div>
  );
}
