import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const LatestReposSectionWrapper = styled.section`
  padding: 2rem 2.4rem;
  background-color: ${colors.secondary100};
  border-radius: .8rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    color: ${colors.secondary800};
    font-size: 1.8rem;
    font-weight: 400;
  }

  ul {
    padding: 1.5rem;
    background-color: ${colors.primary100};
    border-radius: .8rem;

    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1000px) {
    h3 {
      font-size: 2rem;
    }
  }
`