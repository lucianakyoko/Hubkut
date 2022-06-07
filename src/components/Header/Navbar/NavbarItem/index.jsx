import {
  NavbarItemWrapper,
} from './style';

export function NavbarItem({ href, label }) {
  return(
    <NavbarItemWrapper>
      <a href={href} title={label} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </NavbarItemWrapper>
  )
}