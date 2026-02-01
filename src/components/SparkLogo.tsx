const SparkLogo = () => {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 blur-3xl bg-primary/30 animate-pulse-slow rounded-full scale-150" />
      
      {/* Main spark icon */}
      <svg
        viewBox="0 0 48 48"
        className="relative w-16 h-16 md:w-20 md:h-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43, 100%, 65%)" />
            <stop offset="100%" stopColor="hsl(35, 100%, 45%)" />
          </linearGradient>
        </defs>
        <path
          d="M24 4L28 18L42 14L32 24L42 34L28 30L24 44L20 30L6 34L16 24L6 14L20 18L24 4Z"
          fill="url(#sparkGradient)"
          className="drop-shadow-lg"
        />
      </svg>
    </div>
  );
};

export default SparkLogo;
