import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: .4rem 1.6rem;

  background-color: ${colors.primary400};

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  @media screen and (min-width: 1000px) {
    padding: .4rem 12.8rem;
  }
`;

export const HeaderLogoWrapper = styled.div`
   width: 10rem;
   height: 4rem;
   padding: .7rem 1.6rem;

   border-radius: 4.8rem;
   background-color: ${colors.secondary100};
   img {
     width: 100%;
     padding: .45rem .37rem;
   }
`;

export const OpenCloseMenuBtn = styled.img`
  width: 3.2rem;
  height: 2.1rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const OpenProfile = styled.div`
  width: 100%;
  height: 90rem;

  position: absolute;
  top: 4.8rem;
  left: 0;
  z-index: 1;

  animation: openSidebar .4s;

  @keyframes openSidebar {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
    }
  }
`