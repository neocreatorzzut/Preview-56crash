import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: "#0a0a0a",
        color: "#e5e5e5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        margin: 0,
        textAlign: "center",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", margin: 0 }}>404 — Página no encontrada</h1>
      <p style={{ color: "#888", margin: 0 }}>La página que buscas no existe.</p>
      <Link href="/" style={{ color: "#e11d48", textDecoration: "none" }}>
        Volver al inicio
      </Link>
    </div>
  );
}
