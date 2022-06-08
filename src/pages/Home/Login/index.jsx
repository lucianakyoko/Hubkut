import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../../../services/client';
import { context } from '../../../context';

import developer from '../../../assets/images/developer.svg';
import {
  LoginWrapper,
  FormWrapper,
  Form
} from './style';

export function Login() {
  const nav = useNavigate();
  const ctx = useContext(context);
  const [loginValue, setLoginValue] = useState('');

  const getUserData = event => {
    event.preventDefault();

    client.get(`/${loginValue}`)
      .then(response => {
        ctx.setUserData(response.data);
        nav('user');
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }

  return(
    <LoginWrapper>
      <img src={developer} alt="ilustração de um humano com computador" />

      <FormWrapper>
        <p>Acesse o <span>hubkut</span> com seu usuário do Github</p>
        <Form>
          <input 
            type="text"
            placeholder='Digite seu usuário'
            value={loginValue}
            onChange={event => setLoginValue(event.target.value)}
          />
          <button onClick={getUserData}>Login</button>
        </Form>
      </FormWrapper>
    </LoginWrapper>
  );
}