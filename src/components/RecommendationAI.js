'use client';

import { useState, useRef, useEffect } from 'react';

export default function RecommendationAI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Namaste! I am Destiny AI, your personal wedding consultant. Tell me, what kind of vendor or venue are you looking for today? (e.g., location, theme, or budget)',
      time: '9:41 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const samplePrompts = [
    '📷 Photographers in Delhi NCR under ₹1.5L',
    '🏰 Luxury Banquet Halls for 500+ guests',
    '💄 Bridal makeup artist for morning wedding',
    '🔥 Pandit for Vedic rituals'
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const getAIResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('photographer') || q.includes('under 1.5l') || q.includes('photo')) {
      return {
        text: 'I found **3 Premium Verified Photographers** matching your budget in Delhi NCR:',
        vendors: [
          { name: 'Raj Heritage Studios', rating: '4.9 ★', price: '₹1.2L / Day', category: 'Photography' },
          { name: 'Gilded Frames Cinema', rating: '4.8 ★', price: '₹1.4L / Day', category: 'Photography' }
        ],
        tip: 'Both offer free pre-wedding consultation sessions if booked through the OneDestiny App this week!'
      };
    } else if (q.includes('banquet') || q.includes('venue') || q.includes('hall') || q.includes('500')) {
      return {
        text: 'Here are the **top luxury venues** with capacity for 500+ guests in Gurugram & Delhi NCR:',
        vendors: [
          { name: 'The Leela Ambience Grand', rating: '4.9 ★', price: '₹4,500 / Plate', category: 'Luxury Hotel' },
          { name: 'Royal Rose Gardens', rating: '4.7 ★', price: '₹3,50,000 / Day', category: 'Farmhouse / Garden' }
        ],
        tip: 'Royal Rose Gardens offers standard catering bundles that can save you up to 15% overall.'
      };
    } else if (q.includes('makeup') || q.includes('bridal') || q.includes('styling')) {
      return {
        text: 'For a traditional morning wedding, these **celebrity makeup artists** specialize in dewy, long-lasting premium bridal styling:',
        vendors: [
          { name: 'Kriti Glamour Artistry', rating: '4.9 ★', price: '₹45,000 / Session', category: 'Makeup' },
          { name: 'Royal Touch Bridal Lounge', rating: '4.8 ★', price: '₹35,000 / Session', category: 'Makeup' }
        ],
        tip: 'Kriti Glamour includes standard hairstyling and drape assisting in the primary package.'
      };
    } else if (q.includes('pandit') || q.includes('ritual') || q.includes('vedic')) {
      return {
        text: 'These **Vedic Pandits** are highly rated for traditional, multilingual wedding ceremonies:',
        vendors: [
          { name: 'Acharya Sharma & Group', rating: '4.9 ★', price: '₹21,000', category: 'Vedic Rituals' },
          { name: 'Pandit Shastri Ji', rating: '4.8 ★', price: '₹15,000', category: 'Vedic Rituals' }
        ],
        tip: 'Acharya Sharma provides complete puja samagri arrangements as part of his custom package.'
      };
    } else {
      return {
        text: 'Excellent preference! I have scanned our premium verified directory. Here are some of our most trusted partners recommended for you:',
        vendors: [
          { name: 'Sabyasachi Decorators', rating: '4.8 ★', price: '₹3.5L / Event', category: 'Decoration' },
          { name: 'Urban Dhol & DJ Music', rating: '4.9 ★', price: '₹55,000', category: 'DJ & Sound' }
        ],
        tip: 'You can compare detailed portfolios and secure payment guarantees on the OneDestiny App.'
      };
    }
  };

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getAIResponse(textToSend);
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: responseData.text,
        vendors: responseData.vendors,
        tip: responseData.tip,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="glass-card-light" style={{
      padding: '0',
      maxWidth: '650px',
      width: '100%',
      margin: '0 auto',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '550px',
      border: '1px solid rgba(212, 175, 55, 0.35)',
      boxShadow: 'var(--shadow-gold)'
    }}>
      {/* Bot Chat Header */}
      <div style={{
        padding: '20px 24px',
        backgroundColor: 'var(--color-maroon-dark)',
        color: '#fff',
        borderBottom: '2px solid var(--color-gold-primary)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-gold-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 10px var(--color-gold-glow)'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="var(--color-maroon-dark)" style={{ width: '22px', height: '22px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.982-11.795m-9 0L14 3L9.813 15.904z" />
          </svg>
        </div>
        <div>
          <span style={{ fontSize: '1.05rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: 'var(--color-gold-primary)' }}>Destiny AI Partner</span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>• Online Wedding Planner Bot</span>
        </div>
      </div>

      {/* Message List area */}
      <div style={{
        flexGrow: 1,
        padding: '24px',
        overflowY: 'auto',
        backgroundColor: '#FCFAF5',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignSelf: msg.sender === 'ai' ? 'flex-start' : 'flex-end',
              maxWidth: '85%'
            }}
          >
            {/* Bubble */}
            <div style={{
              padding: '14px 18px',
              borderRadius: '16px',
              fontSize: '0.95rem',
              lineHeight: '1.5',
              backgroundColor: msg.sender === 'ai' ? 'var(--color-maroon-dark)' : 'var(--color-cream-dark)',
              color: msg.sender === 'ai' ? 'var(--color-white)' : 'var(--color-gray-dark)',
              borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '16px',
              borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}>
              {msg.text}

              {/* Specific Card Output for Vendor search matching */}
              {msg.vendors && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                  {msg.vendors.map((vend) => (
                    <div key={vend.name} style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '10px',
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <span style={{ fontWeight: '700', fontSize: '0.85rem', color: 'var(--color-gold-light)', display: 'block' }}>{vend.name}</span>
                        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>{vend.category} • {vend.rating}</span>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-gold-primary)' }}>{vend.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tip Banner inside Chat */}
              {msg.tip && (
                <div style={{
                  marginTop: '12px',
                  padding: '8px 12px',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  borderLeft: '3px solid var(--color-gold-primary)',
                  fontSize: '0.75rem',
                  color: 'var(--color-gold-light)'
                }}>
                  ✨ {msg.tip}
                </div>
              )}
            </div>

            {/* Time under bubble */}
            <span style={{
              fontSize: '0.65rem',
              color: '#bbb',
              marginTop: '4px',
              alignSelf: msg.sender === 'ai' ? 'flex-start' : 'flex-end'
            }}>
              {msg.time}
            </span>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', gap: '6px', alignSelf: 'flex-start', padding: '10px 14px', backgroundColor: 'var(--color-maroon-dark)', borderRadius: '16px', borderBottomLeftRadius: '4px' }}>
            <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%', display: 'inline-block' }}></span>
            <span className="dot animate-2" style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%', display: 'inline-block' }}></span>
            <span className="dot animate-3" style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%', display: 'inline-block' }}></span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Suggested prompts list */}
      {messages.length === 1 && (
        <div style={{
          padding: '12px 20px',
          backgroundColor: '#FFFDD0',
          borderTop: '1px solid rgba(212,175,55,0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-maroon-dark)', textTransform: 'uppercase' }}>💡 Choose a preference to start:</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {samplePrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  backgroundColor: '#fff',
                  border: '1px solid rgba(212,175,55,0.3)',
                  color: 'var(--color-maroon-dark)',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
                className="chip-btn"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Send Action area */}
      <div style={{
        padding: '16px 24px',
        backgroundColor: '#fff',
        borderTop: '1px solid #eee',
        display: 'flex',
        gap: '12px'
      }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
          placeholder="Ask for photography packages, catering plates, venues..."
          style={{
            flexGrow: 1,
            padding: '12px 16px',
            borderRadius: '24px',
            border: '1px solid #ddd',
            outline: 'none',
            fontSize: '0.9rem'
          }}
        />
        <button
          onClick={() => handleSendMessage(inputText)}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-maroon-primary)',
            color: '#fff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(118, 30, 40, 0.25)'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '18px', height: '18px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </div>

      <style jsx global>{`
        .chip-btn:hover {
          background-color: var(--color-maroon-dark) !important;
          color: #fff !important;
          border-color: var(--color-gold-primary) !important;
        }
        @keyframes typing-dot {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-4px); }
        }
        .dot {
          animation: typing-dot 1s infinite;
        }
        .animate-2 {
          animation-delay: 0.2s;
        }
        .animate-3 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
