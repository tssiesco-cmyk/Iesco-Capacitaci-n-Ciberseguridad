import styled from "styled-components";
import SourceNote from "../../atoms/SourceNote";

const Wrapper = styled.figure`
  border-left: 4px solid var(--accent);
  padding-left: 1rem;
`;

const Text = styled.blockquote`
  font-weight: 600;
  color: var(--text);
`;

/** Dato con su fuente en texto pequeno al lado, como pide el brief. */
export default function StatHighlight({ dato, fuente }) {
  return (
    <Wrapper>
      <Text>{dato}</Text>
      <SourceNote as="figcaption">
        Fuente:{" "}
        <a href={fuente.url} target="_blank" rel="noopener noreferrer">
          {fuente.nombre}
        </a>
      </SourceNote>
    </Wrapper>
  );
}
