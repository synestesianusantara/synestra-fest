'use client';

const items = [
  { text: ['From ', <span key="t" style={{ color: 'var(--red)', fontWeight: 700 }}>Tokyo</span>, ' to ', <span key="j" style={{ color: 'var(--red)', fontWeight: 700 }}>Jogja</span>] },
  { dot: true },
  { text: ['Coffee × Culture × Experience'] },
  { dot: true },
  { text: ['From ', <span key="n" style={{ color: 'var(--red)', fontWeight: 700 }}>Nusantara</span>, ' to the World'] },
  { dot: true },
  { text: ['22 – 25 Agustus 2026'] },
  { dot: true },
];

function Track() {
  return (
    <>
      {items.map((item, i) =>
        item.dot ? (
          <span key={i} className="marquee-dot" />
        ) : (
          <span key={i} className="marquee-item">{item.text}</span>
        )
      )}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  );
}
