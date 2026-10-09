"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "../lib/site";
import { Arrow, Chevron, Logo, ServiceIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dark = pathname === "/" || pathname === "/about" || pathname.startsWith("/services");

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const cls = ["site-header", dark && !scrolled && !open ? "on-dark" : "solid", open ? "menu-open" : ""].join(" ");

  return (
    <header className={cls}>
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="The Pixel and Pine Studio, home">
          <Logo />
          <span>The Pixel and Pine Studio</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main">
          <div className="has-menu">
            <Link href="/services" className={pathname.startsWith("/services") ? "active" : undefined}>
              Services <Chevron />
            </Link>
            <div className="mega">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="mega-item">
                  <span className="mega-icon"><ServiceIcon name={s.icon} size={20} /></span>
                  <span>
                    <strong>{s.title}</strong>
                    <small>{s.tagline}</small>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className={pathname === "/about" ? "active" : undefined}>About</Link>
          <Link href="/#process">Approach</Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : undefined}>Contact</Link>
        </nav>

        <Link href="/contact" className="btn btn-sm header-cta">
          Start a project <Arrow size={14} />
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <div className="wrap">
          <p className="menu-label">Services</p>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="menu-link">
              {s.title} <Arrow />
            </Link>
          ))}
          <p className="menu-label">Company</p>
          <Link href="/about" className="menu-link">About <Arrow /></Link>
          <Link href="/#process" className="menu-link" onClick={() => setOpen(false)}>Approach <Arrow /></Link>
          <Link href="/contact" className="menu-link">Contact <Arrow /></Link>
          <Link href="/contact" className="btn btn-block">Start a project</Link>
        </div>
      </div>
    </header>
  );
}
