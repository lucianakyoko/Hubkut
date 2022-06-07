import styled from "styled-components";
import { colors } from '../../styles/colors';
import { flexColCenterGap } from '../../styles/mixins';

export const HomeContainer = styled.div`
  padding: 3.8rem 1.5rem;

  ${flexColCenterGap(3)};
  align-items: unset;
  background-color: ${colors.primary100};
  
  main {
    ${flexColCenterGap(3)};
    align-items: unset;
  }

  @media screen and (min-width: 1000px) {
    padding: 9rem 12.8rem;
    
    main {
      flex-direction: row;
      justify-content: space-between;
      gap: 1.2rem;
    }
  }
`