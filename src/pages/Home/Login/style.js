import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { flexColCenterGap } from '../../../styles/mixins';

export const LoginWrapper = styled.div`
  padding: 1.5rem 6.4rem 3.5rem 6.4rem;
  background-color: ${colors.secondary200};
  border-radius: .8rem;

  ${flexColCenterGap(3.2)};

  @media screen and (min-width: 1000px) {
    padding: 1.4rem 7.5rem 6rem 7.5rem;
  }
`;

export const FormWrapper = styled.div`
  width: 20.9rem;

  ${flexColCenterGap(2.3)};

  p {
    color: ${colors.secondary700};
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.7rem;

    span {
      font-weight: 700;
    }
  }
`;

export const Form = styled.form`
  width: 20.9rem;

  ${flexColCenterGap(1.6)};

  input {
    width: 100%;
    padding: 1.3rem 1.6rem;
    border-radius: .8rem;
    border: 1px solid ${colors.secondary500};
  }

  button {
    padding: 1.3rem 8.75rem;
    background-color: ${colors.primary500};
    border: 1px solid ${colors.primary500};
    border-radius: .8rem;
    
    color: ${colors.secondary100};
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.4rem;
    
    transition: all .4s ease;
    &:hover {
      cursor: pointer;
      background-color: ${colors.primary400};
      border: 1px solid ${colors.primary400};
    }
  }
`