import { 
  FollowItemWrapper
} from './style';

export function FollowItem({name, img}) {
  return(
    <FollowItemWrapper>
      <img src={img} alt="" />
      <span>{name}</span>
    </FollowItemWrapper>
  )
}