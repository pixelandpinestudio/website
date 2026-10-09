"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "What we do" },
  { href: "#process", label: "How we work" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav wrap" id="top">
      <a href="#top" className="logo" onClick={close}>
        <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
          <rect width="32" height="32" rx="7" fill="#2f6b4c" />
          <path d="M16 5 L25 21 H7 Z" fill="#9cc4a8" />
          <rect x="14" y="21" width="4" height="6" fill="#f0b64a" />
          <rect x="21" y="6" width="4" height="4" fill="#f0b64a" />
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
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-outline" onClick={close}>
          Contact us
        </a>
      </nav>
    </header>
  );
}
