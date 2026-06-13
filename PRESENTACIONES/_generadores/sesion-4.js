/* ============================================================================
   SESIÓN 4 — Evaluación ética y mejora de la práctica
   Módulo 9 · Innovación e IA en la Educación Científica · UTP
   ============================================================================ */

const { createDeck } = require("./engine");

async function main() {
  const d = createDeck({
    sesion: 4,
    tituloSesion: "Sesión 4 · Evaluación ética y mejora de la práctica",
  });
  const P = d.P, C = d.C, F = d.F;
  const { nueva, kicker, titulo, pie, cols, tarjeta, circuloIcono, linea, chip, portada, divisor, cierre } = d;
  const S = () => d.S;

  /* ---------- 1 · PORTADA ---------- */
  portada({ subtitulo: "Cerramos el módulo: usar la IA con ética, llevar la innovación al aula y mejorar de forma continua." });

  /* ---------- 2 · LA RUTA DE HOY ---------- */
  nueva(C.fondo);
  kicker("SESIÓN 4 · PUNTO DE PARTIDA");
  titulo("La ruta de hoy");
  {
    const cls = cols(3);
    const datos = [
      ["01", "Ética y desafíos", "Sesgos, privacidad y autonomía: usar la IA de forma responsable en el aula."],
      ["02", "Proyectos de innovación", "Planificar y ejecutar una propuesta pedagógica mediada por IA."],
      ["03", "Mejora continua", "Evaluar, sistematizar y perfeccionar la práctica docente."],
    ];
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.5, w, 2.55);
      S().addText(datos[i][0], { x: x + 0.22, y: 1.68, w: 1.4, h: 0.7, fontFace: F.t, fontSize: 38, bold: true, color: C.dorado, margin: 0 });
      S().addText(datos[i][1], { x: x + 0.22, y: 2.42, w: w - 0.44, h: 0.62, fontFace: F.t, fontSize: 14.5, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(datos[i][2], { x: x + 0.22, y: 3.06, w: w - 0.44, h: 0.9, fontFace: F.c, fontSize: 11, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.3, 8.9, 0.78, C.doradoSuave);
    await circuloIcono("shield", 0.78, 4.45, 0.48, C.dorado, "FFFFFF");
    S().addText([
      { text: "Laboratorio de cierre:  ", options: { bold: true, color: C.azulOscuro } },
      { text: "Auditoría ética de la IA — construiremos un decálogo de uso responsable para el aula.", options: { color: C.doradoTexto } },
    ], { x: 1.42, y: 4.42, w: 6.7, h: 0.55, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
    chip("4 horas", 8.3, 4.52, 1.0);
  }
  pie(2);

  /* ---------- 3 · RECAP + PUENTE ---------- */
  nueva(C.fondo);
  kicker("DONDE QUEDAMOS");
  titulo("Del diseño a la responsabilidad");
  {
    tarjeta(0.55, 1.5, 4.3, 3.05, C.azulOscuro);
    await circuloIcono("bulb", 0.8, 1.78, 0.56, "0B5FA5", "F5A800");
    S().addText("En la Sesión 3 vimos…", { x: 0.8, y: 2.5, w: 3.8, h: 0.35, fontFace: F.t, fontSize: 15, bold: true, color: C.dorado, margin: 0 });
    const recap = ["Cómo diseñar recursos con IA.", "Accesibilidad, pertinencia y creatividad.", "El enfoque CTS como integrador."];
    let ry = 2.92;
    for (const r of recap) {
      S().addShape(P.shapes.OVAL, { x: 0.85, y: ry + 0.05, w: 0.11, h: 0.11, fill: { color: C.dorado } });
      S().addText(r, { x: 1.08, y: ry - 0.07, w: 3.5, h: 0.4, fontFace: F.c, fontSize: 11.5, color: C.blanco, margin: 0 });
      ry += 0.42;
    }
    tarjeta(5.05, 1.5, 4.4, 3.05, C.doradoSuave);
    await circuloIcono("balance", 5.3, 1.78, 0.56, C.dorado, "FFFFFF");
    S().addText("Hoy nos preguntamos…", { x: 5.3, y: 2.5, w: 3.9, h: 0.35, fontFace: F.t, fontSize: 15, bold: true, color: C.doradoTexto, margin: 0 });
    S().addText("Ya sé diseñar con IA. Pero, ¿lo estoy haciendo bien? ¿Es justo, seguro y honesto? ¿Y cómo convierto esto en una práctica que mejora año tras año?",
      { x: 5.3, y: 2.92, w: 3.9, h: 1.5, fontFace: F.c, fontSize: 13, italic: true, color: C.tinta, valign: "top", margin: 0 });
  }
  pie(3);

  /* ---------- 4 · DIVISOR BLOQUE 1 ---------- */
  await divisor("01", "Ética y desafíos en el uso de IA en educación", ["Sesgos", "Privacidad", "Autonomía", "Decálogo"]);

  /* ---------- 5 · POR QUÉ IMPORTA LA ÉTICA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · EL PORQUÉ");
  titulo("La ética no es un trámite: es parte del diseño");
  {
    tarjeta(0.55, 1.5, 4.25, 3.55, C.azulOscuro);
    S().addText('"', { x: 0.75, y: 1.5, w: 0.8, h: 0.8, fontFace: F.t, fontSize: 60, bold: true, color: C.dorado, margin: 0 });
    S().addText([
      { text: "Trabajamos con ", options: {} },
      { text: "menores de edad", options: { bold: true, color: C.dorado } },
      { text: " y con tecnologías que aprenden de datos. Cada decisión sobre la IA tiene consecuencias ", options: {} },
      { text: "humanas", options: { bold: true, color: C.dorado } },
      { text: ", no solo técnicas.", options: {} },
    ], { x: 0.88, y: 2.3, w: 3.6, h: 2.0, fontFace: F.c, fontSize: 15.5, color: C.blanco, valign: "top", margin: 0 });
    const ejes = [
      ["balance", "Justicia", "¿La herramienta trata por igual a todos mis estudiantes?"],
      ["lock", "Privacidad", "¿Qué datos comparto y dónde terminan?"],
      ["brain", "Autonomía", "¿Sigo formando personas que piensan por sí mismas?"],
      ["handshake", "Honestidad", "¿Soy transparente sobre cómo y cuándo uso IA?"],
    ];
    let y = 1.5;
    for (const [ic, t, dsc] of ejes) {
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

  /* ---------- 6 · SESGOS ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · SESGOS");
  titulo("La IA hereda los prejuicios de sus datos");
  {
    tarjeta(0.55, 1.5, 4.25, 3.55, C.azulOscuro);
    await circuloIcono("balance", 0.85, 1.78, 0.6, "0B5FA5", "F5A800");
    S().addText("¿Qué es un sesgo?", { x: 0.85, y: 2.52, w: 3.7, h: 0.5, fontFace: F.t, fontSize: 16, bold: true, color: C.blanco, margin: 0 });
    S().addText("La IA aprende de datos creados por personas. Si esos datos están desbalanceados, reproduce y amplifica desigualdades de género, cultura o territorio.",
      { x: 0.85, y: 3.06, w: 3.7, h: 1.6, fontFace: F.c, fontSize: 12.5, color: C.azulClaro, valign: "top", margin: 0 });
    const mit = [
      ["search", "Detéctalo", "Revisa si los resultados favorecen o excluyen a alguien."],
      ["users", "Diversifica", "Usa ejemplos variados y representativos de tu comunidad."],
      ["eye", "Contrasta", "Compara la salida de la IA con la realidad de tu aula."],
      ["comments", "Conversa", "Convierte el sesgo en tema de discusión con tus estudiantes."],
    ];
    let y = 1.5;
    for (const [ic, t, dsc] of mit) {
      tarjeta(5.05, y, 4.4, 0.78);
      await circuloIcono(ic, 5.25, y + 0.17, 0.44, C.hielo, C.azul);
      S().addText([
        { text: t, options: { bold: true, color: C.azulOscuro, breakLine: true } },
        { text: dsc, options: { color: C.gris, fontSize: 10.3 } },
      ], { x: 5.85, y: y + 0.08, w: 3.45, h: 0.66, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
      y += 0.88;
    }
  }
  pie(6);

  /* ---------- 7 · PRIVACIDAD ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · PRIVACIDAD");
  titulo("Proteger los datos de los estudiantes");
  {
    const reglas = [
      ["lock", "Datos mínimos", "Comparte con la IA solo lo estrictamente necesario."],
      ["fingerprint", "Sin datos personales", "Nunca nombres, documentos ni información sensible de menores."],
      ["shield", "Anonimiza", "Si necesitas un caso real, quítale todo dato identificable."],
      ["book", "Conoce la herramienta", "Lee qué hace con la información que recibe."],
      ["handshake", "Pide permiso", "Informa a la institución y a las familias."],
      ["eye", "Sé transparente", "Que estudiantes y familias sepan qué se usa y para qué."],
    ];
    const cls = cols(3);
    for (let i = 0; i < 6; i++) {
      const { x, w } = cls[i % 3];
      const y = 1.5 + Math.floor(i / 3) * 1.78;
      tarjeta(x, y, w, 1.58);
      await circuloIcono(reglas[i][0], x + 0.2, y + 0.2, 0.46, C.hielo, C.azul);
      S().addText(reglas[i][1], { x: x + 0.78, y: y + 0.24, w: w - 0.95, h: 0.6, fontFace: F.t, fontSize: 12, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(reglas[i][2], { x: x + 0.2, y: y + 0.9, w: w - 0.4, h: 0.6, fontFace: F.c, fontSize: 10.3, color: C.gris, valign: "top", margin: 0 });
    }
  }
  pie(7);

  /* ---------- 8 · AUTONOMÍA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · AUTONOMÍA");
  titulo("Que la IA potencie el pensar, no lo reemplace");
  {
    S().addText("EL RIESGO", { x: 0.55, y: 1.45, w: 4.3, h: 0.3, fontFace: F.t, fontSize: 12, bold: true, color: C.rojo, charSpacing: 2, margin: 0 });
    S().addText("LA BUENA PRÁCTICA", { x: 5.15, y: 1.45, w: 4.3, h: 0.3, fontFace: F.t, fontSize: 12, bold: true, color: C.verdeTexto, charSpacing: 2, margin: 0 });
    const riesgo = ["Copiar y pegar la respuesta de la IA", "Dejar de esforzarse por entender", "Aceptar todo sin cuestionar", "Perder habilidades por no practicarlas"];
    const buena = ["Usar la IA como punto de partida, no de llegada", "Pedir que explique, no solo que resuelva", "Verificar, criticar y mejorar lo recibido", "Practicar el razonamiento, con IA como apoyo"];
    let y = 1.82;
    for (let i = 0; i < 4; i++) {
      tarjeta(0.55, y, 4.3, 0.72, C.rojoSuave, false);
      S().addImage({ data: await d.iconPng("times", C.rojo), x: 0.75, y: y + 0.23, w: 0.26, h: 0.26 });
      S().addText(riesgo[i], { x: 1.14, y, w: 3.6, h: 0.72, fontFace: F.c, fontSize: 11, color: C.rojoTexto, valign: "middle", margin: 0 });
      tarjeta(5.15, y, 4.3, 0.72, C.verdeSuave, false);
      S().addImage({ data: await d.iconPng("check", C.verde), x: 5.35, y: y + 0.23, w: 0.26, h: 0.26 });
      S().addText(buena[i], { x: 5.74, y, w: 3.6, h: 0.72, fontFace: F.c, fontSize: 11, bold: true, color: C.verdeTexto, valign: "middle", margin: 0 });
      y += 0.84;
    }
  }
  pie(8);

  /* ---------- 9 · DECÁLOGO ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · SÍNTESIS");
  titulo("Decálogo del uso responsable de la IA");
  {
    const puntos = [
      "Primero el objetivo, después la herramienta.",
      "Verifica todo lo que la IA produce.",
      "Protege los datos, sobre todo de menores.",
      "Sé transparente: di cuándo usas IA.",
      "Vigila y corrige los sesgos.",
      "Tu criterio docente es el filtro final.",
      "Fomenta el pensar, no la dependencia.",
      "Garantiza acceso equitativo para todos.",
      "Respeta la autoría y la honestidad académica.",
      "Evalúa el impacto y mejora continuamente.",
    ];
    const cls = cols(2, 0.55, 8.9, 0.4);
    for (let i = 0; i < 10; i++) {
      const col = cls[Math.floor(i / 5)];
      const y = 1.5 + (i % 5) * 0.71;
      tarjeta(col.x, y, col.w, 0.62, C.blanco, false);
      S().addShape(P.shapes.OVAL, { x: col.x + 0.16, y: y + 0.15, w: 0.32, h: 0.32, fill: { color: C.azul } });
      S().addText(String(i + 1), { x: col.x + 0.16, y: y + 0.15, w: 0.32, h: 0.32, fontFace: F.t, fontSize: 11, bold: true, color: C.blanco, align: "center", valign: "middle", margin: 0 });
      S().addText(puntos[i], { x: col.x + 0.62, y, w: col.w - 0.78, h: 0.62, fontFace: F.c, fontSize: 11, color: C.tinta, valign: "middle", margin: 0 });
    }
  }
  pie(9);

  /* ---------- 10 · DIVISOR BLOQUE 2 ---------- */
  await divisor("02", "Proyectos de innovación educativa mediados por IA", ["Anatomía", "Planificar", "Ejecutar", "Producto final"]);

  /* ---------- 11 · ANATOMÍA DEL PROYECTO ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · ANATOMÍA");
  titulo("Las partes de un proyecto de innovación");
  {
    const partes = [
      ["search", "Justificación", "Qué problema resuelve y por qué importa."],
      ["target", "Objetivos", "Qué se espera lograr, de forma medible."],
      ["puzzle", "Actividades", "Qué harán los estudiantes, paso a paso."],
      ["cogs", "Recursos", "Herramientas de IA, materiales y tiempos."],
      ["clip", "Evaluación", "Cómo se sabrá si funcionó."],
      ["recycle", "Mejora", "Cómo se sistematiza y se perfecciona."],
    ];
    const cls = cols(3);
    for (let i = 0; i < 6; i++) {
      const { x, w } = cls[i % 3];
      const y = 1.5 + Math.floor(i / 3) * 1.78;
      tarjeta(x, y, w, 1.58);
      await circuloIcono(partes[i][0], x + 0.2, y + 0.2, 0.46, C.hielo, C.azul);
      S().addText(partes[i][1], { x: x + 0.78, y: y + 0.24, w: w - 0.95, h: 0.6, fontFace: F.t, fontSize: 12.5, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(partes[i][2], { x: x + 0.2, y: y + 0.9, w: w - 0.4, h: 0.6, fontFace: F.c, fontSize: 10.3, color: C.gris, valign: "top", margin: 0 });
    }
  }
  pie(11);

  /* ---------- 12 · PLANIFICACIÓN ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · PLANIFICAR");
  titulo("De la idea al plan de acción");
  {
    const pasos = [
      ["target", "1 · Meta", "¿Qué quiero que aprendan y cómo lo sabré?"],
      ["calend", "2 · Cronograma", "¿En qué sesiones y con qué tiempos?"],
      ["cogs", "3 · Recursos", "¿Qué herramientas, materiales y apoyos necesito?"],
      ["warn", "4 · Riesgos", "¿Qué puede fallar y cómo lo preveo?"],
    ];
    const cls = cols(4, 0.55, 8.9, 0.45);
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.25);
      await circuloIcono(pasos[i][0], x + (w - 0.54) / 2, 1.78, 0.54, C.azulOscuro, "F5A800");
      S().addText(pasos[i][1], { x: x + 0.1, y: 2.48, w: w - 0.2, h: 0.3, fontFace: F.t, fontSize: 12.5, bold: true, color: C.azulOscuro, align: "center", margin: 0 });
      S().addText(pasos[i][2], { x: x + 0.15, y: 2.82, w: w - 0.3, h: 0.9, fontFace: F.c, fontSize: 10.2, color: C.gris, align: "center", valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.12, 8.9, 0.95, C.azulOscuro);
    S().addText([
      { text: "Empieza pequeño.  ", options: { bold: true, color: C.dorado, breakLine: true } },
      { text: "Un buen proyecto de innovación cabe en una unidad o un par de clases. Pilotea, aprende y luego escala.", options: { color: C.blanco } },
    ], { x: 0.85, y: 4.26, w: 8.3, h: 0.7, fontFace: F.c, fontSize: 12.5, margin: 0 });
  }
  pie(12);

  /* ---------- 13 · EJECUCIÓN ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · EJECUTAR");
  titulo("Llevar el proyecto al aula");
  {
    const items = [
      ["rocket", "Pilotea", "Prueba con un grupo antes de generalizar."],
      ["chalk", "Acompaña", "Tu rol es mediar, no solo poner la actividad."],
      ["eye", "Observa", "Registra qué pasa: qué motiva, qué confunde."],
      ["sync", "Ajusta sobre la marcha", "Corrige en tiempo real lo que no funciona."],
    ];
    const pos = [[0.55, 1.45], [5.1, 1.45], [0.55, 2.99], [5.1, 2.99]];
    for (let i = 0; i < 4; i++) {
      const [x, y] = pos[i];
      tarjeta(x, y, 4.35, 1.4);
      await circuloIcono(items[i][0], x + 0.2, y + 0.18, 0.46, C.hielo, C.azul);
      S().addText(items[i][1], { x: x + 0.8, y: y + 0.2, w: 3.35, h: 0.32, fontFace: F.t, fontSize: 13.5, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(items[i][2], { x: x + 0.8, y: y + 0.54, w: 3.35, h: 0.78, fontFace: F.c, fontSize: 10.5, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.56, 8.9, 0.52, C.doradoSuave);
    S().addText([
      { text: "Recuerda:  ", options: { bold: true, color: C.doradoTexto } },
      { text: "el error no es un fracaso, es información para mejorar. Documenta también lo que no salió bien.", options: { color: C.tinta } },
    ], { x: 0.85, y: 4.59, w: 8.3, h: 0.46, fontFace: F.c, fontSize: 11.5, valign: "middle", margin: 0 });
  }
  pie(13);

  /* ---------- 14 · PRODUCTO FINAL ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · TU ENTREGABLE");
  titulo("El producto final del módulo");
  {
    tarjeta(0.55, 1.5, 4.25, 3.55, C.azulOscuro);
    await circuloIcono("certificate", 0.85, 1.78, 0.6, "0B5FA5", "F5A800");
    S().addText("Una propuesta pedagógica innovadora mediada por IA", { x: 0.85, y: 2.52, w: 3.7, h: 0.9, fontFace: F.t, fontSize: 15.5, bold: true, color: C.blanco, valign: "top", margin: 0 });
    S().addText("Para tu propia práctica docente, lista para llevar al aula.", { x: 0.85, y: 3.5, w: 3.7, h: 0.7, fontFace: F.c, fontSize: 12, color: C.azulClaro, valign: "top", margin: 0 });
    S().addText("Vale el 70 % de la evaluación", { x: 0.85, y: 4.55, w: 3.7, h: 0.35, fontFace: F.c, fontSize: 10.5, italic: true, color: C.dorado, margin: 0 });
    const debe = [
      ["map", "Contexto y problema", "A quién va dirigido y qué necesidad atiende."],
      ["puzzle", "El recurso con IA", "Lo que diseñaste, con su fundamentación."],
      ["calend", "Plan de aula", "Cómo se implementa y se evalúa."],
      ["balance", "Reflexión ética y CTS", "Cómo cuida los datos, la equidad y el contexto."],
    ];
    let y = 1.5;
    for (const [ic, t, dsc] of debe) {
      tarjeta(5.05, y, 4.4, 0.82);
      await circuloIcono(ic, 5.25, y + 0.19, 0.44, C.hielo, C.azul);
      S().addText([
        { text: t, options: { bold: true, color: C.azulOscuro, breakLine: true } },
        { text: dsc, options: { color: C.gris, fontSize: 10.3 } },
      ], { x: 5.85, y: y + 0.09, w: 3.45, h: 0.66, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
      y += 0.92;
    }
  }
  pie(14);

  /* ---------- 15 · DIVISOR BLOQUE 3 ---------- */
  await divisor("03", "Evaluación, sistematización y mejora continua", ["Evaluar", "Sistematizar", "Mejorar"]);

  /* ---------- 16 · EVALUAR LA INNOVACIÓN ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · EVALUAR");
  titulo("¿Funcionó? Cómo saberlo con evidencia");
  {
    const ind = [
      ["grad", "Aprendizaje", "¿Mejoró la comprensión del concepto?"],
      ["heart", "Motivación", "¿Aumentó el interés y la participación?"],
      ["users", "Equidad", "¿Aprendieron todos, o solo algunos?"],
      ["chalk", "Tu práctica", "¿Qué aprendiste tú como docente?"],
    ];
    const cls = cols(4, 0.55, 8.9, 0.2);
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.4);
      await circuloIcono(ind[i][0], x + (w - 0.54) / 2, 1.8, 0.54, C.hielo, C.azul);
      S().addText(ind[i][1], { x: x + 0.08, y: 2.52, w: w - 0.16, h: 0.32, fontFace: F.t, fontSize: 13, bold: true, color: C.azulOscuro, align: "center", margin: 0 });
      S().addText(ind[i][2], { x: x + 0.12, y: 2.88, w: w - 0.24, h: 1.0, fontFace: F.c, fontSize: 10, color: C.gris, align: "center", valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.25, 8.9, 0.82, C.doradoSuave);
    S().addText([
      { text: "Evidencia, no impresión:  ", options: { bold: true, color: C.doradoTexto } },
      { text: "recoge datos —productos, observaciones, voces de los estudiantes— para sostener tus conclusiones.", options: { color: C.tinta } },
    ], { x: 0.85, y: 4.33, w: 8.3, h: 0.66, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(16);

  /* ---------- 17 · SISTEMATIZAR ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · SISTEMATIZAR");
  titulo("Documentar para no perder lo aprendido");
  {
    tarjeta(0.55, 1.5, 4.25, 3.55, C.azulOscuro);
    await circuloIcono("book", 0.85, 1.78, 0.6, "0B5FA5", "F5A800");
    S().addText("¿Qué es sistematizar?", { x: 0.85, y: 2.52, w: 3.7, h: 0.5, fontFace: F.t, fontSize: 16, bold: true, color: C.blanco, margin: 0 });
    S().addText("Registrar de forma ordenada la experiencia —lo que se hizo, lo que pasó y lo que se aprendió— para reflexionar y compartir.",
      { x: 0.85, y: 3.06, w: 3.7, h: 1.6, fontFace: F.c, fontSize: 12.5, color: C.azulClaro, valign: "top", margin: 0 });
    const comp = [
      ["edit", "Registra el proceso", "Qué hiciste, cuándo y con qué recursos."],
      ["eye", "Guarda evidencias", "Productos, fotos, comentarios, datos."],
      ["bulb", "Extrae aprendizajes", "Qué funcionó, qué no y por qué."],
      ["share", "Comparte", "Con colegas: tu experiencia ayuda a otros."],
    ];
    let y = 1.5;
    for (const [ic, t, dsc] of comp) {
      tarjeta(5.05, y, 4.4, 0.82);
      await circuloIcono(ic, 5.25, y + 0.19, 0.44, C.hielo, C.azul);
      S().addText([
        { text: t, options: { bold: true, color: C.azulOscuro, breakLine: true } },
        { text: dsc, options: { color: C.gris, fontSize: 10.3 } },
      ], { x: 5.85, y: y + 0.09, w: 3.45, h: 0.66, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
      y += 0.92;
    }
  }
  pie(17);

  /* ---------- 18 · MEJORA CONTINUA (PHVA) ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · MEJORA CONTINUA");
  titulo("La innovación es un ciclo, no un evento");
  {
    const ciclo = [
      ["target", "Planear", "Define qué mejorar y cómo."],
      ["rocket", "Hacer", "Implementa el cambio en el aula."],
      ["search", "Verificar", "Mide los resultados con evidencia."],
      ["recycle", "Actuar", "Ajusta y vuelve a empezar, mejor."],
    ];
    const cls = cols(4, 0.55, 8.9, 0.45);
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.25);
      await circuloIcono(ciclo[i][0], x + (w - 0.54) / 2, 1.78, 0.54, C.azulOscuro, "F5A800");
      S().addText((i + 1) + " · " + ciclo[i][1], { x: x + 0.1, y: 2.5, w: w - 0.2, h: 0.3, fontFace: F.t, fontSize: 13, bold: true, color: C.azulOscuro, align: "center", margin: 0 });
      S().addText(ciclo[i][2], { x: x + 0.15, y: 2.86, w: w - 0.3, h: 0.85, fontFace: F.c, fontSize: 10.2, color: C.gris, align: "center", valign: "top", margin: 0 });
      if (i < 3) S().addText("→", { x: x + w + 0.02, y: 2.35, w: 0.42, h: 0.5, fontFace: F.t, fontSize: 22, bold: true, color: C.dorado, align: "center", margin: 0 });
    }
    tarjeta(0.55, 4.12, 8.9, 0.95, C.azulOscuro);
    S().addText([
      { text: "Ciclo PHVA.  ", options: { bold: true, color: C.dorado, breakLine: true } },
      { text: "Cada vez que repites el ciclo, tu práctica se vuelve más efectiva, más justa y más tuya. Mejorar nunca termina.", options: { color: C.blanco } },
    ], { x: 0.85, y: 4.26, w: 8.3, h: 0.7, fontFace: F.c, fontSize: 12.5, margin: 0 });
  }
  pie(18);

  /* ---------- 19 · CÓMO SE EVALÚA EL MÓDULO ---------- */
  nueva(C.fondo);
  kicker("EVALUACIÓN DEL MÓDULO");
  titulo("Cómo se valora tu trabajo");
  {
    S().addShape(P.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 1.55, w: 8.9, h: 0.62, rectRadius: 0.06, fill: { color: C.hielo } });
    S().addShape(P.shapes.RECTANGLE, { x: 0.55, y: 1.55, w: 8.9 * 0.30, h: 0.62, fill: { color: C.azulMedio } });
    S().addText("Proceso 30 %", { x: 0.55, y: 1.55, w: 8.9 * 0.30, h: 0.62, fontFace: F.t, fontSize: 12, bold: true, color: C.blanco, align: "center", valign: "middle", margin: 0 });
    S().addText("Producto final 70 %", { x: 0.55 + 8.9 * 0.30, y: 1.55, w: 8.9 * 0.70, h: 0.62, fontFace: F.t, fontSize: 13, bold: true, color: C.azulOscuro, align: "center", valign: "middle", margin: 0 });
    const desg = [
      ["Autoevaluación", "30 %", "Tu propia mirada crítica sobre lo aprendido."],
      ["Coevaluación", "30 %", "La valoración entre pares del diplomado."],
      ["Heteroevaluación", "40 %", "La valoración del docente orientador."],
    ];
    const cls = cols(3);
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 2.5, w, 1.65);
      S().addText(desg[i][1], { x: x + 0.22, y: 2.66, w: w - 0.44, h: 0.5, fontFace: F.t, fontSize: 26, bold: true, color: C.dorado, margin: 0 });
      S().addText(desg[i][0], { x: x + 0.22, y: 3.2, w: w - 0.44, h: 0.32, fontFace: F.t, fontSize: 13.5, bold: true, color: C.azulOscuro, margin: 0 });
      S().addText(desg[i][2], { x: x + 0.22, y: 3.54, w: w - 0.44, h: 0.55, fontFace: F.c, fontSize: 10.3, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.35, 8.9, 0.72, C.doradoSuave);
    S().addText([
      { text: "Evaluación formativa:  ", options: { bold: true, color: C.doradoTexto } },
      { text: "no se trata solo de una nota, sino de crecer como docente innovador, con criterios claros y reflexión.", options: { color: C.tinta } },
    ], { x: 0.85, y: 4.43, w: 8.3, h: 0.56, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(19);

  /* ---------- 20 · LABORATORIO ---------- */
  nueva(C.fondo);
  kicker("MANOS A LA OBRA");
  titulo("Laboratorio: Auditoría ética de la IA");
  {
    tarjeta(0.55, 1.5, 2.9, 3.55, C.azulOscuro);
    await circuloIcono("shield", 0.8, 1.78, 0.56, "0B5FA5", "F5A800");
    S().addText("Audita tu recurso", { x: 0.8, y: 2.5, w: 2.4, h: 0.6, fontFace: F.t, fontSize: 16, bold: true, color: C.blanco, margin: 0 });
    S().addText("Revisa con lente ética el recurso que diseñaste y construye tu decálogo.", { x: 0.8, y: 3.15, w: 2.45, h: 0.95, fontFace: F.c, fontSize: 11, color: C.azulClaro, valign: "top", margin: 0 });
    S().addShape(P.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 4.2, w: 2.45, h: 0.5, rectRadius: 0.08, fill: { color: C.dorado } });
    S().addText("En grupos · 40 min", { x: 0.8, y: 4.2, w: 2.45, h: 0.5, fontFace: F.c, fontSize: 10.5, bold: true, color: C.noche, align: "center", valign: "middle", margin: 0 });
    const pasos = [
      ["Revisa los datos", "¿Qué información usa? ¿Protege a los menores?"],
      ["Busca sesgos", "¿Favorece o excluye a algún estudiante?"],
      ["Verifica la transparencia", "¿Se sabe cuándo y cómo interviene la IA?"],
      ["Escribe tu decálogo", "Tres reglas de oro para tu aula."],
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
  pie(20);

  /* ---------- 21 · CIERRE DEL MÓDULO ---------- */
  nueva(C.azulOscuro);
  S().addShape(P.shapes.OVAL, { x: 7.55, y: -1.55, w: 4.6, h: 4.6, fill: { color: C.azulOscuro }, line: { color: C.azulMedio, width: 1 } });
  S().addShape(P.shapes.OVAL, { x: 8.35, y: -0.75, w: 3.0, h: 3.0, fill: { color: C.azulOscuro }, line: { color: C.azulSuave, width: 1 } });
  S().addShape(P.shapes.OVAL, { x: 9.05, y: 0.0, w: 1.1, h: 1.1, fill: { color: C.dorado } });
  S().addText("FIN DEL MÓDULO 9", { x: 0.58, y: 0.7, w: 6.2, h: 0.3, fontFace: F.t, fontSize: 11, bold: true, color: C.dorado, charSpacing: 3, margin: 0 });
  S().addText("Innovar no es usar IA: es enseñar mejor, con ética y con propósito.", { x: 0.55, y: 1.12, w: 7.2, h: 1.4, fontFace: F.t, fontSize: 27, bold: true, color: C.blanco, valign: "top", margin: 0 });
  {
    const hitos = [
      ["bulb", "S1 · Fundamentos"],
      ["wand", "S2 · Herramientas"],
      ["puzzle", "S3 · Diseño"],
      ["shield", "S4 · Ética y mejora"],
    ];
    let x = 0.58;
    for (const [ic, t] of hitos) {
      const w = 2.06;
      S().addShape(P.shapes.ROUNDED_RECTANGLE, { x, y: 2.78, w, h: 0.92, rectRadius: 0.08, fill: { color: C.azul }, line: { color: C.azulMedio, width: 1 } });
      await circuloIcono(ic, x + 0.16, 2.96, 0.56, "0B5FA5", "F5A800");
      S().addText(t, { x: x + 0.82, y: 2.78, w: w - 0.92, h: 0.92, fontFace: F.t, fontSize: 11, bold: true, color: C.blanco, valign: "middle", margin: 0 });
      x += w + 0.18;
    }
  }
  S().addText("¡Felicitaciones! Ahora cuentas con las herramientas para liderar el cambio en tu aula de ciencias.",
    { x: 0.58, y: 3.95, w: 6.6, h: 0.7, fontFace: F.c, fontSize: 13, color: C.azulClaro, valign: "top", margin: 0 });
  S().addText("PhD. Álvaro Cárdenas Orozco  ·  alvaro.cardenas.orozco@gmail.com  ·  Universidad Tecnológica de Pereira",
    { x: 0.58, y: 4.95, w: 8.3, h: 0.3, fontFace: F.c, fontSize: 10.5, color: C.azulSuave, margin: 0 });

  await P.writeFile({ fileName: "/tmp/pptx-sesion1/sesion-4-etica.pptx" });
  console.log("Sesión 4 generada");
}

main().catch((e) => { console.error(e); process.exit(1); });
