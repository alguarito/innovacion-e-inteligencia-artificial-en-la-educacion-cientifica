/* Sesión 1 — Fundamentos conceptuales de la innovación y la IA en educación
   Módulo 9 · Diplomado IA en Educación · UTP */

const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const Fa = require("react-icons/fa");

const C = {
  noche: "051F38",
  azulOscuro: "062A4A",
  azul: "003B71",
  azulMedio: "0B5FA5",
  azulSuave: "5B8DC0",
  azulClaro: "DCEAF7",
  hielo: "EEF5FC",
  dorado: "F5A800",
  doradoOscuro: "9A6A00",
  doradoSuave: "FFF3D6",
  tinta: "10243B",
  gris: "55677D",
  grisClaro: "93A6BC",
  fondo: "F7FAFD",
  blanco: "FFFFFF",
  rojo: "B23A48",
  rojoSuave: "F7E3E6",
};
const F = { t: "Trebuchet MS", c: "Calibri" };
const LOGO = "/Users/alvarocardenasorozco/Desktop/PROYECTOS/DIPLOMADO IA EN EDUCACION/docs/img/logo-utp.png";

const ICONOS = {
  flask: Fa.FaFlask, atom: Fa.FaAtom, dna: Fa.FaDna, robot: Fa.FaRobot,
  brain: Fa.FaBrain, bulb: Fa.FaLightbulb, chalk: Fa.FaChalkboardTeacher,
  users: Fa.FaUsers, comments: Fa.FaComments, check: Fa.FaCheckCircle,
  times: Fa.FaTimesCircle, warn: Fa.FaExclamationTriangle, db: Fa.FaDatabase,
  cogs: Fa.FaCogs, chart: Fa.FaChartLine, shield: Fa.FaShieldAlt,
  balance: Fa.FaBalanceScale, access: Fa.FaUniversalAccess, map: Fa.FaMapMarkedAlt,
  lang: Fa.FaLanguage, thumbs: Fa.FaThumbsUp, mail: Fa.FaEnvelopeOpenText,
  micro: Fa.FaMicroscope, globe: Fa.FaGlobeAmericas, route: Fa.FaRoute,
  layers: Fa.FaLayerGroup, search: Fa.FaSearch, pen: Fa.FaPenFancy,
  clip: Fa.FaClipboardCheck, hands: Fa.FaHandsHelping, seed: Fa.FaSeedling,
  quest: Fa.FaQuestionCircle, eye: Fa.FaEye, keyb: Fa.FaKeyboard,
  mic: Fa.FaMicrophone, book: Fa.FaBookOpen, target: Fa.FaBullseye,
  puzzle: Fa.FaPuzzlePiece, rocket: Fa.FaRocket, sync: Fa.FaSyncAlt,
  grad: Fa.FaGraduationCap, sliders: Fa.FaSlidersH, magic: Fa.FaMagic,
  compass: Fa.FaCompass, net: Fa.FaProjectDiagram, school: Fa.FaSchool,
  edit: Fa.FaEdit, calend: Fa.FaCalendarAlt, lock: Fa.FaUserLock,
  rules: Fa.FaListOl, gen: Fa.FaWandMagicSparkles || Fa.FaMagic,
  camera: Fa.FaCamera, play: Fa.FaPlayCircle, tag: Fa.FaTags,
};

const cacheIconos = {};
async function iconPng(nombre, color) {
  const clave = nombre + "_" + color;
  if (cacheIconos[clave]) return cacheIconos[clave];
  const Comp = ICONOS[nombre];
  if (!Comp) throw new Error("Icono no definido: " + nombre);
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Comp, { color: "#" + color, size: "256" })
  );
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  const data = "image/png;base64," + buf.toString("base64");
  cacheIconos[clave] = data;
  return data;
}

const sombra = () => ({ type: "outer", color: "0A2540", blur: 9, offset: 2, angle: 135, opacity: 0.16 });
const sombraSuave = () => ({ type: "outer", color: "0A2540", blur: 6, offset: 1, angle: 135, opacity: 0.10 });

let P, S;
function nueva(fondo) {
  S = P.addSlide();
  S.background = { color: fondo };
  return S;
}
function kicker(txt, color) {
  S.addText(txt, { x: 0.55, y: 0.32, w: 8.9, h: 0.3, fontFace: F.t, fontSize: 10.5, bold: true, color: color || C.azulMedio, charSpacing: 2.5, margin: 0 });
}
function titulo(txt, w) {
  S.addText(txt, { x: 0.55, y: 0.6, w: w || 8.9, h: 0.72, fontFace: F.t, fontSize: 26, bold: true, color: C.azulOscuro, margin: 0, valign: "top" });
}
function pie(num) {
  S.addShape(P.shapes.RECTANGLE, { x: 0.55, y: 5.36, w: 0.26, h: 0.04, fill: { color: C.dorado } });
  S.addText("Módulo 9 · Innovación e IA en la Educación Científica · Sesión 1", { x: 0.88, y: 5.26, w: 5.4, h: 0.24, fontFace: F.c, fontSize: 8.5, color: C.grisClaro, margin: 0 });
  S.addText("UTP · " + num, { x: 8.0, y: 5.26, w: 1.45, h: 0.24, fontFace: F.c, fontSize: 8.5, color: C.grisClaro, align: "right", margin: 0 });
}
function cols(n, x0, ancho, gap) {
  x0 = x0 ?? 0.55; ancho = ancho ?? 8.9; gap = gap ?? 0.2;
  const w = (ancho - gap * (n - 1)) / n;
  return Array.from({ length: n }, (_, i) => ({ x: x0 + i * (w + gap), w }));
}
function tarjeta(x, y, w, h, fill, conSombra) {
  S.addShape(P.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: 0.06,
    fill: { color: fill || C.blanco },
    line: { color: "E3EBF4", width: 0.75 },
    shadow: conSombra === false ? undefined : sombraSuave(),
  });
}
async function circuloIcono(nombre, x, y, d, fondoCirc, colorIcono) {
  S.addShape(P.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fondoCirc } });
  const s = d * 0.52;
  S.addImage({ data: await iconPng(nombre, colorIcono), x: x + (d - s) / 2, y: y + (d - s) / 2, w: s, h: s });
}
function linea(x1, y1, x2, y2, color, wpt) {
  const o = { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1), h: Math.abs(y2 - y1), line: { color, width: wpt || 1 } };
  if ((x2 - x1) * (y2 - y1) < 0) o.flipV = true;
  S.addShape(P.shapes.LINE, o);
}
function chip(txt, x, y, w, modoOscuro) {
  S.addShape(P.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h: 0.34, rectRadius: 0.17,
    fill: { color: modoOscuro ? C.azulOscuro : C.hielo },
    line: { color: modoOscuro ? C.azulMedio : C.azulClaro, width: 1 },
  });
  S.addText(txt, { x, y, w, h: 0.34, fontFace: F.t, fontSize: 10.5, bold: true, color: modoOscuro ? C.azulClaro : C.azul, align: "center", valign: "middle", margin: 0 });
}

