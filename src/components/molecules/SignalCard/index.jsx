import styled from "styled-components";
import Card from "../Card";
import NumberBadge from "../../atoms/NumberBadge";

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--title);
`;

const Text = styled.p`
  color: var(--soft);
`;

export default function SignalCard({ numero, titulo, texto }) {
  return (
    <Wrapper as="li">
      <Head>
        <NumberBadge aria-hidden="true">{numero}</NumberBadge>
        <Title>
          <span className="sr-only">Señal {numero}: </span>
          {titulo}
        </Title>
      </Head>
      <Text>{texto}</Text>
    </Wrapper>
  );
}
