import styled from "styled-components";
import Section from "../../templates/Section";
import Eyebrow from "../../atoms/Eyebrow";
import SectionTitle from "../../atoms/SectionTitle";
import NumberBadge from "../../atoms/NumberBadge";
import ContactCard from "../../molecules/ContactCard";
import { media } from "../../../styles/theme";
import { contactoTI } from "../../../content/datosPorCompletar";

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  align-items: start;

  ${media.desktop} {
    grid-template-columns: 1.3fr 1fr;
    gap: 3rem;
    align-items: center;
  }
`;

const Phrase = styled.p`
  font-size: 1.15rem;
  font-weight: 500;
  margin: -0.5rem 0 1.75rem;
`;

const Steps = styled.ol`
  list-style: none;
  display: grid;
  gap: 1rem;

  li {
    display: flex;
    gap: 0.9rem;
    align-items: center;
    font-weight: 600;
  }
`;

const steps = [
  "Desconecta el equipo del Wi-Fi o del cable.",
  "No borres nada ni apagues el equipo.",
  "Avisa a TI y cuenta qué pasó y a qué hora.",
];

export default function ReportBlock() {
  return (
    <Section id="avisar" variant="navy" labelledBy="titulo-avisar">
      <Grid>
        <div>
          <Eyebrow>Buenas prácticas</Eyebrow>
          <SectionTitle id="titulo-avisar">¿Ya hiciste clic? Avisa de inmediato</SectionTitle>
          <Phrase>
            Avisar rápido no es admitir culpa: es lo que evita que el problema crezca.
          </Phrase>
          <Steps>
            {steps.map((paso, i) => (
              <li key={paso}>
                <NumberBadge aria-hidden="true">{i + 1}</NumberBadge>
                <span>
                  <span className="sr-only">Paso {i + 1}: </span>
                  {paso}
                </span>
              </li>
            ))}
          </Steps>
        </div>

        <ContactCard {...contactoTI} />
      </Grid>
    </Section>
  );
}
