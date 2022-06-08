import { UserLink } from './UserLink';
import { UserOrganization } from './UserOrganization';

import iconBuilding from '../../assets/icons/iconBuilding.png';
import iconPin from '../../assets/icons/iconPin.png';
import iconEmail from '../../assets/icons/iconEmail.png';
import iconUrl from '../../assets/icons/iconUrl.png';
import iconTwitter from '../../assets/icons/iconTwitter.png';

import {
  UserProfileSection,
  UserProfileHeader,
  UserProfileLinksWrapper,
  UserProfileOrganizationWrapper
} from './style';

export function UserProfile({active}) {
  return(
    <UserProfileSection className={active ? 'active' : ''}>
      <UserProfileHeader>
        <img src="" alt="" />
        <div>
          <h2>Fulana de Tal</h2>
          <h3>@fulanadetal</h3>
        </div>
      </UserProfileHeader>

      <UserProfileLinksWrapper>
        <ul>
          <UserLink icon={iconBuilding} label='link 1' href='#'/>
          <UserLink icon={iconPin} label='link 1' href='#'/>
          <UserLink icon={iconEmail} label='link 1' href='#'/>
          <UserLink icon={iconUrl} label='link 1' href='#'/>
          <UserLink icon={iconTwitter} label='link 1' href='#'/>
        </ul>
      </UserProfileLinksWrapper>

      <UserProfileOrganizationWrapper>
        <h2>Organizações</h2>
        <ul>
          <UserOrganization />
          <UserOrganization />
          <UserOrganization />
        </ul>
      </UserProfileOrganizationWrapper>
    </UserProfileSection>

  )
}