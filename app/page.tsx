"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = ["Services", "About", "YouTube", "Contact"];

const SERVICES = [
  {
    icon: "💧",
    title: "Pressure Washing",
    desc: "Driveways, patios, decks, siding — blasted spotless. We remove years of grime, mold, and weather damage in a single visit.",
    tags: ["Residential", "Commercial", "Driveways", "Roofs"],
  },
  {
    icon: "🚗",
    title: "Car Detailing",
    desc: "Paint correction, ceramic coating, interior deep clean. Your car deserves more than a gas station wash.",
    tags: ["Exterior", "Interior", "Ceramic Coat", "Paint Correction"],
  },
  {
    icon: "🎬",
    title: "YouTube Channel",
    desc: "Real talk from the field — business tips, mistakes to avoid, and behind-the-scenes from growing a service business from scratch.",
    tags: ["Business Tips", "How-Tos", "Stories", "Weekly"],
  },
];

const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "7+",   label: "Years Experience" },
  { value: "100K+",label: "YouTube Views" },
  { value: "2",    label: "Businesses" },
];

const TESTIMONIALS = [
  { name: "James R.",  role: "Homeowner",         stars: 5, text: "Kris showed up on time, worked fast, and my driveway looks brand new. Hired him twice already." },
  { name: "Monica T.", role: "Car Enthusiast",     stars: 5, text: "The ceramic coating job was flawless. You can tell he actually cares about the result." },
  { name: "Derek S.",  role: "YouTube Subscriber", stars: 5, text: "His YouTube advice literally saved me from making expensive rookie mistakes in my own business." },
];

const VIDEOS = [
  { title: "3 Mistakes That Almost Killed My Business",          views: "42K views", badge: "Business"  },
  { title: "How I Price Pressure Washing Jobs (Real Numbers)",   views: "31K views", badge: "Pricing"   },
  { title: "Ceramic Coating vs Wax: The Honest Answer",         views: "58K views", badge: "Detailing" },
];

const CONTACT_INFO = [
  { icon: "📍", label: "Service Area", val: "Greater Metro Area"  },
  { icon: "📱", label: "Phone",        val: "+1 (555) 000-0000"   },
  { icon: "✉️", label: "Email",        val: "kris@krispro.com"    },
];

const VALUES = ["Punctual. Always.", "Detail-obsessed.", "No job too dirty.", "Results you can see."];

