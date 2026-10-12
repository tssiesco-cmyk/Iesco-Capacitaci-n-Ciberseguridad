import styled, { css } from "styled-components";

const variants = {
  solid: css`
    background: var(--btn-bg);
    color: var(--btn-fg);
  `,
  ghost: css`
    background: transparent;
    color: var(--btn-ghost);
    box-shadow: inset 0 0 0 2px var(--btn-ghost);
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.7rem 1.4rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
  transition: transform 0.15s ease, opacity 0.15s ease;

  ${({ $variant }) => variants[$variant]}

  &:hover {
    transform: translateY(-1px);
    opacity: 0.92;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

/** Boton, o enlace con forma de boton si recibe href. */
export default function Button({ href, variant = "solid", ...props }) {
  if (href) return <StyledButton as="a" href={href} $variant={variant} {...props} />;
  return <StyledButton type="button" $variant={variant} {...props} />;
}
