import styled from "styled-components";
import { Variant } from "../../templates/Section";
import { media } from "../../../styles/theme";
import { fuentes } from "../../../content/fuentes";
import logo from "../../../assets/logoiescogroup.png";

const Wrapper = styled(Variant)`
  background: ${({ theme }) => theme.colors.navy};
  border-top: 1px solid ${({ theme }) => theme.colors.lineOnDark};
  color: var(--text);
  padding: 2.5rem 1rem;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;

  ${media.tablet} {
    grid-template-columns: auto 1fr;
    gap: 3rem;
    align-items: start;
  }

  img {
    height: 56px;
    width: auto;
  }
`;

const Title = styled.h2`
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--soft);

  a {
    text-underline-offset: 3px;
  }
`;

const PresentLink = styled.a`
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-underline-offset: 3px;
`;

export default function Footer() {
  return (
    <Wrapper as="footer" $variant="navy">
      <Inner>
        <img src={logo} alt="IESCO" />
        <div>
          <Title>Fuentes de las cifras</Title>
          <List>
            {Object.values(fuentes).map((f) => (
              <li key={f.url}>
                <a href={f.url} target="_blank" rel="noopener noreferrer">
                  {f.nombre}
                </a>
              </li>
            ))}
          </List>
          <PresentLink href="presentacion.html">Abrir en modo presentación</PresentLink>
        </div>
      </Inner>
    </Wrapper>
  );
}
