import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import burgerMenu from '../../assets/images/menu.svg';
import { Navbar } from './Navbar';
import { UserProfile } from '../UserProfile';

import {
  HeaderWrapper,
  HeaderLogoWrapper,
  OpenMenuBtn,
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
        <OpenMenuBtn 
          src={burgerMenu} 
          alt="Abrir menu"
          onClick={handleClick}
        />
      </HeaderWrapper>

      { active && 
        <OpenProfile>
          <UserProfile active={active}/>
        </OpenProfile>
      } 
    </>
  )
}