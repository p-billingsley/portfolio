import { useId } from 'react'

export function DesignDevAnimation() {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')

  return (
    <div
      className="relative w-full select-none"
      style={{ aspectRatio: '19/15', margin: '0 auto' }}
      aria-hidden="true"
    >
      <style>{`
        .mb1-${uid}, .ml1-${uid} { animation: mb1-${uid} 26s ease-in-out infinite; will-change: transform; }
        .mb2-${uid}, .ml2-${uid} { animation: mb2-${uid} 26s ease-in-out infinite; will-change: transform; }
        .mbw-${uid} { animation: mbw-${uid} 26s ease-in-out infinite; }
        .mf1-${uid} { animation: mf1-${uid} 3.7s ease-in-out infinite; }
        .mf2-${uid} { animation: mf2-${uid} 4.3s ease-in-out infinite; }

        /*
          Two-merge cycle (26 s). Y position changes only inside the merge.
          Merge 1: D1 (DESIGN TL / DEV BR) → rotate → D2 (DESIGN BL / DEV TR)
          Merge 2: D2 → rotate back → D1
        */
        @keyframes mb1-${uid} {
          0%,  10%  { transform: translate(-110px, -70px); }  /* D1 apart  */
          16%       { transform: translate( -29px, -23px); }  /* close     */
          18%, 27%  { transform: translate( -40px, -35px); }  /* D1 merged */
          37%, 46%  { transform: translate( -40px,  35px); }  /* D2 merged */
          50%, 60%  { transform: translate(-110px,  70px); }  /* D2 apart  */
          66%       { transform: translate( -29px,  23px); }  /* close     */
          68%, 77%  { transform: translate( -40px,  35px); }  /* D2 merged */
          87%, 96%  { transform: translate( -40px, -35px); }  /* D1 merged */
          100%      { transform: translate(-110px, -70px); }  /* D1 apart  */
        }
        @keyframes mb2-${uid} {
          0%,  10%  { transform: translate( 110px,  70px); }  /* D1 apart  */
          16%       { transform: translate(  29px,  23px); }  /* close     */
          18%, 27%  { transform: translate(  40px,  35px); }  /* D1 merged */
          37%, 46%  { transform: translate(  40px, -35px); }  /* D2 merged */
          50%, 60%  { transform: translate( 110px, -70px); }  /* D2 apart  */
          66%       { transform: translate(  29px, -23px); }  /* close     */
          68%, 77%  { transform: translate(  40px, -35px); }  /* D2 merged */
          87%, 96%  { transform: translate(  40px,  35px); }  /* D1 merged */
          100%      { transform: translate( 110px,  70px); }  /* D1 apart  */
        }
        @keyframes mbw-${uid} {
          0%, 17%, 48%, 67%, 97%, 100% { transform: scale(1);     }
          28%  { transform: scale(1.032); }
          38%  { transform: scale(0.974); }
          43%  { transform: scale(1.018); }
          78%  { transform: scale(1.032); }
          88%  { transform: scale(0.974); }
          93%  { transform: scale(1.018); }
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
      </svg>
    </div>
  )
}
