export default function WaveBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40">
      <svg
        className="absolute bottom-0 left-0 h-56 w-[300%] animate-[wave-move_22s_linear_infinite]"
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 c150,60 300,-60 600,0 c150,60 300,-60 600,0 c150,60 300,-60 600,0 c150,60 300,-60 600,0 L2400,200 L0,200 Z"
          fill="#3A3A3E"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 h-44 w-[300%] animate-[wave-move_30s_linear_infinite_reverse]"
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,130 c150,-80 300,80 600,0 c150,-80 300,80 600,0 c150,-80 300,80 600,0 c150,-80 300,80 600,0 L2400,200 L0,200 Z"
          fill="#232326"
        />
      </svg>
    </div>
  );
}