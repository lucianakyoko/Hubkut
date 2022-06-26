import styled from "styled-components";
import { colors } from "../../styles/colors";
import { flexColCenterGap } from '../../styles/mixins';

export const UserProfileSection = styled.section`
  padding: 5.4rem 4.6rem;
  background-color: ${colors.secondary100};

  &.active {
    height: 150rem;
  }

  @media screen and (min-width: 1000px) {
    width: 18.8rem;
    padding: 1.8rem .9rem;
    border-radius: .8rem;
  }
`;

export const UserProfileHeader = styled.header`
  img {
    width: 16rem;
    height: 16rem;

    margin: auto;
    display: flex;
    border-radius: 50%;
    background-color: yellowgreen;
  }

  div {
    margin-top: 4.4rem;
    padding: 1.5rem 0;

    border-top: 1px solid ${colors.secondary400};
    border-bottom: 1px solid ${colors.secondary400};

    h2 {
      color: ${colors.primary500};
      font-size: 2.6rem;
      font-weight: 700;
      line-height: 3.1rem;
    }

    h3 {
      margin-top: 1rem;
      color: ${colors.secondary600};
      font-size: 2.2rem;
      font-weight: 400;
      line-height: 134%;
    }
  }

  @media screen and (min-width: 1000px) {
    img {
      width: 13rem;
      height: 13rem;
    }

    div {
      margin-top: 1.1rem;
    
        h2 {
          font-size: 1.4rem;
          line-height: 1.69rem;
        }

        h3 {
          margin-top: .5rem;
          font-size: 1.2rem;
          line-height: 1.6rem;
        }
    }
  }
`;

export const UserProfileLinksWrapper = styled.div`
  margin-top: 3rem;

  ul {
    ${flexColCenterGap(1.2)}
    align-items: flex-start;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 2.2rem;

    ul {
      gap: 1.4rem;
    }
  }
`;

export const UserProfileOrganizationWrapper = styled.div`
  margin-top: 3rem;

  h2 {
    color: ${colors.secondary600};
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.8rem;
  }

  ul {
    margin-top: 3rem;
    ${flexColCenterGap(1.3)};
    align-items: flex-start;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 2.8rem;

    h2 {
      font-size: 1.6rem;
    }

    ul {
      margin-top: 1.4rem;
      gap: 1.4rem;
    }
  }
`
