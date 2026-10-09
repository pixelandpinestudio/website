type P = { size?: number; className?: string };
const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const Arrow = ({ size = 16, className }: P) => (
  <svg {...base(size)} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Check = ({ size = 16, className }: P) => (
  <svg {...base(size)} className={className}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
export const Chevron = ({ size = 14, className }: P) => (
  <svg {...base(size)} className={className}><path d="M6 9l6 6 6-6" /></svg>
);
export const Plus = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="M12 5v14M5 12h14" /></svg>
);
export const Chart = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></svg>
);
export const Megaphone = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}><path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1zM17 8.5a5 5 0 0 1 0 7M20 6a8.5 8.5 0 0 1 0 12" /></svg>
);
export const People = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6" /></svg>
);
export const Shield = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>
);
export const Target = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
);
export const Layers = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg>
);
export const Clock = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Doc = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
);
export const Globe = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
);

export const ServiceIcon = ({ name, size }: { name: "chart" | "megaphone" | "people"; size?: number }) =>
  name === "chart" ? <Chart size={size} /> : name === "megaphone" ? <Megaphone size={size} /> : <People size={size} />;

export const Logo = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="logo-mark">
    <rect width="32" height="32" rx="8" fill="currentColor" />
    <path d="M16 6.5 L24 20.5 H8 Z" fill="var(--logo-fg)" />
    <rect x="14.25" y="20.5" width="3.5" height="5" fill="var(--logo-fg)" />
    <rect x="21" y="6.5" width="3.5" height="3.5" fill="var(--accent-bright)" />
  </svg>
);
