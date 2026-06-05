# Crash Training — Guía del proyecto para Claude

## Stack

- **Framework**: Next.js 14 App Router con `output: "export"` (static export para Cloudflare Pages)
- **Estilos**: Tailwind CSS + shadcn/ui + CSS custom en `src/styles/waitlist.css`
- **Lenguaje**: TypeScript
- **Deploy**: Cloudflare Pages — directorio de salida `./out`

## Estructura

```
app/                    # Next.js App Router (layouts, páginas, globals.css)
src/
  components/           # Componentes reutilizables del sitio principal
  components/ui/        # Primitivos shadcn/ui — no editar directamente
  routes/               # Páginas completas montadas desde app/
  styles/
    waitlist.css        # CSS propio de la página Waitlist (no usa Tailwind)
public/assets/          # Imágenes en formato WebP
```

## Rutas

| URL | Archivo |
|-----|---------|
| `/` | `app/page.tsx` → `src/routes/Index.tsx` |
| `/equipo` | `app/equipo/page.tsx` → `src/routes/Equipo.tsx` |
| `/horarios` | `app/horarios/page.tsx` → `src/routes/Horarios.tsx` |
| `/sucursales` | `app/sucursales/page.tsx` → `src/routes/Sucursales.tsx` |
| `/waitlist_crash_app` | `app/waitlist_crash_app/page.tsx` → `src/routes/WaitlistCrashApp.tsx` |

## Tipografía

| Clase Tailwind | Fuente | Uso |
|----------------|--------|-----|
| `font-display` | Orbitron 700/900 (Google Fonts) | Todos los titulares |
| `font-sans` | Inter | Cuerpo y UI general |

La fuente `font-display` está configurada en `tailwind.config.ts` y se carga desde Google Fonts en `app/globals.css`.

## Diseño

- **Border-radius de cards y recuadros**: `--radius: 1.25rem` (20px) — controla el radio global de shadcn en `app/globals.css`. Se aplica a cards, inputs, modals, selects, etc.
- **Botones**: siempre `rounded-full` (píldora). Definido en `src/components/ui/button.tsx`.
- **Color primario** (`--primary`): Palatinate Blue `#173DED` / HSL `228 90% 51%`

## Imágenes

- Todas las imágenes en `public/assets/` están en formato **WebP** (quality 82).
- Imágenes below-the-fold: `loading="lazy" decoding="async"`
- Imagen hero (LCP): `fetchPriority="high" decoding="async"`
- No subir JPG/PNG al repositorio — convertir con `cwebp -q 82`.

## Componentes flotantes

`WhatsAppButton` incluye `FAQButton` encima. Ambos viven en:
- `src/components/WhatsAppButton.tsx`
- `src/components/FAQButton.tsx`

El FAQ tiene 9 preguntas frecuentes del gimnasio con comportamiento accordion. El ícono es placeholder (`HelpCircle`) — pendiente de reemplazar con el ícono definitivo del cliente.

## Navbar

El `Navbar` (`src/components/Navbar`) es compartido por todas las páginas, incluida la Waitlist. Es `fixed` con `z-50` y ocupa ~80px de altura. Páginas que lo incluyen deben agregar un spacer: `<div style={{ height: "80px" }} />`.

## Waitlist (`WaitlistCrashApp`)

- CSS propio en `src/styles/waitlist.css` (no Tailwind)
- Formulario envía a `FORM_ENDPOINT` (Formspree o similar). Si está vacío → modo demo.
- Variables CSS: `--wl-blue: #0066ff`, `--wl-red: #cc1a1a`, etc.

## Rama de desarrollo

Usar siempre la rama `claude/waitlist-crash-app-routing-E1I1F` para desarrollo. **No pushear directamente a `main`** sin confirmación explícita del usuario.