/* ============ DIVISOR DE BLOQUE ============ */
async function divisor(num, tituloTxt, chips) {
  nueva(C.azulOscuro);
  S.addShape(P.shapes.OVAL, { x: 6.7, y: 0.4, w: 4.4, h: 4.4, fill: { color: C.azulOscuro }, line: { color: C.azulMedio, width: 1 } });
  S.addShape(P.shapes.OVAL, { x: 7.45, y: 1.15, w: 2.9, h: 2.9, fill: { color: C.azulOscuro }, line: { color: C.azulSuave, width: 1 } });
  S.addShape(P.shapes.OVAL, { x: 8.2, y: 1.9, w: 1.4, h: 1.4, fill: { color: C.azul }, line: { color: C.dorado, width: 1.5 } });
  S.addShape(P.shapes.OVAL, { x: 8.62, y: 2.32, w: 0.56, h: 0.56, fill: { color: C.dorado } });
  S.addText("BLOQUE", { x: 0.58, y: 0.85, w: 3, h: 0.3, fontFace: F.t, fontSize: 12, bold: true, color: C.dorado, charSpacing: 4, margin: 0 });
  S.addText(num, { x: 0.48, y: 0.95, w: 4, h: 2.1, fontFace: F.t, fontSize: 120, bold: true, color: C.blanco, margin: 0 });
  S.addText(tituloTxt, { x: 0.58, y: 3.15, w: 6.3, h: 1.1, fontFace: F.t, fontSize: 27, bold: true, color: C.blanco, margin: 0, valign: "top" });
  let cx = 0.58;
  for (const c of chips) {
    const w = 0.32 + c.length * 0.082;
    chip(c, cx, 4.55, w, true);
    cx += w + 0.18;
  }
  S.addText("Módulo 9 · Sesión 1 · UTP", { x: 0.58, y: 5.26, w: 4, h: 0.24, fontFace: F.c, fontSize: 8.5, color: C.azulSuave, margin: 0 });
}

