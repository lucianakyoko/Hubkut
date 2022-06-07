import developer from '../../../assets/images/developer.svg';
import {
  LoginWrapper,
  FormWrapper,
  Form
} from './style';

export function Login() {
  return(
    <LoginWrapper>
      <img src={developer} alt="ilustração de um humano com computador" />

      <FormWrapper>
        <p>Acesse o <span>hubkut</span> com seu usuário do Github</p>
        <Form>
          <input 
            type="text"
            placeholder='Digite seu usuário'
          />
          <button>Login</button>
        </Form>
      </FormWrapper>
    </LoginWrapper>
  );
}