import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Horarios from "./pages/Horarios";
import Sucursales from "./pages/Sucursales";
import Equipo from "./pages/Equipo";
import WaitlistCrashApp from "./pages/WaitlistCrashApp";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/waitlist_crash_app" element={<WaitlistCrashApp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
