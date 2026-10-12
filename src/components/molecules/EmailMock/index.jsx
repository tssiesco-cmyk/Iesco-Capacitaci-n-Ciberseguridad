import styled from "styled-components";
import Card from "../Card";
import Clue from "../Clue";
import Mono from "../../atoms/Mono";

const Wrapper = styled(Card)`
  padding: 0;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 1rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: grid;
  gap: 0.35rem;
`;

const Row = styled.p`
  font-size: 0.85rem;
  color: var(--soft);
  line-height: 1.8;

  strong {
    color: var(--text);
    font-weight: 600;
  }
`;

const Subject = styled.p`
  font-weight: 700;
  color: var(--title);
  line-height: 1.6;
  margin-top: 0.25rem;
`;

const Body = styled.div`
  padding: 1.25rem;
  display: grid;
  gap: 1rem;
  justify-items: start;
  line-height: 1.7;
`;

// Imitacion de boton dentro del correo: no es un control y no recibe foco.
const FakeButton = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 0.55rem 1.1rem;
  font-weight: 600;
  font-size: 0.9rem;
`;

const LinkRow = styled.p`
  font-size: 0.8rem;
  color: var(--soft);
  line-height: 1.9;
`;

export default function EmailMock({ caso, revealed }) {
  return (
    <Wrapper role="group" aria-label="Correo de ejemplo">
      <Header>
        <Row>
          <strong>De:</strong> {caso.remitente}{" "}
          <Clue numero={1} active={revealed}>
            <Mono>&lt;{caso.direccion}&gt;</Mono>
          </Clue>
        </Row>
        <Subject>
          <span className="sr-only">Asunto: </span>
          <Clue numero={2} active={revealed}>
            {caso.asunto}
          </Clue>
        </Subject>
      </Header>
      <Body>
        <p>
          <Clue numero={3} active={revealed}>
            {caso.saludo}
          </Clue>
          {caso.cuerpo}
        </p>
        <FakeButton>{caso.boton}</FakeButton>
        <LinkRow>
          El botón lleva a:{" "}
          <Clue numero={4} active={revealed}>
            <Mono>{caso.enlace}</Mono>
          </Clue>
        </LinkRow>
      </Body>
    </Wrapper>
  );
}
