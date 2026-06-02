import { createRoot } from "react-dom/client";
import "./index.css";
import { PageShell } from "./PageShell";
import Index from "./pages/Index";

createRoot(document.getElementById("root")!).render(
  <PageShell><Index /></PageShell>
);
