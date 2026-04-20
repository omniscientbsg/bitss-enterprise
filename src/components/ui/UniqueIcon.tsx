export function UniqueIcon({ type, className = "" }: { type: string, className?: string }) {
  // A deterministic way to render unique enterprise-grade abstract SVG icons
  const renderGeometry = () => {
    switch (type) {
      case "software":
        return <path d="M4 4h16v16H4zM4 12h16M12 4v16" stroke="currentColor" fill="none" strokeWidth="1.5" />;
      case "mobile":
        return <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 16h.01" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" />;
      case "ai":
        return (
          <>
            <circle cx="12" cy="12" r="3" stroke="currentColor" fill="none" strokeWidth="1.5" />
            <path d="M12 2v5M12 17v5M2 12h5M17 12h5M5.5 5.5l3.5 3.5M15 15l3.5 3.5M5.5 18.5l3.5-3.5M15 9l3.5-3.5" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" />
          </>
        );
      case "ecommerce":
        return <path d="M3 3h2l1 5h13l1-5h2M6 8l2 10h8l2-10M9 21h.01M15 21h.01" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" />;
      case "iot":
        return <path d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10-5v10l10 5 10-5V7l-10 5z" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinejoin="round" />;
      case "analytics":
        return <path d="M3 21h18M5 18v-8M12 18v-12M19 18v-5M5 10l7-5 7 5" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />;
      case "identity":
        return <path d="M12 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0 2c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" stroke="currentColor" fill="none" strokeWidth="1.5" />;
      case "edge":
        return (
          <>
            <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" fill="none" strokeWidth="1.5" />
            <rect x="16" y="2" width="6" height="6" rx="1" stroke="currentColor" fill="none" strokeWidth="1.5" />
            <rect x="2" y="16" width="6" height="6" rx="1" stroke="currentColor" fill="none" strokeWidth="1.5" />
            <rect x="16" y="16" width="6" height="6" rx="1" stroke="currentColor" fill="none" strokeWidth="1.5" />
            <path d="M8 5h8M8 19h8M5 8v8M19 8v8" stroke="currentColor" fill="none" strokeWidth="1.5" />
          </>
        );
      default:
        return <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" fill="none" strokeWidth="1.5" />;
    }
  };

  return (
    <svg viewBox="0 0 24 24" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      {renderGeometry()}
    </svg>
  );
}
