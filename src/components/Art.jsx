export function ModuleArt() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <radialGradient id="bg" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#28414f" />
          <stop offset="55%" stopColor="#132430" />
          <stop offset="100%" stopColor="#0a161d" />
        </radialGradient>
        <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f7d6e" />
          <stop offset="100%" stopColor="#184a42" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#bg)" />
      <rect x="120" y="55" width="160" height="195" rx="6" fill="url(#body)" stroke="#0e2a25" strokeWidth="2" />
      <rect x="136" y="72" width="128" height="34" rx="3" fill="#0e2a25" opacity="0.55" />
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx={144 + i * 16} cy={89} r="3" fill={i % 3 === 0 ? "#4fd67a" : "#2f5a53"} />
      ))}
      <rect x="136" y="118" width="128" height="80" rx="3" fill="#0e2a25" opacity="0.45" />
      <rect x="148" y="130" width="104" height="6" rx="2" fill="#5fb8a8" opacity="0.6" />
      <rect x="148" y="144" width="80" height="6" rx="2" fill="#5fb8a8" opacity="0.35" />
      <rect x="148" y="158" width="90" height="6" rx="2" fill="#5fb8a8" opacity="0.35" />
      <rect x="130" y="210" width="140" height="10" rx="2" fill="#0e2a25" opacity="0.5" />
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={128 + i * 15} y="248" width="6" height="16" fill="#c9a63a" />
      ))}
      <text x="200" y="278" fontFamily="Segoe UI, Arial" fontSize="11" fill="#93a8b3" textAnchor="middle" letterSpacing="0.5">
        Siemens SIMATIC Module
      </text>
    </svg>
  );
}

export function CardArt({ label, color }) {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <rect width="200" height="160" fill="#eef1f3" />
      <rect x="45" y="30" width="110" height="100" rx="5" fill={color} opacity="0.85" />
      <rect x="60" y="45" width="80" height="18" rx="2" fill="#ffffff" opacity="0.35" />
      <rect x="60" y="70" width="60" height="6" rx="2" fill="#ffffff" opacity="0.5" />
      <rect x="60" y="82" width="70" height="6" rx="2" fill="#ffffff" opacity="0.35" />
      <text x="100" y="148" fontFamily="Segoe UI, Arial" fontSize="10" fill="#6b7480" textAnchor="middle">
        {label}
      </text>
    </svg>
  );
}
