import styled from "styled-components";
import { colors } from "../../styles/colors";
import { flexColCenterGap } from '../../styles/mixins';

export const UserPageContainer = styled.div`
  background-color: ${colors.primary100};

  main {
    margin-top: 4.8rem;
    padding: 1.6rem 1.6rem 2rem 1.6rem;
    ${flexColCenterGap(2)};
    align-items: flex-start;

    @media screen and (min-width: 1000px) {
      padding: 2.4rem 12.8rem 6.4rem 12.8rem;
      flex-direction: row;
    }
  }
`;

export const UserProfileSectionContainer = styled.div`
  display: none;

  @media screen and (min-width: 1000px) {
    display: block;
  }
`;

