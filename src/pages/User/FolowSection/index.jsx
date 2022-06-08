import { FollowItem } from "./FollowItem";

import {
  FollowSectionWrapper,
  FollowListWrapper,
  ShowMoreBtn
} from './style';

export function FollowSection({ sectionTitle, number}) {
  return(
    <FollowSectionWrapper>
      <h3>{sectionTitle} <span>({number})</span></h3>

      <FollowListWrapper>
        <FollowItem name="Beltrano de tal" img=''/>
        <FollowItem name="Beltrano de tal" img=''/>
        <FollowItem name="Beltrano de tal" img=''/>
        <FollowItem name="Beltrano de tal" img=''/>
        <FollowItem name="Beltrano de tal" img=''/>
        <FollowItem name="Beltrano de tal" img=''/>
      </FollowListWrapper>

      <ShowMoreBtn>Ver todos</ShowMoreBtn>
    </FollowSectionWrapper>
  )
}