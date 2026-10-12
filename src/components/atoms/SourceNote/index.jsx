import styled from "styled-components";

// Fuente en texto pequeno junto a cada cifra (brief, seccion 6).
const SourceNote = styled.p`
  font-size: 0.75rem;
  color: var(--soft);
  margin-top: 0.5rem;

  a {
    text-underline-offset: 3px;
  }
`;

export default SourceNote;
