/* ============================================================================
   Motor de diseño compartido — Presentaciones del Módulo 9
   Innovación e Inteligencia Artificial en la Educación Científica · UTP
   Identidad visual y helpers reutilizables (basado en la Sesión 1).
   ============================================================================ */

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
  doradoTexto: "7A5400",
  doradoSuave: "FFF3D6",
  tinta: "10243B",
  gris: "55677D",
  grisClaro: "93A6BC",
  fondo: "F7FAFD",
  blanco: "FFFFFF",
  rojo: "B23A48",
  rojoSuave: "F7E3E6",
  rojoTexto: "7A2833",
  verde: "1D9E75",
  verdeSuave: "E1F5EE",
  verdeTexto: "0F6E56",
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
  rules: Fa.FaListOl, camera: Fa.FaCamera, play: Fa.FaPlayCircle, tag: Fa.FaTags,
  image: Fa.FaImage, palette: Fa.FaPalette, copy: Fa.FaCopy, handshake: Fa.FaHandshake,
  recycle: Fa.FaRecycle, star: Fa.FaStar, heart: Fa.FaHeart, filter: Fa.FaFilter,
  wand: Fa.FaMagic, table: Fa.FaTable, code: Fa.FaCode, share: Fa.FaShareAlt,
  fingerprint: Fa.FaFingerprint, scale: Fa.FaBalanceScale, gauge: Fa.FaTachometerAlt,
  flagcheck: Fa.FaFlagCheckered, certificate: Fa.FaCertificate, listcheck: Fa.FaTasks,
  pencil: Fa.FaPencilAlt, wrench: Fa.FaWrench, sun: Fa.FaSun, leaf: Fa.FaLeaf,
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

/* ----------------------------------------------------------------------------
   Factory: crea una presentación con todos los helpers de la identidad.
   ---------------------------------------------------------------------------- */
