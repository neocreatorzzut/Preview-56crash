// Figura de partículas que ejecuta un ciclo de carrera en bucle.
// Toda la geometría se genera de forma DETERMINISTA (sin Math.random) para
// evitar mismatches de hidratación con el static export de Next.

type Dot = { x: number; y: number; r: number };

// Segmento alargado (extremidad): puntos desde el pivote (0,0) hacia abajo (+y),
// con dispersión horizontal simétrica para que el bounding-box quede centrado en x=0.
function seg(len: number, count: number, width: number): Dot[] {
  const dots: Dot[] = [];
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0 : i / (count - 1);
    const bulge = 0.45 + 0.55 * Math.sin(t * Math.PI);
    const x = Math.sin(i * 2.7) * width * bulge;
    const y = t * len;
    const r = 1.5 + ((i * 5) % 3) * 0.35;
    dots.push({ x, y, r });
  }
  return dots;
}

// Cúmulo elíptico (cabeza, manos, pies) por espiral de ángulo áureo.
function blob(rx: number, ry: number, count: number): Dot[] {
  const dots: Dot[] = [];
  const ga = 2.399963;
  for (let i = 0; i < count; i++) {
    const a = i * ga;
    const rad = Math.sqrt((i + 0.5) / count);
    dots.push({
      x: Math.cos(a) * rx * rad,
      y: Math.sin(a) * ry * rad,
      r: 1.4 + ((i * 3) % 3) * 0.4,
    });
  }
  return dots;
}

// Torso: columna de filas, hombros un poco más anchos que la cadera.
function torsoDots(): Dot[] {
  const dots: Dot[] = [];
  const rows = 16;
  const perRow = 3;
  for (let row = 0; row < rows; row++) {
    const t = row / (rows - 1);
    const y = t * 78;
    const halfW = 13 - 4 * t + 2 * Math.sin(t * Math.PI);
    for (let c = 0; c < perRow; c++) {
      const cx = ((c - (perRow - 1) / 2) / ((perRow - 1) / 2)) * halfW;
      const jitter = Math.sin((row * perRow + c) * 1.7) * 2;
      dots.push({ x: cx + jitter, y, r: 1.5 + ((row + c) % 3) * 0.3 });
    }
  }
  return dots;
}

const THIGH = seg(48, 11, 5);
const SHIN = seg(46, 10, 4);
const UPPER = seg(34, 8, 4);
const FORE = seg(30, 8, 3.5);
const HEAD = blob(15, 17, 60);
const TORSO = torsoDots();
const FOOT = blob(7, 4, 10);
const HAND = blob(5, 5, 8);

const Dots = ({ dots }: { dots: Dot[] }) => (
  <>
    {dots.map((d, i) => (
      <circle key={i} cx={d.x} cy={d.y} r={d.r} />
    ))}
  </>
);

// Pierna riggeada: muslo (pivote cadera) → pantorrilla (pivote rodilla) → pie.
const Leg = ({ side }: { side: "l" | "r" }) => (
  <g className={`wl-seg wl-leg-${side}`}>
    <Dots dots={THIGH} />
    <g transform="translate(0,48)">
      <g className={`wl-seg wl-shin-${side}`}>
        <Dots dots={SHIN} />
        <g transform="translate(2,46)">
          <Dots dots={FOOT} />
        </g>
      </g>
    </g>
  </g>
);

// Brazo riggeado: hombro → codo → mano.
const Arm = ({ side }: { side: "l" | "r" }) => (
  <g className={`wl-seg wl-arm-${side}`}>
    <Dots dots={UPPER} />
    <g transform="translate(0,34)">
      <g className={`wl-seg wl-fore-${side}`}>
        <Dots dots={FORE} />
        <g transform="translate(0,30)">
          <Dots dots={HAND} />
        </g>
      </g>
    </g>
  </g>
);

export default function ParticleRunner() {
  return (
    <svg className="wl-runner-svg" viewBox="0 0 200 280" aria-hidden="true">
      {/* Inclinación hacia adelante (carrera) sobre el eje de la cadera */}
      <g transform="rotate(5 100 150)">
        <g className="wl-run-bob">
          {/* Extremidades traseras (más tenues = profundidad) */}
          <g className="wl-runner-back" transform="translate(112,82)">
            <Arm side="r" />
          </g>
          <g className="wl-runner-back" transform="translate(107,150)">
            <Leg side="r" />
          </g>

          {/* Torso y cabeza */}
          <g transform="translate(100,70)">
            <Dots dots={TORSO} />
          </g>
          <g transform="translate(100,40)">
            <Dots dots={HEAD} />
          </g>

          {/* Extremidades delanteras */}
          <g transform="translate(93,150)">
            <Leg side="l" />
          </g>
          <g transform="translate(88,82)">
            <Arm side="l" />
          </g>
        </g>
      </g>
    </svg>
  );
}
