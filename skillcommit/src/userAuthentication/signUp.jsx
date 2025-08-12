import { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

    const SignUp = () => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');

      const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          alert('User created successfully');
        } catch (error) {
          console.log(error);
        }
      };

      return (
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleCreateUser}>
            <div>
              {/* <label>Name</label> */}
              <TextField
                id="outlined-basic" label="Name" variant="standard"
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              {/* <label htmlFor='email'>Email</label> */}
              <TextField
                id="outlined-basic" label="Email" variant="standard"
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              {/* <label htmlFor='password'>Password</label> */}
              <TextField
                id="outlined-basic" label="Password" variant="standard"
                type='password'
                // id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              {/* <label htmlFor='confirmPassword'>
                Confirm Password
              </label> */}
              <TextField
                id="outlined-basic" label="Confirm Password" variant="standard"
                type='password'
                // id='confirmPassword'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button variant="contained" type="submit">Register</Button>
            {/* <button type='submit'>Register</button> */}
          </form>
        </div>
      );
    };

    export default SignUp;