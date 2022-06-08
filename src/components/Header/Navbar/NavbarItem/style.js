import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const NavbarItemWrapper = styled.li` 
  a {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${colors.secondary100};
    line-height: 1.4rem;
    text-align: center;

    display: inline-block;
    position: relative;

    transition: all .4s ease; 

    &:hover {
      font-weight: 700;
    }
    &::after {
      display:block;
			content:attr(title);
			font-weight:bold;
			height:1px;
			color:transparent;
			overflow:hidden;
			visibility:hidden;
    }
  }
`;
