/* ============================================================================
   SESIÓN 2 — Herramientas emergentes para la enseñanza de las ciencias
   Módulo 9 · Innovación e IA en la Educación Científica · UTP
   ============================================================================ */

const { createDeck } = require("./engine");

async function main() {
  const d = createDeck({
    sesion: 2,
    tituloSesion: "Sesión 2 · Herramientas emergentes para la enseñanza de las ciencias",
  });
  const P = d.P, C = d.C, F = d.F;
  const { nueva, kicker, titulo, pie, cols, tarjeta, circuloIcono, linea, chip, portada, divisor, cierre } = d;
  const S = () => d.S;

  /* ---------- 1 · PORTADA ---------- */
  portada({ subtitulo: "Un recorrido práctico por las herramientas de IA que puedes llevar hoy al aula de ciencias." });

  /* ---------- 2 · LA RUTA DE HOY ---------- */
  nueva(C.fondo);
  kicker("SESIÓN 2 · PUNTO DE PARTIDA");
  titulo("La ruta de hoy");
  {
    const cls = cols(3);
    const datos = [
      ["01", "Panorama de herramientas", "ChatGPT, Teachable Machine, DALL·E y Copilot: qué hacen y cómo elegirlas con criterio."],
      ["02", "Aplicaciones en el aula", "Generación de contenidos, evaluación automatizada y analítica para anticipar dificultades."],
      ["03", "Análisis de experiencias", "Casos reales en física, química y biología: qué funcionó y qué conviene cuidar."],
    ];
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.5, w, 2.55);
      S().addText(datos[i][0], { x: x + 0.22, y: 1.68, w: 1.4, h: 0.7, fontFace: F.t, fontSize: 38, bold: true, color: C.dorado, margin: 0 });
      S().addText(datos[i][1], { x: x + 0.22, y: 2.42, w: w - 0.44, h: 0.62, fontFace: F.t, fontSize: 14.5, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(datos[i][2], { x: x + 0.22, y: 3.06, w: w - 0.44, h: 0.9, fontFace: F.c, fontSize: 11, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.3, 8.9, 0.78, C.doradoSuave);
    await circuloIcono("wand", 0.78, 4.45, 0.48, C.dorado, "FFFFFF");
    S().addText([
      { text: "Laboratorio de cierre:  ", options: { bold: true, color: C.azulOscuro } },
      { text: "Prompts para enseñar ciencias — construiremos juntos un banco de prompts verificados.", options: { color: C.doradoTexto } },
    ], { x: 1.42, y: 4.42, w: 6.7, h: 0.55, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
    chip("4 horas", 8.3, 4.52, 1.0);
  }
  pie(2);

  /* ---------- 3 · RECAP + PUENTE ---------- */
  nueva(C.fondo);
  kicker("DONDE QUEDAMOS");
  titulo("De los fundamentos a la práctica");
  {
    tarjeta(0.55, 1.5, 4.3, 3.05, C.azulOscuro);
    await circuloIcono("compass", 0.8, 1.78, 0.56, "0B5FA5", "F5A800");
    S().addText("En la Sesión 1 vimos…", { x: 0.8, y: 2.5, w: 3.8, h: 0.35, fontFace: F.t, fontSize: 15, bold: true, color: C.dorado, margin: 0 });
    const recap = ["Qué es innovar (y qué no) en ciencias.", "Qué es la IA: tipos y potencialidades.", "La IA redistribuye el tiempo docente."];
    let ry = 2.92;
    for (const r of recap) {
      S().addShape(P.shapes.OVAL, { x: 0.85, y: ry + 0.05, w: 0.11, h: 0.11, fill: { color: C.dorado } });
      S().addText(r, { x: 1.08, y: ry - 0.07, w: 3.5, h: 0.4, fontFace: F.c, fontSize: 11.5, color: C.blanco, margin: 0 });
      ry += 0.42;
    }
    tarjeta(5.05, 1.5, 4.4, 3.05, C.doradoSuave);
    await circuloIcono("quest", 5.3, 1.78, 0.56, C.dorado, "FFFFFF");
    S().addText("Hoy nos preguntamos…", { x: 5.3, y: 2.5, w: 3.9, h: 0.35, fontFace: F.t, fontSize: 15, bold: true, color: C.doradoTexto, margin: 0 });
    S().addText("Si la IA puede ayudarme a enseñar mejor, ¿cuáles herramientas existen, qué sabe hacer cada una y cómo las elijo con criterio pedagógico — sin perderme en la novedad?",
      { x: 5.3, y: 2.92, w: 3.9, h: 1.5, fontFace: F.c, fontSize: 13, italic: true, color: C.tinta, valign: "top", margin: 0 });
  }
  pie(3);

  /* ---------- 4 · DIVISOR BLOQUE 1 ---------- */
  await divisor("01", "Panorama de herramientas de IA para enseñar ciencias", ["Criterios", "ChatGPT", "Teachable Machine", "DALL·E", "Copilot"]);

  /* ---------- 5 · CÓMO ELEGIR UNA HERRAMIENTA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · CRITERIOS DE SELECCIÓN");
  titulo("Antes de usarla: cinco preguntas clave");
  {
    const crit = [
      ["target", "¿Qué problema resuelve?", "Primero el objetivo pedagógico; la herramienta viene después."],
      ["access", "¿Es accesible?", "Gratuita o con versión educativa, y usable por todos los estudiantes."],
      ["lock", "¿Protege los datos?", "Cuidado con la información personal, sobre todo de menores de edad."],
      ["check", "¿Es confiable?", "¿Puedo verificar lo que produce? ¿Con qué frecuencia se equivoca?"],
      ["grad", "¿Aporta al aprendizaje?", "Suma valor real o solo agrega ruido y distracción."],
    ];
    const cls = cols(5, 0.55, 8.9, 0.16);
    for (let i = 0; i < 5; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.55);
      await circuloIcono(crit[i][0], x + (w - 0.52) / 2, 1.8, 0.52, C.hielo, C.azul);
      S().addText(crit[i][1], { x: x + 0.08, y: 2.46, w: w - 0.16, h: 0.5, fontFace: F.t, fontSize: 12, bold: true, color: C.azulOscuro, align: "center", valign: "top", margin: 0 });
      S().addText(crit[i][2], { x: x + 0.12, y: 2.98, w: w - 0.24, h: 1.05, fontFace: F.c, fontSize: 9.8, color: C.gris, align: "center", valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.42, 8.9, 0.6, C.azulOscuro);
    S().addText([
      { text: "Regla de oro:  ", options: { bold: true, color: C.dorado } },
      { text: "no uses la herramienta más nueva, sino la más pertinente para lo que deben aprender.", options: { color: C.blanco } },
    ], { x: 0.85, y: 4.42, w: 8.3, h: 0.6, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(5);

  /* ---------- 6 · CHATGPT ---------- */
  await herramientaDetalle(d, {
    num: 6, icono: "comments", nombre: "ChatGPT", tipo: "IA generativa de texto",
    definicion: "Un asistente conversacional que comprende y genera lenguaje natural. Le pides algo en palabras y responde con texto útil al instante.",
    nota: "Versión gratuita disponible · chat.openai.com",
    usos: [
      ["pen", "Explicaciones y analogías", "Reformula un concepto difícil en lenguaje cercano al estudiante."],
      ["clip", "Preguntas y evaluaciones", "Genera cuestionarios, casos y rúbricas en segundos."],
      ["book", "Guías y secuencias", "Borradores de talleres y planeaciones para personalizar."],
      ["users", "Diferenciación", "Versiones del mismo material por nivel o ritmo."],
    ],
  });

  /* ---------- 7 · TEACHABLE MACHINE ---------- */
  await herramientaDetalle(d, {
    num: 7, icono: "brain", nombre: "Teachable Machine", tipo: "Aprendizaje automático sin código",
    definicion: "Una herramienta de Google para entrenar modelos de IA que reconocen imágenes, sonidos o poses — sin escribir una sola línea de código.",
    nota: "Gratuita · teachablemachine.withgoogle.com",
    usos: [
      ["camera", "Clasificar imágenes", "Hojas, minerales, células o montajes de laboratorio."],
      ["mic", "Reconocer sonidos", "Cantos de aves, notas musicales, alertas de seguridad."],
      ["grad", "IA tangible", "Los estudiantes 'enseñan' a la máquina y ven cómo aprende."],
      ["warn", "Descubrir sesgos", "Si los ejemplos están desbalanceados, el modelo falla."],
    ],
  });

  /* ---------- 8 · DALL·E ---------- */
  await herramientaDetalle(d, {
    num: 8, icono: "image", nombre: "DALL·E", tipo: "IA generativa de imágenes",
    definicion: "Genera imágenes originales a partir de una descripción en texto. Útil para crear material visual cuando no existe o es difícil de conseguir.",
    nota: "Integrada en ChatGPT y Copilot",
    usos: [
      ["palette", "Ilustrar conceptos", "Representaciones de fenómenos abstractos o microscópicos."],
      ["book", "Material didáctico", "Portadas, infografías y apoyos visuales a la medida."],
      ["eye", "Pensamiento crítico", "Comparar la imagen generada con la realidad científica."],
      ["warn", "Mirada crítica", "Puede inventar detalles incorrectos: siempre revisar."],
    ],
  });

  /* ---------- 9 · COPILOT ---------- */
  await herramientaDetalle(d, {
    num: 9, icono: "wand", nombre: "Copilot", tipo: "Asistente de productividad",
    definicion: "El asistente de IA de Microsoft, integrado en Word, PowerPoint y Excel. Acompaña la creación de documentos, presentaciones y análisis de datos.",
    nota: "Incluido en Microsoft 365 educativo",
    usos: [
      ["edit", "Documentos", "Redacta, resume y mejora guías y materiales."],
      ["chart", "Presentaciones", "Convierte un texto en una presentación base."],
      ["table", "Datos", "Analiza resultados de evaluaciones en Excel."],
      ["sync", "Flujo de trabajo", "Conecta la IA con las herramientas que ya usas."],
    ],
  });

  /* ---------- 10 · MAPA HERRAMIENTA-TAREA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · MAPA RÁPIDO");
  titulo("¿Qué herramienta para qué tarea?");
  {
    const filas = [
      ["Explicar un concepto difícil", "ChatGPT", "comments"],
      ["Crear imágenes científicas", "DALL·E", "image"],
      ["Entrenar un modelo con estudiantes", "Teachable Machine", "brain"],
      ["Preparar documentos y presentaciones", "Copilot", "wand"],
      ["Simular un fenómeno físico", "PhET", "atom"],
      ["Modelar matemáticamente", "GeoGebra", "chart"],
    ];
    const izq = cols(2)[0], der = cols(2)[1];
    for (let i = 0; i < 6; i++) {
      const col = i < 3 ? izq : der;
      const y = 1.55 + (i % 3) * 1.12;
      tarjeta(col.x, y, col.w, 0.98);
      await circuloIcono(filas[i][2], col.x + 0.22, y + 0.25, 0.48, C.hielo, C.azul);
      S().addText(filas[i][0], { x: col.x + 0.88, y: y + 0.14, w: col.w - 1.1, h: 0.42, fontFace: F.c, fontSize: 11.5, color: C.gris, valign: "middle", margin: 0 });
      S().addText(filas[i][1], { x: col.x + 0.88, y: y + 0.5, w: col.w - 1.1, h: 0.36, fontFace: F.t, fontSize: 13.5, bold: true, color: C.azulOscuro, valign: "middle", margin: 0 });
    }
  }
  pie(10);

  /* ---------- 11 · DIVISOR BLOQUE 2 ---------- */
  await divisor("02", "Aplicaciones: predicción, generación y evaluación", ["Generar", "Evaluar", "Predecir", "Prompts"]);

  /* ---------- 12 · GENERACIÓN DE CONTENIDOS ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · GENERACIÓN DE CONTENIDOS");
  titulo("La IA como copiloto de creación");
  {
    const items = [
      ["pen", "Explicaciones a medida", "El mismo concepto en tres niveles de complejidad distintos."],
      ["palette", "Analogías y ejemplos", "Conexiones con la vida cotidiana del estudiante."],
      ["image", "Material visual", "Esquemas, infografías e ilustraciones de apoyo."],
      ["book", "Guías y talleres", "Borradores que tú revisas, ajustas y enriqueces."],
      ["quest", "Casos y problemas", "Situaciones contextualizadas para indagar."],
      ["lang", "Adaptaciones", "Lenguaje más simple, traducciones, lectura fácil."],
    ];
    const cls = cols(3);
    for (let i = 0; i < 6; i++) {
      const { x, w } = cls[i % 3];
      const y = 1.5 + Math.floor(i / 3) * 1.78;
      tarjeta(x, y, w, 1.58);
      await circuloIcono(items[i][0], x + 0.2, y + 0.2, 0.46, C.hielo, C.azul);
      S().addText(items[i][1], { x: x + 0.78, y: y + 0.24, w: w - 0.95, h: 0.6, fontFace: F.t, fontSize: 12, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S().addText(items[i][2], { x: x + 0.2, y: y + 0.9, w: w - 0.4, h: 0.6, fontFace: F.c, fontSize: 10.3, color: C.gris, valign: "top", margin: 0 });
    }
  }
  pie(12);

  /* ---------- 13 · EVALUACIÓN AUTOMATIZADA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · EVALUACIÓN AUTOMATIZADA");
  titulo("Evaluar más rápido para acompañar mejor");
  {
    const items = [
      ["clip", "Bancos de preguntas", "Genera ítems variados por tema y nivel de dificultad."],
      ["rules", "Rúbricas", "Criterios claros y descriptores para valorar productos."],
      ["sync", "Retroalimentación", "Comentarios formativos inmediatos para cada estudiante."],
      ["chart", "Análisis de resultados", "Detecta patrones de error frecuentes en el grupo."],
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
      { text: "Importante:  ", options: { bold: true, color: C.doradoTexto } },
      { text: "la IA evalúa lo evidente; el juicio sobre el aprendizaje profundo sigue siendo tuyo.", options: { color: C.tinta } },
    ], { x: 0.85, y: 4.59, w: 8.3, h: 0.46, fontFace: F.c, fontSize: 11.5, valign: "middle", margin: 0 });
  }
  pie(13);

  /* ---------- 14 · PREDICCIÓN Y ANALÍTICA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · PREDICCIÓN Y ANALÍTICA");
  titulo("Anticipar dificultades antes de que crezcan");
  {
    tarjeta(0.55, 1.5, 4.25, 3.55, C.azulOscuro);
    await circuloIcono("chart", 0.85, 1.78, 0.6, "0B5FA5", "F5A800");
    S().addText("Analítica del aprendizaje", { x: 0.85, y: 2.52, w: 3.7, h: 0.6, fontFace: F.t, fontSize: 16, bold: true, color: C.blanco, margin: 0 });
    S().addText("Usar los datos del proceso —entregas, tiempos, aciertos y errores— para entender cómo aprende el grupo y actuar a tiempo.",
      { x: 0.85, y: 3.18, w: 3.7, h: 1.5, fontFace: F.c, fontSize: 12.5, color: C.azulClaro, valign: "top", margin: 0 });
    const items = [
      ["warn", "Alertas tempranas", "Identificar estudiantes en riesgo de quedarse atrás."],
      ["target", "Temas críticos", "Detectar qué conceptos cuestan más al grupo."],
      ["route", "Rutas personalizadas", "Sugerir refuerzos según cada necesidad."],
      ["eye", "Decisiones con evidencia", "Ajustar la clase con datos, no solo intuición."],
    ];
    let y = 1.5;
    for (const [ic, t, dsc] of items) {
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

  /* ---------- 15 · ANATOMÍA DEL PROMPT ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · EL ARTE DEL PROMPT");
  titulo("Un buen resultado empieza por una buena pregunta");
  {
    const partes = [
      ["chalk", "Rol", "“Actúa como docente de química de grado décimo.”"],
      ["target", "Tarea", "“Explica el enlace iónico con una analogía cotidiana.”"],
      ["users", "Contexto", "“Mis estudiantes tienen 15 años y poca base previa.”"],
      ["rules", "Formato", "“En 5 frases y con un ejemplo final.”"],
    ];
    const cls = cols(4, 0.55, 8.9, 0.2);
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.4);
      await circuloIcono(partes[i][0], x + (w - 0.54) / 2, 1.78, 0.54, C.azulOscuro, "F5A800");
      S().addText(partes[i][1], { x: x + 0.1, y: 2.5, w: w - 0.2, h: 0.32, fontFace: F.t, fontSize: 14, bold: true, color: C.azulOscuro, align: "center", margin: 0 });
      S().addText(partes[i][2], { x: x + 0.14, y: 2.86, w: w - 0.28, h: 1.05, fontFace: F.c, fontSize: 10, italic: true, color: C.gris, align: "center", valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.32, 8.9, 0.6, C.azulOscuro);
    S().addText([
      { text: "Rol + Tarea + Contexto + Formato.  ", options: { bold: true, color: C.dorado } },
      { text: "Cuanto más claro tu pedido, más preciso el resultado.", options: { color: C.blanco } },
    ], { x: 0.85, y: 4.32, w: 8.3, h: 0.6, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(15);

  /* ---------- 16 · PLANTILLAS DE PROMPTS ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · CAJA DE PROMPTS");
  titulo("Plantillas listas para tu clase de ciencias");
  {
    const prompts = [
      ["pen", "Explicar", "“Explica [concepto] a estudiantes de [grado] con una analogía de la vida diaria y un ejemplo.”"],
      ["clip", "Evaluar", "“Crea 5 preguntas de opción múltiple sobre [tema], con respuesta y explicación.”"],
      ["users", "Diferenciar", "“Reescribe este texto en tres niveles: básico, intermedio y avanzado.”"],
      ["quest", "Indagar", "“Propón un problema real de [contexto] que se resuelva aplicando [concepto].”"],
    ];
    const pos = [[0.55, 1.5], [5.1, 1.5], [0.55, 3.28], [5.1, 3.28]];
    for (let i = 0; i < 4; i++) {
      const [x, y] = pos[i];
      tarjeta(x, y, 4.35, 1.6);
      await circuloIcono(prompts[i][0], x + 0.2, y + 0.2, 0.46, C.doradoSuave, C.doradoOscuro);
      S().addText(prompts[i][1], { x: x + 0.8, y: y + 0.26, w: 3.35, h: 0.32, fontFace: F.t, fontSize: 13, bold: true, color: C.azulOscuro, margin: 0 });
      S().addText(prompts[i][2], { x: x + 0.8, y: y + 0.62, w: 3.4, h: 0.9, fontFace: F.c, fontSize: 10, italic: true, color: C.gris, valign: "top", margin: 0 });
    }
  }
  pie(16);

  /* ---------- 17 · VERIFICAR SIEMPRE ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · UNA ADVERTENCIA NECESARIA");
  titulo("La IA se equivoca con seguridad: verifica siempre");
  {
    tarjeta(0.55, 1.5, 4.25, 3.55, C.azulOscuro);
    await circuloIcono("warn", 0.85, 1.78, 0.6, "0B5FA5", "F5A800");
    S().addText("“Alucinaciones”", { x: 0.85, y: 2.52, w: 3.7, h: 0.5, fontFace: F.t, fontSize: 16, bold: true, color: C.blanco, margin: 0 });
    S().addText("La IA puede afirmar datos falsos —fechas, fórmulas, citas— con total confianza. No “sabe”: predice texto probable.",
      { x: 0.85, y: 3.06, w: 3.7, h: 1.6, fontFace: F.c, fontSize: 12.5, color: C.azulClaro, valign: "top", margin: 0 });
    const reglas = [
      ["check", "Contrasta los datos", "Verifica fórmulas, cifras y hechos con fuentes confiables."],
      ["book", "Tú eres el experto", "Tu criterio disciplinar es el filtro final."],
      ["eye", "Enséñalo a verificar", "Convierte el error de la IA en ejercicio de pensamiento crítico."],
      ["lock", "Cuida los datos", "No compartas información personal de tus estudiantes."],
    ];
    let y = 1.5;
    for (const [ic, t, dsc] of reglas) {
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

  /* ---------- 18 · DIVISOR BLOQUE 3 ---------- */
  await divisor("03", "Análisis de experiencias en el aula de ciencias", ["Física", "Química", "Biología", "Lecciones"]);

  /* ---------- 19 · TRES CASOS ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · TRES EXPERIENCIAS");
  titulo("La IA aterrizada en física, química y biología");
  {
    const casos = [
      ["atom", "Física", "Simulación de PhET + ChatGPT que explica el fenómeno por niveles, según las preguntas del grupo.", "Circuitos y campos sin laboratorio"],
      ["flask", "Química", "DALL·E y analogías generadas para visualizar lo invisible: moléculas, enlaces y reacciones.", "El enlace, fácil de imaginar"],
      ["dna", "Biología", "Clasificador en Teachable Machine entrenado por los estudiantes para identificar especies.", "IA entrenada por el aula"],
    ];
    const cls = cols(3);
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.5, w, 3.35);
      await circuloIcono(casos[i][0], x + 0.22, 1.74, 0.56, C.hielo, C.azul);
      S().addText(casos[i][1], { x: x + 0.92, y: 1.86, w: w - 1.1, h: 0.36, fontFace: F.t, fontSize: 15, bold: true, color: C.azulOscuro, margin: 0 });
      S().addText(casos[i][2], { x: x + 0.22, y: 2.5, w: w - 0.44, h: 1.35, fontFace: F.c, fontSize: 11, color: C.gris, valign: "top", margin: 0 });
      S().addShape(P.shapes.ROUNDED_RECTANGLE, { x: x + 0.22, y: 3.95, w: w - 0.44, h: 0.66, rectRadius: 0.08, fill: { color: C.hielo } });
      S().addText(casos[i][3], { x: x + 0.34, y: 3.95, w: w - 0.68, h: 0.66, fontFace: F.c, fontSize: 9.8, italic: true, color: C.azulMedio, valign: "middle", margin: 0 });
    }
  }
  pie(19);

  /* ---------- 20 · LECCIONES ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · LO QUE APRENDIMOS");
  titulo("Qué funcionó y qué conviene cuidar");
  {
    S().addText("LO QUE FUNCIONA", { x: 0.55, y: 1.42, w: 4.3, h: 0.3, fontFace: F.t, fontSize: 12, bold: true, color: C.verdeTexto, charSpacing: 2, margin: 0 });
    S().addText("LO QUE HAY QUE CUIDAR", { x: 5.15, y: 1.42, w: 4.3, h: 0.3, fontFace: F.t, fontSize: 12, bold: true, color: C.rojo, charSpacing: 2, margin: 0 });
    const bien = ["Empezar con un objetivo claro, no con la herramienta", "Combinar IA con experiencias prácticas reales", "Que el estudiante sea protagonista, no espectador", "Verificar y discutir las salidas en grupo"];
    const cuidar = ["Confiar sin revisar lo que produce la IA", "Compartir datos personales de menores", "Usar la IA como reemplazo del pensar", "Deslumbrarse con la novedad sin pertinencia"];
    let y = 1.82;
    for (let i = 0; i < 4; i++) {
      tarjeta(0.55, y, 4.3, 0.72, C.verdeSuave, false);
      S().addImage({ data: await d.iconPng("check", C.verde), x: 0.75, y: y + 0.23, w: 0.26, h: 0.26 });
      S().addText(bien[i], { x: 1.14, y, w: 3.6, h: 0.72, fontFace: F.c, fontSize: 11, color: C.verdeTexto, valign: "middle", margin: 0 });
      tarjeta(5.15, y, 4.3, 0.72, C.rojoSuave, false);
      S().addImage({ data: await d.iconPng("warn", C.rojo), x: 5.35, y: y + 0.23, w: 0.26, h: 0.26 });
      S().addText(cuidar[i], { x: 5.74, y, w: 3.6, h: 0.72, fontFace: F.c, fontSize: 11, color: C.rojoTexto, valign: "middle", margin: 0 });
      y += 0.84;
    }
  }
  pie(20);

  /* ---------- 21 · LABORATORIO ---------- */
  nueva(C.fondo);
  kicker("MANOS A LA OBRA");
  titulo("Laboratorio: Prompts para enseñar ciencias");
  {
    tarjeta(0.55, 1.5, 2.9, 3.55, C.azulOscuro);
    await circuloIcono("wand", 0.8, 1.78, 0.56, "0B5FA5", "F5A800");
    S().addText("Banco de prompts", { x: 0.8, y: 2.5, w: 2.4, h: 0.6, fontFace: F.t, fontSize: 16, bold: true, color: C.blanco, margin: 0 });
    S().addText("Diseñamos, probamos y verificamos prompts útiles para nuestras asignaturas.", { x: 0.8, y: 3.15, w: 2.45, h: 0.95, fontFace: F.c, fontSize: 11, color: C.azulClaro, valign: "top", margin: 0 });
    S().addShape(P.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 4.2, w: 2.45, h: 0.5, rectRadius: 0.08, fill: { color: C.dorado } });
    S().addText("En parejas · 40 min", { x: 0.8, y: 4.2, w: 2.45, h: 0.5, fontFace: F.c, fontSize: 10.5, bold: true, color: C.noche, align: "center", valign: "middle", margin: 0 });
    const pasos = [
      ["Elige un concepto difícil", "Uno que tus estudiantes batallen en aprender cada año."],
      ["Escribe el prompt", "Aplica Rol + Tarea + Contexto + Formato."],
      ["Prueba y verifica", "Revisa la exactitud científica y afina el pedido."],
      ["Aporta al banco común", "Compartimos los mejores prompts del grupo."],
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
  pie(21);

  /* ---------- 22 · TRABAJO AUTÓNOMO ---------- */
  nueva(C.fondo);
  kicker("DESPUÉS DE LA SESIÓN");
  titulo("Trabajo autónomo y preparación");
  {
    const tareas = [
      ["wand", "Explora una herramienta", "Dedica una hora a probar a fondo ChatGPT, Teachable Machine o DALL·E con tu asignatura."],
      ["clip", "Amplía tu banco", "Crea y verifica al menos cinco prompts propios, listos para usar en clase."],
      ["book", "Lectura sugerida", "Holmes, Bialik & Fadel (2019): aplicaciones de la IA en la educación."],
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
    await circuloIcono("bulb", 0.78, 4.34, 0.5, C.dorado, "FFFFFF");
    S().addText([
      { text: "Para la Sesión 3:  ", options: { bold: true, color: C.doradoTexto } },
      { text: "trae el problema de aprendizaje que elegiste. Empezaremos a convertirlo en un recurso didáctico innovador con apoyo de IA.", options: { color: C.tinta } },
    ], { x: 1.45, y: 4.2, w: 7.85, h: 0.78, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(22);

  /* ---------- 23 · CIERRE ---------- */
  cierre({
    kickerTxt: "PARA LLEVARSE DE LA SESIÓN 2",
    frase: "La herramienta no enseña: enseña el docente que sabe para qué usarla.",
    proximaLabel: "PRÓXIMA SESIÓN",
    proxima: "Sesión 3 · Diseño pedagógico con IA",
  });

  await P.writeFile({ fileName: "/tmp/pptx-sesion1/sesion-2-herramientas.pptx" });
  console.log("Sesión 2 generada");
}

/* Helper local: diapositiva de detalle de una herramienta */
async function herramientaDetalle(d, { num, icono, nombre, tipo, definicion, nota, usos }) {
  const P = d.P, C = d.C, F = d.F;
  const { nueva, kicker, titulo, pie, tarjeta, circuloIcono } = d;
  const S = () => d.S;
  nueva(C.fondo);
  kicker("BLOQUE 01 · HERRAMIENTA");
  titulo(nombre);
  S().addText(tipo, { x: 0.55, y: 1.18, w: 6, h: 0.3, fontFace: F.c, fontSize: 12.5, italic: true, color: C.azulMedio, margin: 0 });
  tarjeta(0.55, 1.6, 4.25, 3.45, C.azulOscuro);
  await circuloIcono(icono, 0.85, 1.88, 0.6, "0B5FA5", "F5A800");
  S().addText(definicion, { x: 0.85, y: 2.62, w: 3.65, h: 1.7, fontFace: F.c, fontSize: 13.5, color: C.blanco, valign: "top", margin: 0 });
  S().addText(nota, { x: 0.85, y: 4.55, w: 3.65, h: 0.35, fontFace: F.c, fontSize: 9.5, italic: true, color: C.azulSuave, margin: 0 });
  let y = 1.6;
  for (const [ic, t, dsc] of usos) {
    tarjeta(5.05, y, 4.4, 0.78);
    await circuloIcono(ic, 5.25, y + 0.17, 0.44, C.hielo, C.azul);
    S().addText([
      { text: t, options: { bold: true, color: C.azulOscuro, breakLine: true } },
      { text: dsc, options: { color: C.gris, fontSize: 10.3 } },
    ], { x: 5.85, y: y + 0.08, w: 3.45, h: 0.66, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
    y += 0.88;
  }
  pie(num);
}

main().catch((e) => { console.error(e); process.exit(1); });
