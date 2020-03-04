import React, { useState } from 'react';
import './Login.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/CustomButton';

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = evt => {
    evt.preventDefault();

    if (userName === 'Luke Skywalker' && password === '19BBY') {
      window.location.href = `${window.location.href}planets `;

      setUserName('');
      setPassword('');
    } else {
      alert('User Name or password is not correct');
      setUserName('');
      setPassword('');
    }
  };
  return (
    <div className='sign-in'>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          value={userName}
          required
          label='User Name'
          handleChange={e => setUserName(e.target.value)}
        />

        <FormInput
          type='password'
          value={password}
          label='password'
          handleChange={e => setPassword(e.target.value)}
        />
        <div className='buttons'>
          <CustomButton type='submit'>Login</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
