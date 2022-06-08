import { RepoItem } from './RepoItem';

import {
  LatestReposSectionWrapper
} from './style';

export function LatestReposSection() {
  return(
    <LatestReposSectionWrapper>
      <h3>Meus últimos repositórios</h3>

      <ul>
        <RepoItem href="#" label="usuario/nomeDoRepositorio"/>
        <RepoItem href="#" label="usuario/nomeDoRepositorio"/>
        <RepoItem href="#" label="usuario/nomeDoRepositorio"/>
        <RepoItem href="#" label="usuario/nomeDoRepositorio"/>
      </ul>
    </LatestReposSectionWrapper>

  )
}