function createDeck({ sesion, tituloSesion, autor }) {
  const P = new pptxgen();
  P.layout = "LAYOUT_16x9";
  P.author = autor || "PhD. Álvaro Cárdenas Orozco";
  P.title = tituloSesion;

  let S;
  const sombra = () => ({ type: "outer", color: "0A2540", blur: 9, offset: 2, angle: 135, opacity: 0.16 });
  const sombraSuave = () => ({ type: "outer", color: "0A2540", blur: 6, offset: 1, angle: 135, opacity: 0.10 });

  function nueva(fondo) { S = P.addSlide(); S.background = { color: fondo }; return S; }

  function kicker(txt, color) {
    S.addText(txt, { x: 0.55, y: 0.32, w: 8.9, h: 0.3, fontFace: F.t, fontSize: 10.5, bold: true, color: color || C.azulMedio, charSpacing: 2.5, margin: 0 });
  }
  function titulo(txt, w, size) {
    S.addText(txt, { x: 0.55, y: 0.6, w: w || 8.9, h: 0.72, fontFace: F.t, fontSize: size || 26, bold: true, color: C.azulOscuro, margin: 0, valign: "top" });
  }
  function pie(num) {
    S.addShape(P.shapes.RECTANGLE, { x: 0.55, y: 5.36, w: 0.26, h: 0.04, fill: { color: C.dorado } });
    S.addText("Módulo 9 · Innovación e IA en la Educación Científica · Sesión " + sesion, { x: 0.88, y: 5.26, w: 5.6, h: 0.24, fontFace: F.c, fontSize: 8.5, color: C.grisClaro, margin: 0 });
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

  /* Portada reutilizable */
  function portada({ subtitulo }) {
    nueva(C.azulOscuro);
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
    S.addText("SESIÓN " + sesion, { x: 0.58, y: 2.02, w: 1.2, h: 0.36, fontFace: F.t, fontSize: 11.5, bold: true, color: C.noche, align: "center", valign: "middle", margin: 0 });
    S.addText(tituloSesion.replace(/^Sesión \d+ · /, ""), { x: 0.55, y: 2.52, w: 6.4, h: 1.55, fontFace: F.t, fontSize: 33, bold: true, color: C.blanco, margin: 0, valign: "top" });
    S.addText(subtitulo, { x: 0.58, y: 4.26, w: 5.9, h: 0.6, fontFace: F.c, fontSize: 13.5, color: C.azulClaro, margin: 0 });
    S.addText("PhD. Álvaro Cárdenas Orozco  ·  Universidad Tecnológica de Pereira", { x: 0.58, y: 4.95, w: 6.4, h: 0.3, fontFace: F.c, fontSize: 11, color: C.azulSuave, margin: 0 });
  }

  /* Divisor de bloque reutilizable */
  async function divisor(num, tituloTxt, chips) {
    nueva(C.azulOscuro);
    S.addShape(P.shapes.OVAL, { x: 6.7, y: 0.4, w: 4.4, h: 4.4, fill: { color: C.azulOscuro }, line: { color: C.azulMedio, width: 1 } });
    S.addShape(P.shapes.OVAL, { x: 7.45, y: 1.15, w: 2.9, h: 2.9, fill: { color: C.azulOscuro }, line: { color: C.azulSuave, width: 1 } });
    S.addShape(P.shapes.OVAL, { x: 8.2, y: 1.9, w: 1.4, h: 1.4, fill: { color: C.azul }, line: { color: C.dorado, width: 1.5 } });
    S.addShape(P.shapes.OVAL, { x: 8.62, y: 2.32, w: 0.56, h: 0.56, fill: { color: C.dorado } });
    S.addText("BLOQUE", { x: 0.58, y: 0.85, w: 3, h: 0.3, fontFace: F.t, fontSize: 12, bold: true, color: C.dorado, charSpacing: 4, margin: 0 });
    S.addText(num, { x: 0.48, y: 0.95, w: 4, h: 2.1, fontFace: F.t, fontSize: 120, bold: true, color: C.blanco, margin: 0 });
    S.addText(tituloTxt, { x: 0.58, y: 3.15, w: 6.3, h: 1.2, fontFace: F.t, fontSize: 26, bold: true, color: C.blanco, margin: 0, valign: "top" });
    let cx = 0.58;
    for (const c of chips) {
      const w = 0.32 + c.length * 0.082;
      chip(c, cx, 4.62, w, true);
      cx += w + 0.18;
    }
    S.addText("Módulo 9 · Sesión " + sesion + " · UTP", { x: 0.58, y: 5.26, w: 4, h: 0.24, fontFace: F.c, fontSize: 8.5, color: C.azulSuave, margin: 0 });
  }

  /* Cierre reutilizable */
  function cierre({ kickerTxt, frase, proximaLabel, proxima, contacto }) {
    nueva(C.azulOscuro);
    S.addShape(P.shapes.OVAL, { x: 7.55, y: -1.55, w: 4.6, h: 4.6, fill: { color: C.azulOscuro }, line: { color: C.azulMedio, width: 1 } });
    S.addShape(P.shapes.OVAL, { x: 8.35, y: -0.75, w: 3.0, h: 3.0, fill: { color: C.azulOscuro }, line: { color: C.azulSuave, width: 1 } });
    S.addShape(P.shapes.OVAL, { x: 9.05, y: 0.0, w: 1.1, h: 1.1, fill: { color: C.dorado } });
    S.addText(kickerTxt, { x: 0.58, y: 1.05, w: 6.2, h: 0.3, fontFace: F.t, fontSize: 11, bold: true, color: C.dorado, charSpacing: 3, margin: 0 });
    S.addText(frase, { x: 0.55, y: 1.5, w: 7.3, h: 1.7, fontFace: F.t, fontSize: 29, bold: true, color: C.blanco, margin: 0, valign: "top" });
    if (proxima) {
      S.addShape(P.shapes.ROUNDED_RECTANGLE, { x: 0.58, y: 3.5, w: 6.2, h: 1.0, rectRadius: 0.08, fill: { color: C.azul }, line: { color: C.azulMedio, width: 1 } });
      S.addText(proximaLabel, { x: 0.85, y: 3.65, w: 4, h: 0.26, fontFace: F.t, fontSize: 9.5, bold: true, color: C.dorado, charSpacing: 2, margin: 0 });
      S.addText(proxima, { x: 0.85, y: 3.92, w: 5.6, h: 0.5, fontFace: F.c, fontSize: 12.5, bold: true, color: C.blanco, margin: 0 });
    }
    S.addText(contacto || "PhD. Álvaro Cárdenas Orozco  ·  alvaro.cardenas.orozco@gmail.com  ·  Universidad Tecnológica de Pereira",
      { x: 0.58, y: 4.95, w: 8.3, h: 0.3, fontFace: F.c, fontSize: 10.5, color: C.azulSuave, margin: 0 });
  }

  return {
    P, get S() { return S; }, shapes: P.shapes,
    nueva, kicker, titulo, pie, cols, tarjeta, circuloIcono, linea, chip,
    portada, divisor, cierre, iconPng,
    sombra, sombraSuave, C, F,
  };
}

module.exports = { createDeck, iconPng, C, F, ICONOS };
