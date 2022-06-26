import { useContext } from "react";
import { context } from "../../../context";
import { NavbarItem } from "./NavbarItem";
import searchIcon from '../../../assets/icons/iconSearch.svg';
import {
  NavbarWrapper,
  NavbarList,
  SearchWrapper
} from './style';
import { Link } from "react-router-dom";

export function Navbar() {
  const ctx = useContext(context);
  const GithubLink = ctx.userData.html_url;
  const logout = useNavigate();

  return(
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem href={GithubLink} label='Início'/>
        <NavbarItem href="https://github.com/pulls" label='Pull Requests'/>
        <NavbarItem href="https://github.com/issues" label='Issues'/>
        <NavbarItem href="https://github.com/marketplace" label='Marketplace'/>
        <NavbarItem href="https://github.com/explore" label='Explore'/>
      </NavbarList>

      <SearchWrapper>
        <Link to={"/"}>sair</Link>
        <div>
          <img src={searchIcon} alt="Ícone lupa" />
          <input type="text" placeholder="Pesquisar no Hubkut" />
        </div>
      </SearchWrapper>
    </NavbarWrapper>
  )
}