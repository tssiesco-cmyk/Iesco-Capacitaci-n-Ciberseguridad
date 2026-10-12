import { useContext, useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { media } from "../../../styles/theme";
import { PresentationContext } from "../../../context/presentation";
import portada from "../../../assets/portada.jpeg";

/**
 * Cada seccion define sus colores como variables CSS y los componentes de
 * adentro las leen. Asi un mismo boton o etiqueta funciona sobre claro o azul
 * sin saber donde esta.
 */
const light = css`
  --bg: ${({ theme }) => theme.colors.light};
  --title: ${({ theme }) => theme.colors.navy};
  --text: ${({ theme }) => theme.colors.navy};
  --soft: ${({ theme }) => theme.colors.soft};
  --accent: ${({ theme }) => theme.colors.navy};
  --focus: ${({ theme }) => theme.colors.navy};
  --btn-bg: ${({ theme }) => theme.colors.navy};
  --btn-fg: ${({ theme }) => theme.colors.white};
  --btn-ghost: ${({ theme }) => theme.colors.navy};
`;

const navy = css`
  --bg: ${({ theme }) => theme.colors.navy};
  --title: ${({ theme }) => theme.colors.white};
  --text: ${({ theme }) => theme.colors.white};
  --soft: ${({ theme }) => theme.colors.softOnDark};
  --accent: ${({ theme }) => theme.colors.white};
  --focus: ${({ theme }) => theme.colors.white};
  --btn-bg: ${({ theme }) => theme.colors.white};
  --btn-fg: ${({ theme }) => theme.colors.navy};
  --btn-ghost: ${({ theme }) => theme.colors.white};
`;

const variants = {
  light,
  navy,
  // Foto con el degradado IESCO encima: azul solido arriba, la foto asoma abajo.
  photo: css`
    ${navy}
    background-image: ${({ theme }) => theme.colors.gradient}, url(${portada});
    background-size: cover;
    background-position: center;
  `,
};

export const Variant = styled.div`
  ${({ $variant }) => variants[$variant]}
`;

const Wrapper = styled.section`
  background-color: var(--bg);
  ${({ $variant }) => variants[$variant]}
  color: var(--text);
  padding: 3.5rem 1rem;

  ${media.tablet} {
    padding: 4.5rem 2rem;
  }

  /* Proyectada, cada seccion ocupa la pantalla y el expositor avanza con scroll */
  ${media.desktop} {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  /* En modo presentacion la seccion es una diapositiva: exactamente una pantalla */
  ${({ $fit }) =>
    $fit &&
    css`
      && {
        height: 100vh;
        min-height: 0;
        display: flex;
        align-items: center;
        overflow: hidden;
        padding: 2rem 3rem 4.5rem;
        /* Mas ancho que en la web: menos lineas, menos alto, menos hay que achicar */
        --content-max: 1500px;
        --box-max: 1100px;
      }
    `}
`;

const Inner = styled.div`
  width: 100%;
  max-width: var(--content-max, ${({ theme }) => theme.maxWidth});
  margin: 0 auto;
  flex-shrink: 0;
  transform-origin: center;
`;

/**
 * En modo presentacion, si el contenido es mas alto que la pantalla (por
 * ejemplo el juego con las pistas abiertas) se achica hasta que entre entero.
 */
function useFitScale(fit, wrapRef, innerRef) {
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    if (!fit) return;
    const wrap = wrapRef.current;
    const inner = innerRef.current;

    const update = () => {
      const cs = getComputedStyle(wrap);
      const disponible =
        wrap.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      const alto = inner.offsetHeight;
      if (!alto || disponible <= 0) return;
      setScale(Math.min(1, disponible / alto));
    };

    const ro = new ResizeObserver(update);
    ro.observe(wrap);
    ro.observe(inner);
    update();
    return () => ro.disconnect();
  }, [fit, wrapRef, innerRef]);

  return fit ? scale : 1;
}

export default function Section({ id, variant = "light", labelledBy, children }) {
  const fit = useContext(PresentationContext);
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const scale = useFitScale(fit, wrapRef, innerRef);

  return (
    <Wrapper ref={wrapRef} id={id} $variant={variant} $fit={fit} aria-labelledby={labelledBy}>
      <Inner ref={innerRef} style={scale < 1 ? { transform: `scale(${scale})` } : undefined}>
        {children}
      </Inner>
    </Wrapper>
  );
}
