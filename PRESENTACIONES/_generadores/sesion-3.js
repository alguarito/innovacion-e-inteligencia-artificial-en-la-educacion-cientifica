/* ============================================================================
   SESIÓN 3 — Diseño pedagógico con IA
   Módulo 9 · Innovación e IA en la Educación Científica · UTP
   ============================================================================ */

const { createDeck } = require("./engine");

async function main() {
  const d = createDeck({
    sesion: 3,
    tituloSesion: "Sesión 3 · Diseño pedagógico con IA",
  });
  const P = d.P, C = d.C, F = d.F;
  const { nueva, kicker, titulo, pie, cols, tarjeta, circuloIcono, linea, chip, portada, divisor, cierre } = d;
  const S = () => d.S;

  /* ---------- 1 · PORTADA ---------- */
  portada({ subtitulo: "Del concepto difícil al recurso didáctico innovador: diseñar con IA, accesibilidad y enfoque CTS." });

  /* ---------- 2 · LA RUTA DE HOY ---------- */
  nueva(C.fondo);
  kicker("SESIÓN 3 · PUNTO DE PARTIDA");
  titulo("La ruta de hoy");
  {
    const cls = cols(3);
    const datos = [
      ["01", "Diseñar recursos con IA", "Del problema de aprendizaje al recurso didáctico, paso a paso, con apoyo de la IA."],
      ["02", "Accesibilidad y creatividad", "Principios para que el recurso sea pertinente, inclusivo y memorable."],
      ["03", "El enfoque CTS", "Ciencia en contexto, tecnología con propósito y sociedad como horizonte."],
    ];
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.5, w, 2.55);
      S().addText(datos[i][0], { x: x + 0.22, y: 1.68, w: 1.4, h: 0.7, fontFace: F.t, fontSize: 38, bold: true, color: C.dorado, margin: 0 });
      S().addText(datos[i][1], { x: x + 0.22, y: 2.42, w: w - 0.44, h: 0.62, fontFace: F.t, fontSize: 14.5, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(datos[i][2], { x: x + 0.22, y: 3.06, w: w - 0.44, h: 0.9, fontFace: F.c, fontSize: 11, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.3, 8.9, 0.78, C.doradoSuave);
    await circuloIcono("bulb", 0.78, 4.45, 0.48, C.dorado, "FFFFFF");
    S().addText([
      { text: "Laboratorio de cierre:  ", options: { bold: true, color: C.azulOscuro } },
      { text: "Del concepto al recurso — prototiparás un recurso didáctico para tu propia asignatura.", options: { color: C.doradoTexto } },
    ], { x: 1.42, y: 4.42, w: 6.7, h: 0.55, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
    chip("4 horas", 8.3, 4.52, 1.0);
  }
  pie(2);

  /* ---------- 3 · RECAP + PUENTE ---------- */
  nueva(C.fondo);
  kicker("DONDE QUEDAMOS");
  titulo("De las herramientas al diseño");
  {
    tarjeta(0.55, 1.5, 4.3, 3.05, C.azulOscuro);
    await circuloIcono("wand", 0.8, 1.78, 0.56, "0B5FA5", "F5A800");
    S().addText("En la Sesión 2 vimos…", { x: 0.8, y: 2.5, w: 3.8, h: 0.35, fontFace: F.t, fontSize: 15, bold: true, color: C.dorado, margin: 0 });
    const recap = ["Herramientas de IA y cómo elegirlas.", "Generar, evaluar y predecir con IA.", "El arte del prompt y la verificación."];
    let ry = 2.92;
    for (const r of recap) {
      S().addShape(P.shapes.OVAL, { x: 0.85, y: ry + 0.05, w: 0.11, h: 0.11, fill: { color: C.dorado } });
      S().addText(r, { x: 1.08, y: ry - 0.07, w: 3.5, h: 0.4, fontFace: F.c, fontSize: 11.5, color: C.blanco, margin: 0 });
      ry += 0.42;
    }
    tarjeta(5.05, 1.5, 4.4, 3.05, C.doradoSuave);
    await circuloIcono("compass", 5.3, 1.78, 0.56, C.dorado, "FFFFFF");
    S().addText("Hoy nos preguntamos…", { x: 5.3, y: 2.5, w: 3.9, h: 0.35, fontFace: F.t, fontSize: 15, bold: true, color: C.doradoTexto, margin: 0 });
    S().addText("Ya sé usar las herramientas. Ahora, ¿cómo diseño un recurso didáctico que de verdad ayude a aprender —accesible, pertinente y con sentido social— y no solo una actividad llamativa?",
      { x: 5.3, y: 2.92, w: 3.9, h: 1.5, fontFace: F.c, fontSize: 12.5, italic: true, color: C.tinta, valign: "top", margin: 0 });
  }
  pie(3);

  /* ---------- 4 · DIVISOR BLOQUE 1 ---------- */
  await divisor("01", "Diseñar recursos didácticos innovadores con IA", ["Qué es", "Proceso", "Co-creación", "Tipos"]);

  /* ---------- 5 · QUÉ ES UN RECURSO INNOVADOR ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · CONCEPTO");
  titulo("¿Qué hace innovador a un recurso didáctico?");
  {
    tarjeta(0.55, 1.5, 4.25, 3.55, C.azulOscuro);
    S().addText('"', { x: 0.75, y: 1.5, w: 0.8, h: 0.8, fontFace: F.t, fontSize: 60, bold: true, color: C.dorado, margin: 0 });
    S().addText([
      { text: "No es el que usa más tecnología, sino el que ", options: {} },
      { text: "resuelve mejor un problema de aprendizaje", options: { bold: true, color: C.dorado } },
      { text: " real, con una experiencia ", options: {} },
      { text: "significativa", options: { bold: true, color: C.dorado } },
      { text: " para el estudiante.", options: {} },
    ], { x: 0.88, y: 2.3, w: 3.6, h: 2.0, fontFace: F.c, fontSize: 15.5, color: C.blanco, valign: "top", margin: 0 });
    const attrs = [
      ["target", "Pertinente", "Responde a una necesidad real del currículo y del aula."],
      ["access", "Accesible", "Pensado para que todos puedan aprender con él."],
      ["map", "Situado", "Conectado con el contexto y la vida del estudiante."],
      ["bulb", "Creativo", "Despierta curiosidad y motiva a seguir aprendiendo."],
    ];
    let y = 1.5;
    for (const [ic, t, dsc] of attrs) {
      tarjeta(5.05, y, 4.4, 0.78);
      await circuloIcono(ic, 5.25, y + 0.17, 0.44, C.hielo, C.azul);
      S().addText([
        { text: t, options: { bold: true, color: C.azulOscuro, breakLine: true } },
        { text: dsc, options: { color: C.gris, fontSize: 10.3 } },
      ], { x: 5.85, y: y + 0.08, w: 3.45, h: 0.66, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
      y += 0.88;
    }
  }
  pie(5);

  /* ---------- 6 · DESIGN THINKING ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · EL PROCESO");
  titulo("Diseñar con método: Design Thinking");
  {
    const etapas = [
      ["heart", "Empatizar", "Entender qué le cuesta aprender a tu estudiante."],
      ["target", "Definir", "Formular con precisión el problema a resolver."],
      ["bulb", "Idear", "Imaginar soluciones; aquí la IA suma muchas ideas."],
      ["puzzle", "Prototipar", "Construir una primera versión del recurso."],
      ["sync", "Evaluar", "Probar, recoger evidencia y mejorar."],
    ];
    const cls = cols(5, 0.55, 8.9, 0.16);
    for (let i = 0; i < 5; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.55);
      await circuloIcono(etapas[i][0], x + (w - 0.52) / 2, 1.8, 0.52, C.azulOscuro, "F5A800");
      S().addText((i + 1) + " · " + etapas[i][1], { x: x + 0.06, y: 2.48, w: w - 0.12, h: 0.32, fontFace: F.t, fontSize: 12, bold: true, color: C.azulOscuro, align: "center", margin: 0 });
      S().addText(etapas[i][2], { x: x + 0.12, y: 2.84, w: w - 0.24, h: 1.15, fontFace: F.c, fontSize: 9.8, color: C.gris, align: "center", valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.35, 8.9, 0.72, C.doradoSuave);
    S().addText([
      { text: "Es un ciclo, no una línea:  ", options: { bold: true, color: C.doradoTexto } },
      { text: "diseñar, probar y volver a diseñar. La primera versión nunca es la definitiva — y está bien.", options: { color: C.tinta } },
    ], { x: 0.85, y: 4.43, w: 8.3, h: 0.56, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(6);

  /* ---------- 7 · DEL CONCEPTO AL RECURSO ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · CO-CREACIÓN CON IA");
  titulo("Cómo co-crear un recurso con la IA");
  {
    const pasos = [
      ["search", "1 · Diagnostica", "Identifica qué concepto cuesta y por qué."],
      ["target", "2 · Define", "Fija el objetivo de aprendizaje y la estrategia."],
      ["wand", "3 · Co-crea", "La IA propone; tú seleccionas, adaptas y enriqueces."],
      ["check", "4 · Valida", "Pruébalo con un par o estudiantes y ajusta."],
    ];
    const cls = cols(4, 0.55, 8.9, 0.45);
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.25);
      await circuloIcono(pasos[i][0], x + (w - 0.54) / 2, 1.78, 0.54, C.azulOscuro, "F5A800");
      S().addText(pasos[i][1], { x: x + 0.1, y: 2.48, w: w - 0.2, h: 0.3, fontFace: F.t, fontSize: 12.5, bold: true, color: C.azulOscuro, align: "center", margin: 0 });
      S().addText(pasos[i][2], { x: x + 0.15, y: 2.82, w: w - 0.3, h: 0.9, fontFace: F.c, fontSize: 10.2, color: C.gris, align: "center", valign: "top", margin: 0 });
      if (i < 3) S().addText("→", { x: x + w + 0.02, y: 2.35, w: 0.42, h: 0.5, fontFace: F.t, fontSize: 22, bold: true, color: C.dorado, align: "center", margin: 0 });
    }
    tarjeta(0.55, 4.12, 8.9, 0.95, C.azulOscuro);
    S().addText([
      { text: "Tú diriges, la IA acompaña.  ", options: { bold: true, color: C.dorado, breakLine: true } },
      { text: "La IA acelera la generación de ideas y borradores; las decisiones pedagógicas —qué, para quién y para qué— siguen siendo tuyas.", options: { color: C.blanco } },
    ], { x: 0.85, y: 4.24, w: 8.3, h: 0.75, fontFace: F.c, fontSize: 12.5, margin: 0 });
  }
  pie(7);

  /* ---------- 8 · TIPOS DE RECURSOS ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · ABANICO DE POSIBILIDADES");
  titulo("Tipos de recursos que puedes diseñar");
  {
    const tipos = [
      ["book", "Guías y talleres", "Secuencias de actividades para indagar y practicar."],
      ["image", "Material visual", "Infografías, esquemas e ilustraciones explicativas."],
      ["atom", "Simulaciones", "Experimentos virtuales con PhET o GeoGebra."],
      ["clip", "Evaluaciones", "Rúbricas, cuestionarios y autoevaluaciones."],
      ["play", "Interactivos", "Juegos, retos y actividades gamificadas."],
      ["mic", "Audio y pódcast", "Explicaciones y entrevistas para escuchar."],
    ];
    const cls = cols(3);
    for (let i = 0; i < 6; i++) {
      const { x, w } = cls[i % 3];
      const y = 1.5 + Math.floor(i / 3) * 1.78;
      tarjeta(x, y, w, 1.58);
      await circuloIcono(tipos[i][0], x + 0.2, y + 0.2, 0.46, C.hielo, C.azul);
      S().addText(tipos[i][1], { x: x + 0.78, y: y + 0.24, w: w - 0.95, h: 0.6, fontFace: F.t, fontSize: 12, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(tipos[i][2], { x: x + 0.2, y: y + 0.9, w: w - 0.4, h: 0.6, fontFace: F.c, fontSize: 10.3, color: C.gris, valign: "top", margin: 0 });
    }
  }
  pie(8);

  /* ---------- 9 · DIVISOR BLOQUE 2 ---------- */
  await divisor("02", "Accesibilidad, pertinencia curricular y creatividad", ["Accesibilidad", "Pertinencia", "Creatividad", "Calidad"]);

  /* ---------- 10 · ACCESIBILIDAD / DUA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · ACCESIBILIDAD");
  titulo("Diseñar para que nadie quede afuera");
  {
    tarjeta(0.55, 1.5, 4.25, 3.55, C.azulOscuro);
    await circuloIcono("access", 0.85, 1.78, 0.6, "0B5FA5", "F5A800");
    S().addText("Diseño Universal del Aprendizaje", { x: 0.85, y: 2.52, w: 3.7, h: 0.7, fontFace: F.t, fontSize: 15.5, bold: true, color: C.blanco, margin: 0 });
    S().addText("Anticipar la diversidad desde el diseño: ofrecer varios caminos para aprender, en vez de uno solo para todos.",
      { x: 0.85, y: 3.28, w: 3.7, h: 1.4, fontFace: F.c, fontSize: 12.5, color: C.azulClaro, valign: "top", margin: 0 });
    const principios = [
      ["eye", "Varias representaciones", "El qué: texto, imagen, audio, video, simulación."],
      ["hands", "Varias formas de expresión", "El cómo: escribir, grabar, dibujar, construir."],
      ["heart", "Varias formas de implicación", "El porqué: opciones que motiven a cada quien."],
    ];
    let y = 1.62;
    for (const [ic, t, dsc] of principios) {
      tarjeta(5.05, y, 4.4, 1.04);
      await circuloIcono(ic, 5.25, y + 0.3, 0.44, C.hielo, C.azul);
      S().addText(t, { x: 5.85, y: y + 0.16, w: 3.45, h: 0.32, fontFace: F.t, fontSize: 12.5, bold: true, color: C.azulOscuro, margin: 0 });
      S().addText(dsc, { x: 5.85, y: y + 0.5, w: 3.45, h: 0.42, fontFace: F.c, fontSize: 10.3, color: C.gris, valign: "top", margin: 0 });
      y += 1.16;
    }
  }
  pie(10);

  /* ---------- 11 · PERTINENCIA CURRICULAR ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · PERTINENCIA CURRICULAR");
  titulo("Que todo recurso tenga un porqué curricular");
  {
    const cadena = [
      ["rules", "Estándar / DBA", "Lo que el currículo espera para el grado."],
      ["target", "Competencia", "La capacidad que se busca desarrollar."],
      ["compass", "Objetivo de la clase", "Lo concreto que se aprenderá hoy."],
      ["puzzle", "Recurso con IA", "La herramienta al servicio de ese objetivo."],
    ];
    const cls = cols(4, 0.55, 8.9, 0.45);
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.3);
      await circuloIcono(cadena[i][0], x + (w - 0.54) / 2, 1.78, 0.54, C.hielo, C.azul);
      S().addText(cadena[i][1], { x: x + 0.08, y: 2.5, w: w - 0.16, h: 0.6, fontFace: F.t, fontSize: 12.5, bold: true, color: C.azulOscuro, align: "center", valign: "top", margin: 0 });
      S().addText(cadena[i][2], { x: x + 0.14, y: 3.12, w: w - 0.28, h: 0.65, fontFace: F.c, fontSize: 10, color: C.gris, align: "center", valign: "top", margin: 0 });
      if (i < 3) S().addText("→", { x: x + w + 0.02, y: 2.35, w: 0.42, h: 0.5, fontFace: F.t, fontSize: 22, bold: true, color: C.dorado, align: "center", margin: 0 });
    }
    tarjeta(0.55, 4.2, 8.9, 0.88, C.doradoSuave);
    S().addText([
      { text: "Pregunta de control:  ", options: { bold: true, color: C.doradoTexto } },
      { text: "“¿Este recurso ayuda a alcanzar el objetivo de aprendizaje?” Si la respuesta no es clara, vuelve al diseño.", options: { color: C.tinta } },
    ], { x: 0.85, y: 4.28, w: 8.3, h: 0.72, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(11);

  /* ---------- 12 · CREATIVIDAD ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · CREATIVIDAD");
  titulo("Cuatro chispas para encender la curiosidad");
  {
    const chispas = [
      ["puzzle", "Pensamiento divergente", "Pide a la IA cinco enfoques distintos para un mismo tema."],
      ["palette", "Analogías potentes", "Conecta lo abstracto con lo cotidiano y memorable."],
      ["play", "Gamificación", "Retos, misiones y narrativas que enganchan."],
      ["book", "Storytelling", "Convierte el contenido en una historia con tensión."],
    ];
    const pos = [[0.55, 1.5], [5.1, 1.5], [0.55, 3.18], [5.1, 3.18]];
    for (let i = 0; i < 4; i++) {
      const [x, y] = pos[i];
      tarjeta(x, y, 4.35, 1.5);
      await circuloIcono(chispas[i][0], x + 0.2, y + 0.2, 0.46, C.doradoSuave, C.doradoOscuro);
      S().addText(chispas[i][1], { x: x + 0.8, y: y + 0.24, w: 3.35, h: 0.32, fontFace: F.t, fontSize: 13, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(chispas[i][2], { x: x + 0.8, y: y + 0.58, w: 3.35, h: 0.8, fontFace: F.c, fontSize: 10.5, color: C.gris, valign: "top", margin: 0 });
    }
  }
  pie(12);

  /* ---------- 13 · CHECKLIST DE CALIDAD ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · CONTROL DE CALIDAD");
  titulo("Antes de llevarlo al aula: lista de chequeo");
  {
    const izq = ["¿Responde a un objetivo de aprendizaje claro?", "¿Es accesible para todos mis estudiantes?", "¿Está conectado con su contexto y realidad?", "¿Es científicamente correcto y actualizado?"];
    const der = ["¿Despierta curiosidad y participación?", "¿Tiene un nivel adecuado al grado?", "¿Incluye una forma de evaluar el avance?", "¿Verifiqué todo lo generado por la IA?"];
    let y = 1.6;
    for (let i = 0; i < 4; i++) {
      tarjeta(0.55, y, 4.3, 0.74, C.blanco);
      S().addImage({ data: await d.iconPng("check", C.verde), x: 0.78, y: y + 0.24, w: 0.27, h: 0.27 });
      S().addText(izq[i], { x: 1.2, y, w: 3.5, h: 0.74, fontFace: F.c, fontSize: 11, color: C.tinta, valign: "middle", margin: 0 });
      tarjeta(5.15, y, 4.3, 0.74, C.blanco);
      S().addImage({ data: await d.iconPng("check", C.verde), x: 5.38, y: y + 0.24, w: 0.27, h: 0.27 });
      S().addText(der[i], { x: 5.8, y, w: 3.5, h: 0.74, fontFace: F.c, fontSize: 11, color: C.tinta, valign: "middle", margin: 0 });
      y += 0.86;
    }
  }
  pie(13);

  /* ---------- 14 · DIVISOR BLOQUE 3 ---------- */
  await divisor("03", "El enfoque CTS como integrador del diseño", ["Ciencia", "Tecnología", "Sociedad"]);

  /* ---------- 15 · CTS TRES EJES ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · LA BRÚJULA DEL DISEÑO");
  titulo("Ciencia, Tecnología y Sociedad");
  {
    const ejes = [
      ["micro", "Ciencia en contexto", "El conocimiento conectado con la vida y el territorio del estudiante."],
      ["cogs", "Tecnología con propósito", "Las herramientas al servicio del aprendizaje, nunca al revés."],
      ["globe", "Sociedad como horizonte", "Toda decisión científica tiene implicaciones éticas y ambientales."],
    ];
    const cls = cols(3);
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.5, w, 2.5);
      await circuloIcono(ejes[i][0], x + 0.22, 1.74, 0.56, C.azulOscuro, "F5A800");
      S().addText(ejes[i][1], { x: x + 0.22, y: 2.48, w: w - 0.44, h: 0.6, fontFace: F.t, fontSize: 14.5, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(ejes[i][2], { x: x + 0.22, y: 3.05, w: w - 0.44, h: 0.9, fontFace: F.c, fontSize: 11, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.28, 8.9, 0.8, C.doradoSuave);
    S().addText([
      { text: "Un recurso con lente CTS  ", options: { bold: true, color: C.doradoTexto } },
      { text: "no solo enseña un concepto: muestra para qué sirve, a quién afecta y qué decisiones implica en el mundo real.", options: { color: C.tinta } },
    ], { x: 0.85, y: 4.36, w: 8.3, h: 0.64, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(15);

  /* ---------- 16 · RECURSO CON LENTE CTS ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · UN EJEMPLO INTEGRADO");
  titulo("Un mismo tema, mirado con lente CTS");
  {
    tarjeta(0.55, 1.5, 2.55, 3.55, C.azul);
    await circuloIcono("leaf", 0.78, 1.78, 0.56, "0B5FA5", "FFFFFF");
    S().addText("Tema", { x: 0.78, y: 2.5, w: 2.1, h: 0.32, fontFace: F.t, fontSize: 13, bold: true, color: C.dorado, margin: 0 });
    S().addText("La calidad del agua en mi comunidad", { x: 0.78, y: 2.86, w: 2.1, h: 1.0, fontFace: F.t, fontSize: 16, bold: true, color: C.blanco, valign: "top", margin: 0 });
    S().addText("Química + biología, grado 9.º", { x: 0.78, y: 3.92, w: 2.1, h: 0.4, fontFace: F.c, fontSize: 10, italic: true, color: C.azulClaro, valign: "top", margin: 0 });
    const ejes = [
      ["micro", "Ciencia", "Medir pH, turbidez y contaminantes; entender el ciclo del agua."],
      ["cogs", "Tecnología", "App de sensores y IA para registrar y analizar las muestras."],
      ["globe", "Sociedad", "¿Quién cuida el agua? Proponer acciones para la comunidad."],
    ];
    let y = 1.5;
    for (const [ic, t, dsc] of ejes) {
      tarjeta(3.35, y, 6.1, 1.1);
      await circuloIcono(ic, 3.58, y + 0.31, 0.48, C.hielo, C.azul);
      S().addText(t, { x: 4.22, y: y + 0.16, w: 5.0, h: 0.32, fontFace: F.t, fontSize: 13.5, bold: true, color: C.azulOscuro, margin: 0 });
      S().addText(dsc, { x: 4.22, y: y + 0.52, w: 5.0, h: 0.45, fontFace: F.c, fontSize: 10.8, color: C.gris, valign: "top", margin: 0 });
      y += 1.22;
    }
  }
  pie(16);

  /* ---------- 17 · LABORATORIO ---------- */
  nueva(C.fondo);
  kicker("MANOS A LA OBRA");
  titulo("Laboratorio: Del concepto al recurso");
  {
    tarjeta(0.55, 1.5, 2.9, 3.55, C.azulOscuro);
    await circuloIcono("bulb", 0.8, 1.78, 0.56, "0B5FA5", "F5A800");
    S().addText("Prototipa tu recurso", { x: 0.8, y: 2.5, w: 2.4, h: 0.6, fontFace: F.t, fontSize: 16, bold: true, color: C.blanco, margin: 0 });
    S().addText("Convierte tu problema de aprendizaje en un primer prototipo, con apoyo de IA.", { x: 0.8, y: 3.15, w: 2.45, h: 0.95, fontFace: F.c, fontSize: 11, color: C.azulClaro, valign: "top", margin: 0 });
    S().addShape(P.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 4.2, w: 2.45, h: 0.5, rectRadius: 0.08, fill: { color: C.dorado } });
    S().addText("Individual · 45 min", { x: 0.8, y: 4.2, w: 2.45, h: 0.5, fontFace: F.c, fontSize: 10.5, bold: true, color: C.noche, align: "center", valign: "middle", margin: 0 });
    const pasos = [
      ["Define el objetivo", "¿Qué deben aprender y por qué les cuesta?"],
      ["Elige el tipo de recurso", "Guía, visual, simulación, juego, evaluación…"],
      ["Co-créalo con IA", "Genera, selecciona, adapta y verifica."],
      ["Valídalo con un par", "Intercambia y recibe retroalimentación."],
    ];
    let y = 1.5;
    for (let i = 0; i < 4; i++) {
      tarjeta(3.75, y, 5.7, 0.78);
      S().addShape(P.shapes.OVAL, { x: 3.95, y: y + 0.17, w: 0.44, h: 0.44, fill: { color: C.dorado } });
      S().addText(String(i + 1), { x: 3.95, y: y + 0.17, w: 0.44, h: 0.44, fontFace: F.t, fontSize: 15, bold: true, color: C.noche, align: "center", valign: "middle", margin: 0 });
      S().addText([
        { text: pasos[i][0], options: { bold: true, color: C.azulOscuro, breakLine: true } },
        { text: pasos[i][1], options: { color: C.gris, fontSize: 10.3 } },
      ], { x: 4.55, y: y + 0.08, w: 4.7, h: 0.66, fontFace: F.c, fontSize: 11.5, valign: "middle", margin: 0 });
      y += 0.93;
    }
  }
  pie(17);

  /* ---------- 18 · RÚBRICA DEL RECURSO ---------- */
  nueva(C.fondo);
  kicker("HACIA EL PRODUCTO FINAL");
  titulo("Con qué criterios se valora tu recurso");
  {
    const crit = [
      ["target", "Pertinencia pedagógica", "Responde a una necesidad real de aprendizaje."],
      ["bulb", "Creatividad", "Propone una experiencia original y motivadora."],
      ["hands", "Aplicabilidad", "Es viable de usar en tu contexto real de aula."],
      ["book", "Fundamentación", "Tiene sustento didáctico y enfoque CTS."],
      ["star", "Calidad técnica", "Está bien elaborado, claro y verificado."],
    ];
    const cls = cols(5, 0.55, 8.9, 0.16);
    for (let i = 0; i < 5; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.55);
      await circuloIcono(crit[i][0], x + (w - 0.52) / 2, 1.8, 0.52, C.azulOscuro, "F5A800");
      S().addText(crit[i][1], { x: x + 0.06, y: 2.46, w: w - 0.12, h: 0.62, fontFace: F.t, fontSize: 11.5, bold: true, color: C.azulOscuro, align: "center", valign: "top", margin: 0 });
      S().addText(crit[i][2], { x: x + 0.12, y: 3.12, w: w - 0.24, h: 0.9, fontFace: F.c, fontSize: 9.6, color: C.gris, align: "center", valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.35, 8.9, 0.72, C.azulOscuro);
    S().addText([
      { text: "Recuérdalo:  ", options: { bold: true, color: C.dorado } },
      { text: "el recurso que diseñas hoy es la semilla de tu propuesta pedagógica final, el producto del módulo (70 %).", options: { color: C.blanco } },
    ], { x: 0.85, y: 4.43, w: 8.3, h: 0.56, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(18);

  /* ---------- 19 · TRABAJO AUTÓNOMO ---------- */
  nueva(C.fondo);
  kicker("DESPUÉS DE LA SESIÓN");
  titulo("Trabajo autónomo y preparación");
  {
    const tareas = [
      ["pencil", "Refina tu prototipo", "Aplica la retroalimentación recibida y la lista de chequeo de calidad."],
      ["access", "Hazlo accesible", "Añade al menos dos formas distintas de representar el contenido."],
      ["book", "Lectura sugerida", "Pedaste et al. (2015): el ciclo del aprendizaje por indagación."],
    ];
    const cls = cols(3);
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.5, w, 2.45);
      await circuloIcono(tareas[i][0], x + 0.22, 1.72, 0.46, C.hielo, C.azul);
      S().addText(tareas[i][1], { x: x + 0.22, y: 2.32, w: w - 0.44, h: 0.4, fontFace: F.t, fontSize: 13, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(tareas[i][2], { x: x + 0.22, y: 2.78, w: w - 0.44, h: 1.05, fontFace: F.c, fontSize: 10.5, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.1, 8.9, 0.98, C.doradoSuave);
    await circuloIcono("shield", 0.78, 4.34, 0.5, C.dorado, "FFFFFF");
    S().addText([
      { text: "Para la Sesión 4:  ", options: { bold: true, color: C.doradoTexto } },
      { text: "revisa tu recurso con ojo crítico — ¿qué datos usa?, ¿es justo con todos? Cerraremos el módulo con la ética y la mejora continua.", options: { color: C.tinta } },
    ], { x: 1.45, y: 4.2, w: 7.85, h: 0.78, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(19);

  /* ---------- 20 · CIERRE ---------- */
  cierre({
    kickerTxt: "PARA LLEVARSE DE LA SESIÓN 3",
    frase: "Diseñar es decidir: la IA multiplica las opciones, tú eliges las que enseñan.",
    proximaLabel: "PRÓXIMA SESIÓN",
    proxima: "Sesión 4 · Evaluación ética y mejora de la práctica",
  });

  await P.writeFile({ fileName: "/tmp/pptx-sesion1/sesion-3-diseno.pptx" });
  console.log("Sesión 3 generada");
}

main().catch((e) => { console.error(e); process.exit(1); });
