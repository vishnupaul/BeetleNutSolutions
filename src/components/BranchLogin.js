import React from 'react';

function BranchLogin() {
  return (
    <div className='login'>
      <form method='POST' className='contact-form'>
        <div className='section-title contact-head'>
          <h2>
            branch<span> logIn</span>
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
            // value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
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
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
          />
        </div>
        {/* <!-- form control --> */}
        <button
          type='submit'
          className='btn btn-form '
          //  onClick={Login}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BranchLogin;
