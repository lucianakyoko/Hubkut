import logo from '../../../assets/images/logo.svg';
import {
  HeroWrapper,
  HeroParagraphsWrapper
} from './style';

export function Hero() {
  return(
    <HeroWrapper>
      <img src={logo} alt="Logo Hubkut" />

      <HeroParagraphsWrapper>
        <p><span>Siga</span> amigos e outros devs do seu interesse usando o botão seguir</p>
        <p><span>Conheça</span> novos devs e repositórios através da aba explorar</p>
        <p><span>Compartilhe</span> ideias e soluções em um só lugar</p>
      </HeroParagraphsWrapper>
    </HeroWrapper>
  )
}