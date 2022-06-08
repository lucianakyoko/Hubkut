import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const FollowItemWrapper = styled.div`
  width: 8.4rem;
  height: 10.2rem;

  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    
    border-radius: .8rem;
  } 

  span {
    width: 100%;
    padding: .7rem 1rem;
    position: absolute;
    bottom: 0;
    left: 0;

    color: blue;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2rem;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1000px) {
  width: 7.2rem;
  height: 8.6rem;
}
`