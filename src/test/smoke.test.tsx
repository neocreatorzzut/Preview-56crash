import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { PageShell } from "../PageShell";
import Index from "../pages/Index";
import Horarios from "../pages/Horarios";
import Sucursales from "../pages/Sucursales";
import Equipo from "../pages/Equipo";
import WaitlistCrashApp from "../pages/WaitlistCrashApp";

describe("pages render without crashing", () => {
  it("Index", () => {
    const { container } = render(<PageShell><Index /></PageShell>);
    expect(container.querySelector("nav")).toBeTruthy();
  });
  it("Horarios", () => {
    render(<PageShell><Horarios /></PageShell>);
  });
  it("Sucursales", () => {
    render(<PageShell><Sucursales /></PageShell>);
  });
  it("Equipo", () => {
    render(<PageShell><Equipo /></PageShell>);
  });
  it("Waitlist", () => {
    render(<WaitlistCrashApp />);
  });
});
