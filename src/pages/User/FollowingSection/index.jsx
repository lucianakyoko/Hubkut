import { useContext, useState, useEffect } from "react";
import { FollowItem } from "../../../components/FollowItem";
import { context } from "../../../context";
import client from '../../../services/client';

import {
  FollowSectionWrapper,
  FollowListWrapper,
  ShowMoreBtn
} from './style';

export function FollowingSection() {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive(!active);
  const ctx = useContext(context);
  const followings = ctx.followingList;
  const user = ctx.userData.login;
  
  const getFollowingList = () => {
    client.get(`/${user}/following?per_page=100`)
    .then(res => ctx.setFollowingList(res.data))
    .catch(err => console.log(err))
  }
 
  useEffect(() => {
    getFollowingList();
  }, []);

  return(
    <FollowSectionWrapper>
      <h3>Seguindo <span>({ctx.userData.following})</span></h3>

      <FollowListWrapper className={active ? 'active' : ''}>
        { followings.map(item => (
          <FollowItem key={item.id} name={item.login} img={item.avatar_url} />
          )) }
      </FollowListWrapper>

      <ShowMoreBtn onClick={handleClick}>Ver todos</ShowMoreBtn>
    </FollowSectionWrapper>
  )
}