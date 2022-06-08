import { Summary } from './Summary';

import iconStar from '../../../assets/icons/iconStars.png';
import iconRepo from '../../../assets/icons/iconRepos.png';
import iconFollower from '../../../assets/icons/iconFollowers.png';
import iconFollowing from '../../../assets/icons/iconBinoculars.png';

import {
  WelcomeSectionWrapper,
  SummaryListWrapper
} from './style';


export function WelcomeSection() {
  return(
    <WelcomeSectionWrapper>
      <h2>Bem-vindo(a), <span>Fulana de Tal!</span></h2>
      <p><span>Sorte de hoje:</span> Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir</p>

      <SummaryListWrapper>
        <Summary label="Favoritos" icon={iconStar} data="12" />
        <Summary label="Repositórios" icon={iconRepo} data="12" />
        <Summary label="Seguidores" icon={iconFollower} data="12" />
        <Summary label="Seguindo" icon={iconFollowing} data="12" />
      </SummaryListWrapper>
    </WelcomeSectionWrapper>
  )
}