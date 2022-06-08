import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { flexRowCenterGap } from '../../../styles/mixins';

export const WelcomeSectionWrapper = styled.section`
  padding: 2.4rem 3.4rem 2rem 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${colors.secondary100};
  border-radius: .8rem;

  h2 {
    color: ${colors.secondary800};
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 2.8rem;
    span {
      font-weight: 500;
    }
  }

  p {
    color: ${colors.secondary600};
    font-size: 1.2rem;
    line-height: 1.5rem;

    span {  
      font-weight: 700;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 61.8rem;
    padding: 2.4rem;
    gap: 3rem;

    h2 {
      font-size: 2.8rem;
      line-height: 3.3rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
  }
`;

export const SummaryListWrapper = styled.ul`
  ${flexRowCenterGap(2)};

  @media screen and (min-width: 1000px) {
    gap: 3rem;
  }
`