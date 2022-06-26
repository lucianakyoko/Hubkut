import styled from "styled-components";
import { colors } from "../../styles/colors";

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
    padding: .4rem 1rem;
    position: absolute;
    bottom: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.7);
    color: ${colors.secondary200};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2rem;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1000px) {
  width: 6.4rem;
  height: 7.4rem;
}
`