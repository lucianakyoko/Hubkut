import {
  LinkWrapper
} from './style';

export function UserLink({href, label, icon}) {
  return(
    <LinkWrapper>
      <img src={icon} alt="Ícone" />
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </LinkWrapper>
  )
}