function Stars({ n }) {
  return (
    <div className="star-row">
      {Array.from({ length: n }).map((_, i) => <span key={i} className="star">★</span>)}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className="root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;1,300&display=swap');

        /* ── RESET ───────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── ROOT ────────────────────────────────── */
        .root {
          font-family: 'Barlow', sans-serif;
          background: #08080c;
          color: #f0ede8;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── NOISE ───────────────────────────────── */
        .noise {
          position: fixed; inset: 0; pointer-events: none; z-index: 9999;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* ── TYPE ────────────────────────────────── */
        .bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.04em; }

        /* ── NAV ─────────────────────────────────── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 60px; padding: 0 20px;
          display: flex; align-items: center; justify-content: space-between;
          transition: background .3s, border-color .3s, backdrop-filter .3s;
          border-bottom: 1px solid transparent;
        }
        .nav.on {
          background: rgba(8,8,12,.97);
          border-color: rgba(255,255,255,.05);
          backdrop-filter: blur(12px);
        }
        .logo { display: flex; align-items: center; gap: 8px; }
        .diamond {
          width: 8px; height: 8px; background: #00d4ff; flex-shrink: 0;
          clip-path: polygon(50% 0%,100% 50%,50% 100%,0% 50%);
        }
        .logo-text { font-family:'Bebas Neue',sans-serif; font-size:20px; letter-spacing:.1em; }
        .cyan { color: #00d4ff; }

        /* desktop links — hidden by default (mobile first) */
        .desk-links { display: none; align-items: center; gap: 28px; }

        .nav-btn {
          font-family:'Barlow',sans-serif; font-weight:600; font-size:11px;
          letter-spacing:.18em; text-transform:uppercase;
          color:#a09890; background:none; border:none; cursor:pointer;
          transition: color .2s;
        }
        .nav-btn:hover { color: #00d4ff; }

        .hamburger {
          background:none; border:none; color:#f0ede8;
          font-size:22px; cursor:pointer; line-height:1;
        }

        /* mobile overlay */
        .mob-menu {
          position:fixed; inset:0; z-index:99; background:#08080c;
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:32px;
        }
        .mob-menu .nav-btn { font-size:18px; color:#f0ede8; }

        /* ── BUTTONS ─────────────────────────────── */
        .btn-p {
          font-family:'Barlow',sans-serif; font-weight:600; font-size:11px;
          letter-spacing:.2em; text-transform:uppercase;
          background:#00d4ff; color:#08080c; border:none;
          padding:14px 28px; cursor:pointer;
          clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
          transition:background .2s,transform .15s; white-space:nowrap;
        }
        .btn-p:hover { background:#fff; transform:translateY(-2px); }

        .btn-o {
          font-family:'Barlow',sans-serif; font-weight:600; font-size:11px;
          letter-spacing:.2em; text-transform:uppercase;
          background:transparent; color:#f0ede8;
          border:1px solid rgba(240,237,232,.3);
          padding:14px 28px; cursor:pointer; white-space:nowrap;
          transition:border-color .2s,color .2s;
        }
        .btn-o:hover { border-color:#00d4ff; color:#00d4ff; }

        /* ── SECTION LABEL ───────────────────────── */
        .lbl {
          font-size:10px; font-weight:600; letter-spacing:.3em; text-transform:uppercase;
          color:#00d4ff; margin-bottom:14px;
          display:flex; align-items:center; gap:10px;
        }
        .lbl::after { content:''; width:32px; height:1px; background:#00d4ff; }

        /* ── SECTION WRAPPER ─────────────────────── */
        .sec { padding: 72px 20px; }
        .inner { max-width:1100px; margin:0 auto; }

        /* ── HERO ────────────────────────────────── */
        .hero {
          min-height:100svh; display:flex; align-items:center;
          position:relative; overflow:hidden;
          padding: 100px 20px 72px;
        }
        .hero-glow {
          position:absolute; top:25%; right:-100px;
          width:400px; height:400px;
          background:radial-gradient(circle,rgba(0,212,255,.07) 0%,transparent 70%);
          pointer-events:none;
        }
        .hero-grid {
          position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px);
          background-size:60px 60px;
        }
        .hero-content { position:relative; width:100%; }

        .h1 {
          font-family:'Bebas Neue',sans-serif; letter-spacing:.04em;
          font-size:clamp(64px,18vw,160px); line-height:.92;
          margin-bottom:24px;
        }
        .outline { color:#00d4ff; -webkit-text-stroke:2px #00d4ff; -webkit-text-fill-color:transparent; }
        .solid-cyan { color:#00d4ff; }

        .hero-sub {
          font-size:16px; font-weight:300; font-style:italic;
          line-height:1.7; color:#8a8480; margin-bottom:36px; max-width:480px;
        }

        /* mobile: stacked full-width buttons */
        .cta { display:flex; flex-direction:column; gap:12px; }
        .cta .btn-p, .cta .btn-o { width:100%; text-align:center; }

        /* ── STATS ───────────────────────────────── */
        .stats-band {
          border-top:1px solid rgba(255,255,255,.06);
          border-bottom:1px solid rgba(255,255,255,.06);
        }
        /* 2-col on mobile */
        .stats-grid {
          max-width:1100px; margin:0 auto;
          display:grid; grid-template-columns:1fr 1fr;
        }
        .stat-item {
          text-align:center; padding:28px 16px;
          border-right:1px solid rgba(255,255,255,.06);
          border-bottom:1px solid rgba(255,255,255,.06);
        }
        .stat-item:nth-child(2n)   { border-right:none; }
        .stat-item:nth-child(3),
        .stat-item:nth-child(4)    { border-bottom:none; }
        .stat-val { font-family:'Bebas Neue',sans-serif; font-size:44px; color:#00d4ff; line-height:1; }
        .stat-lbl { font-size:10px; letter-spacing:.18em; text-transform:uppercase; color:#5a5650; margin-top:6px; }

        /* ── SERVICE CARDS ───────────────────────── */
        /* single column on mobile */
        .services-grid { display:grid; grid-template-columns:1fr; gap:2px; margin-top:40px; }
        .svc-card {
          background:#0f0f16; border:1px solid rgba(255,255,255,.06);
          padding:32px 24px; position:relative; overflow:hidden;
          transition:border-color .3s,transform .3s;
        }
        .svc-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,#00d4ff,transparent);
          opacity:0; transition:opacity .3s;
        }
        .svc-card:hover { border-color:rgba(0,212,255,.25); transform:translateY(-3px); }
        .svc-card:hover::before { opacity:1; }
        .svc-icon { font-size:32px; margin-bottom:16px; }
        .svc-title { font-family:'Bebas Neue',sans-serif; letter-spacing:.04em; font-size:28px; margin-bottom:12px; }
        .svc-desc  { font-size:14px; line-height:1.7; color:#7a7470; font-weight:300; margin-bottom:20px; }
        .tags { display:flex; flex-wrap:wrap; gap:6px; }
        .tag {
          font-size:9px; font-weight:600; letter-spacing:.15em; text-transform:uppercase;
          color:#00d4ff; background:rgba(0,212,255,.08); border:1px solid rgba(0,212,255,.2);
          padding:4px 9px;
        }

        /* ── ABOUT ───────────────────────────────── */
        .about-sec { background:#0a0a10; border-top:1px solid rgba(255,255,255,.05); border-bottom:1px solid rgba(255,255,255,.05); }
        /* stacked on mobile */
        .about-grid { display:grid; grid-template-columns:1fr; gap:48px; }
        .about-h2 { font-family:'Bebas Neue',sans-serif; letter-spacing:.04em; font-size:clamp(38px,10vw,70px); line-height:1; margin-bottom:24px; }
        .about-p  { font-size:15px; line-height:1.8; color:#7a7470; font-weight:300; margin-bottom:20px; }
        .vals-panel {
          background:linear-gradient(135deg,#0f0f16,#1a1a24);
          border:1px solid rgba(255,255,255,.06);
          padding:28px 24px; position:relative;
        }
        .vals-line { position:absolute; top:-1px; left:28px; right:28px; height:2px; background:linear-gradient(90deg,transparent,#00d4ff,transparent); }
        .val-row  { display:flex; align-items:center; gap:14px; padding:14px 0; border-bottom:1px solid rgba(255,255,255,.05); }
        .val-row:last-child { border-bottom:none; }
        .val-dot  { width:6px; height:6px; background:#00d4ff; border-radius:50%; flex-shrink:0; }
        .val-text { font-family:'Bebas Neue',sans-serif; letter-spacing:.04em; font-size:20px; }
        .corner   { position:absolute; bottom:-12px; right:-12px; width:56px; height:56px; border:2px solid rgba(0,212,255,.2); }

        /* ── YOUTUBE ─────────────────────────────── */
        /* stacked on mobile */
        .yt-header { display:flex; flex-direction:column; gap:24px; margin-bottom:40px; }
        .yt-h2 { font-family:'Bebas Neue',sans-serif; letter-spacing:.04em; font-size:clamp(38px,10vw,70px); line-height:1; }
        .yt-sub  { font-size:14px; line-height:1.7; color:#7a7470; font-weight:300; margin-bottom:20px; }
        .yt-btn  {
          display:inline-flex; align-items:center; gap:10px;
          font-weight:600; font-size:11px; letter-spacing:.18em; text-transform:uppercase;
          color:#ff4444; background:rgba(255,68,68,.08); border:1px solid rgba(255,68,68,.25);
          padding:13px 22px; cursor:pointer; text-decoration:none;
          transition:background .2s,border-color .2s;
        }
        .yt-btn:hover { background:rgba(255,68,68,.15); border-color:#ff4444; }
        /* single col on mobile */
        .vids-grid { display:grid; grid-template-columns:1fr; gap:12px; }
        .vid-card { background:#0f0f16; border:1px solid rgba(255,255,255,.06); overflow:hidden; cursor:pointer; transition:border-color .25s; }
        .vid-card:hover { border-color:rgba(255,68,68,.3); }
        .vid-thumb { height:160px; background:linear-gradient(135deg,#0d0d18,#1a0a0a); display:flex; align-items:center; justify-content:center; position:relative; }
        .vid-play { width:46px; height:46px; background:rgba(255,68,68,.9); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:16px; }
        .vid-badge-wrap { position:absolute; top:10px; left:10px; background:rgba(255,68,68,.15); border:1px solid rgba(255,68,68,.3); padding:3px 8px; }
        .vid-badge { font-size:9px; letter-spacing:.15em; text-transform:uppercase; color:#ff4444; }
        .vid-info  { padding:16px; }
        .vid-title { font-size:13px; font-weight:600; line-height:1.4; margin-bottom:6px; }
        .vid-views { font-size:11px; color:#5a5650; }

        /* ── TESTIMONIALS ────────────────────────── */
        .testi-sec { background:#0a0a10; border-top:1px solid rgba(255,255,255,.05); }
        /* single col on mobile */
        .testi-grid { display:grid; grid-template-columns:1fr; gap:2px; margin-top:40px; }
        .testi-card { background:#0f0f16; border:1px solid rgba(255,255,255,.06); padding:28px 24px; }
        .star-row { display:flex; gap:3px; margin-bottom:12px; }
        .star { color:#00d4ff; font-size:13px; }
        .testi-text { font-size:14px; line-height:1.7; font-style:italic; color:#9a9490; font-weight:300; margin-bottom:20px; }
        .rev-name { font-weight:600; font-size:14px; }
        .rev-role { font-size:10px; color:#5a5650; letter-spacing:.1em; text-transform:uppercase; }

        /* ── CONTACT ─────────────────────────────── */
        /* stacked on mobile */
        .contact-grid { display:grid; grid-template-columns:1fr; gap:48px; }
        .contact-h2 { font-family:'Bebas Neue',sans-serif; letter-spacing:.04em; font-size:clamp(38px,10vw,70px); line-height:1; margin-bottom:20px; }
        .contact-p  { font-size:15px; line-height:1.8; color:#7a7470; font-weight:300; }
        .cinfo-list { display:flex; flex-direction:column; gap:18px; margin-top:32px; }
        .cinfo-row  { display:flex; gap:14px; align-items:flex-start; }
        .cinfo-icon { font-size:16px; margin-top:2px; }
        .cinfo-lbl  { font-size:9px; letter-spacing:.15em; text-transform:uppercase; color:#5a5650; margin-bottom:3px; }
        .cinfo-val  { font-size:14px; }
        .cform { display:flex; flex-direction:column; gap:14px; }
        .cinput {
          width:100%; background:#0f0f16; border:1px solid rgba(255,255,255,.1);
          color:#f0ede8; padding:13px 16px;
          font-family:'Barlow',sans-serif; font-size:14px; outline:none;
          transition:border-color .2s;
        }
        .cinput:focus { border-color:#00d4ff; }
        .cinput::placeholder { color:rgba(240,237,232,.3); }

        /* ── FOOTER ──────────────────────────────── */
        .footer {
          border-top:1px solid rgba(255,255,255,.06);
          padding:32px 20px;
          display:flex; flex-direction:column; align-items:center; gap:20px; text-align:center;
        }
        .footer-logo { display:flex; align-items:center; gap:8px; }
        .footer-logo-txt { font-family:'Bebas Neue',sans-serif; font-size:18px; letter-spacing:.1em; }
        .footer-copy { font-size:11px; color:#3a3430; }
        .socials { display:flex; gap:20px; }

        /* ── ANIMATIONS ──────────────────────────── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .f1 { animation:fadeUp .7s ease forwards; }
        .f2 { animation:fadeUp .7s .12s ease forwards; opacity:0; }
        .f3 { animation:fadeUp .7s .24s ease forwards; opacity:0; }
        .f4 { animation:fadeUp .7s .36s ease forwards; opacity:0; }

        /* ════════════════════════════════════
           TABLET  ≥ 640px
        ════════════════════════════════════ */
        @media (min-width: 640px) {
          .nav   { padding:0 32px; height:64px; }
          .hero  { padding:110px 32px 80px; }
          .sec   { padding:96px 32px; }

          /* hero CTAs side by side */
          .cta { flex-direction:row; flex-wrap:wrap; }
          .cta .btn-p, .cta .btn-o { width:auto; }

          /* stats 4-col, no bottom borders */
          .stats-grid { grid-template-columns:repeat(4,1fr); }
          .stat-item { border-right:1px solid rgba(255,255,255,.06); border-bottom:none; }
          .stat-item:last-child { border-right:none; }
          .stat-val { font-size:50px; }

          /* 2-col grids */
          .services-grid { grid-template-columns:1fr 1fr; }
          .vids-grid     { grid-template-columns:1fr 1fr; }
          .testi-grid    { grid-template-columns:1fr 1fr; }

          /* footer row */
          .footer { flex-direction:row; justify-content:space-between; text-align:left; }
        }

        /* ════════════════════════════════════
           DESKTOP  ≥ 1024px
        ════════════════════════════════════ */
        @media (min-width: 1024px) {
          .nav   { padding:0 48px; }
          .hero  { padding:120px 48px 100px; }
          .sec   { padding:120px 48px; }

          /* show desktop nav, hide hamburger */
          .desk-links { display:flex; }
          .hamburger  { display:none; }

          /* 3-col grids */
          .services-grid { grid-template-columns:repeat(3,1fr); }
          .vids-grid     { grid-template-columns:repeat(3,1fr); }
          .testi-grid    { grid-template-columns:repeat(3,1fr); }

          /* about side-by-side */
          .about-grid { grid-template-columns:1fr 1fr; gap:80px; }
          .vals-panel { padding:44px; }
          .val-text   { font-size:24px; }

          /* youtube header side-by-side */
          .yt-header { flex-direction:row; justify-content:space-between; align-items:flex-start; }

          /* contact side-by-side */
          .contact-grid { grid-template-columns:1fr 1fr; gap:80px; }

          .footer { padding:40px 48px; }
        }
      `}</style>

      <div className="noise" />

      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? " on" : ""}`}>
        <div className="logo">
          <div className="diamond" />
          <span className="logo-text">Kris<span className="cyan">Pro</span></span>
        </div>

        <div className="desk-links">
          {NAV_LINKS.map(l => <button key={l} className="nav-btn">{l}</button>)}
          <button className="btn-p" style={{ padding:"10px 18px", fontSize:"10px" }}>Get a Quote</button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="mob-menu">
          {NAV_LINKS.map(l => <button key={l} className="nav-btn" onClick={() => setMenuOpen(false)}>{l}</button>)}
          <button className="btn-p" onClick={() => setMenuOpen(false)}>Get a Quote</button>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="lbl f1">Eastern European Hustle · Built Different</div>
          <h1 className="h1 f2">
            We Don't<br />
            Just <span className="outline">Clean</span>.<br />
            We <span className="solid-cyan">Transform</span>.
          </h1>
          <p className="hero-sub f3">
            Pressure washing. Car detailing. Real business stories on YouTube.
            Kris brings Eastern European work ethic to every job — no shortcuts, no excuses.
          </p>
          <div className="cta f4">
            <button className="btn-p">Book a Service</button>
            <button className="btn-o">Watch on YouTube →</button>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-band">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-val">{s.value}</div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="sec">
        <div className="inner">
          <div className="lbl">What We Do</div>
          <h2 className="bebas" style={{ fontSize:"clamp(38px,10vw,80px)", lineHeight:1 }}>
            Three Ways<br />Kris Works For You
          </h2>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="svc-card">
                <div className="svc-icon">{s.icon}</div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
                <div className="tags">{s.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-sec sec">
        <div className="inner">
          <div className="about-grid">
            <div>
              <div className="lbl">About Kris</div>
              <h2 className="about-h2">
                Born in Eastern<br />Europe. Built in<br />
                <span className="solid-cyan">Hard Work</span>.
              </h2>
              <p className="about-p">
                Kris moved to build something from scratch — no safety nets, no shortcuts. He started with a pressure washer and a truck, and grew it into two successful businesses through relentless effort and attention to detail.
              </p>
              <p className="about-p">
                Now he shares what he's learned — the wins, the mistakes, the unglamorous reality of building a service business — on his YouTube channel so others don't have to learn the hard way.
              </p>
              <button className="btn-p">Work With Kris</button>
            </div>
            <div style={{ position:"relative" }}>
              <div className="vals-panel">
                <div className="vals-line" />
                {VALUES.map((v, i) => (
                  <div key={i} className="val-row">
                    <div className="val-dot" />
                    <span className="val-text bebas">{v}</span>
                  </div>
                ))}
              </div>
              <div className="corner" />
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE ── */}
      <section className="sec">
        <div className="inner">
          <div className="yt-header">
            <div>
              <div className="lbl">YouTube</div>
              <h2 className="yt-h2">Real Stories.<br /><span style={{ color:"#ff4444" }}>Real Lessons</span>.</h2>
            </div>
            <div>
              <p className="yt-sub">Subscribe and join thousands of entrepreneurs watching Kris share unfiltered business advice — weekly episodes, zero fluff.</p>
              <a className="yt-btn" href="#">
                <span style={{ fontSize:"16px" }}>▶</span>
                Subscribe on YouTube
              </a>
            </div>
          </div>
          <div className="vids-grid">
            {VIDEOS.map((v, i) => (
              <div key={i} className="vid-card">
                <div className="vid-thumb">
                  <div className="vid-play">▶</div>
                  <div className="vid-badge-wrap"><span className="vid-badge">{v.badge}</span></div>
                </div>
                <div className="vid-info">
                  <div className="vid-title">{v.title}</div>
                  <div className="vid-views">{v.views}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testi-sec sec">
        <div className="inner">
          <div className="lbl">Reviews</div>
          <h2 className="bebas" style={{ fontSize:"clamp(38px,10vw,70px)", lineHeight:1 }}>
            Don't Take<br />Our Word For It
          </h2>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testi-card">
                <Stars n={t.stars} />
                <p className="testi-text">"{t.text}"</p>
                <div className="rev-name">{t.name}</div>
                <div className="rev-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="sec">
        <div className="inner">
          <div className="contact-grid">
            <div>
              <div className="lbl">Get in Touch</div>
              <h2 className="contact-h2">Ready to<br /><span className="solid-cyan">Get Started</span>?</h2>
              <p className="contact-p">Whether it's a pressure wash job, a full car detail, or a question about business — Kris responds personally.</p>
              <div className="cinfo-list">
                {CONTACT_INFO.map((c, i) => (
                  <div key={i} className="cinfo-row">
                    <span className="cinfo-icon">{c.icon}</span>
                    <div>
                      <div className="cinfo-lbl">{c.label}</div>
                      <div className="cinfo-val">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cform">
              <input className="cinput" placeholder="Your Name" />
              <input className="cinput" placeholder="Email Address" />
              <select className="cinput" defaultValue="">
                <option value="" disabled>Service Interested In…</option>
                <option>Pressure Washing</option>
                <option>Car Detailing</option>
                <option>Both</option>
                <option>YouTube / Collaboration</option>
              </select>
              <textarea className="cinput" rows={5} placeholder="Tell Kris what you need…" style={{ resize:"vertical" }} />
              <button className="btn-p" style={{ alignSelf:"flex-start" }}>Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-logo">
          <div className="diamond" />
          <span className="footer-logo-txt">Kris<span className="cyan">Pro</span></span>
        </div>
        <span className="footer-copy">© 2025 KrisPro. Pressure Washing & Car Detailing.</span>
        <div className="socials">
          {["Instagram", "YouTube", "TikTok"].map(s => (
            <button key={s} className="nav-btn" style={{ fontSize:"11px" }}>{s}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}
