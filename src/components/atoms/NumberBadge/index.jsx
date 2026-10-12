import styled from "styled-components";

// Circulo con numero para pasos, habitos y pistas. Toma los colores de la seccion.
const NumberBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size = 2 }) => $size}rem;
  height: ${({ $size = 2 }) => $size}rem;
  border-radius: 50%;
  font-weight: 700;
  font-size: ${({ $size = 2 }) => $size * 0.45}rem;
  line-height: 1;
  background: var(--accent);
  color: var(--bg);
`;

export default NumberBadge;
