/* Módulo 9 — Innovación e IA en la Educación Científica · UTP
   Interacciones de la página */

(function () {
  "use strict";

  /* Encabezado: sombra al hacer scroll ------------------------------- */
  const encabezado = document.getElementById("encabezado");
  if (encabezado) {
    const alScroll = () => {
      encabezado.classList.toggle("con-scroll", window.scrollY > 8);
    };
    window.addEventListener("scroll", alScroll, { passive: true });
    alScroll();
  }

  /* Menú móvil --------------------------------------------------------- */
  const botonMenu = document.getElementById("boton-menu");
  const navegacion = document.getElementById("navegacion-principal");
  if (botonMenu && navegacion) {
    botonMenu.addEventListener("click", () => {
      const abierta = navegacion.classList.toggle("abierta");
      botonMenu.setAttribute("aria-expanded", String(abierta));
      botonMenu.setAttribute(
        "aria-label",
        abierta ? "Cerrar menú de navegación" : "Abrir menú de navegación"
      );
    });
    navegacion.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", () => {
        navegacion.classList.remove("abierta");
        botonMenu.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Animación de aparición al hacer scroll ------------------------------ */
  const reveladores = document.querySelectorAll(".revelar");
  if ("IntersectionObserver" in window && reveladores.length) {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveladores.forEach((el) => observador.observe(el));
  } else {
    reveladores.forEach((el) => el.classList.add("visible"));
  }

  /* Contadores animados de la franja de cifras --------------------------- */
  const contadores = document.querySelectorAll(".contador");
  const animarContador = (el) => {
    const meta = parseInt(el.dataset.meta, 10) || 0;
    const duracion = 1200;
    const inicio = performance.now();
    const paso = (ahora) => {
      const progreso = Math.min((ahora - inicio) / duracion, 1);
      const suavizado = 1 - Math.pow(1 - progreso, 3);
      el.textContent = String(Math.round(meta * suavizado));
      if (progreso < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  };
  if ("IntersectionObserver" in window && contadores.length) {
    const obsContadores = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            animarContador(entrada.target);
            obsContadores.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    contadores.forEach((el) => obsContadores.observe(el));
  } else {
    contadores.forEach((el) => (el.textContent = el.dataset.meta));
  }

  /* Barras del desglose de evaluación ------------------------------------ */
  const filasDesglose = document.querySelectorAll(".desglose-fila");
  const rellenarFila = (fila) => {
    const relleno = fila.querySelector(".relleno[data-ancho]");
    if (relleno) relleno.style.width = relleno.dataset.ancho + "%";
  };
  if ("IntersectionObserver" in window && filasDesglose.length) {
    const obsFilas = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            rellenarFila(entrada.target);
            obsFilas.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    filasDesglose.forEach((fila) => obsFilas.observe(fila));
  } else {
    filasDesglose.forEach(rellenarFila);
  }

  /* Acordeón de clases: abrir según el enlace #clase-N -------------------- */
  const abrirClaseDesdeHash = () => {
    const hash = window.location.hash;
    if (!hash) return;
    const objetivo = document.querySelector(hash);
    if (objetivo && objetivo.tagName === "DETAILS") {
      objetivo.open = true;
      objetivo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  window.addEventListener("hashchange", abrirClaseDesdeHash);
  abrirClaseDesdeHash();

  /* Visor de diapositivas (lightbox) --------------------------------------- */
  const visor = document.getElementById("visor");
  if (visor) {
    const img = document.getElementById("visor-img");
    const tituloEl = document.getElementById("visor-titulo");
    const contadorEl = document.getElementById("visor-contador");
    const descargaEl = document.getElementById("visor-descarga");
    const escenario = document.getElementById("visor-escenario");
    const btnPrev = document.getElementById("visor-prev");
    const btnNext = document.getElementById("visor-next");
    const btnCerrar = document.getElementById("visor-cerrar");
    let sesion = null, total = 0, idx = 1;

    const ruta = (n) => "img/diapositivas/sesion-" + sesion + "/" + String(n).padStart(2, "0") + ".jpg";
    const precargar = (n) => { if (n >= 1 && n <= total) { const im = new Image(); im.src = ruta(n); } };

    const mostrar = (n) => {
      idx = Math.min(Math.max(n, 1), total);
      img.src = ruta(idx);
      img.alt = "Diapositiva " + idx + " de " + total;
      contadorEl.textContent = idx + " / " + total;
      btnPrev.disabled = idx === 1;
      btnNext.disabled = idx === total;
      precargar(idx + 1);
      precargar(idx - 1);
    };

    const abrir = (btn) => {
      sesion = btn.dataset.sesion;
      total = parseInt(btn.dataset.total, 10);
      tituloEl.textContent = btn.dataset.titulo;
      descargaEl.href = btn.dataset.pptx;
      visor.hidden = false;
      document.body.style.overflow = "hidden";
      mostrar(1);
    };
    const cerrar = () => {
      visor.hidden = true;
      document.body.style.overflow = "";
      img.removeAttribute("src");
    };

    document.querySelectorAll(".preview-diapositiva").forEach((b) =>
      b.addEventListener("click", () => abrir(b))
    );
    btnPrev.addEventListener("click", () => mostrar(idx - 1));
    btnNext.addEventListener("click", () => mostrar(idx + 1));
    btnCerrar.addEventListener("click", cerrar);
    escenario.addEventListener("click", (e) => { if (e.target === escenario) cerrar(); });

    document.addEventListener("keydown", (e) => {
      if (visor.hidden) return;
      if (e.key === "ArrowRight") mostrar(idx + 1);
      else if (e.key === "ArrowLeft") mostrar(idx - 1);
      else if (e.key === "Escape") cerrar();
    });

    let x0 = null;
    visor.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    visor.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) mostrar(idx + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }

  /* Año actual en el pie de página ----------------------------------------- */
  const anio = document.getElementById("anio-actual");
  if (anio) anio.textContent = String(new Date().getFullYear());
})();
