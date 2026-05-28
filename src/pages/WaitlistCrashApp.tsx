import { useState } from 'react';
import '../styles/waitlist.css';

// ── CONFIGURACIÓN DEL FORMULARIO ───────────────────────────────────────────────
// Para registrar correos reales, elige una opción:
//
// OPCIÓN A — Formspree (gratis, sin backend):
//   1. Ve a https://formspree.io → crea cuenta → "New Form"
//   2. Copia la URL (ej: "https://formspree.io/f/xbljkpnr")
//   3. Pégala en FORM_ENDPOINT abajo
//
// OPCIÓN B — cualquier endpoint REST que acepte POST con JSON:
//   { nombre: string, email: string, telefono: string }
//
// Si FORM_ENDPOINT queda vacío → modo demo (muestra éxito sin enviar datos).
// ──────────────────────────────────────────────────────────────────────────────
const FORM_ENDPOINT = '';

const TICKER_ITEMS = [
  'Rutinas Personalizadas',
  'Seguimiento de Progreso',
  'Calendario de Entrenos',
  'MMA & Kickboxing',
  'Sin Excusas',
];

const FEATURES = [
  {
    num: '01',
    title: 'Calendario de Entrenos',
    desc: 'Visualiza tu mes completo. Sabe exactamente qué toca cada día.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Mapa Muscular',
    desc: 'Ve qué músculos trabajaste y cuáles necesitan descanso.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Progreso Real',
    desc: 'Registra, compara y supera tus marcas semana a semana.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'MMA & Kickboxing',
    desc: 'Contenido diseñado para artes marciales y entrenamiento de combate.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const FOOTER_LINKS = {
  Features: [
    'Calendario de Entrenos',
    'Mapa Muscular',
    'Seguimiento de Progreso',
    'Rutinas MMA & Kickboxing',
    'Modo Offline (próximo)',
    'Nutrición integrada (próximo)',
    'Ranking del gym (próximo)',
  ],
  Legal: [
    'Política de Privacidad',
    'Términos y Condiciones',
    'Política de Devoluciones',
    'Política de Cookies',
    'HABEAS DATA',
  ],
  Soporte: [
    'Preguntas Frecuentes',
    'Contacto',
    'Reportar un problema',
    '¿Qué es una PWA?',
  ],
};

export default function WaitlistCrashApp() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });
  const [submitted, setSubmitted] = useState(false);
  const [gridError, setGridError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, email, telefono } = form;

    if (!nombre.trim() || !email.trim() || !telefono.trim()) {
      setGridError(true);
      setTimeout(() => setGridError(false), 900);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      setTimeout(() => setEmailError(false), 1000);
      return;
    }

    setLoading(true);

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
      } catch {
        // muestra éxito de todas formas
      }
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="wl-page">
      <div className="wl-noise" aria-hidden="true" />

      {/* Promo Banner */}
      <div className="wl-promo-banner">
        <span className="wl-promo-badge">SOLO WAITLIST</span>
        3 MESES DE ACCESO COMPLETO POR $10 USD — OFERTA EXCLUSIVA
        <span className="wl-promo-badge">TIEMPO LIMITADO</span>
      </div>

      {/* Nav */}
      <nav className="wl-nav">
        <div className="wl-logo">CRASH//</div>
        <div className="wl-nav-tag">Acceso Anticipado</div>
      </nav>

      {/* Ticker */}
      <div className="wl-ticker-wrap">
        <div className="wl-ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="wl-ticker-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="wl-hero">
        <div className="wl-hero-content">
          <div className="wl-hero-label">Próximamente — Waitlist Abierto</div>
          <h1 className="wl-h1">
            Crash Training<br />
            <span>App.</span>
          </h1>
          <p className="wl-hero-sub">
            La app de tu gym, diseñada para atletas reales. Rutinas, progreso y calendario
            de entrenamiento — todo en un solo lugar. Entra primero.
          </p>
        </div>
        <div className="wl-hero-visual">
          <div className="wl-particle-field">
            <div className="wl-scatter" />
          </div>
        </div>
      </section>

      {/* Offer Block */}
      <div className="wl-offer-block">
        <div className="wl-offer-inner">
          <div className="wl-offer-left">
            <span className="wl-offer-tag">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#cc1a1a" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Oferta exclusiva waitlist
            </span>
            <div className="wl-offer-title">
              3 Meses de Acceso<br />Completo
            </div>
            <p className="wl-offer-desc">
              Inscríbete hoy y obtén los primeros 3 meses por el precio de uno.
              Sin trucos — solo recompensa por entrar temprano.
            </p>
          </div>
          <div className="wl-offer-price">
            <span className="wl-price-old">$109.500 COP · $30 USD valor normal</span>
            <span className="wl-price-new">$36.500</span>
            <span className="wl-price-usd">≈ $10 USD</span>
            <span className="wl-price-period">COP · 3 meses · pago único</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="wl-stats-wrap">
        <div className="wl-stats-inner">
          <div className="wl-stat">
            <span className="wl-stat-num">300+</span>
            <span className="wl-stat-label">Miembros Activos</span>
          </div>
          <div className="wl-stat">
            <span className="wl-stat-num">PWA</span>
            <span className="wl-stat-label">Sin Descarga</span>
          </div>
          <div className="wl-stat">
            <span className="wl-stat-num">$10</span>
            <span className="wl-stat-label">/ mes normal</span>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="wl-features">
        <div className="wl-features-grid">
          {FEATURES.map((f) => (
            <div key={f.num} className="wl-feature" data-num={f.num}>
              <span className="wl-feature-icon">{f.icon}</span>
              <div className="wl-feature-title">{f.title}</div>
              <p className="wl-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="wl-form-section">
        <div className="wl-form-header">
          <h2 className="wl-form-h2">Entra a la<br />lista.</h2>
          <p className="wl-form-sub">Inscríbete y bloquea tu oferta de 3 meses por $36.500 COP</p>
        </div>

        {submitted ? (
          <div className="wl-success-state">
            <svg className="wl-success-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <h3 className="wl-success-h3">Oferta bloqueada.</h3>
            <p className="wl-success-p">
              Te enviamos tu código cuando lancemos — 3 meses por $36.500 COP garantizados.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className={`wl-form-grid${gridError ? ' wl-error' : ''}`}>
              <div className="wl-field">
                <label htmlFor="wl-nombre">Nombre Completo</label>
                <input
                  id="wl-nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
              <div className="wl-field">
                <label htmlFor="wl-email">Correo Electrónico</label>
                <input
                  id="wl-email"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={emailError ? 'wl-input-error' : ''}
                />
              </div>
              <div className="wl-field">
                <label htmlFor="wl-telefono">Teléfono</label>
                <input
                  id="wl-telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+57 300 000 0000"
                  value={form.telefono}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>
            </div>
            <button type="submit" className="wl-submit-btn" disabled={loading}>
              {loading ? 'Enviando...' : 'Reservar mi oferta'}
              &nbsp;<span className="wl-arrow">→</span>
            </button>
            <p className="wl-form-footnote">Sin spam. Te contactamos con tu código cuando lancemos.</p>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="wl-footer-rich">
        <div className="wl-footer-top">
          <div className="wl-footer-brand">
            <span className="wl-logo">CRASH//</span>
            <p>La app de entrenamiento de tu gym. Diseñada para atletas reales, sin excusas.</p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <span className="wl-footer-col-title">{title}</span>
              <ul className="wl-footer-links">
                {links.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="wl-footer-bottom">
          <span className="wl-footer-bottom-text">© 2026 Crash Training App — Todos los derechos reservados</span>
          <span className="wl-footer-badge">PWA · Sin descarga</span>
        </div>
      </footer>
    </div>
  );
}
