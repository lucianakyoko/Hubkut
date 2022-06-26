import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import burgerMenu from '../../assets/images/menu.svg';
import closeMenu from '../../assets/images/close.svg';
import { Navbar } from './Navbar';
import { UserProfile } from '../UserProfile';

import {
  HeaderWrapper,
  HeaderLogoWrapper,
  OpenCloseMenuBtn,
  OpenProfile
} from './style';

export function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive(!active);

  return(
    <>
      <HeaderWrapper>
        <HeaderLogoWrapper>
          <img src={logo} alt="Logo do Hubkut" />
        </HeaderLogoWrapper>

        <Navbar />
        {!active ?
          <OpenCloseMenuBtn 
            src={burgerMenu} 
            alt="Abrir menu"
            onClick={handleClick}
          />
          :
          <OpenCloseMenuBtn 
            src={closeMenu} 
            alt="Fechar menu"
            onClick={handleClick}
          />
        }
      </HeaderWrapper>

      { active && 
        <OpenProfile>
          <UserProfile active={active}/>
        </OpenProfile>
      } 
    </>
  )
}