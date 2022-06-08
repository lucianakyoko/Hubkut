import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const FollowSectionWrapper  =styled.section`
  padding: 2rem 3.6rem;
  background-color: ${colors.secondary100};
  border-radius: .8rem;

  h3 {
    color: ${colors.secondary800};
    font-size: 1.6rem;

    span {
      color:${colors.primary500};

      margin-left: .8rem;
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 1.6rem 2rem;

    h3 {
      span {
        font-size: 1.4rem;
      }
    }
  }
`;

export const FollowListWrapper = styled.ul`
  margin-top: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  border-radius: .8rem;
`

export const ShowMoreBtn = styled.button`
  margin-top: 3.3rem;
  
  border: none;
  background-color: transparent;

  color: ${colors.primary500};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.7rem;

  &:hover {
    cursor: pointer;
  }
`;