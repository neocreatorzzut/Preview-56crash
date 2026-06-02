// Figura de partículas con ciclo de carrera usando <animateTransform> (SMIL).
// SMIL lo maneja el motor SVG del browser — no depende de CSS transform-box
// ni transform-origin, por lo que funciona en todos los navegadores.

// Geometría determinista (sin Math.random) → sin mismatch de hidratación.
function line(len: number, n: number, w: number) {
  return Array.from({ length: n }, (_, i) => {
    const t = n > 1 ? i / (n - 1) : 0;
    return { x: Math.sin(i * 2.3) * w * Math.sin(t * Math.PI), y: t * len, r: 1.4 + (i % 3) * 0.35 };
  });
}
function blob(rx: number, ry: number, n: number) {
  return Array.from({ length: n }, (_, i) => {
    const a = i * 2.4, r = Math.sqrt((i + 0.5) / n);
    return { x: Math.cos(a) * rx * r, y: Math.sin(a) * ry * r, r: 1.3 + (i % 3) * 0.4 };
  });
}

const HEAD  = blob(14, 17, 58);
const TORSO = line(82, 22, 11);
const THIGH = line(48, 12, 5);
const SHIN  = line(44, 10, 4);
const UPPER = line(32,  9, 4);
const FORE  = line(28,  8, 3.5);

type Dot = { x: number; y: number; r: number };
const Dots = ({ pts }: { pts: Dot[] }) => (
  <>{pts.map((p, i) => <circle key={i} cx={+p.x.toFixed(1)} cy={+p.y.toFixed(1)} r={+p.r.toFixed(1)} />)}</>
);

// Keyframes del ciclo de carrera (5 cuadros = un ciclo completo)
const TH_L = "35,0,0; 8,0,0; -32,0,0; 8,0,0; 35,0,0";    // muslo izquierdo
const TH_R = "-32,0,0; 8,0,0; 35,0,0; 8,0,0; -32,0,0";   // muslo derecho (contrafase)
const SH_L = "5,0,0; 18,0,0; 78,0,0; 25,0,0; 5,0,0";     // pantorrilla izquierda
const SH_R = "78,0,0; 25,0,0; 5,0,0; 18,0,0; 78,0,0";    // pantorrilla derecha
const UA_L = "38,0,0; -38,0,0; 38,0,0";                   // brazo izquierdo
const UA_R = "-38,0,0; 38,0,0; -38,0,0";                  // brazo derecho
const FA_L = "82,0,0; 55,0,0; 82,0,0";                    // antebrazo izquierdo
const FA_R = "55,0,0; 82,0,0; 55,0,0";                    // antebrazo derecho
const BOB  = "0,0; 0,-7; 0,0; 0,-7; 0,0";                 // rebote vertical del cuerpo

const DUR = "0.72s";

// Wrapper para <animateTransform> — evita repetir atributos
function Anim({ t, v }: { t: string; v: string }) {
  return (
    <animateTransform
      attributeName="transform"
      {...{ type: t }}
      values={v}
      dur={DUR}
      repeatCount="indefinite"
    />
  );
}

// Pierna riggeada: muslo (pivota en cadera) → pantorrilla (pivota en rodilla)
function Leg({ hip, thighV, shinV, opacity }: {
  hip: { x: number; y: number };
  thighV: string;
  shinV: string;
  opacity: number;
}) {
  return (
    <g transform={`translate(${hip.x},${hip.y})`} opacity={opacity}>
      <g>
        <Anim t="rotate" v={thighV} />
        <Dots pts={THIGH} />
        <g transform="translate(0,48)">
          <g>
            <Anim t="rotate" v={shinV} />
            <Dots pts={SHIN} />
          </g>
        </g>
      </g>
    </g>
  );
}

// Brazo riggeado: húmero (pivota en hombro) → antebrazo (pivota en codo)
function Arm({ sh, upperV, foreV, opacity }: {
  sh: { x: number; y: number };
  upperV: string;
  foreV: string;
  opacity: number;
}) {
  return (
    <g transform={`translate(${sh.x},${sh.y})`} opacity={opacity}>
      <g>
        <Anim t="rotate" v={upperV} />
        <Dots pts={UPPER} />
        <g transform="translate(0,32)">
          <g>
            <Anim t="rotate" v={foreV} />
            <Dots pts={FORE} />
          </g>
        </g>
      </g>
    </g>
  );
}

export default function ParticleRunner() {
  return (
    <svg className="wl-runner-svg" viewBox="0 0 200 290" aria-hidden="true">
      {/* Inclinación hacia adelante ~5° */}
      <g transform="rotate(5 100 155)">
        {/* Rebote vertical del cuerpo completo */}
        <g>
          <Anim t="translate" v={BOB} />

          {/* ── Extremidades traseras (tenues = profundidad) ── */}
          <Arm sh={{ x: 114, y: 78 }} upperV={UA_R} foreV={FA_R} opacity={0.42} />
          <Leg hip={{ x: 104, y: 152 }} thighV={TH_R} shinV={SH_R} opacity={0.42} />

          {/* ── Cabeza y torso ── */}
          <g transform="translate(100,32)"><Dots pts={HEAD} /></g>
          <g transform="translate(100,66)"><Dots pts={TORSO} /></g>

          {/* ── Extremidades delanteras ── */}
          <Leg hip={{ x: 96, y: 152 }} thighV={TH_L} shinV={SH_L} opacity={1} />
          <Arm sh={{ x: 86, y: 78 }} upperV={UA_L} foreV={FA_L} opacity={1} />
        </g>
      </g>
    </svg>
  );
}
