"use client";

export function BlackTeeMockup({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 400 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Shirt shape */}
        <path d="M100 70 L15 105 L40 165 L75 140 L75 440 L325 440 L325 140 L360 165 L385 105 L300 70 Q250 50 200 50 Q150 50 100 70Z" fill="#111" stroke="#1a1a1a" strokeWidth="1"/>
        {/* Collar */}
        <path d="M100 70 Q150 85 200 82 Q250 85 300 70 Q285 58 250 52 Q230 48 200 48 Q170 48 150 52 Q115 58 100 70Z" fill="#1a1a1a"/>

        {/* === WINDMILL DESIGN === */}
        {/* Splash/cloud background */}
        <g opacity="0.9">
          <ellipse cx="200" cy="195" rx="75" ry="65" fill="white" opacity="0.08"/>
          {/* Scattered distress marks */}
          <circle cx="145" cy="170" r="2" fill="white" opacity="0.5"/><circle cx="255" cy="180" r="2.5" fill="white" opacity="0.4"/>
          <circle cx="155" cy="230" r="1.5" fill="white" opacity="0.5"/><circle cx="245" cy="225" r="2" fill="white" opacity="0.4"/>
          <circle cx="170" cy="150" r="1.5" fill="white" opacity="0.6"/><circle cx="230" cy="155" r="1.8" fill="white" opacity="0.5"/>
          <circle cx="160" cy="210" r="2" fill="white" opacity="0.3"/><circle cx="240" cy="210" r="1.5" fill="white" opacity="0.35"/>
          <circle cx="180" cy="160" r="1" fill="white" opacity="0.6"/><circle cx="220" cy="165" r="1.2" fill="white" opacity="0.5"/>
          <circle cx="175" cy="240" r="1.5" fill="white" opacity="0.4"/><circle cx="225" cy="235" r="1" fill="white" opacity="0.5"/>
        </g>

        {/* Windmill body */}
        <polygon points="200,155 180,195 220,195" fill="white" opacity="0.92"/>
        <rect x="188" y="195" width="24" height="35" fill="white" opacity="0.92" rx="1"/>
        {/* Window */}
        <ellipse cx="200" cy="210" rx="5" ry="7" fill="#111"/>
        {/* Door */}
        <rect x="196" y="220" width="8" height="10" rx="4" fill="#111"/>

        {/* Blades */}
        <line x1="200" y1="168" x2="200" y2="135" stroke="white" strokeWidth="3" opacity="0.9"/>
        <line x1="200" y1="168" x2="233" y2="168" stroke="white" strokeWidth="3" opacity="0.9"/>
        <line x1="200" y1="168" x2="200" y2="200" stroke="white" strokeWidth="3" opacity="0.9"/>
        <line x1="200" y1="168" x2="167" y2="168" stroke="white" strokeWidth="3" opacity="0.9"/>
        {/* Blade tips */}
        <line x1="200" y1="135" x2="208" y2="142" stroke="white" strokeWidth="1.5" opacity="0.7"/>
        <line x1="200" y1="135" x2="192" y2="142" stroke="white" strokeWidth="1.5" opacity="0.7"/>
        <line x1="233" y1="168" x2="226" y2="160" stroke="white" strokeWidth="1.5" opacity="0.7"/>
        <line x1="233" y1="168" x2="226" y2="176" stroke="white" strokeWidth="1.5" opacity="0.7"/>

        {/* Ground */}
        <line x1="165" y1="240" x2="235" y2="240" stroke="white" strokeWidth="1" opacity="0.4"/>

        {/* NL 062 badge */}
        <g transform="translate(250, 145)">
          <rect width="42" height="16" rx="2" fill="#D97706"/>
          <text x="21" y="12" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">NL 062</text>
          <rect x="5" y="19" width="32" height="2.5" fill="#AE1C28" rx="0.5"/>
          <rect x="5" y="22.5" width="32" height="2.5" fill="white" rx="0.5"/>
          <rect x="5" y="26" width="32" height="2.5" fill="#21468B" rx="0.5"/>
        </g>

        {/* Raymora text */}
        <text x="200" y="290" textAnchor="middle" fill="#777" fontSize="32" fontFamily="Georgia, serif" fontWeight="600" letterSpacing="3">Raymora</text>
      </svg>
    </div>
  );
}

