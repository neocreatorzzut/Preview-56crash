import { createRoot } from 'react-dom/client';
import '../index.css';
import { PageShell } from '../PageShell';
import Sucursales from '../pages/Sucursales';

createRoot(document.getElementById('root')!).render(
  <PageShell><Sucursales /></PageShell>
);
