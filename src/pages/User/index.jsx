import { Header } from "../../components/Header";
import { UserProfile } from "../../components/UserProfile";
import { WelcomeSection } from './WelcomeSection';

import {
  UserPageContainer,
  UserProfileSectionContainer
} from './style';

export function User() {
  return (
    <UserPageContainer>
      <Header />

      <main>
        <UserProfileSectionContainer>
          <UserProfile />
        </UserProfileSectionContainer>

        <div>
          <WelcomeSection />
        </div>
      </main>
    </UserPageContainer>
  )
}