import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { flexRowCenterGap } from '../../../styles/mixins';

export const NavbarWrapper = styled.nav`
  display: none;

  @media screen and (min-width: 1000px) {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
`;

export const NavbarList = styled.ul`
  margin-left: 2.4rem;

  ${flexRowCenterGap(3.3)};
`;

export const SearchWrapper = styled.div`
  ${flexRowCenterGap(2.4)};

  span {
    color: ${colors.secondary100};
    font-size: 1.4rem;
    line-height: 1.4rem;

    transition: all .4s ease;
    &:hover {
      cursor: pointer;
      font-weight: 700;
    }
  }
  div {
    padding: 1rem 2rem;
    background-color: ${colors.primary600};
    border-radius: 3.4rem;

    ${flexRowCenterGap(1.6)};
    
    input {
      border: none;
      background-color: transparent;

      color: ${colors.secondary100};
      
      &::placeholder {
        font-size: 1.2rem;
        color: ${colors.secondary100};
      }
    }
  }
`