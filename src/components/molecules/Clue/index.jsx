import styled, { css } from "styled-components";
import NumberBadge from "../../atoms/NumberBadge";

const Mark = styled.span`
  border-radius: 6px;
  transition: background 0.2s ease;

  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.colors.highlight};
      box-shadow: 0 0 0 2px ${theme.colors.navy};
      padding: 0 0.15em;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    `}
`;

const Badge = styled(NumberBadge)`
  margin-right: 0.3em;
  vertical-align: 0.1em;
`;

/**
 * Parte del mensaje que delata la trampa. Al revelar, se resalta y lleva el
 * numero de su pista: el resultado no depende solo del color.
 */
export default function Clue({ numero, active, children }) {
  return (
    <Mark $active={active}>
      {active && (
        <>
          <Badge $size={1.3} aria-hidden="true">
            {numero}
          </Badge>
          <span className="sr-only">(pista {numero}) </span>
        </>
      )}
      {children}
    </Mark>
  );
}