/* ============ PRESENTACIÓN ============ */
async function main() {
  P = new pptxgen();
  P.layout = "LAYOUT_16x9";
  P.author = "PhD. Álvaro Cárdenas Orozco";
  P.title = "Sesión 1 · Fundamentos conceptuales de la innovación y la IA en educación";

  /* ---------- 1 · PORTADA ---------- */
  nueva(C.azulOscuro);
  S.addShape(P.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: C.azulOscuro } });
  const nodos = [
    [7.35, 1.15, 0.16, C.azulSuave], [8.55, 0.85, 0.22, C.dorado], [9.35, 1.65, 0.14, C.azulClaro],
    [7.85, 2.35, 0.26, C.azulClaro], [9.05, 2.95, 0.18, C.dorado], [7.45, 3.75, 0.15, C.azulSuave],
    [8.65, 4.45, 0.22, C.azulClaro], [9.45, 3.95, 0.13, C.azulSuave],
  ];
  const enlaces = [[0, 1], [1, 2], [0, 3], [3, 2], [3, 4], [2, 4], [3, 5], [5, 6], [4, 6], [6, 7], [4, 7]];
  for (const [a, b] of enlaces) {
    const A = nodos[a], B = nodos[b];
    linea(A[0] + A[2] / 2, A[1] + A[2] / 2, B[0] + B[2] / 2, B[1] + B[2] / 2, "1E5F94", 1);
  }
  for (const [nx, ny, nd, ncol] of nodos) S.addShape(P.shapes.OVAL, { x: nx, y: ny, w: nd, h: nd, fill: { color: ncol } });
  S.addShape(P.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 0.5, w: 1.5, h: 0.66, rectRadius: 0.08, fill: { color: C.blanco } });
  S.addImage({ path: LOGO, x: 0.72, y: 0.62, w: 1.16, h: 0.42 });
  S.addText("DIPLOMADO IA EN EDUCACIÓN · MÓDULO 9", { x: 0.58, y: 1.62, w: 6.5, h: 0.3, fontFace: F.t, fontSize: 12, bold: true, color: C.dorado, charSpacing: 2.5, margin: 0 });
  S.addShape(P.shapes.ROUNDED_RECTANGLE, { x: 0.58, y: 2.02, w: 1.2, h: 0.36, rectRadius: 0.18, fill: { color: C.dorado } });
  S.addText("SESIÓN 1", { x: 0.58, y: 2.02, w: 1.2, h: 0.36, fontFace: F.t, fontSize: 11.5, bold: true, color: C.noche, align: "center", valign: "middle", margin: 0 });
  S.addText("Fundamentos conceptuales de la innovación y la IA en educación", { x: 0.55, y: 2.52, w: 6.4, h: 1.55, fontFace: F.t, fontSize: 33, bold: true, color: C.blanco, margin: 0, valign: "top" });
  S.addText("Innovación e Inteligencia Artificial en la Educación Científica — un módulo para docentes de física, química y biología.", { x: 0.58, y: 4.26, w: 5.9, h: 0.6, fontFace: F.c, fontSize: 13.5, color: C.azulClaro, margin: 0 });
  S.addText("PhD. Álvaro Cárdenas Orozco  ·  Universidad Tecnológica de Pereira", { x: 0.58, y: 4.95, w: 6, h: 0.3, fontFace: F.c, fontSize: 11, color: C.azulSuave, margin: 0 });

  /* ---------- 2 · LA RUTA DE HOY ---------- */
  nueva(C.fondo);
  kicker("SESIÓN 1 · PUNTO DE PARTIDA");
  titulo("La ruta de hoy");
  {
    const cls = cols(3);
    const datos = [
      ["01", "Innovación educativa en ciencias", "Qué es innovar de verdad (y qué no), sus dimensiones y por qué es urgente en la enseñanza de las ciencias."],
      ["02", "Inteligencia artificial", "Definiciones, una historia breve, tipos de IA y sus potencialidades — y límites — para educar."],
      ["03", "IA y práctica pedagógica", "Los nuevos roles del docente y los marcos para integrar la IA con sentido pedagógico."],
    ];
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.5, w, 2.55);
      S.addText(datos[i][0], { x: x + 0.22, y: 1.68, w: 1.4, h: 0.7, fontFace: F.t, fontSize: 38, bold: true, color: C.dorado, margin: 0 });
      S.addText(datos[i][1], { x: x + 0.22, y: 2.42, w: w - 0.44, h: 0.62, fontFace: F.t, fontSize: 14.5, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S.addText(datos[i][2], { x: x + 0.22, y: 3.06, w: w - 0.44, h: 0.85, fontFace: F.c, fontSize: 11, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.3, 8.9, 0.78, C.doradoSuave);
    await circuloIcono("flask", 0.78, 4.45, 0.48, C.dorado, "FFFFFF");
    S.addText([
      { text: "Laboratorio de cierre:  ", options: { bold: true, color: C.azulOscuro } },
      { text: "Mi primer modelo de IA con Teachable Machine — entrenaremos un clasificador de imágenes científicas.", options: { color: C.doradoOscuro } },
    ], { x: 1.42, y: 4.42, w: 6.7, h: 0.55, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
    chip("4 horas", 8.3, 4.52, 1.0);
  }
  pie(2);

  /* ---------- 3 · PREGUNTA PROVOCADORA ---------- */
  nueva(C.fondo);
  kicker("PARA ABRIR LA CONVERSACIÓN");
  S.addText("?", { x: 6.9, y: 0.7, w: 2.6, h: 3.4, fontFace: F.t, fontSize: 230, bold: true, color: C.azulClaro, align: "center", margin: 0 });
  await circuloIcono("comments", 0.55, 1.2, 0.75, C.doradoSuave, C.doradoOscuro);
  S.addText("¿Qué significa innovar en la enseñanza de las ciencias?", { x: 0.55, y: 2.2, w: 6.5, h: 1.5, fontFace: F.t, fontSize: 33, bold: true, color: C.azulOscuro, margin: 0 });
  {
    const subpregs = ["¿Lo nuevo siempre mejora el aprendizaje?", "¿Usar tecnología ya es innovar?", "¿Quién decide el cambio: la herramienta o el docente?"];
    const cls = cols(3);
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 3.95, w, 0.95, C.blanco);
      S.addText(subpregs[i], { x: x + 0.18, y: 3.95, w: w - 0.36, h: 0.95, fontFace: F.c, fontSize: 11.5, italic: true, color: C.azulMedio, valign: "middle", margin: 0 });
    }
  }
  pie(3);

  /* ---------- 4 · DIVISOR BLOQUE 1 ---------- */
  await divisor("01", "Fundamentos de innovación educativa en ciencias", ["Concepto", "Mitos", "Dimensiones", "Enfoque CTS"]);

  /* ---------- 5 · QUÉ ES INNOVACIÓN EDUCATIVA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · CONCEPTO");
  titulo("¿Qué es innovación educativa?");
  tarjeta(0.55, 1.5, 4.25, 3.55, C.azulOscuro);
  S.addText('"', { x: 0.75, y: 1.5, w: 0.8, h: 0.8, fontFace: F.t, fontSize: 60, bold: true, color: C.dorado, margin: 0 });
  S.addText([
    { text: "Un proceso ", options: {} },
    { text: "intencional y planificado", options: { bold: true, color: C.dorado } },
    { text: " que introduce cambios en las prácticas de enseñanza para lograr ", options: {} },
    { text: "mejoras comprobables", options: { bold: true, color: C.dorado } },
    { text: " en los aprendizajes, y que consigue ", options: {} },
    { text: "sostenerse en el tiempo", options: { bold: true, color: C.dorado } },
    { text: ".", options: {} },
  ], { x: 0.88, y: 2.25, w: 3.6, h: 2.0, fontFace: F.c, fontSize: 15.5, color: C.blanco, margin: 0 });
  S.addText("Adaptado de Adell & Castañeda (2012) y Cabero (2015)", { x: 0.88, y: 4.55, w: 3.6, h: 0.3, fontFace: F.c, fontSize: 9, italic: true, color: C.azulSuave, margin: 0 });
  {
    const atributos = [
      ["target", "Intencional", "Responde a un problema pedagógico real, no a la moda."],
      ["clip", "Sistemática", "Se planifica, se documenta y se evalúa con evidencia."],
      ["seed", "Sostenible", "Sobrevive al entusiasmo inicial y se vuelve cultura."],
      ["grad", "Centrada en el aprendizaje", "Su métrica de éxito es el estudiante, no el aparato."],
    ];
    let y = 1.5;
    for (const [ic, t, d] of atributos) {
      tarjeta(5.05, y, 4.4, 0.74);
      await circuloIcono(ic, 5.25, y + 0.15, 0.44, C.hielo, C.azul);
      S.addText([
        { text: t, options: { bold: true, color: C.azulOscuro, breakLine: true } },
        { text: d, options: { color: C.gris, fontSize: 10.5 } },
      ], { x: 5.85, y: y + 0.07, w: 3.45, h: 0.6, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
      y += 0.96;
    }
  }
  pie(5);

  /* ---------- 6 · MITOS VS REALIDAD ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · DESPEJANDO MITOS");
  titulo("Innovar no es lo que solemos creer");
  {
    S.addText("INNOVAR NO ES…", { x: 0.55, y: 1.42, w: 4.3, h: 0.3, fontFace: F.t, fontSize: 12, bold: true, color: C.rojo, charSpacing: 2, margin: 0 });
    S.addText("INNOVAR SÍ ES…", { x: 5.15, y: 1.42, w: 4.3, h: 0.3, fontFace: F.t, fontSize: 12, bold: true, color: C.azul, charSpacing: 2, margin: 0 });
    const filas = [
      ["Estrenar tecnología cada año", "Resolver problemas pedagógicos reales"],
      ["La novedad por la novedad", "Mejora comprobable del aprendizaje"],
      ["Una moda que pasa de largo", "Un proceso sostenido y evaluado"],
      ["Reemplazar el rol del docente", "Potenciar el criterio del docente"],
    ];
    let y = 1.82;
    for (const [no, si] of filas) {
      tarjeta(0.55, y, 4.3, 0.68, C.rojoSuave, false);
      S.addImage({ data: await iconPng("times", C.rojo), x: 0.75, y: y + 0.21, w: 0.26, h: 0.26 });
      S.addText(no, { x: 1.14, y: y, w: 3.6, h: 0.68, fontFace: F.c, fontSize: 11.5, color: "7A2833", valign: "middle", margin: 0 });
      tarjeta(5.15, y, 4.3, 0.68, C.hielo, false);
      S.addImage({ data: await iconPng("check", C.azulMedio), x: 5.35, y: y + 0.21, w: 0.26, h: 0.26 });
      S.addText(si, { x: 5.74, y: y, w: 3.6, h: 0.68, fontFace: F.c, fontSize: 11.5, bold: true, color: C.azulOscuro, valign: "middle", margin: 0 });
      y += 0.82;
    }
  }
  pie(6);

  /* ---------- 7 · DIMENSIONES ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · DIMENSIONES");
  titulo("La innovación tiene cinco dimensiones");
  {
    const dims = [
      ["book", "Curricular", "Qué se enseña: contenidos y su pertinencia."],
      ["bulb", "Metodológica", "Cómo se enseña: estrategias y experiencias."],
      ["clip", "Evaluativa", "Cómo se valora: evidencias y retroalimentación."],
      ["calend", "Organizativa", "Tiempos, espacios y agrupamientos."],
      ["cogs", "Tecnológica", "Con qué medios: recursos y herramientas."],
    ];
    const cls = cols(5, 0.55, 8.9, 0.16);
    for (let i = 0; i < 5; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.45);
      await circuloIcono(dims[i][0], x + (w - 0.52) / 2, 1.8, 0.52, C.hielo, C.azul);
      S.addText(dims[i][1], { x: x + 0.08, y: 2.48, w: w - 0.16, h: 0.32, fontFace: F.t, fontSize: 13, bold: true, color: C.azulOscuro, align: "center", margin: 0 });
      S.addText(dims[i][2], { x: x + 0.14, y: 2.84, w: w - 0.28, h: 1.0, fontFace: F.c, fontSize: 10, color: C.gris, align: "center", valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.35, 8.9, 0.72, C.azulOscuro);
    S.addText([
      { text: "Clave:  ", options: { bold: true, color: C.dorado } },
      { text: "la tecnología es solo una dimensión. La innovación genuina casi siempre toca varias a la vez.", options: { color: C.blanco } },
    ], { x: 0.85, y: 4.42, w: 8.3, h: 0.58, fontFace: F.c, fontSize: 12.5, valign: "middle", margin: 0 });
  }
  pie(7);

  /* ---------- 8 · POR QUÉ INNOVAR EN CIENCIAS ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · EL DESAFÍO");
  titulo("¿Por qué innovar en la enseñanza de las ciencias?");
  {
    const retos = [
      ["atom", "Conceptos abstractos", "Átomos, campos, células: fenómenos invisibles y difíciles de imaginar."],
      ["users", "Desmotivación", "La ciencia escolar se percibe ajena a la vida de los estudiantes."],
      ["micro", "Ciencia escolar ≠ ciencia real", "Se memorizan resultados en lugar de indagar como científicos."],
      ["balance", "Brechas de acceso", "Laboratorios, equipos y recursos repartidos de forma desigual."],
    ];
    const pos = [[0.55, 1.5], [3.6, 1.5], [0.55, 3.28], [3.6, 3.28]];
    for (let i = 0; i < 4; i++) {
      const [x, y] = pos[i];
      tarjeta(x, y, 2.9, 1.62);
      await circuloIcono(retos[i][0], x + 0.2, y + 0.2, 0.46, C.hielo, C.azul);
      S.addText(retos[i][1], { x: x + 0.78, y: y + 0.22, w: 2.0, h: 0.45, fontFace: F.t, fontSize: 12.5, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S.addText(retos[i][2], { x: x + 0.2, y: y + 0.78, w: 2.5, h: 0.75, fontFace: F.c, fontSize: 10.5, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(6.7, 1.5, 2.75, 3.4, C.azul);
    await circuloIcono("compass", 6.95, 1.78, 0.56, "0B5FA5", "FFFFFF");
    S.addText("La meta", { x: 6.95, y: 2.5, w: 2.25, h: 0.35, fontFace: F.t, fontSize: 15, bold: true, color: C.dorado, margin: 0 });
    S.addText("Alfabetización científica: formar personas capaces de comprender y decidir con criterio en un mundo atravesado por la tecnología.", { x: 6.95, y: 2.9, w: 2.25, h: 1.8, fontFace: F.c, fontSize: 11.5, color: C.blanco, margin: 0 });
  }
  pie(8);

  /* ---------- 9 · ENFOQUE CTS ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · NUESTRA BRÚJULA");
  titulo("El enfoque CTS: Ciencia, Tecnología y Sociedad");
  {
    const ejes = [
      ["micro", "Ciencia en contexto", "El conocimiento científico conectado con la vida real de los estudiantes y su territorio."],
      ["cogs", "Tecnología con propósito", "Las herramientas al servicio del aprendizaje — nunca al revés."],
      ["globe", "Sociedad como horizonte", "Toda decisión científico-tecnológica tiene implicaciones éticas, sociales y ambientales."],
    ];
    const cls = cols(3);
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.5, w, 2.5);
      await circuloIcono(ejes[i][0], x + 0.22, 1.74, 0.56, C.azulOscuro, "F5A800");
      S.addText(ejes[i][1], { x: x + 0.22, y: 2.48, w: w - 0.44, h: 0.6, fontFace: F.t, fontSize: 14.5, bold: true, color: C.azulOscuro, margin: 0 });
      S.addText(ejes[i][2], { x: x + 0.22, y: 3.05, w: w - 0.44, h: 0.85, fontFace: F.c, fontSize: 11, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.28, 8.9, 0.8, C.doradoSuave);
    S.addText([
      { text: "CTS  ", options: { bold: true, color: C.doradoOscuro } },
      { text: "es la perspectiva integradora del módulo: articula el conocimiento científico con sus implicaciones éticas, sociales, culturales y ambientales en contextos educativos reales.", options: { color: C.tinta } },
    ], { x: 0.85, y: 4.36, w: 8.3, h: 0.64, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(9);

  /* ---------- 10 · PEDAGOGÍAS EMERGENTES ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 01 · LA IDEA PUENTE");
  titulo("Tecnologías emergentes, pedagogías emergentes");
  tarjeta(0.55, 1.5, 4.5, 3.55, C.azulOscuro);
  S.addText('"', { x: 0.75, y: 1.5, w: 0.8, h: 0.8, fontFace: F.t, fontSize: 60, bold: true, color: C.dorado, margin: 0 });
  S.addText("Las tecnologías emergentes no vienen con su pedagogía bajo el brazo: habilitan prácticas nuevas, pero solo si repensamos cómo enseñamos.", { x: 0.9, y: 2.3, w: 3.85, h: 1.7, fontFace: F.c, fontSize: 15, color: C.blanco, margin: 0 });
  S.addText("Idea central de Adell & Castañeda (2012)", { x: 0.9, y: 4.55, w: 3.8, h: 0.3, fontFace: F.c, fontSize: 9, italic: true, color: C.azulSuave, margin: 0 });
  {
    const prins = [
      ["rocket", "Aprendizaje activo", "El estudiante hace, crea y resuelve — no solo escucha."],
      ["map", "Situado en contextos reales", "Problemas del territorio y de la vida cotidiana."],
      ["users", "Colaborativo y en red", "Se aprende con otros, dentro y fuera del aula."],
      ["globe", "Abierto", "El aprendizaje desborda el horario y el salón de clase."],
    ];
    let y = 1.5;
    for (const [ic, t, d] of prins) {
      tarjeta(5.3, y, 4.15, 0.74);
      await circuloIcono(ic, 5.5, y + 0.15, 0.44, C.hielo, C.azul);
      S.addText([
        { text: t, options: { bold: true, color: C.azulOscuro, breakLine: true } },
        { text: d, options: { color: C.gris, fontSize: 10.5 } },
      ], { x: 6.1, y: y + 0.07, w: 3.2, h: 0.6, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
      y += 0.96;
    }
  }
  pie(10);

  /* ---------- 11 · DIVISOR BLOQUE 2 ---------- */
  await divisor("02", "Introducción a la inteligencia artificial", ["Definiciones", "Historia", "Tipos", "Potencialidades"]);

  /* ---------- 12 · QUÉ ES LA IA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · DEFINICIÓN");
  titulo("¿Qué es la inteligencia artificial?");
  tarjeta(0.55, 1.5, 4.25, 3.55, C.azulOscuro);
  await circuloIcono("robot", 0.85, 1.78, 0.6, "0B5FA5", "FFFFFF");
  S.addText("Sistemas computacionales capaces de realizar tareas que, hechas por personas, exigen inteligencia: aprender de la experiencia, razonar, percibir el entorno y comunicarse.", { x: 0.85, y: 2.55, w: 3.65, h: 1.7, fontFace: F.c, fontSize: 14.5, color: C.blanco, margin: 0 });
  S.addText("El término nace en 1956 (J. McCarthy, Conferencia de Dartmouth)", { x: 0.85, y: 4.5, w: 3.65, h: 0.4, fontFace: F.c, fontSize: 9, italic: true, color: C.azulSuave, margin: 0 });
  {
    const caps = [
      ["db", "Aprender de datos", "Detecta patrones en ejemplos y mejora con la práctica."],
      ["net", "Razonar y decidir", "Encadena información para resolver problemas."],
      ["eye", "Percibir", "Reconoce imágenes, sonidos y lenguaje natural."],
      ["pen", "Generar", "Produce texto, imágenes, audio y código nuevos."],
    ];
    let y = 1.5;
    for (const [ic, t, d] of caps) {
      tarjeta(5.05, y, 4.4, 0.74);
      await circuloIcono(ic, 5.25, y + 0.15, 0.44, C.hielo, C.azul);
      S.addText([
        { text: t, options: { bold: true, color: C.azulOscuro, breakLine: true } },
        { text: d, options: { color: C.gris, fontSize: 10.5 } },
      ], { x: 5.85, y: y + 0.07, w: 3.45, h: 0.6, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
      y += 0.96;
    }
  }
  pie(12);

  /* ---------- 13 · LÍNEA DE TIEMPO ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · HISTORIA");
  titulo("Siete décadas en cinco hitos");
  {
    const hitos = [
      ["1956", "Nace el término", "Conferencia de Dartmouth: la IA se funda como campo de estudio."],
      ["1997", "Deep Blue", "Una máquina vence al campeón mundial de ajedrez, G. Kasparov."],
      ["2012", "Deep learning", "Las redes profundas revolucionan el reconocimiento de imágenes."],
      ["2017", "Transformers", "La arquitectura que hace posibles los grandes modelos de lenguaje."],
      ["2022", "IA generativa", "ChatGPT lleva la IA conversacional a millones de personas y a la escuela."],
    ];
    linea(0.9, 3.0, 9.1, 3.0, C.azulClaro, 2.5);
    const cls = cols(5, 0.55, 8.9, 0.16);
    for (let i = 0; i < 5; i++) {
      const { x, w } = cls[i];
      const cxx = x + w / 2;
      S.addShape(P.shapes.OVAL, { x: cxx - 0.14, y: 2.86, w: 0.28, h: 0.28, fill: { color: i === 4 ? C.dorado : C.azul } });
      const arriba = i % 2 === 0;
      const yT = arriba ? 1.32 : 3.36;
      tarjeta(x, yT, w, 1.3);
      S.addText(hitos[i][0], { x: x + 0.12, y: yT + 0.08, w: w - 0.24, h: 0.3, fontFace: F.t, fontSize: 14, bold: true, color: i === 4 ? C.doradoOscuro : C.azulMedio, margin: 0 });
      S.addText(hitos[i][1], { x: x + 0.12, y: yT + 0.38, w: w - 0.24, h: 0.26, fontFace: F.t, fontSize: 11, bold: true, color: C.azulOscuro, margin: 0 });
      S.addText(hitos[i][2], { x: x + 0.12, y: yT + 0.64, w: w - 0.24, h: 0.62, fontFace: F.c, fontSize: 8.8, color: C.gris, margin: 0 });
    }
  }
  pie(13);

  /* ---------- 14 · CÓMO APRENDE UNA MÁQUINA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · EL MECANISMO");
  titulo("¿Cómo aprende una máquina?");
  {
    const pasos = [
      ["db", "1 · Datos", "Miles de ejemplos, muchas veces etiquetados por personas."],
      ["cogs", "2 · Entrenamiento", "El sistema busca patrones y ajusta sus parámetros."],
      ["brain", "3 · Modelo", "Queda una “regla aprendida” lista para usarse."],
      ["chart", "4 · Predicción", "Se aplica a casos nuevos y se corrige con el error."],
    ];
    const cls = cols(4, 0.55, 8.9, 0.45);
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.3);
      await circuloIcono(pasos[i][0], x + (w - 0.54) / 2, 1.78, 0.54, C.azulOscuro, "F5A800");
      S.addText(pasos[i][1], { x: x + 0.1, y: 2.5, w: w - 0.2, h: 0.3, fontFace: F.t, fontSize: 12.5, bold: true, color: C.azulOscuro, align: "center", margin: 0 });
      S.addText(pasos[i][2], { x: x + 0.16, y: 2.85, w: w - 0.32, h: 0.9, fontFace: F.c, fontSize: 10.2, color: C.gris, align: "center", margin: 0 });
      if (i < 3) S.addText("→", { x: x + w + 0.02, y: 2.4, w: 0.42, h: 0.5, fontFace: F.t, fontSize: 22, bold: true, color: C.dorado, align: "center", margin: 0 });
    }
    tarjeta(0.55, 4.18, 8.9, 0.9, C.hielo);
    await circuloIcono("grad", 0.78, 4.4, 0.46, C.azul, "FFFFFF");
    S.addText([
      { text: "Como un estudiante: ", options: { bold: true, color: C.azulOscuro } },
      { text: "practica con ejemplos, recibe retroalimentación y generaliza. Y ojo: también hereda los vacíos y sesgos de sus “apuntes”.", options: { color: C.gris } },
    ], { x: 1.4, y: 4.28, w: 7.9, h: 0.72, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(14);

  /* ---------- 15 · TIPOS POR CAPACIDAD ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · TIPOS SEGÚN SU ALCANCE");
  titulo("IA estrecha vs. IA general");
  {
    tarjeta(0.55, 1.5, 4.35, 2.65);
    await circuloIcono("target", 0.8, 1.75, 0.5, C.hielo, C.azul);
    S.addText("IA estrecha (débil)", { x: 1.45, y: 1.85, w: 3.2, h: 0.35, fontFace: F.t, fontSize: 15, bold: true, color: C.azulOscuro, margin: 0 });
    S.addShape(P.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 2.42, w: 1.55, h: 0.3, rectRadius: 0.15, fill: { color: C.hielo } });
    S.addText("EXISTE HOY", { x: 0.8, y: 2.42, w: 1.55, h: 0.3, fontFace: F.t, fontSize: 9, bold: true, color: C.azul, align: "center", valign: "middle", charSpacing: 1.5, margin: 0 });
    S.addText("Especializada en una sola tarea: traducir, recomendar, conversar, clasificar imágenes. Toda la IA que usarás en este módulo es de este tipo.", { x: 0.8, y: 2.88, w: 3.85, h: 1.1, fontFace: F.c, fontSize: 11.5, color: C.gris, valign: "top", margin: 0 });
    tarjeta(5.1, 1.5, 4.35, 2.65);
    await circuloIcono("brain", 5.35, 1.75, 0.5, C.hielo, C.azulMedio);
    S.addText("IA general (fuerte)", { x: 6.0, y: 1.85, w: 3.2, h: 0.35, fontFace: F.t, fontSize: 15, bold: true, color: C.azulOscuro, margin: 0 });
    S.addShape(P.shapes.ROUNDED_RECTANGLE, { x: 5.35, y: 2.42, w: 1.55, h: 0.3, rectRadius: 0.15, fill: { color: C.doradoSuave } });
    S.addText("HIPOTÉTICA", { x: 5.35, y: 2.42, w: 1.55, h: 0.3, fontFace: F.t, fontSize: 9, bold: true, color: C.doradoOscuro, align: "center", valign: "middle", charSpacing: 1.5, margin: 0 });
    S.addText("Igualaría la versatilidad cognitiva humana en cualquier dominio. No existe: pertenece — por ahora — a la investigación y a la ciencia ficción.", { x: 5.35, y: 2.88, w: 3.85, h: 1.1, fontFace: F.c, fontSize: 11.5, color: C.gris, valign: "top", margin: 0 });
    tarjeta(0.55, 4.35, 8.9, 0.74, C.azulOscuro);
    S.addText([
      { text: "Implicación docente:  ", options: { bold: true, color: C.dorado } },
      { text: "ninguna IA actual “entiende” como un humano. El criterio pedagógico del docente sigue siendo el verdadero control de calidad.", options: { color: C.blanco } },
    ], { x: 0.85, y: 4.43, w: 8.3, h: 0.58, fontFace: F.c, fontSize: 12.5, valign: "middle", margin: 0 });
  }
  pie(15);

  /* ---------- 16 · TIPOS POR ENFOQUE ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · TIPOS SEGÚN SU TÉCNICA");
  titulo("Cuatro familias que conviene distinguir");
  {
    const fams = [
      ["rules", "Basada en reglas", "Sigue instrucciones fijas: “si pasa X, haz Y”.", "Correctores y chatbots básicos"],
      ["chart", "Aprendizaje automático", "Aprende patrones a partir de datos históricos.", "Predicción de deserción escolar"],
      ["net", "Aprendizaje profundo", "Redes neuronales de muchas capas para datos complejos.", "Reconocimiento de imágenes y voz"],
      ["magic", "IA generativa", "Crea contenido nuevo: texto, imagen, audio, código.", "ChatGPT, DALL·E, Copilot"],
    ];
    const pos = [[0.55, 1.5], [5.1, 1.5], [0.55, 3.3], [5.1, 3.3]];
    for (let i = 0; i < 4; i++) {
      const [x, y] = pos[i];
      tarjeta(x, y, 4.35, 1.62);
      await circuloIcono(fams[i][0], x + 0.2, y + 0.2, 0.48, i === 3 ? C.doradoSuave : C.hielo, i === 3 ? C.doradoOscuro : C.azul);
      S.addText(fams[i][1], { x: x + 0.82, y: y + 0.2, w: 3.3, h: 0.32, fontFace: F.t, fontSize: 13.5, bold: true, color: C.azulOscuro, margin: 0 });
      S.addText(fams[i][2], { x: x + 0.82, y: y + 0.55, w: 3.35, h: 0.55, fontFace: F.c, fontSize: 10.5, color: C.gris, margin: 0 });
      S.addText([
        { text: "Ej.: ", options: { bold: true, color: C.azulMedio } },
        { text: fams[i][3], options: { color: C.azulMedio } },
      ], { x: x + 0.82, y: y + 1.18, w: 3.35, h: 0.3, fontFace: F.c, fontSize: 10, italic: true, margin: 0 });
    }
  }
  pie(16);

  /* ---------- 17 · IA COTIDIANA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · MÁS CERCA DE LO QUE CREES");
  titulo("La IA que ya usas todos los días");
  {
    const usos = [
      ["lang", "Traductores"], ["map", "Mapas y rutas"], ["thumbs", "Recomendaciones"],
      ["keyb", "Autocorrector"], ["mail", "Filtro de spam"], ["mic", "Asistentes de voz"],
    ];
    const cls = cols(3);
    let idx = 0;
    for (let fila = 0; fila < 2; fila++) {
      for (let col = 0; col < 3; col++) {
        const { x, w } = cls[col];
        const y = 1.5 + fila * 1.32;
        tarjeta(x, y, w, 1.12);
        await circuloIcono(usos[idx][0], x + 0.22, y + 0.28, 0.56, C.hielo, C.azul);
        S.addText(usos[idx][1], { x: x + 0.95, y, w: w - 1.1, h: 1.12, fontFace: F.t, fontSize: 14, bold: true, color: C.azulOscuro, valign: "middle", margin: 0 });
        idx++;
      }
    }
    tarjeta(0.55, 4.3, 8.9, 0.78, C.doradoSuave);
    S.addText([
      { text: "La IA no es el futuro: ya organiza tu día.  ", options: { bold: true, color: C.doradoOscuro } },
      { text: "La pregunta de este módulo: ¿puede también ayudarte a organizar tu clase?", options: { color: C.tinta } },
    ], { x: 0.85, y: 4.38, w: 8.3, h: 0.62, fontFace: F.c, fontSize: 12.5, valign: "middle", margin: 0 });
  }
  pie(17);

  /* ---------- 18 · POTENCIALIDADES ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · POTENCIALIDADES");
  titulo("Lo que la IA puede aportar a la educación");
  {
    const pots = [
      ["route", "Personalización", "Rutas y ritmos ajustados a cada estudiante."],
      ["comments", "Tutoría asistida", "Acompañamiento disponible a toda hora."],
      ["sync", "Retroalimentación inmediata", "Respuesta al instante, mientras se aprende."],
      ["chart", "Analítica del aprendizaje", "Anticipa dificultades antes de que crezcan."],
      ["pen", "Generación de contenidos", "Guías, preguntas e imágenes a la medida."],
      ["access", "Accesibilidad e inclusión", "Subtítulos, lectura fácil, apoyos visuales."],
    ];
    const cls = cols(3);
    for (let i = 0; i < 6; i++) {
      const { x, w } = cls[i % 3];
      const y = 1.5 + Math.floor(i / 3) * 1.78;
      tarjeta(x, y, w, 1.58);
      await circuloIcono(pots[i][0], x + 0.2, y + 0.2, 0.46, C.hielo, C.azul);
      S.addText(pots[i][1], { x: x + 0.78, y: y + 0.24, w: w - 0.95, h: 0.6, fontFace: F.t, fontSize: 12, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S.addText(pots[i][2], { x: x + 0.2, y: y + 0.88, w: w - 0.4, h: 0.6, fontFace: F.c, fontSize: 10.3, color: C.gris, valign: "top", margin: 0 });
    }
  }
  pie(18);

  /* ---------- 19 · LÍMITES ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 02 · CONTRAPESOS");
  titulo("Potencia con letra pequeña: los límites");
  {
    const lims = [
      ["warn", "Alucinaciones", "Afirma datos falsos con total seguridad. Verificar siempre es parte del oficio."],
      ["balance", "Sesgos", "Hereda y amplifica los prejuicios presentes en sus datos de entrenamiento."],
      ["lock", "Privacidad", "Los datos de menores exigen máxima protección: cuidado con lo que se comparte."],
      ["puzzle", "Dependencia", "El atajo permanente erosiona el pensamiento propio — el nuestro y el de los estudiantes."],
    ];
    const pos = [[0.55, 1.45], [5.1, 1.45], [0.55, 2.99], [5.1, 2.99]];
    for (let i = 0; i < 4; i++) {
      const [x, y] = pos[i];
      tarjeta(x, y, 4.35, 1.4);
      await circuloIcono(lims[i][0], x + 0.2, y + 0.18, 0.46, C.rojoSuave, C.rojo);
      S.addText(lims[i][1], { x: x + 0.8, y: y + 0.2, w: 3.35, h: 0.32, fontFace: F.t, fontSize: 13.5, bold: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S.addText(lims[i][2], { x: x + 0.8, y: y + 0.54, w: 3.35, h: 0.78, fontFace: F.c, fontSize: 10.5, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.56, 8.9, 0.52, C.azulOscuro);
    S.addText([
      { text: "El criterio pedagógico no se delega.  ", options: { bold: true, color: C.dorado } },
      { text: "Profundizaremos en la ética del uso de IA en la Sesión 4.", options: { color: C.blanco } },
    ], { x: 0.85, y: 4.59, w: 8.3, h: 0.46, fontFace: F.c, fontSize: 11.5, valign: "middle", margin: 0 });
  }
  pie(19);

  /* ---------- 20 · DIVISOR BLOQUE 3 ---------- */
  await divisor("03", "El rol de la IA en la transformación de la práctica pedagógica", ["Nuevos roles", "Aplicaciones", "Marcos de integración"]);

  /* ---------- 21 · REDISTRIBUCIÓN ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · EL PUNTO DE PARTIDA");
  S.addText("La IA no reemplaza al docente: redistribuye su tiempo", { x: 0.55, y: 0.6, w: 9.0, h: 0.72, fontFace: F.t, fontSize: 24, bold: true, color: C.azulOscuro, margin: 0, valign: "top" });
  {
    S.addText("LA IA PUEDE ASISTIR…", { x: 0.55, y: 1.52, w: 4.3, h: 0.3, fontFace: F.t, fontSize: 11.5, bold: true, color: C.azulMedio, charSpacing: 2, margin: 0 });
    S.addText("PARA QUE TÚ TE CONCENTRES EN…", { x: 5.15, y: 1.52, w: 4.3, h: 0.3, fontFace: F.t, fontSize: 11.5, bold: true, color: "7A5400", charSpacing: 2, margin: 0 });
    const izq = ["Borradores de guías y talleres", "Bancos de preguntas y rúbricas iniciales", "Versiones de un material por nivel", "Resúmenes y transcripciones"];
    const der = ["Diseñar experiencias memorables", "Mediar, acompañar y leer el aula", "Construir vínculo y motivación", "Decidir con criterio ético"];
    let y = 1.95;
    for (let i = 0; i < 4; i++) {
      tarjeta(0.55, y, 4.3, 0.66, C.blanco, false);
      S.addImage({ data: await iconPng("robot", C.azulMedio), x: 0.75, y: y + 0.2, w: 0.26, h: 0.26 });
      S.addText(izq[i], { x: 1.14, y, w: 3.6, h: 0.66, fontFace: F.c, fontSize: 11.5, color: C.gris, valign: "middle", margin: 0 });
      tarjeta(5.15, y, 4.3, 0.66, C.doradoSuave, false);
      S.addImage({ data: await iconPng("chalk", C.doradoOscuro), x: 5.35, y: y + 0.2, w: 0.26, h: 0.26 });
      S.addText(der[i], { x: 5.74, y, w: 3.6, h: 0.66, fontFace: F.c, fontSize: 11.5, bold: true, color: C.tinta, valign: "middle", margin: 0 });
      y += 0.78;
    }
  }
  pie(21);

  /* ---------- 22 · NUEVOS ROLES ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · IDENTIDAD PROFESIONAL");
  titulo("Cuatro roles que se fortalecen");
  {
    const roles = [
      ["search", "Curador crítico", "Selecciona, verifica y adapta lo que la IA produce antes de llevarlo al aula."],
      ["bulb", "Diseñador de experiencias", "Orquesta ambientes de aprendizaje donde la IA es un ingrediente, no el plato."],
      ["hands", "Mediador del aprendizaje", "Convierte las salidas de la IA en preguntas, discusión y pensamiento crítico."],
      ["shield", "Auditor ético", "Vigila sesgos, privacidad y equidad en cada herramienta que adopta."],
    ];
    const cls = cols(4, 0.55, 8.9, 0.18);
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 3.3);
      await circuloIcono(roles[i][0], x + (w - 0.56) / 2, 1.85, 0.56, C.azulOscuro, "F5A800");
      S.addText(roles[i][1], { x: x + 0.12, y: 2.6, w: w - 0.24, h: 0.62, fontFace: F.t, fontSize: 12.5, bold: true, color: C.azulOscuro, align: "center", margin: 0 });
      S.addText(roles[i][2], { x: x + 0.16, y: 3.28, w: w - 0.32, h: 1.4, fontFace: F.c, fontSize: 10.3, color: C.gris, align: "center", margin: 0 });
    }
  }
  pie(22);

  /* ---------- 23 · A LO LARGO DEL CICLO ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · APLICACIONES");
  titulo("IA a lo largo de todo el ciclo didáctico");
  {
    const fases = [
      ["calend", "Planear", ["Secuencias didácticas y objetivos", "Materiales diferenciados por nivel"]],
      ["chalk", "Enseñar", ["Explicaciones y analogías alternativas", "Demostraciones y simulaciones"]],
      ["clip", "Evaluar", ["Rúbricas y bancos de preguntas", "Retroalimentación formativa ágil"]],
      ["hands", "Acompañar", ["Alertas tempranas de dificultad", "Apoyos accesibles e inclusivos"]],
    ];
    const cls = cols(4, 0.55, 8.9, 0.18);
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      S.addShape(P.shapes.RECTANGLE, { x, y: 1.55, w, h: 0.52, fill: { color: C.azul } });
      S.addImage({ data: await iconPng(fases[i][0], "FFFFFF"), x: x + 0.16, y: 1.68, w: 0.26, h: 0.26 });
      S.addText(fases[i][1], { x: x + 0.5, y: 1.55, w: w - 0.6, h: 0.52, fontFace: F.t, fontSize: 13.5, bold: true, color: C.blanco, valign: "middle", margin: 0 });
      S.addShape(P.shapes.RECTANGLE, { x, y: 2.07, w, h: 2.5, fill: { color: C.blanco }, line: { color: "E3EBF4", width: 0.75 }, shadow: sombraSuave() });
      let yy = 2.38;
      for (const item of fases[i][2]) {
        S.addShape(P.shapes.OVAL, { x: x + 0.18, y: yy + 0.045, w: 0.1, h: 0.1, fill: { color: C.dorado } });
        S.addText(item, { x: x + 0.38, y: yy, w: w - 0.52, h: 0.92, fontFace: F.c, fontSize: 10.5, color: C.gris, valign: "top", margin: 0 });
        yy += 1.0;
      }
    }
  }
  pie(23);

  /* ---------- 24 · EN EL AULA DE CIENCIAS ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · ATERRIZAJE DISCIPLINAR");
  titulo("¿Y en el aula de ciencias? Tres ejemplos");
  {
    const ejs = [
      ["atom", "Física", "Simulaciones de PhET acompañadas de explicaciones por niveles generadas con IA: el fenómeno se ve y se entiende.", "Campos eléctricos sin laboratorio"],
      ["flask", "Química", "Analogías cotidianas y visualización molecular para hacer tangible lo invisible.", "El enlace covalente como apuntes compartidos"],
      ["dna", "Biología", "Clasificadores de imágenes entrenados por los propios estudiantes con Teachable Machine.", "Identificar hojas, células o ecosistemas"],
    ];
    const cls = cols(3);
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.5, w, 3.35);
      await circuloIcono(ejs[i][0], x + 0.22, 1.74, 0.56, C.hielo, C.azul);
      S.addText(ejs[i][1], { x: x + 0.92, y: 1.86, w: w - 1.1, h: 0.36, fontFace: F.t, fontSize: 15, bold: true, color: C.azulOscuro, margin: 0 });
      S.addText(ejs[i][2], { x: x + 0.22, y: 2.5, w: w - 0.44, h: 1.35, fontFace: F.c, fontSize: 11, color: C.gris, valign: "top", margin: 0 });
      S.addShape(P.shapes.ROUNDED_RECTANGLE, { x: x + 0.22, y: 3.95, w: w - 0.44, h: 0.66, rectRadius: 0.08, fill: { color: C.hielo } });
      S.addText(ejs[i][3], { x: x + 0.34, y: 3.95, w: w - 0.68, h: 0.66, fontFace: F.c, fontSize: 9.8, italic: true, color: C.azulMedio, valign: "middle", margin: 0 });
    }
  }
  pie(24);

  /* ---------- 25 · PRIMERO LA PEDAGOGÍA ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · MARCO DE DECISIÓN");
  titulo("Primero la pedagogía, después la herramienta");
  {
    const pasos = [
      ["target", "1 · Objetivo", "¿Qué deben aprender mis estudiantes?"],
      ["bulb", "2 · Estrategia", "¿Qué experiencia pedagógica lo logra mejor?"],
      ["robot", "3 · ¿IA?", "¿La IA aporta un valor real a esa estrategia?"],
      ["sync", "4 · Evidencia", "¿Funcionó? Medir, ajustar e iterar."],
    ];
    const cls = cols(4, 0.55, 8.9, 0.45);
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.55, w, 2.25);
      await circuloIcono(pasos[i][0], x + (w - 0.54) / 2, 1.78, 0.54, C.azulOscuro, "F5A800");
      S.addText(pasos[i][1], { x: x + 0.1, y: 2.48, w: w - 0.2, h: 0.3, fontFace: F.t, fontSize: 12.5, bold: true, color: C.azulOscuro, align: "center", margin: 0 });
      S.addText(pasos[i][2], { x: x + 0.15, y: 2.82, w: w - 0.3, h: 0.85, fontFace: F.c, fontSize: 10.2, color: C.gris, align: "center", margin: 0 });
      if (i < 3) S.addText("→", { x: x + w + 0.02, y: 2.35, w: 0.42, h: 0.5, fontFace: F.t, fontSize: 22, bold: true, color: C.dorado, align: "center", margin: 0 });
    }
    tarjeta(0.55, 4.12, 8.9, 0.95, C.azulOscuro);
    S.addText([
      { text: "La pregunta nunca es “¿qué hago con ChatGPT?”  ", options: { bold: true, color: C.dorado, breakLine: true } },
      { text: "La pregunta es: “¿qué problema de aprendizaje quiero resolver — y la IA me ayuda a resolverlo mejor?”", options: { color: C.blanco } },
    ], { x: 0.85, y: 4.24, w: 8.3, h: 0.75, fontFace: F.c, fontSize: 12.5, margin: 0 });
  }
  pie(25);

  /* ---------- 26 · NIVELES DE INTEGRACIÓN (SAMR) ---------- */
  nueva(C.fondo);
  kicker("BLOQUE 03 · NIVELES DE INTEGRACIÓN");
  titulo("¿Qué tan profundo llega el cambio? El modelo SAMR");
  {
    const niveles = [
      ["Sustituir", "La IA hace lo mismo que antes: buscar información.", C.azulClaro, C.azulOscuro, 1.15],
      ["Aumentar", "Mejora funcional: retroalimentación instantánea en un cuestionario.", C.azulMedio, C.blanco, 1.55],
      ["Modificar", "La tarea se rediseña: cada equipo entrena y depura su propio modelo.", C.azul, C.blanco, 2.05],
      ["Redefinir", "Tareas antes imposibles: un tutor que dialoga con cada estudiante.", C.dorado, C.noche, 2.55],
    ];
    const cls = cols(4, 0.55, 8.9, 0.18);
    const base = 4.75;
    for (let i = 0; i < 4; i++) {
      const { x, w } = cls[i];
      const h = niveles[i][4];
      S.addShape(P.shapes.RECTANGLE, { x, y: base - h, w, h, fill: { color: niveles[i][2] }, shadow: sombraSuave() });
      S.addText(niveles[i][0], { x: x + 0.14, y: base - h + 0.12, w: w - 0.28, h: 0.32, fontFace: F.t, fontSize: 13.5, bold: true, color: niveles[i][3], margin: 0 });
      S.addText(niveles[i][1], { x: x + 0.14, y: base - h + 0.46, w: w - 0.28, h: h - 0.6, fontFace: F.c, fontSize: 9.8, color: niveles[i][3], margin: 0 });
      S.addText(["MEJORA", "TRANSFORMACIÓN"][i < 2 ? 0 : 1], { x, y: base + 0.12, w, h: 0.26, fontFace: F.t, fontSize: 9, bold: true, color: i < 2 ? C.grisClaro : C.doradoOscuro, align: "center", charSpacing: 2, margin: 0 });
    }
    S.addText("Puentedura (2006), aplicado a la IA en ciencias", { x: 5.45, y: 1.18, w: 4.0, h: 0.24, fontFace: F.c, fontSize: 8.5, italic: true, color: C.grisClaro, align: "right", margin: 0 });
  }
  pie(26);

  /* ---------- 27 · LABORATORIO ---------- */
  nueva(C.fondo);
  kicker("MANOS A LA OBRA");
  titulo("Laboratorio: Mi primer modelo de IA");
  {
    tarjeta(0.55, 1.5, 2.9, 3.55, C.azulOscuro);
    await circuloIcono("flask", 0.8, 1.78, 0.56, "0B5FA5", "F5A800");
    S.addText("Teachable Machine", { x: 0.8, y: 2.5, w: 2.4, h: 0.6, fontFace: F.t, fontSize: 16, bold: true, color: C.blanco, margin: 0 });
    S.addText("Entrena un modelo de IA sin escribir una sola línea de código.", { x: 0.8, y: 3.15, w: 2.4, h: 0.8, fontFace: F.c, fontSize: 11, color: C.azulClaro, margin: 0 });
    S.addShape(P.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 4.1, w: 2.4, h: 0.5, rectRadius: 0.08, fill: { color: C.dorado } });
    S.addText("teachablemachine.withgoogle.com", { x: 0.8, y: 4.1, w: 2.4, h: 0.5, fontFace: F.c, fontSize: 9, bold: true, color: C.noche, align: "center", valign: "middle", margin: 0 });
    const pasos = [
      ["tag", "Elige 2 o 3 categorías científicas", "Tipos de hojas, minerales, células, montajes de laboratorio…"],
      ["camera", "Recolecta ejemplos", "Con la cámara o con imágenes: 20 a 30 por categoría."],
      ["play", "Entrena y prueba", "Observa la confianza del modelo y ponlo en aprietos."],
      ["comments", "Discute en plenaria", "¿Cómo aprendió? ¿Cuándo falla? ¿Qué sesgos adquirió?"],
    ];
    let y = 1.5;
    for (let i = 0; i < 4; i++) {
      tarjeta(3.75, y, 5.7, 0.78);
      S.addShape(P.shapes.OVAL, { x: 3.95, y: y + 0.17, w: 0.44, h: 0.44, fill: { color: C.dorado } });
      S.addText(String(i + 1), { x: 3.95, y: y + 0.17, w: 0.44, h: 0.44, fontFace: F.t, fontSize: 15, bold: true, color: C.noche, align: "center", valign: "middle", margin: 0 });
      S.addText([
        { text: pasos[i][1], options: { bold: true, color: C.azulOscuro, breakLine: true } },
        { text: pasos[i][2], options: { color: C.gris, fontSize: 10.3 } },
      ], { x: 4.55, y: y + 0.08, w: 4.7, h: 0.66, fontFace: F.c, fontSize: 11.5, valign: "middle", margin: 0 });
      y += 0.93;
    }
  }
  pie(27);

  /* ---------- 28 · TRABAJO AUTÓNOMO ---------- */
  nueva(C.fondo);
  kicker("DESPUÉS DE LA SESIÓN");
  titulo("Trabajo autónomo y lecturas");
  {
    const lecturas = [
      ["Adell & Castañeda (2012)", "Tecnologías emergentes, ¿pedagogías emergentes?", "El marco de innovación que usamos hoy."],
      ["Luckin (2018)", "Machine Learning and Human Intelligence", "Qué puede (y no puede) aprender una máquina."],
      ["Holmes, Bialik & Fadel (2019)", "Artificial Intelligence in Education", "Promesas e implicaciones para enseñar y aprender."],
    ];
    const cls = cols(3);
    for (let i = 0; i < 3; i++) {
      const { x, w } = cls[i];
      tarjeta(x, 1.5, w, 2.3);
      await circuloIcono("book", x + 0.22, 1.72, 0.46, C.hielo, C.azul);
      S.addText(lecturas[i][0], { x: x + 0.22, y: 2.32, w: w - 0.44, h: 0.3, fontFace: F.t, fontSize: 11.5, bold: true, color: C.azulMedio, valign: "top", margin: 0 });
      S.addText(lecturas[i][1], { x: x + 0.22, y: 2.64, w: w - 0.44, h: 0.62, fontFace: F.c, fontSize: 11, bold: true, italic: true, color: C.azulOscuro, valign: "top", margin: 0 });
      S.addText(lecturas[i][2], { x: x + 0.22, y: 3.28, w: w - 0.44, h: 0.45, fontFace: F.c, fontSize: 9.8, color: C.gris, valign: "top", margin: 0 });
    }
    tarjeta(0.55, 4.05, 8.9, 1.0, C.doradoSuave);
    await circuloIcono("edit", 0.78, 4.3, 0.5, C.dorado, "FFFFFF");
    S.addText([
      { text: "Consigna para la Sesión 2:  ", options: { bold: true, color: C.doradoOscuro } },
      { text: "identifica en tu aula un problema de aprendizaje concreto que valga la pena resolver con apoyo de IA. Tráelo por escrito: será la materia prima del próximo taller.", options: { color: C.tinta } },
    ], { x: 1.45, y: 4.18, w: 7.85, h: 0.75, fontFace: F.c, fontSize: 12, valign: "middle", margin: 0 });
  }
  pie(28);

  /* ---------- 29 · CIERRE ---------- */
  nueva(C.azulOscuro);
  S.addShape(P.shapes.OVAL, { x: 7.55, y: -1.55, w: 4.6, h: 4.6, fill: { color: C.azulOscuro }, line: { color: C.azulMedio, width: 1 } });
  S.addShape(P.shapes.OVAL, { x: 8.35, y: -0.75, w: 3.0, h: 3.0, fill: { color: C.azulOscuro }, line: { color: C.azulSuave, width: 1 } });
  S.addShape(P.shapes.OVAL, { x: 9.05, y: 0.0, w: 1.1, h: 1.1, fill: { color: C.dorado } });
  S.addText("PARA LLEVARSE DE LA SESIÓN 1", { x: 0.58, y: 1.05, w: 6, h: 0.3, fontFace: F.t, fontSize: 11, bold: true, color: C.dorado, charSpacing: 3, margin: 0 });
  S.addText("La innovación no vive en la herramienta: vive en la práctica que la piensa.", { x: 0.55, y: 1.5, w: 7.3, h: 1.6, fontFace: F.t, fontSize: 30, bold: true, color: C.blanco, margin: 0 });
  S.addShape(P.shapes.ROUNDED_RECTANGLE, { x: 0.58, y: 3.45, w: 5.9, h: 1.0, rectRadius: 0.08, fill: { color: C.azul }, line: { color: C.azulMedio, width: 1 } });
  S.addText("PRÓXIMA SESIÓN", { x: 0.85, y: 3.6, w: 3, h: 0.26, fontFace: F.t, fontSize: 9.5, bold: true, color: C.dorado, charSpacing: 2, margin: 0 });
  S.addText("Sesión 2 · Herramientas emergentes para la enseñanza de las ciencias", { x: 0.85, y: 3.88, w: 5.4, h: 0.5, fontFace: F.c, fontSize: 12.5, bold: true, color: C.blanco, margin: 0 });
  S.addText("PhD. Álvaro Cárdenas Orozco  ·  alvaro.cardenas.orozco@gmail.com  ·  Universidad Tecnológica de Pereira", { x: 0.58, y: 4.95, w: 8, h: 0.3, fontFace: F.c, fontSize: 10.5, color: C.azulSuave, margin: 0 });

  await P.writeFile({ fileName: "/tmp/pptx-sesion1/sesion-1-fundamentos.pptx" });
  console.log("PPTX generado correctamente");
}

main().catch((e) => { console.error(e); process.exit(1); });
