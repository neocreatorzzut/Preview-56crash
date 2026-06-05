export type Category = "Noticias" | "Entrenamiento" | "Nutrición" | "Lifestyle";

export type Post = {
  slug: string;
  title: string;
  category: Category;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  author: string;
  featured?: boolean;
};

export const categoryMeta: Record<Category, { bg: string; text: string; border: string }> = {
  Noticias:      { bg: "bg-primary/15",       text: "text-primary",       border: "border-primary/25"       },
  Entrenamiento: { bg: "bg-amber-500/15",     text: "text-amber-400",     border: "border-amber-500/25"     },
  Nutrición:     { bg: "bg-emerald-500/15",   text: "text-emerald-400",   border: "border-emerald-500/25"   },
  Lifestyle:     { bg: "bg-violet-500/15",    text: "text-violet-400",    border: "border-violet-500/25"    },
};

export const posts: Post[] = [
  // ─── NOTICIAS ────────────────────────────────────────────────────────────────
  {
    slug: "crash-training-abre-sede-las-flores",
    title: "Crash Training abre su tercera sede en Las Flores: más espacio, misma energía",
    category: "Noticias",
    date: "2026-03-08",
    coverImage: "",
    featured: true,
    author: "Crash Training",
    excerpt:
      "Después de meses de preparación, abrimos las puertas de nuestra tercera sede en el barrio Las Flores. Un nuevo espacio diseñado para que más personas de la ciudad puedan entrenar con nosotros.",
    content: `
<p>Llevamos meses preparando este momento y finalmente llegó: <strong>Crash Training Las Flores ya está abierto</strong>. Nuestra tercera sede nació de una sola razón — la demanda de una comunidad que vivía lejos de Sede Norte y Sede Centro, pero que quería seguir siendo parte de esto.</p>

<h2>¿Por qué Las Flores?</h2>
<p>No elegimos la ubicación al azar. Las Flores es un barrio con mucho movimiento, gente joven, familias activas y una necesidad real de espacios de entrenamiento serios. Visitamos la zona durante meses, hablamos con miembros que vivían ahí y la decisión fue clara.</p>

<h2>Lo que encontrás en la nueva sede</h2>
<p>La sede de Las Flores fue diseñada desde cero con todo lo que aprendimos en las dos anteriores:</p>
<ul>
  <li>Área de funcional con capacidad para 20 personas simultáneas</li>
  <li>Ring de kickboxing y área dedicada a artes marciales</li>
  <li>Zona de peso libre completa con barras olímpicas, mancuernas hasta 50 kg y máquinas de cable</li>
  <li>Vestuarios renovados con lockers digitales</li>
  <li>Estacionamiento propio — sin vueltas buscando parqueadero</li>
</ul>

<h2>Los coaches que estarán ahí</h2>
<p>Para Las Flores sumamos coaches nuevos que se incorporaron al equipo Crash este año, más rotaciones del equipo histórico. La calidad del entrenamiento, el seguimiento personalizado y el ambiente que nos caracteriza viajan con nosotros.</p>

<h2>Horarios de apertura</h2>
<p>La sede de Las Flores funciona con los mismos horarios que el resto: mañanas desde las 5 AM hasta las 11 AM, y tardes de 5 PM a 9 PM de lunes a viernes. Sábados de 7 AM a 11 AM.</p>

<h2>¿Ya sos miembro Crash?</h2>
<p>Si tenés un plan activo, podés entrenar en Las Flores sin costo adicional. Tu membresía te da acceso a todas las sedes. Si querés transferirte definitivamente o usar Las Flores como sede principal, hablá con recepción en cualquiera de los puntos.</p>
<p>Para los que arrancan de cero: tenemos planes de bienvenida especiales durante el primer mes de apertura. Pasá por la sede o escribinos por WhatsApp.</p>

<blockquote>Cada vez que abrimos una sede nueva no es una expansión — es un compromiso con más personas que merecen entrenar bien. Las Flores, bienvenidos a la familia.</blockquote>
    `,
  },
  {
    slug: "crash-training-app-se-viene",
    title: "La Crash Training App está en camino: todo lo que necesitás saber",
    category: "Noticias",
    date: "2026-05-20",
    coverImage: "",
    author: "Crash Training",
    excerpt:
      "Lleva tu entrenamiento a otro nivel. La app de Crash Training ya está en desarrollo: calendario de entrenos, mapa muscular, seguimiento de progreso y contenido de kickboxing. Entrá a la waitlist ahora.",
    content: `
<p>Hace tiempo que lo venían pidiendo: un lugar donde llevar el entrenamiento, ver el progreso real, organizar la semana sin depender de hojas de papel ni grupos de WhatsApp. <strong>La Crash Training App está en desarrollo y se viene pronto.</strong></p>

<h2>¿Qué va a ser la Crash Training App?</h2>
<p>Una Progressive Web App (PWA) — esto significa que <strong>no necesitás descargar nada</strong>. La abrís desde el navegador de tu celular, la guardás en la pantalla de inicio y funciona exactamente como una app nativa. Sin ocupar espacio de almacenamiento, sin actualizaciones manuales, sin pasar por el App Store.</p>

<h2>Las funciones principales</h2>
<ul>
  <li><strong>Calendario de Entrenos:</strong> visualizá tu mes completo, sabé exactamente qué toca cada día y cuándo fue tu última sesión.</li>
  <li><strong>Mapa Muscular:</strong> ve qué grupos musculares trabajaste y cuáles necesitan descanso o más atención esta semana.</li>
  <li><strong>Seguimiento de Progreso:</strong> registrá tus marcas, comparalas con semanas anteriores y vé la curva de mejora real.</li>
  <li><strong>Contenido MMA &amp; Kickboxing:</strong> rutinas y técnicas diseñadas específicamente para artes marciales y entrenamiento de combate.</li>
</ul>

<h2>Lo que viene después del lanzamiento</h2>
<p>La hoja de ruta ya está definida. En las primeras actualizaciones:</p>
<ul>
  <li>Modo offline — entrenás sin conexión y se sincroniza después</li>
  <li>Nutrición integrada — registro de macros y guías alimentarias</li>
  <li>Ranking del gym — ve cómo estás en relación al resto de la comunidad Crash</li>
</ul>

<h2>La oferta de Waitlist</h2>
<p>Antes del lanzamiento oficial hay una sola forma de acceder a la app a precio especial: <strong>entrando a la waitlist ahora</strong>. Los primeros registrados bloquean 3 meses de acceso completo por $36.500 COP — tres meses al precio de uno.</p>
<p>No hay trampa. Es la recompensa por confiar desde el principio.</p>

<h2>¿Cuándo lanza?</h2>
<p>Pronto. Sin fecha oficial todavía — pero los de la waitlist son los primeros en saber y los primeros en entrar. Si querés bloquear tu oferta, el formulario está abierto.</p>
    `,
  },

  // ─── ENTRENAMIENTO ───────────────────────────────────────────────────────────
  {
    slug: "como-perder-grasa-sin-perder-musculo",
    title: "Cómo perder grasa sin perder músculo: la guía que realmente funciona",
    category: "Entrenamiento",
    date: "2026-04-10",
    coverImage: "",
    author: "Equipo Crash Training",
    excerpt:
      "Perder grasa sin sacrificar músculo es posible si entendés cómo funciona tu cuerpo. Déficit calórico inteligente, entrenamiento de fuerza y proteína alta — así se hace.",
    content: `
<p>Una de las preguntas más buscadas en el mundo del fitness — y con razón. Perder peso es relativamente fácil. Perder <em>grasa</em> sin sacrificar el músculo que costó construir es otro juego. Acá va la guía sin rodeos.</p>

<h2>Primero, entendé el problema</h2>
<p>Cuando estás en déficit calórico (comés menos de lo que gastás), tu cuerpo busca energía en sus reservas. Idealmente tomaría solo de la grasa, pero si el déficit es muy agresivo o no entrenás con resistencia, también toma del músculo. Eso es exactamente lo que queremos evitar.</p>

<h2>El déficit calórico inteligente</h2>
<p>No existe una regla universal, pero la evidencia apunta a un déficit de <strong>300 a 500 kcal diarias</strong> como el rango ideal para perder grasa sosteniblemente sin comprometer músculo:</p>
<ul>
  <li>Déficit moderado (300–500 kcal): pérdida de 0,3 a 0,7 kg por semana. Óptimo.</li>
  <li>Déficit agresivo (700+ kcal): pérdida mayor en la balanza, pero una parte importante es músculo y agua.</li>
  <li>Sin déficit: no hay pérdida de grasa, sin importar cuánto entrenés.</li>
</ul>

<h2>El rol del entrenamiento de fuerza</h2>
<p>Este es el factor más subestimado. El entrenamiento con resistencia — pesas, funcional, peso corporal — envía una señal al cuerpo de que los músculos se están usando y deben conservarse. Sin ese estímulo, el cuerpo no tiene razón para proteger la masa muscular durante el déficit.</p>
<p><strong>Recomendación práctica:</strong> al menos 3 sesiones de entrenamiento con resistencia por semana mientras estés en proceso de definición.</p>

<h2>Proteína: tu mejor aliado</h2>
<p>Consumir proteína suficiente es crítico para preservar músculo en déficit. El rango recomendado para alguien en proceso de definición es de <strong>1,6 a 2,2 g de proteína por kilo de peso corporal</strong>. Priorizá pollo, huevos, atún, carne magra y, si es necesario, suplementación con whey.</p>

<h2>¿Y el cardio?</h2>
<p>El cardio ayuda a ampliar el déficit calórico, pero no es indispensable y puede ser contraproducente si se excede. El HIIT tiene mejor relación beneficio/riesgo para preservar músculo que el cardio de larga duración en zona baja. 2–3 sesiones semanales son más que suficientes si el entrenamiento de fuerza está en orden.</p>

<h2>Resumen ejecutivo</h2>
<ul>
  <li>Déficit calórico moderado: 300–500 kcal</li>
  <li>Entrenamiento de fuerza 3+ veces por semana</li>
  <li>Proteína alta: 1,6–2,2 g por kilo de peso</li>
  <li>Cardio complementario, no protagonista</li>
  <li>Paciencia: este proceso tarda meses, no semanas</li>
</ul>
<p>La atajalada de la dieta extrema o el cardio excesivo termina en rebote y músculo perdido. El camino largo es el camino eficiente.</p>
    `,
  },
  {
    slug: "kickboxing-para-principiantes-guia-completa",
    title: "Kickboxing para principiantes: los 5 fundamentos que todo novato debe dominar",
    category: "Entrenamiento",
    date: "2026-04-25",
    coverImage: "",
    author: "Equipo Crash Training",
    excerpt:
      "Si nunca pateaste un saco en tu vida, este artículo es para vos. Los 5 movimientos base del kickboxing, cómo aprenderlos de forma segura y qué esperar en tus primeras clases.",
    content: `
<p>Llegás a tu primera clase de kickboxing y te preguntan si sabés hacer un jab. Decís que sí aunque no tenés idea. Dos horas después tenés los nudillos adoloridos y una sonrisa que no te podés sacar. Eso es kickboxing para principiantes.</p>
<p>Antes de llegar a esa clase — o si querés entender qué estás haciendo — acá van los 5 fundamentos que todo novato debería conocer.</p>

<h2>1. La guardia</h2>
<p>Todo arranca de la posición de guardia. Pies al ancho de hombros, pie dominante atrás, rodillas ligeramente flexionadas, manos cerca del mentón. No es una postura cómoda al principio — con el tiempo se vuelve instintiva. La guardia es tu posición de ataque y defensa al mismo tiempo.</p>

<h2>2. El jab</h2>
<p>El golpe más rápido del kickboxing. Sale de la mano delantera en línea recta, sin telegrafiar. El jab no es para noquear — es para medir distancia, crear ángulos y abrir combos. Técnica: girá levemente el cuerpo al golpear, extendé completamente el brazo y volvé inmediatamente a la guardia.</p>

<h2>3. El cross</h2>
<p>El hermano mayor del jab. Viene de la mano trasera (la dominante para la mayoría) y lleva toda la rotación de cadera y hombro. El cross sí tiene potencia real. Jab + cross es el primer combo que aprendés en kickboxing y el que más vas a repetir.</p>

<h2>4. La patada circular (roundhouse kick)</h2>
<p>La firma del kickboxing. Se ejecuta con el empeine o la espinilla, rotando la cadera y pivotando en el pie de apoyo. Targets principales: muslo, costillas, cabeza (nivel avanzado). El error más común en principiantes es no rotar la cadera — el golpe pierde toda su fuerza si solo movés la pierna.</p>

<h2>5. El trabajo de pies</h2>
<p>Mover los pies correctamente es lo que diferencia a alguien que sabe pelear de alguien que solo golpea. En kickboxing, el movimiento básico va en paso — nunca cruzar los pies, siempre mantener la base. Entrar, salir, circular. Se practica aparte de los golpes y es tan importante como la técnica de puño.</p>

<h2>¿Qué esperar en tus primeras clases?</h2>
<p>Las primeras semanas son de aprendizaje motor: tu cuerpo está creando patrones nuevos. Es normal sentirse torpe, descoordinado y cansado después de 20 minutos. Todo el mundo pasó por eso. Lo que importa es la repetición consistente.</p>
<p>En Crash Training las clases de kickboxing están diseñadas para todos los niveles. Los coaches ajustan la intensidad y la técnica según dónde esté cada uno. No necesitás experiencia previa para empezar.</p>

<h2>Equipo básico para empezar</h2>
<ul>
  <li><strong>Vendas de manos:</strong> imprescindibles. Protegen muñecas y nudillos.</li>
  <li><strong>Guantes:</strong> 10 oz para clases grupales, 12–14 oz si hacés sparring.</li>
  <li><strong>Ropa cómoda:</strong> shorts de deporte o calzas, nada que restrinja el movimiento.</li>
  <li><strong>Protector bucal:</strong> obligatorio si hay contacto.</li>
</ul>
<p>No necesitás comprarlo todo el primer día. Podés empezar con guantes prestados mientras decidís si el deporte es para vos.</p>
    `,
  },
  {
    slug: "cuantas-veces-a-la-semana-entrenar",
    title: "¿Cuántas veces a la semana deberías entrenar? La respuesta según la ciencia",
    category: "Entrenamiento",
    date: "2026-05-05",
    coverImage: "",
    author: "Equipo Crash Training",
    excerpt:
      "Más no siempre es mejor. La frecuencia ideal de entrenamiento depende de tu objetivo, tu experiencia y tu recuperación. Te damos las recomendaciones basadas en evidencia.",
    content: `
<p>Si tuviéramos que elegir la pregunta más frecuente en cualquier gym del mundo, sería esta: <em>¿cuántas veces a la semana tengo que entrenar?</em> La respuesta honesta es que depende — pero no de forma vaga. Depende de factores concretos y medibles.</p>

<h2>El principio base: la recuperación importa tanto como el entrenamiento</h2>
<p>El músculo no crece en el gym — crece mientras descansás. El entrenamiento genera el estímulo, pero la adaptación ocurre durante la recuperación. Si entrenás demasiado seguido sin respetar ese proceso, no solo no mejorás más rápido: podés ir para atrás.</p>

<h2>Por objetivo</h2>

<h3>Para ganar fuerza o masa muscular</h3>
<p>La investigación muestra que cada grupo muscular necesita ser estimulado <strong>2 a 3 veces por semana</strong> para optimizar el crecimiento. Eso se traduce en 3 a 5 días de entrenamiento según cómo distribuyas los grupos musculares:</p>
<ul>
  <li>3 días: full body cada sesión — ideal para principiantes</li>
  <li>4 días: upper/lower split</li>
  <li>5 días: push/pull/legs con más volumen por sesión</li>
</ul>

<h3>Para perder grasa</h3>
<p>La pérdida de grasa depende principalmente del déficit calórico, no de la cantidad de días que entrenés. <strong>4 a 5 días de actividad</strong> mezclando fuerza y cardio es un buen objetivo para aumentar el gasto calórico sin sacrificar recuperación.</p>

<h3>Para mejorar condición física general</h3>
<p>La OMS recomienda al menos <strong>150 minutos de actividad moderada o 75 minutos de actividad intensa por semana</strong>. En términos prácticos: 3 sesiones de 45 a 60 minutos alcanzan ese umbral con creces.</p>

<h2>Por nivel de experiencia</h2>
<ul>
  <li><strong>Principiante (menos de 6 meses):</strong> 3 días. Tu sistema nervioso y músculo necesitan más tiempo para recuperarse.</li>
  <li><strong>Intermedio (6 meses–2 años):</strong> 4 días. Podés manejar más volumen y la recuperación es más eficiente.</li>
  <li><strong>Avanzado (+2 años):</strong> 5 o más días. El cuerpo adaptado requiere más estímulo para seguir progresando.</li>
</ul>

<h2>La señal de que estás entrenando demasiado</h2>
<p>No hay que ser científico para reconocerlo. Si tu rendimiento cae en lugar de subir, dormís mal, estás irritable o las lesiones se acumulan — necesitás más descanso, no más entrenamiento.</p>

<h2>Conclusión práctica</h2>
<p>Para la mayoría de personas, <strong>3 a 4 días de entrenamiento bien ejecutado supera ampliamente los 6 días mediocres</strong>. La consistencia a lo largo del tiempo vale más que cualquier plan perfecto de papel.</p>
<p>El mejor entrenamiento es el que podés sostener semana tras semana, mes tras mes, sin quemarte ni lesionarte.</p>
    `,
  },

  // ─── NUTRICIÓN ───────────────────────────────────────────────────────────────
  {
    slug: "que-comer-antes-y-despues-del-entrenamiento",
    title: "Qué comer antes y después del entrenamiento para maximizar resultados",
    category: "Nutrición",
    date: "2026-04-05",
    coverImage: "",
    author: "Equipo Crash Training",
    excerpt:
      "Lo que comés alrededor de tu entrenamiento importa más de lo que creés. Un buen pre-entreno te da energía; un buen post-entreno activa la recuperación. Acá va lo que funciona de verdad.",
    content: `
<p>El entrenamiento es el estímulo. La nutrición es la respuesta. Si entrenás bien pero comés mal alrededor de la sesión, estás dejando resultados sobre la mesa. Acá te explicamos qué funciona y qué es mito.</p>

<h2>Pre-entrenamiento: el objetivo es energía y rendimiento</h2>
<p>Lo que comés antes del entreno tiene un solo objetivo: darte la energía para rendir al máximo. No es magia — es sustrato para el motor.</p>

<h3>¿Cuándo comer antes?</h3>
<ul>
  <li><strong>1,5 a 3 horas antes:</strong> comida completa (carbohidratos + proteína + algo de grasa). Lo más recomendado.</li>
  <li><strong>30 a 60 minutos antes:</strong> snack liviano y fácil de digerir (banana, arroz con pollo, yogur con avena).</li>
  <li><strong>Menos de 30 minutos:</strong> algo mínimo, o entrenar en ayunas dependiendo de cómo reaccione tu cuerpo.</li>
</ul>

<h3>¿Qué comer?</h3>
<p><strong>Carbohidratos</strong> son el combustible principal para entrenamientos de intensidad moderada a alta. Arroz, avena, papa, pan, fruta — todos son buenas fuentes. No los evites antes de entrenar.</p>
<p><strong>Proteína</strong> antes del entreno ayuda a reducir la degradación muscular durante la sesión. 20 a 30 g es suficiente.</p>
<p><strong>Grasa:</strong> cuidado con la cantidad. Enlentece la digestión y puede generar malestar durante el ejercicio. Pequeñas cantidades están bien.</p>

<h2>Post-entrenamiento: el objetivo es recuperación</h2>
<p>Después del entrenamiento, tus músculos están en modo de reparación. Las primeras 1 a 2 horas son cuando el cuerpo aprovecha mejor los nutrientes para reconstruir fibras musculares y reponer glucógeno.</p>

<h3>Proteína post-entreno</h3>
<p>La prioridad número uno. <strong>20 a 40 g de proteína</strong> post-entrenamiento es el rango que la investigación identifica como óptimo para estimular la síntesis de proteína muscular. Fuentes: pollo, huevos, atún, yogur griego, shake de proteína.</p>

<h3>Carbohidratos post-entreno</h3>
<p>Necesarios para reponer el glucógeno muscular consumido. Importantes si entrenás de nuevo en pocas horas o al día siguiente. Menos críticos si tenés 24–48 horas de descanso antes del próximo entreno.</p>

<h2>¿Y si entrenás en ayunas?</h2>
<p>Entrenar en ayunas no destruye músculo si la sesión no es extremadamente larga o intensa, y si el resto del día comés adecuadamente. Lo que sí es importante: romper el ayuno con una comida con proteína lo antes posible después del entreno.</p>

<h2>La regla simple para llevarse a casa</h2>
<p>Come algo con carbohidratos antes, come algo con proteína después. No necesitás suplementos especiales ni timing perfecto al minuto. La consistencia en la dieta general importa más que el timing exacto.</p>
    `,
  },
  {
    slug: "cuanta-proteina-necesito-por-dia",
    title: "¿Cuánta proteína necesitás por día? La guía sin mitos",
    category: "Nutrición",
    date: "2026-05-15",
    coverImage: "",
    author: "Equipo Crash Training",
    excerpt:
      "¿1 gramo por kilo o 2? ¿Whey o comida real? ¿Importa el timing? Respondemos las preguntas más buscadas sobre proteína con base en la evidencia actual, sin suplementos de por medio.",
    content: `
<p>La proteína es el macronutriente más discutido en el fitness. ¿Cuánta es suficiente? ¿Cuánta es demasiado? ¿El whey es indispensable? ¿Importa cuándo la tomás? Vamos por partes.</p>

<h2>¿Por qué es importante la proteína?</h2>
<p>La proteína es el material de construcción del músculo. Cuando entrenás, creás microdesgarros en las fibras musculares. La proteína dietaria aporta los aminoácidos necesarios para reparar esas fibras y hacerlas más grandes y fuertes. Sin suficiente proteína, ese proceso se limita, independientemente de cuánto entrenés.</p>

<h2>¿Cuánta proteína necesitás realmente?</h2>
<p>Para personas activas que entrenan con resistencia, los rangos respaldados por la evidencia son:</p>
<ul>
  <li><strong>Mínimo para mantener músculo:</strong> 1,2 g por kg de peso corporal</li>
  <li><strong>Rango óptimo para ganar músculo:</strong> 1,6 a 2,2 g por kg</li>
  <li><strong>Rango para definición (déficit calórico):</strong> 2,0 a 2,4 g por kg</li>
</ul>
<p>Ejemplo práctico: si pesás 75 kg y querés ganar músculo, apuntá a entre 120 y 165 g de proteína por día.</p>

<h2>¿Importa el timing? La famosa "ventana anabólica"</h2>
<p>Sí, pero mucho menos de lo que se dice. La "ventana anabólica" — la idea de que tenés 30 minutos después del entreno para tomar proteína o "perdés todo" — es un mito exagerado. La síntesis de proteína muscular sube durante varias horas post-entreno. Comer proteína en la hora o dos horas después del ejercicio es suficiente.</p>
<p>Lo que sí importa más: distribuir la proteína en 3 a 5 comidas de 20 a 40 g a lo largo del día, en lugar de concentrar todo en una sola ingesta.</p>

<h2>¿Necesitás suplementos?</h2>
<p>No. La proteína de fuentes alimentarias completas es perfectamente adecuada para la mayoría de personas. Los suplementos como el whey son una herramienta de conveniencia — útiles cuando es difícil llegar al objetivo diario solo con comida.</p>
<p><strong>Fuentes de proteína accesibles:</strong></p>
<ul>
  <li>Pechuga de pollo cocida: ~31 g por 100 g</li>
  <li>Atún en lata: ~25 g por 100 g</li>
  <li>Huevos: ~6 g por unidad</li>
  <li>Yogur griego: ~10 g por 100 g</li>
  <li>Lentejas cocidas: ~9 g por 100 g</li>
  <li>Whey protein: ~25 g por scoop de 30 g</li>
</ul>

<h2>¿Puede ser dañino consumir mucha proteína?</h2>
<p>En personas sanas, consumir hasta 3–4 g por kg de peso no ha mostrado efectos adversos en estudios controlados. El mito de que "mucha proteína destruye los riñones" aplica a personas con enfermedad renal preexistente, no a personas sanas. Dicho esto, no hay beneficio demostrado de superar los 2,2–2,4 g/kg en términos de ganancia muscular.</p>

<h2>La conclusión práctica</h2>
<p>Calculá tu objetivo de proteína diaria, distribuila en varias comidas y priorizá fuentes alimentarias completas. El resto — batidos especiales, timing al minuto, proteínas "mágicas" — es secundario.</p>
    `,
  },

  // ─── LIFESTYLE ───────────────────────────────────────────────────────────────
  {
    slug: "por-que-la-gente-abandona-el-gym-nacho",
    title: "Por qué el 80% abandona el gym en enero (y lo que aprendí viendo esa historia repetirse)",
    category: "Lifestyle",
    date: "2026-03-20",
    coverImage: "",
    author: "Nacho · Fundador de Crash Training",
    excerpt:
      "Quince años abriendo las puertas de este gym me enseñaron algo que no viene en ningún manual de entrenamiento: la razón por la que la gente abandona no es física. Es mental. Y casi siempre es la misma historia.",
    content: `
<p>Quince años abriendo las puertas de este gym me enseñaron algo que no viene en ningún manual de entrenamiento: la razón por la que la gente abandona no es física. Es mental. Y casi siempre es la misma historia.</p>

<h2>Lo que vi repetirse miles de veces</h2>
<p>Enero. Llega gente nueva, llena de energía, con la resolución de año nuevo todavía fresca. Compran el plan anual. Se inscriben en dos disciplinas. Vienen seis días la primera semana.</p>
<p>En febrero ya son tres días. En marzo, uno. En abril no aparecen más.</p>
<p>Cuando les pregunto a los que sí se quedan qué fue diferente, la respuesta casi nunca tiene que ver con la rutina o la dieta. Tiene que ver con cómo empezaron.</p>

<h2>El error que casi todos cometen</h2>
<p>Empezar demasiado fuerte. Creer que la motivación del primer día es el estado normal y construir sobre esa base.</p>
<p>La motivación del primer día es adrenalina. Es emoción nueva. Es la versión más inflada de tus ganas. Eso no dura — ni debería durar. El problema es que mucha gente diseña su rutina para cuando está motivada al 100%, y cuando ese pico baja — que siempre baja — la rutina se hace imposible de sostener.</p>
<p>Lo que yo les digo a los que entran acá: <strong>diseñen su rutina para el peor día de la semana, no para el mejor.</strong></p>

<h2>Lo que tienen en común los que se quedan</h2>
<p>No son los más motivados. Tampoco los más disciplinados en el sentido rígido. Son los que encontraron algo que genuinamente les gusta hacer. Un deporte, una clase, un grupo de personas con quienes entrenar.</p>
<p>En Crash, los que más años llevan son los del kickboxing. ¿Por qué? Porque cuando entrenás un deporte, no vas al gym a "hacer ejercicio" — vas a practicar algo. Esa diferencia es todo.</p>

<h2>Tres cosas que cambiarían tu historia</h2>
<p><strong>Primera: bajá la expectativa de frecuencia.</strong> No empieces con seis días. Empieza con dos días confirmados — dos días que sabés que podés cumplir sin importar cómo esté la semana. Cuando esos dos se vuelven automáticos, sumás uno más.</p>
<p><strong>Segunda: conectá el gym con algo que ya hacés.</strong> El habit stacking funciona. Si ya pasás cerca en el camino al trabajo, venís dos días en semana. El movimiento tiene que encajar en tu vida, no competir con ella.</p>
<p><strong>Tercera: mirá hacia atrás, no hacia adelante.</strong> En lugar de obsesionarte con el cuerpo que querés tener, fijate en quién eras hace tres meses y comparate con hoy. El progreso real es lento y constante. Si solo mirás hacia adelante te parece que nunca llegás.</p>

<h2>Lo que te puedo prometer</h2>
<p>Después de quince años, puedo prometer una cosa: la persona que entrena dos días por semana, de forma consistente, durante dos años — llega más lejos que la que entrena seis días durante tres meses y desaparece.</p>
<p>No es un secreto. Es matemática.</p>
<p>Si estás leyendo esto y ya abandonaste antes: no importa. La historia no se escribe en enero, se escribe en los meses normales. Esos días de miércoles a las 6 PM, cuando no tenés ganas, cuando está lloviendo, cuando el día estuvo complicado. Esos días son los que cuentan.</p>
<p>Los esperamos.</p>
<p><em>— Nacho, fundador de Crash Training</em></p>
    `,
  },
  {
    slug: "como-crear-habito-de-ejercicio-que-dure",
    title: "Cómo crear un hábito de ejercicio que realmente dure",
    category: "Lifestyle",
    date: "2026-05-28",
    coverImage: "",
    author: "Equipo Crash Training",
    excerpt:
      "La motivación arranca el motor, pero el hábito lo mantiene funcionando. Estos son los principios psicológicos y prácticos que separan a los que entrenan 3 meses de los que entrenan 3 años.",
    content: `
<p>La motivación es lo que te hace empezar. El hábito es lo que te hace continuar. Si dependés únicamente de la motivación para entrenar, vas a tener meses brillantes y meses en blanco. El objetivo es construir algo más resistente.</p>

<h2>Cómo funciona un hábito (la parte que nadie te cuenta)</h2>
<p>Según el modelo más respaldado por la neurociencia del comportamiento, un hábito tiene tres componentes: <strong>señal → rutina → recompensa</strong>. La señal dispara el comportamiento, la rutina es el comportamiento en sí, y la recompensa refuerza el circuito para que se repita.</p>
<p>Cuando entendés esto, podés diseñar intencionalmente el hábito en lugar de esperar que aparezca solo.</p>

<h2>Definí una señal concreta</h2>
<p>El mayor error al intentar crear el hábito de ejercicio es dejarlo vago: "voy a intentar ir al gym esta semana". Eso no es una señal — es una intención. Una señal efectiva es específica:</p>
<ul>
  <li>"Cuando suene la alarma de las 6 AM los lunes y miércoles, me pongo la ropa deportiva."</li>
  <li>"Cuando llegue del trabajo y deje el maletín, agarro la bolsa del gym."</li>
  <li>"Después de almorzar los martes y jueves, camino al gym."</li>
</ul>
<p>Anclar el entrenamiento a algo que ya ocurre automáticamente en tu día es la forma más efectiva de crear la señal.</p>

<h2>Reducí la fricción al mínimo</h2>
<p>Mientras más pasos haya entre vos y el entrenamiento, más fácil es que el día se interponga:</p>
<ul>
  <li>Dejá la ropa deportiva preparada la noche anterior</li>
  <li>Elegí un gym que esté en tu ruta diaria, no desviado de ella</li>
  <li>Tenés la bolsa lista con todo lo que necesitás</li>
  <li>Definí el entrenamiento de antemano — que llegar y saber qué hacer no sea una barrera</li>
</ul>

<h2>Empezá ridículamente pequeño</h2>
<p>En lugar de comprometerte con "1 hora en el gym", empezás con "10 minutos de movimiento". Lo que pasa en la práctica: una vez que estás ahí, casi siempre seguís. Pero si no seguís, 10 minutos también cuenta. El objetivo inicial no es el rendimiento — es aparecer.</p>

<h2>La regla de los dos días</h2>
<p>No rompas la cadena más de un día seguido. Podés saltarte un día — la vida pasa. Pero saltarte dos días seguidos es el inicio del abandono. Esta regla simple hace que un día malo no se convierta en una semana mala y luego en un mes.</p>

<h2>La recompensa tiene que ser inmediata</h2>
<p>El cuerpo que querés tener en tres meses no es una recompensa que el cerebro puede procesar hoy. Necesitás recompensas inmediatas: el café después del entreno, la playlist que solo escuchás en el gym, el momento de ducha caliente después. Pequeños rituales que hacen la experiencia placentera más allá del resultado físico.</p>

<h2>¿Cuánto tarda en formarse el hábito?</h2>
<p>El mito dice 21 días. La investigación dice entre 18 y 254, con un promedio de 66 días. No hay número mágico — depende de la persona y la complejidad del comportamiento. Lo que sí es cierto: a los 3 meses de entrenamiento consistente, la mayoría siente que algo hace falta cuando no va. Ese es el indicador real.</p>

<h2>El resumen en una frase</h2>
<p>Diseñá un sistema que funcione el día que menos ganas tenés — no el día que más entusiasmo sentís. Ese sistema, repetido en el tiempo, es lo que produce resultados.</p>
    `,
  },
];
