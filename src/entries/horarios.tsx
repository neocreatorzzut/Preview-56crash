import { createRoot } from 'react-dom/client';
import '../index.css';
import { PageShell } from '../PageShell';
import Horarios from '../pages/Horarios';

createRoot(document.getElementById('root')!).render(
  <PageShell><Horarios /></PageShell>
);
