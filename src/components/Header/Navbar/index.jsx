import { NavbarItem } from "./NavbarItem";
import searchIcon from '../../../assets/icons/iconSearch.svg';
import {
  NavbarWrapper,
  NavbarList,
  SearchWrapper
} from './style';

export function Navbar() {
  return(
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem href={'#'} label='Início'/>
        <NavbarItem href={'#'} label='Pull Requests'/>
        <NavbarItem href={'#'} label='Issues'/>
        <NavbarItem href={'#'} label='Marketplace'/>
        <NavbarItem href={'#'} label='Explore'/>
      </NavbarList>

      <SearchWrapper>
        <span>sair</span>
        <div>
          <img src={searchIcon} alt="Ícone lupa" />
          <input type="text" placeholder="Pesquisar no Hubkut" />
        </div>
      </SearchWrapper>
    </NavbarWrapper>
  )
}