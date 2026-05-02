'use client';
export default function CoffeeSteam() {
  return (
    <svg
      viewBox="0 0 120 280"
      width="120"
      height="280"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible', filter: 'blur(1.5px)', pointerEvents: 'none' }}
      aria-hidden="true"
    >
      {/* Steam path 1 */}
      <path
        d="M60 280 Q50 240 65 200 Q80 160 55 120 Q35 80 55 40"
        fill="none"
        stroke="rgba(245,237,224,0.9)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="300"
        style={{
          animation: 'steamRise 4s ease-in-out infinite',
          animationDelay: '0s',
        }}
      />
      {/* Steam path 2 */}
      <path
        d="M80 280 Q90 240 75 200 Q60 155 80 115 Q100 75 75 30"
        fill="none"
        stroke="rgba(245,237,224,0.9)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="300"
        style={{
          animation: 'steamRise 4s ease-in-out infinite',
          animationDelay: '1.3s',
        }}
      />
      {/* Steam path 3 */}
      <path
        d="M40 280 Q30 235 50 195 Q70 155 45 110 Q25 70 48 20"
        fill="none"
        stroke="rgba(245,237,224,0.9)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="300"
        style={{
          animation: 'steamRise 4s ease-in-out infinite',
          animationDelay: '2.6s',
        }}
      />
    </svg>
  );
}
