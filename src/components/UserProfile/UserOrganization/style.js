import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { flexRowCenterGap } from '../../../styles/mixins';

export const UserOrganizationWrapper = styled.li`
  ${flexRowCenterGap(1)};
  
  img {
    width: 3rem;
    height: 3rem;
    background-color: yellowgreen;
    border-radius: .5rem;
  }

  a {
    color: ${colors.primary500};
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  @media screen and (min-width: 1000px) {
    gap: .5rem;

    img {
      width: 2rem;
      height: 2rem;
    }
    a {
      font-size: 1.2rem;
    }
  }
`