import React from 'react';
import SignIn from './signIn';
import SignUp from './signUp';


function LoginPage() {
  return (
    <div className="loginPage">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default LoginPage;
