import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const FooterWrapper = styled.footer`
  padding: 1.4rem 5rem;
  background-color: ${colors.primary200};
  border-radius: .8rem;

  p {
    color: ${colors.secondary800};
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: center;

    a {
      color: ${colors.primary500};
    }
  }

  @media screen and (min-width: 1000px) {
    p {
      font-size: 1.4rem;
    }
  }
`;