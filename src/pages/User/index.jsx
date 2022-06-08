import { useContext } from "react";
import { context } from "../../context";

import { Header } from "../../components/Header";
import { UserProfile } from "../../components/UserProfile";
import { WelcomeSection } from './WelcomeSection';
import { WantToDoSection } from './WantTodoSection';
import { LatestReposSection } from './LatestReposSection';

import {
  UserPageContainer,
  UserProfileSectionContainer,
  ContentContainer,
  FollowContainer
} from './style';
import { FollowSection } from "./FolowSection";

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
          <FollowSection sectionTitle="Seguidores" number={'20'}/>
          <FollowSection sectionTitle="Seguindo" number={'200'}/>
        </FollowContainer>
      </main>
    </UserPageContainer>
  )
}