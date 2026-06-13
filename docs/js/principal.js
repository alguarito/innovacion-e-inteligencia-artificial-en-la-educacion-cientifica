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

  /* Año actual en el pie de página ----------------------------------------- */
  const anio = document.getElementById("anio-actual");
  if (anio) anio.textContent = String(new Date().getFullYear());
})();
