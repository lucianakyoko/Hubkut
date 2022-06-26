import { 
  FollowItemWrapper
} from './style';

export function FollowItem({name, img}) {
  return(
    <FollowItemWrapper>
      <img src={img} alt={`Imagem de perfil do(a) ${name}`} />
      <span>{name}</span>
    </FollowItemWrapper>
  )
}