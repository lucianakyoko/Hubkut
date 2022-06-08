import { Header } from "../../components/Header";
import { UserProfile } from "../../components/UserProfile";
import { WelcomeSection } from './WelcomeSection';
import { WantToDoSection } from './WantTodoSection';
import { LatestReposSection } from './LatestReposSection';

import {
  UserPageContainer,
  UserProfileSectionContainer,
  ContentContainer,
} from './style';

export function User() {
  return (
    <UserPageContainer>
      <Header />

      <main>
        <UserProfileSectionContainer>
          <UserProfile />
        </UserProfileSectionContainer>

        <ContentContainer>
          <WelcomeSection />
          <WantToDoSection />
          <LatestReposSection />
        </ContentContainer>
      </main>
    </UserPageContainer>
  )
}