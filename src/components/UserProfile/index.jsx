import { useContext, useState, useEffect } from 'react';
import { context } from '../../context';
import client from '../../services/client';

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
  const [orgs, setOrgs] = useState([]);
  const ctx = useContext(context);
  const data = ctx.userData;

  const userName = data.name;
  const userLogin = data.login;
  const avatar = data.avatar_url;
  const company = data.company;
  const location = data.location;
  const email = data.email;
  const blog = data.blog;
  const twitter = data.twitter_username;

  const getUserOrgs = () => {
    client.get(`${userLogin}/orgs`)
      .then(res => setOrgs(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUserOrgs();
  }, [])

  return(
    <UserProfileSection className={active ? 'active' : ''}>
      <UserProfileHeader>
        <img src={avatar} alt="Foto do perfil" />
        <div>
          <h2>{userName}</h2>
          <h3>@{userLogin}</h3>
        </div>
      </UserProfileHeader>

      <UserProfileLinksWrapper>
        <ul>
          {company !== null && <UserLink icon={iconBuilding} label={`@${company}`} href={`https://github.com/${company}`}/>}
          {location !== null && <UserLink icon={iconPin} label={location} href=''/>}
          {email !== null && <UserLink icon={iconEmail} label={email} href={`mailto:${email}`}/>}
          {blog !== null && <UserLink icon={iconUrl} label={blog} href={blog}/>}
          {twitter !== null && <UserLink icon={iconTwitter} label={`@${twitter}`} href={`https://twitter.com/${twitter}`}/>}
        </ul>
      </UserProfileLinksWrapper>

      <UserProfileOrganizationWrapper>
        <h2>Organizações</h2>
        <ul>
          {orgs.length > 0 && orgs.map(item => (
            <UserOrganization icon={item.avatar_url} name={item.login} href={item.url}/>
          ))}

        </ul>
      </UserProfileOrganizationWrapper>
    </UserProfileSection>

  )
}