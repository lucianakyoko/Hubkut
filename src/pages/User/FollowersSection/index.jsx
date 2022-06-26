import { useState, useContext, useEffect } from "react";
import { FollowItem } from "../../../components/FollowItem";
import { context } from "../../../context";
import client from '../../../services/client';

import {
  FollowSectionWrapper,
  FollowListWrapper,
  ShowMoreBtn
} from './style';

export function FollowersSection() {
  const [active, setActive] = useState(false);  
  const handleClick = () => setActive(!active);
  const ctx = useContext(context);
  const followers = ctx.followersList;
  const user = ctx.userData.login;

    const getUserFollowers = () => {
      client.get(`/${user}/followers?per_page=100`)
      .then(res => {
        ctx.setFollowersList(res.data)
      })
      .catch(err => console.log(err))
    };

    useEffect(() => {
      getUserFollowers(); 
    }, []);

  return(
    <FollowSectionWrapper>
      <h3>Seguidores<span>({ctx.userData.followers})</span></h3>

      <FollowListWrapper className={active ? 'active' : ''}>
   
        {followers.map(item => (
          <FollowItem key={item.id} name={item.login} img={item.avatar_url} />
        ))}
      </FollowListWrapper>

      <ShowMoreBtn onClick={handleClick}>Ver todos</ShowMoreBtn>
    </FollowSectionWrapper>
  )
}