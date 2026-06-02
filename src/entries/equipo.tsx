import { createRoot } from 'react-dom/client';
import '../index.css';
import { PageShell } from '../PageShell';
import Equipo from '../pages/Equipo';

createRoot(document.getElementById('root')!).render(
  <PageShell><Equipo /></PageShell>
);
