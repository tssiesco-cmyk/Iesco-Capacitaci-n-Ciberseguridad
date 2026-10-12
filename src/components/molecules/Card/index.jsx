import styled from "styled-components";

/**
 * Tarjeta blanca. Fija sus propios colores de "seccion clara" para que
 * lo de adentro se lea igual aunque la tarjeta este sobre fondo azul.
 */
const Card = styled.div`
  --bg: ${({ theme }) => theme.colors.white};
  --title: ${({ theme }) => theme.colors.navy};
  --text: ${({ theme }) => theme.colors.navy};
  --soft: ${({ theme }) => theme.colors.soft};
  --accent: ${({ theme }) => theme.colors.navy};
  --focus: ${({ theme }) => theme.colors.navy};
  --btn-bg: ${({ theme }) => theme.colors.navy};
  --btn-fg: ${({ theme }) => theme.colors.white};
  --btn-ghost: ${({ theme }) => theme.colors.navy};

  background: var(--bg);
  color: var(--text);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 1.25rem;
  min-width: 0;
`;

export default Card;
