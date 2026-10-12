import styled from "styled-components";
import Section from "../../templates/Section";
import Eyebrow from "../../atoms/Eyebrow";
import SectionTitle from "../../atoms/SectionTitle";
import SignalCard from "../../molecules/SignalCard";
import { media } from "../../../styles/theme";
import { senales } from "../../../content/phishing";

const Grid = styled.ul`
  list-style: none;
  display: grid;
  gap: 1rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Closing = styled.p`
  margin-top: 2rem;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--title);
  border-left: 5px solid var(--accent);
  padding-left: 1rem;

  ${media.tablet} {
    font-size: 1.6rem;
  }
`;

export default function PhishingSignals() {
  return (
    <Section id="phishing" variant="light" labelledBy="titulo-phishing">
      <Eyebrow>Phishing</Eyebrow>
      <SectionTitle id="titulo-phishing">
        Alguien se disfraza de alguien en quien confías
      </SectionTitle>

      <Grid>
        {senales.map((s, i) => (
          <SignalCard key={s.titulo} numero={i + 1} titulo={s.titulo} texto={s.texto} />
        ))}
      </Grid>

      <Closing>Si te apura y te pide algo, detente.</Closing>
    </Section>
  );
}
