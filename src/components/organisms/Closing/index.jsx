import styled from "styled-components";
import Section from "../../templates/Section";
import Button from "../../atoms/Button";
import { media } from "../../../styles/theme";
import { enlaceEncuesta } from "../../../content/datosPorCompletar";

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  justify-items: center;
  gap: 1.25rem;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--title);

  ${media.tablet} {
    font-size: 3.4rem;
  }
`;

const Phrase = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--soft);
  max-width: 32ch;
  text-wrap: balance;
`;

export default function Closing() {
  return (
    <Section id="gracias" variant="navy" labelledBy="titulo-gracias">
      <Wrapper>
        <Title id="titulo-gracias">Gracias</Title>
        <Phrase>La seguridad no es un programa: es lo que hacemos cada día.</Phrase>
        <Button href={enlaceEncuesta} target="_blank" rel="noopener noreferrer">
          Cuéntanos qué te pareció (2 minutos)
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </Button>
      </Wrapper>
    </Section>
  );
}
