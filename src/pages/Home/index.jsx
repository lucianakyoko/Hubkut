import { Hero } from './Hero';
import { Login } from './Login';
import { Footer } from './Footer';

import { HomeContainer } from './style';

export function Home() {
  return(
    <HomeContainer>
      <main>
        <Hero />
        <Login />
      </main>
      <Footer />
    </HomeContainer>
  )
}