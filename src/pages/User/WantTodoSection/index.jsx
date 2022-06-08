import { getActivities} from './activityList';

import {
  WantToDoSectionWrapper,
  ActivityListWrapper
} from './style';

export function WantToDoSection() {
  const activities = getActivities();

  return(
    <WantToDoSectionWrapper>
      <h3>O que você deseja fazer?</h3>

      <ActivityListWrapper>
        {activities.map(item => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ActivityListWrapper>
    </WantToDoSectionWrapper>
  )
}