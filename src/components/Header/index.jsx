import logo from '../../assets/images/logo.svg';
import burgerMenu from '../../assets/images/menu.svg';
import { Navbar } from './Navbar';

import {
  HeaderWrapper,
  HeaderLogoWrapper,
  OpenMenuBtn
} from './style';

export function Header() {
  return(
    <>
      <HeaderWrapper>
        <HeaderLogoWrapper>
          <img src={logo} alt="Logo do Hubkut" />
        </HeaderLogoWrapper>

        <Navbar />
        <OpenMenuBtn src={burgerMenu} alt="Abrir menu" />


      </HeaderWrapper>
    </>
  )
}