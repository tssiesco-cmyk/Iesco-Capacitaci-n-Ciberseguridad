import styled from "styled-components";
import Card from "../Card";
import Clue from "../Clue";

const Wrapper = styled(Card)`
  padding: 0;
  overflow: hidden;
`;

const Header = styled.p`
  padding: 0.9rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--soft);
`;

const Bubbles = styled.ol`
  list-style: none;
  padding: 1.25rem;
  display: grid;
  gap: 0.75rem;
  justify-items: start;
`;

const Bubble = styled.li`
  max-width: 88%;
  background: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px 18px 18px 4px;
  padding: 0.6rem 0.9rem;
  line-height: 1.7;
`;

export default function ChatMock({ caso, revealed }) {
  return (
    <Wrapper role="group" aria-label="Mensaje de ejemplo al celular">
      <Header>{caso.encabezado}</Header>
      <Bubbles>
        {caso.burbujas.map((texto, i) => (
          <Bubble key={texto}>
            <Clue numero={i + 1} active={revealed}>
              {texto}
            </Clue>
          </Bubble>
        ))}
      </Bubbles>
    </Wrapper>
  );
}
