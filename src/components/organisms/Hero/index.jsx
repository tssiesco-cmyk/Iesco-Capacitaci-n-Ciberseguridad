import styled from "styled-components";
import Section from "../../templates/Section";
import Button from "../../atoms/Button";
import SourceNote from "../../atoms/SourceNote";
import { media } from "../../../styles/theme";
import { fuentes } from "../../../content/fuentes";

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;
  align-items: center;

  ${media.desktop} {
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--title);
  text-wrap: balance;

  ${media.tablet} {
    font-size: 3.4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--accent);
  margin: 1rem 0 2rem;

  ${media.tablet} {
    font-size: 1.6rem;
  }
`;

const Stat = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lineOnDark};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.navy};
`;

const BigNumber = styled.p`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  color: var(--accent);

  ${media.tablet} {
    font-size: 5.5rem;
  }
`;

const StatText = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  margin-top: 0.5rem;
`;

const Support = styled.p`
  color: var(--soft);
  margin-top: 1rem;
`;

export default function Hero() {
  const fuente = fuentes.verizon;

  return (
    <Section id="inicio" variant="photo" labelledBy="titulo-inicio">
      <Grid>
        <div>
          <Title id="titulo-inicio">Ciberseguridad para todos</Title>
          <Subtitle>Cómo cerrar la puerta con llave</Subtitle>
          <Button href="#phishing">Empezar</Button>
        </div>

        <Stat>
          <BigNumber>62%</BigNumber>
          <StatText>de las brechas de datos involucra el factor humano.</StatText>
          <Support>
            Un clic apurado, una contraseña débil o un archivo enviado a quien no era.
          </Support>
          <SourceNote>
            Fuente:{" "}
            <a href={fuente.url} target="_blank" rel="noopener noreferrer">
              {fuente.nombre}
            </a>
          </SourceNote>
        </Stat>
      </Grid>
    </Section>
  );
}
