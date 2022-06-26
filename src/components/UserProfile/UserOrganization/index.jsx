import { UserOrganizationWrapper } from './style';

export function UserOrganization({icon, href, name}) {
  return(
    <UserOrganizationWrapper>
      <a href={href}>
        <img src={icon} alt="Ícone da organização" />
        {name}
      </a>
    </UserOrganizationWrapper>
  )
}