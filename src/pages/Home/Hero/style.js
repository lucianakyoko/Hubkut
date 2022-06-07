import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const HeroWrapper = styled.div`
  padding: 5.8rem 1rem 3.6rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  background-color: ${colors.secondary100};
  border-radius: .8rem;

  img {
    padding: 1.3rem 1rem;
  }

  @media screen and (min-width: 1000px) {
    width: 100%;
    padding: 8.9rem 0 9.7rem 0;
  }
`;

export const HeroParagraphsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    color: ${colors.secondary800};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.2rem;
    text-align: center;

    span {
      color: ${colors.highlights300};
      font-weight: 700;
    }
  }
  
  @media screen and (min-width: 1000px) {
    gap: .5rem;

    p {
      font-size: 1.4rem;
    }
  }
`