import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const RepoItemWrapper = styled.li`
  padding: 1.5rem 1.2rem;
  border-bottom: 1px solid ${colors.secondary100};
  
  p {
    color: ${colors.secondary600};
    font-size: 1.2rem;
    line-height: .9rem;
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap:  .4rem;

    p {
      font-size: 1.4rem;
    }
  }
`;

export const RepoItemDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RepoNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .3rem;

  a {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.primary500};
  }

  @media screen and (min-width: 1000px) {
    gap: .4rem;

    a {
      font-size: 1.6rem;
    }
  }
`;

export const StarWrapper = styled.div`
  padding: .2rem .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;

  background-color: ${colors.primary300};
  border-radius: .8rem;

  span {
    color: ${colors.secondary100};
    font-size: 1rem;
    line-height: 1.2rem;
  }

  @media screen and (min-width: 1000px) {
    padding: .6rem 1.4rem;
    gap:  .9rem;
    span {
      font-size: 1.2rem;
    }
  }
`
  

