import { useContext, useState } from 'react';
import { context } from '../../../context';
import client from '../../../services/client';

import { Summary } from './Summary';

import iconStar from '../../../assets/icons/iconStars.png';
import iconRepo from '../../../assets/icons/iconRepos.png';
import iconFollower from '../../../assets/icons/iconFollowers.png';
import iconFollowing from '../../../assets/icons/iconBinoculars.png';

import {
  WelcomeSectionWrapper,
  SummaryListWrapper
} from './style';


export function WelcomeSection({userName}) {
  const ctx = useContext(context);
  const [favorite, setFavorite] = useState('');

  const repos = ctx.userData.public_repos;
  const followers = ctx.userData.followers;
  const following = ctx.userData.following;
 
  const getFavoriteRepos = user => {
    client.get(`/${user}/starred`)
      .then(res => {
        setFavorite(res.data.length);
      })
      .catch(err => console.log(err))
  }
  
  getFavoriteRepos(`${ctx.userData.login}`);

  return(
    <WelcomeSectionWrapper>
      <h2>Bem-vindo(a), <span>{userName}</span>!</h2>
      <p><span>Sorte de hoje:</span> Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir</p>

      <SummaryListWrapper>
        <Summary label="Favoritos" icon={iconStar} data={favorite} />
        <Summary label="Repositórios" icon={iconRepo} data={repos} />
        <Summary label="Seguidores" icon={iconFollower} data={followers} />
        <Summary label="Seguindo" icon={iconFollowing} data={following} />
      </SummaryListWrapper>
    </WelcomeSectionWrapper>
  )
}