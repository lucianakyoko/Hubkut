import { useContext } from "react";
import { context } from "../../context";

import { Header } from "../../components/Header";
import { UserProfile } from "../../components/UserProfile";
import { WelcomeSection } from './WelcomeSection';
import { WantToDoSection } from './WantTodoSection';
import { LatestReposSection } from './LatestReposSection';
import { FollowersSection } from "./FollowersSection";
import { FollowingSection } from './FollowingSection';

import {
  UserPageContainer,
  UserProfileSectionContainer,
  ContentContainer,
  FollowContainer
} from './style';

export function User() {
  const ctx = useContext(context);

  return (
    <UserPageContainer>
      <Header />

      <main>
        <UserProfileSectionContainer>
          <UserProfile />
        </UserProfileSectionContainer>

        <ContentContainer>
          <WelcomeSection userName={ctx.userData.name}/>
          <WantToDoSection />
          <LatestReposSection />
        </ContentContainer>

        <FollowContainer>
          {ctx.followersList && <FollowersSection />}
          {ctx.followingList && <FollowingSection />}
        </FollowContainer>
      </main>
    </UserPageContainer>
  )
}