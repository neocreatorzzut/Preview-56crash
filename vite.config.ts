import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        horarios: path.resolve(__dirname, "horarios/index.html"),
        sucursales: path.resolve(__dirname, "sucursales/index.html"),
        equipo: path.resolve(__dirname, "equipo/index.html"),
        waitlist_crash_app: path.resolve(__dirname, "waitlist_crash_app/index.html"),
      },
    },
  },
}));
