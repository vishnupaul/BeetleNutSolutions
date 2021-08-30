import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AdminLogin() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = (e) => {
    e.preventDefault();
    if (email == 'vishnu@gmail.com' && password == 12345) {
      window.alert('lonin successfully');
      history.push('/adminprofile');
    } else {
      window.alert('invalid  credentials');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className='login'>
      <form method='POST' className='contact-form'>
        <div className='section-title contact-head'>
          <h2>
            Admin<span>logIn</span>
          </h2>
        </div>

        {/* <!-- form control --> */}
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            name='email'
            id='email'
            className='form-input'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        {/* <!-- form control --> */}
        <div className='form-control'>
          <lable htmlFor='password'>Password</lable>
          <input
            type='password'
            placeholder='Enter your password'
            name='password'
            id='password'
            className='form-input'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* <!-- form control --> */}
        <button type='submit' className='btn btn-form ' onClick={Login}>
          Submit
        </button>
        <div>
          <p>email ="vishnu@gmail.com" and password= 12345</p>{' '}
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
