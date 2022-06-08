import iconRepo from '../../../../assets/icons/iconRepos.png';
import iconStar from '../../../../assets/icons/iconStars.png';

import {
  RepoItemWrapper,
  RepoItemDetailsWrapper,
  RepoNameWrapper,
  StarWrapper
} from './style';

export function RepoItem({href, label}) {
  return(
    <RepoItemWrapper>
      <RepoItemDetailsWrapper>
        <RepoNameWrapper>
          <img src={iconRepo} alt="ícone repositórios" />
          <a href={href}>{label}</a>
        </RepoNameWrapper>

        <StarWrapper>
          <img src={iconStar} alt="Ícone estrela" />
          <span>4</span>
        </StarWrapper>
      </RepoItemDetailsWrapper>
      <p>Descrição do projeto</p>
    </RepoItemWrapper>

  )
}