import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { flexColCenterGap, flexRowCenterGap} from '../../../styles/mixins';

export const WantToDoSectionWrapper = styled.div`
  padding: 2.4rem 0 2rem 1.6rem;

  background-color: ${colors.secondary100};
  border-radius: .8rem;

  ${flexColCenterGap(2)};
  align-items: flex-start;

  h3 {
    color: ${colors.secondary800};
    font-size: 1.8rem;
    font-weight: 400;
  }

  @media screen and (min-width: 1000px) {
    padding: 2.4rem 0 2.4rem 2.4rem;
    h3 {
      font-size: 2rem;
    }
  }
`;

export const ActivityListWrapper = styled.ul`
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: auto;

  li {
    flex: none;
    order: 0;
    flex-grow: 0;

    background-color: ${colors.primary100};
    border-radius: .8rem;
    padding: .9rem 1.2rem;

    color: ${colors.primary500};
    font-size: 1.2rem;
    line-height: 1.4rem;

    transition: all .4s ease;

    &:hover {
      cursor: pointer;
      color: ${colors.secondary100};
      background-color: ${colors.primary300};
    }
  }

  @media screen and (min-width: 1000px) {
    li {
      font-size: 1.4rem;
    }
  }
`