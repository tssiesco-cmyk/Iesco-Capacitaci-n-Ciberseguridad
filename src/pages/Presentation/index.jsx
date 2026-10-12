import { useCallback, useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { PresentationContext } from "../../context/presentation";
import Hero from "../../components/organisms/Hero";
import PhishingSignals from "../../components/organisms/PhishingSignals";
import RealOTrampa from "../../components/organisms/RealOTrampa";
import Habits from "../../components/organisms/Habits";
import ReportBlock from "../../components/organisms/ReportBlock";
import Quiz from "../../components/organisms/Quiz";
import Closing from "../../components/organisms/Closing";
import SlideControls from "../../components/organisms/SlideControls";

// Mismas secciones que la landing, en el mismo orden. El id sirve para que los
// enlaces internos (p. ej. «Empezar» o «A quién avisar») salten a su diapositiva.
const SLIDES = [
  { id: "inicio", Component: Hero },
  { id: "phishing", Component: PhishingSignals },
  { id: "juego", Component: RealOTrampa },
  { id: "habitos", Component: Habits },
  { id: "avisar", Component: ReportBlock },
  { id: "quiz", Component: Quiz },
  { id: "gracias", Component: Closing },
];

/**
 * En la web la letra depende del ancho; en una diapositiva manda el alto. Asi
 * el texto se reacomoda para la pantalla y casi no hace falta achicarlo despues.
 */
const PresentationStyles = createGlobalStyle`
  html,
  html:root {
    font-size: clamp(16px, 2.5vh, 30px);
  }
`;

const SIGUIENTE =["ArrowRight", "ArrowDown", "PageDown"];
const ANTERIOR = ["ArrowLeft", "ArrowUp", "PageUp"];

export default function Presentation() {
  const [actual, setActual] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const slideRefs = useRef([]);
  const total = SLIDES.length;

  const ir = useCallback(
    (i) => setActual(Math.max(0, Math.min(total - 1, i))),
    [total]
  );

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  }, []);

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Teclado y control remoto (los punteros envian PageUp/PageDown)
  useEffect(() => {
    const onKey = (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const enControl = e.target.closest?.("button, a, input, textarea, select");

      if (SIGUIENTE.includes(e.key) || (e.key === " " && !enControl)) {
        e.preventDefault();
        setActual((i) => Math.min(total - 1, i + 1));
      } else if (ANTERIOR.includes(e.key)) {
        e.preventDefault();
        setActual((i) => Math.max(0, i - 1));
      } else if (e.key === "Home") {
        setActual(0);
      } else if (e.key === "End") {
        setActual(total - 1);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total, toggleFullscreen]);

  // Al cambiar de diapositiva el foco entra en ella, para seguir con Tab desde ahi
  useEffect(() => {
    slideRefs.current[actual]?.focus({ preventScroll: true });
  }, [actual]);

  // Los enlaces internos (#phishing, #avisar...) cambian de diapositiva en vez de hacer scroll
  const onClickCapture = (e) => {
    const a = e.target.closest?.('a[href^="#"]');
    if (!a) return;
    const destino = SLIDES.findIndex((s) => `#${s.id}` === a.getAttribute("href"));
    if (destino === -1) return;
    e.preventDefault();
    ir(destino);
  };

  return (
    <PresentationContext.Provider value={true}>
      <PresentationStyles />
      <main onClickCapture={onClickCapture}>
        {SLIDES.map(({ id, Component }, i) => (
          <div
            key={id}
            ref={(el) => (slideRefs.current[i] = el)}
            hidden={i !== actual}
            tabIndex={-1}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${total}`}
            style={{ outline: "none" }}
          >
            <Component />
          </div>
        ))}
      </main>

      <SlideControls
        actual={actual}
        total={total}
        onPrev={() => ir(actual - 1)}
        onNext={() => ir(actual + 1)}
        fullscreen={fullscreen}
        onFullscreen={toggleFullscreen}
      />
    </PresentationContext.Provider>
  );
}
