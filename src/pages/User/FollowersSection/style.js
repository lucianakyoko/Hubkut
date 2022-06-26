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
    width: 28rem;
    padding: 1.6rem 2rem;

    h3 {
      span {
        font-size: 1.4rem;
      }
    }
  }
`;

export const FollowListWrapper = styled.ul`
  height: 18rem;
  overflow: hidden;
  margin-top: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  border-radius: .8rem;

  &.active {
    overflow: auto;
  }
`

export const ShowMoreBtn = styled.button`
  margin-top: 3.3rem;
  
  border: none;
  border-bottom: 1px solid transparent;
  background-color: transparent;

  color: ${colors.primary500};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.7rem;

 
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${colors.primary500};
  }
`;