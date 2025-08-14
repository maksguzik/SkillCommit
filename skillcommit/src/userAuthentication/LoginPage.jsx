import React from 'react';
import SignIn from './signIn';
import SignUp from './signUp';
import {useState} from 'react';

function LoginPage() {

  const [toggleSignIn, setToggleSignIn] = useState(true);

  const handleToggle = () => {
    setToggleSignIn(!toggleSignIn);
  }; 


  return (
    <div className="loginPage">
      {toggleSignIn ? 
      (
        <div className='signInUp'>
          <SignIn />
          <div onClick={()=>handleToggle()}>No account? Sign up</div>
        </div>
      ):
      (
        <div className='signInUp'>
          <SignUp />
          <div onClick={()=>handleToggle()}>Already have an account? Sign in</div>
        </div>
    )} 
    </div>
  );
}

export default LoginPage;
