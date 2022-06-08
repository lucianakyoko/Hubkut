import {
  SummaryItemWrapper,
} from './style';

export function Summary({label, icon, data}) {
  return(
    <SummaryItemWrapper>
      <span>{label}</span>
      <div>
        <img src={icon} alt="ícone" />
        <span>{data}</span>
      </div>
    </SummaryItemWrapper>
  )
}