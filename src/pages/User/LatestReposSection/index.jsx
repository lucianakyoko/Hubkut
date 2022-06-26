import { useContext } from 'react';
import { RepoItem } from './RepoItem';
import client from '../../../services/client';
import { context } from '../../../context';

import {
  LatestReposSectionWrapper
} from './style';
import { useState } from 'react';
import { useEffect } from 'react';

export function LatestReposSection() {
  const [repos, setRepos] = useState([]);
  const ctx = useContext(context);
  const user = ctx.userData.login;
  const latestRespos = repos.slice(0, 4);

  const getRepos = () => {
    client.get(`${user}/repos`)
      .then(res => {
        setRepos(res.data)

      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getRepos()
  }, []);
  
  return(
    <LatestReposSectionWrapper>
      <h3>Meus últimos repositórios</h3>

      <ul>
        { latestRespos.map( item => (
          <RepoItem 
            key={item.id}
            href={item.html_url} 
            label={item.name} 
            star={item.stargazers_count}/>
        ))}
      </ul>
    </LatestReposSectionWrapper>

  )
}