import { useId } from 'react'

export function DesignDevAnimation() {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')

  // All translate values are 15% larger than the previous version.
  // Each circle has its own float <g> wrapper that drifts on an independent
  // short loop, composing with the main approach/merge animation.

  return (
    <div
      className="relative w-full select-none"
      style={{ aspectRatio: '19/15', margin: '0 auto' }}
      aria-hidden="true"
    >
      <style>{`
        /* Main position — approach / merge / depart */
        .mb1-${uid}, .ml1-${uid} { animation: mb1-${uid} 9s ease-in-out infinite; will-change: transform; }
        .mb2-${uid}, .ml2-${uid} { animation: mb2-${uid} 9s ease-in-out infinite; will-change: transform; }

        /* Breathe on merged blob */
        .mbw-${uid} { animation: mbw-${uid} 9s ease-in-out infinite; }

        /* Independent floats — different durations so they never sync */
        .mf1-${uid} { animation: mf1-${uid} 3.7s ease-in-out infinite; }
        .mf2-${uid} { animation: mf2-${uid} 4.3s ease-in-out infinite; }

        /* + fade */
        .mbp-${uid} { animation: mbp-${uid} 9s ease-in-out infinite; }

        @keyframes mb1-${uid} {
          0%, 100%  { transform: translate(-110px, -70px); }
          16%       { transform: translate( -29px, -23px); }
          20%, 80%  { transform: translate( -40px, -35px); }
          84%, 100% { transform: translate(-110px, -70px); }
        }
        @keyframes mb2-${uid} {
          0%, 100%  { transform: translate( 110px,  70px); }
          16%       { transform: translate(  29px,  23px); }
          20%, 80%  { transform: translate(  40px,  35px); }
          84%, 100% { transform: translate( 110px,  70px); }
        }
        @keyframes mbw-${uid} {
          0%, 18%, 82%, 100% { transform: scale(1);     }
          40%                { transform: scale(1.032); }
          54%                { transform: scale(0.974); }
          64%                { transform: scale(1.018); }
        }
        @keyframes mf1-${uid} {
          0%   { transform: translate(  0px,   0px); }
          20%  { transform: translate( -5px,  -7px); }
          45%  { transform: translate(  4px,  -3px); }
          70%  { transform: translate( -3px,   6px); }
          90%  { transform: translate(  5px,   3px); }
          100% { transform: translate(  0px,   0px); }
        }
        @keyframes mf2-${uid} {
          0%   { transform: translate(  0px,   0px); }
          15%  { transform: translate(  6px,   5px); }
          40%  { transform: translate( -4px,   2px); }
          65%  { transform: translate(  3px,  -6px); }
          85%  { transform: translate( -5px,  -2px); }
          100% { transform: translate(  0px,   0px); }
        }
        @keyframes mbp-${uid} {
          0%, 20%   { opacity: 0; }
          28%, 80%  { opacity: 1; }
          84%, 100% { opacity: 0; }
        }
      `}</style>

      <svg
        viewBox="0 0 380 300"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`mb-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="13" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -12"
            />
          </filter>

          <radialGradient id={`rg-${uid}`} cx="38%" cy="32%" r="70%">
            <stop offset="0%"   stopColor="oklch(0.93 0.16 130)" />
            <stop offset="65%"  stopColor="oklch(0.80 0.21 130)" />
            <stop offset="100%" stopColor="oklch(0.60 0.23 130)" />
          </radialGradient>

          <radialGradient id={`rb-${uid}`} cx="38%" cy="32%" r="70%">
            <stop offset="0%"   stopColor="oklch(0.91 0.10 215)" />
            <stop offset="65%"  stopColor="oklch(0.72 0.16 220)" />
            <stop offset="100%" stopColor="oklch(0.55 0.20 225)" />
          </radialGradient>
        </defs>

        {/* Metaball blobs — float wrappers compose with main translate */}
        <g
          className={`mbw-${uid}`}
          filter={`url(#mb-${uid})`}
          style={{ transformOrigin: '190px 150px' }}
        >
          <g className={`mf1-${uid}`}>
            <circle className={`mb1-${uid}`} cx="190" cy="150" r="80" fill={`url(#rg-${uid})`} />
          </g>
          <g className={`mf2-${uid}`}>
            <circle className={`mb2-${uid}`} cx="190" cy="150" r="80" fill={`url(#rb-${uid})`} />
          </g>
        </g>

        {/* DESIGN label — float + main position */}
        <g className={`mf1-${uid}`}>
          <text
            className={`ml1-${uid}`}
            x="190" y="150"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="'Space Mono', monospace"
            fontSize="11"
            fontWeight="700"
            letterSpacing="1.5"
            fill="oklch(0.1 0 0)"
          >
            DESIGN
          </text>
        </g>

        {/* DEVELOPMENT label — float + main position */}
        <g className={`mf2-${uid}`}>
          <text
            className={`ml2-${uid}`}
            x="190" y="150"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="'Space Mono', monospace"
            fontSize="9"
            fontWeight="700"
            letterSpacing="1"
            fill="oklch(0.1 0 0)"
          >
            DEVELOPMENT
          </text>
        </g>

        {/* + — fixed at junction, fades in when merged */}
        <text
          className={`mbp-${uid}`}
          x="190" y="152"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Space Mono', monospace"
          fontSize="32"
          fontWeight="700"
          fill="oklch(0.1 0 0)"
        >
          +
        </text>
      </svg>
    </div>
  )
}
