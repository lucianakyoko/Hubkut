import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const LinkWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  a {
    color: ${colors.primary500};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  @media screen and (min-width: 1000px) {
    gap: .5rem;

    img {
      width: 1.8rem;
      height: 1.8rem;
    }
    a {
      color: ${colors.primary500};
      font-size: 1.2rem;
    }
  
  }
`