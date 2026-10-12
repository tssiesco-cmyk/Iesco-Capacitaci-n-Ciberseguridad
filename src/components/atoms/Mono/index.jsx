import styled from "styled-components";

// Correos, dominios y enlaces de los ejemplos van en JetBrains Mono.
const Mono = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.92em;
  word-break: break-all;
`;

export default Mono;