export function WhiteTeeMockup({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 400 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Shirt shape */}
        <path d="M100 70 L15 105 L40 165 L75 140 L75 440 L325 440 L325 140 L360 165 L385 105 L300 70 Q250 50 200 50 Q150 50 100 70Z" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1"/>
        {/* Collar */}
        <path d="M100 70 Q150 85 200 82 Q250 85 300 70 Q285 58 250 52 Q230 48 200 48 Q170 48 150 52 Q115 58 100 70Z" fill="#eeeeee"/>

        {/* === DISTRIBUTION DESIGN === */}
        {/* Sale and */}
        <text x="200" y="155" textAnchor="middle" fontSize="26" fontWeight="900" fontFamily="Arial, sans-serif" fill="#1a4fbf">
          Sale <tspan fontStyle="italic" fill="#16a34a">and</tspan>
        </text>

        {/* Island illustration */}
        <g transform="translate(155, 170)">
          {/* Palm tree */}
          <line x1="45" y1="40" x2="40" y2="10" stroke="#1a4fbf" strokeWidth="3"/>
          <path d="M40 10 Q30 5 20 12" stroke="#1a4fbf" strokeWidth="2" fill="none"/>
          <path d="M40 10 Q50 5 60 12" stroke="#1a4fbf" strokeWidth="2" fill="none"/>
          <path d="M40 10 Q35 0 25 5" stroke="#1a4fbf" strokeWidth="1.5" fill="none"/>
          <path d="M40 10 Q45 0 55 5" stroke="#1a4fbf" strokeWidth="1.5" fill="none"/>
          {/* Island */}
          <ellipse cx="45" cy="42" rx="35" ry="8" fill="#1a4fbf" opacity="0.3"/>
          {/* Person left - guitar */}
          <circle cx="15" cy="28" r="5" fill="#1a4fbf"/>
          <line x1="15" y1="33" x2="15" y2="42" stroke="#1a4fbf" strokeWidth="2"/>
          <line x1="15" y1="35" x2="8" y2="38" stroke="#1a4fbf" strokeWidth="1.5"/>
          <line x1="15" y1="35" x2="22" y2="38" stroke="#1a4fbf" strokeWidth="1.5"/>
          <rect x="6" y="36" width="5" height="8" rx="2" fill="#1a4fbf" transform="rotate(-15,8,40)"/>
          {/* Person right - ball */}
          <circle cx="75" cy="28" r="5" fill="#1a4fbf"/>
          <line x1="75" y1="33" x2="75" y2="42" stroke="#1a4fbf" strokeWidth="2"/>
          <line x1="75" y1="35" x2="68" y2="30" stroke="#1a4fbf" strokeWidth="1.5"/>
          <line x1="75" y1="35" x2="82" y2="30" stroke="#1a4fbf" strokeWidth="1.5"/>
          <circle cx="82" cy="28" r="4" fill="#1a4fbf"/>
          {/* Birds */}
          <path d="M55 5 Q57 2 60 5" stroke="#1a4fbf" strokeWidth="1" fill="none"/>
          <path d="M65 8 Q67 5 70 8" stroke="#1a4fbf" strokeWidth="1" fill="none"/>
        </g>

        {/* Distribution */}
        <text x="200" y="240" textAnchor="middle" fontSize="30" fontWeight="900" fontFamily="Arial, sans-serif" fill="#1a4fbf">Distribution</text>

        {/* OUTING 2025 badge */}
        <rect x="160" y="250" width="80" height="20" rx="10" fill="none" stroke="#1a4fbf" strokeWidth="1.5"/>
        <text x="200" y="264" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Arial" fill="#1a4fbf" letterSpacing="1">OUTING 2025</text>

        {/* only with */}
        <text x="200" y="295" textAnchor="middle" fontSize="24" fontWeight="900" fontFamily="Arial, sans-serif" fill="#1a4fbf">only</text>
        <text x="200" y="318" textAnchor="middle" fontSize="24" fontWeight="900" fontFamily="Arial, sans-serif" fill="#1a4fbf">with</text>

        {/* raymora small */}
        <text x="200" y="335" textAnchor="middle" fontSize="10" fontFamily="Arial" fill="#1a4fbf" letterSpacing="1">raymora</text>

        {/* Raymora big */}
        <text x="200" y="365" textAnchor="middle" fontSize="30" fontWeight="900" fontFamily="Arial, sans-serif" fill="#1a4fbf">Raymora</text>
      </svg>
    </div>
  );
}
