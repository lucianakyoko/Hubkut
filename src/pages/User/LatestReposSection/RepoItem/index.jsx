import iconRepo from '../../../../assets/icons/iconRepos.png';
import iconStar from '../../../../assets/icons/iconStars.png';

import {
  RepoItemWrapper,
  RepoItemDetailsWrapper,
  RepoNameWrapper,
  StarWrapper
} from './style';

export function RepoItem({href, label, star}) {
  return(
    <RepoItemWrapper>
      <RepoItemDetailsWrapper>
        <RepoNameWrapper>
          <img src={iconRepo} alt="ícone repositórios" />
          <a href={href}>{label}</a>
        </RepoNameWrapper>

        <StarWrapper>
          <img src={iconStar} alt="Ícone estrela" />
          <span>{star}</span>
        </StarWrapper>
      </RepoItemDetailsWrapper>
      <p>Descrição do projeto</p>
    </RepoItemWrapper>

  )
}