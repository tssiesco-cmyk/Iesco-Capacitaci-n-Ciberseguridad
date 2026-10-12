import styled from "styled-components";
import { media } from "../../../styles/theme";

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--title);
  margin-bottom: 1.5rem;
  text-wrap: balance;

  ${media.tablet} {
    font-size: 2.25rem;
  }
`;

export default SectionTitle;
