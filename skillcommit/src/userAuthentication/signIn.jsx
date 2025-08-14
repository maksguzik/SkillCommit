import { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LoginPageStyle.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <TextField
            id="outlined-basic" label="Email" variant="standard"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic" label="Password" variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" type="submit">Sign In</Button>
      </form>
    </>
  );
};

export default SignIn;