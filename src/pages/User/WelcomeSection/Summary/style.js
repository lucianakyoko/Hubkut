import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import { flexColCenterGap, flexRowCenterGap } from '../../../../styles/mixins';

export const SummaryItemWrapper = styled.li`
  ${flexColCenterGap(.3)};

  span {
    color: ${colors.secondary700};
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1.4rem;
  }

  div {
    ${flexRowCenterGap(.4)};

    span {
      color: ${colors.primary500};
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }

  @media screen and (min-width: 1000px) {
    span {
      font-size: 1.5rem;
    }
  }
`