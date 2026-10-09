"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#data", label: "Data", tone: "data" },
  { href: "#marketing", label: "Marketing", tone: "mkt" },
  { href: "#staffing", label: "Staffing", tone: "staff" },
  { href: "#process", label: "Process", tone: "" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`nav-shell${scrolled || open ? " scrolled" : ""}`}>
      <div className="nav wrap">
        <a href="#top" className="logo" onClick={close}>
          <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#0f2a1f" stroke="rgba(255,255,255,.15)" />
            <path d="M16 5 L25 21 H7 Z" fill="#34d399" />
            <rect x="14" y="21" width="4" height="6" fill="#fbbf24" />
            <rect x="21" y="6" width="4" height="4" fill="#a78bfa" />
          </svg>
          <span>The Pixel and Pine Studio</span>
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav id="site-menu" className={open ? "open" : undefined}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className={l.tone ? `t-${l.tone}` : undefined}>
              {l.tone && <i className="nav-dot" aria-hidden="true" />}
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={close}>
            Contact us
          </a>
        </nav>
      </div>
    </div>
  );
}
