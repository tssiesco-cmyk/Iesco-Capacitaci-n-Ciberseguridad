import styled from "styled-components";
import Section from "../../templates/Section";
import Eyebrow from "../../atoms/Eyebrow";
import SectionTitle from "../../atoms/SectionTitle";
import NumberBadge from "../../atoms/NumberBadge";
import Mono from "../../atoms/Mono";
import Card from "../../molecules/Card";
import StatHighlight from "../../molecules/StatHighlight";
import { media } from "../../../styles/theme";
import { habitos } from "../../../content/habitos";

const Grid = styled.ol`
  list-style: none;
  display: grid;
  gap: 1rem;

  ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Item = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--title);
`;

const Text = styled.p`
  color: var(--soft);
`;

const Example = styled(Mono)`
  color: var(--text);
  background: ${({ theme }) => theme.colors.light};
  border-radius: 6px;
  padding: 0 0.3em;
`;

// Resalta la contrasena de ejemplo dentro del texto, en JetBrains Mono
function TextoConEjemplo({ texto, ejemplo }) {
  if (!ejemplo || !texto.includes(ejemplo)) return texto;
  const [antes, despues] = texto.split(ejemplo);
  return (
    <>
      {antes}
      <Example>{ejemplo}</Example>
      {despues}
    </>
  );
}

export default function Habits() {
  return (
    <Section id="habitos" variant="light" labelledBy="titulo-habitos">
      <Eyebrow>Para llevarse</Eyebrow>
      <SectionTitle id="titulo-habitos">Tres hábitos que cierran la puerta</SectionTitle>

      <Grid>
        {habitos.map((h, i) => (
          <Item as="li" key={h.titulo}>
            <NumberBadge $size={2.6} aria-hidden="true">
              {i + 1}
            </NumberBadge>
            <Title>
              <span className="sr-only">Hábito {i + 1}: </span>
              {h.titulo}
            </Title>
            <Text>
              <TextoConEjemplo texto={h.texto} ejemplo={h.ejemplo} />
            </Text>
            {h.dato && <StatHighlight dato={h.dato} fuente={h.fuente} />}
          </Item>
        ))}
      </Grid>
    </Section>
  );
}
