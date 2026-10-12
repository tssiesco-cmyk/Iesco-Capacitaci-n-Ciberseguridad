import styled from "styled-components";
import { FiChevronLeft, FiChevronRight, FiMaximize, FiMinimize } from "react-icons/fi";
import logo from "../../../assets/logoiescogroup.png";

// Pastilla azul fija abajo a la derecha: se lee igual sobre diapositivas claras u oscuras.
const Bar = styled.div`
  --focus: ${({ theme }) => theme.colors.white};

  position: fixed;
  right: 1.25rem;
  bottom: 1rem;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.3rem 0.4rem 0.3rem 0.9rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lineOnDark};
  box-shadow: ${({ theme }) => theme.shadow};
  font-size: 0.7rem;

  img {
    height: 26px;
    width: auto;
    margin-right: 0.5rem;
  }
`;

const Count = styled.span`
  min-width: 3.2em;
  text-align: center;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.1rem;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.12);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
`;

// Barra de avance en el borde inferior
const Progress = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 4px;
  z-index: 20;
  width: ${({ $pct }) => $pct}%;
  background: ${({ theme }) => theme.colors.navy};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.white};
  transition: width 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export default function SlideControls({ actual, total, onPrev, onNext, fullscreen, onFullscreen }) {
  return (
    <>
      <Progress $pct={((actual + 1) / total) * 100} aria-hidden="true" />
      <Bar role="group" aria-label="Controles de la presentación">
        <img src={logo} alt="IESCO" />
        <IconButton onClick={onPrev} disabled={actual === 0} aria-label="Diapositiva anterior">
          <FiChevronLeft aria-hidden="true" />
        </IconButton>
        <Count aria-live="polite">
          <span className="sr-only">Diapositiva </span>
          {actual + 1} / {total}
        </Count>
        <IconButton onClick={onNext} disabled={actual === total - 1} aria-label="Diapositiva siguiente">
          <FiChevronRight aria-hidden="true" />
        </IconButton>
        <IconButton
          onClick={onFullscreen}
          aria-label={fullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
        >
          {fullscreen ? <FiMinimize aria-hidden="true" /> : <FiMaximize aria-hidden="true" />}
        </IconButton>
      </Bar>
    </>
  );
}
