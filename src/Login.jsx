import { React, useState} from 'react'
import "./Login.css";
import "firebase/compat/auth";
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './slices/userSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();

    const register = () => {
        if (!firstName) {
            return alert('Please enter a first name')
        } else if (!lastName) {
            return alert('Please enter a last name')
        } else if (!email) {
            return alert('Please enter an email')
        } else if (!password) {
            return alert('Please enter a password')
        } else {
            auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: `${firstName} ${lastName}`
                })
                .then(() => {
                    dispatch(
                        login({
                        email: authUser.user.email,
                        uid: authUser.user.uid,
                        displayName: authUser.user.displayName,
                        })
                    );
                });
            }).catch((error) => alert(error));
        }
    };

  const loginToApp = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((authUser) => {
        dispatch(
            login({
            email: authUser.user.email,
            uid: authUser.user.uid,
            displayName: authUser.user.displayName,
        }));
    }).catch((error) => alert(error));
  }

  return (
    <div className='login'>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Human_brain.png" 
          alt="brain-logo" 
        />

        <h1>You are not logged in.</h1>
        <form>
            <label htmlFor="first-name">
                <input value={firstName}
                       onChange={(event)=>setFirstName(event.target.value)}
                       id="first-name" 
                       type="text" 
                       name="first-name" 
                       placeholder="First Name" 
                />
            </label>
            <br />
            <label htmlFor="last-name">
                <input value={lastName}
                       onChange={(event)=>setLastName(event.target.value)}
                       id="last-name" 
                       type="text" 
                       name="last-name" 
                       placeholder="Last Name" />
            </label>
            <br />
            <label htmlFor="email">
                <input value={email}
                       onChange={(event)=>setEmail(event.target.value)}
                       id="email" 
                       type="email" 
                       name="email" 
                       placeholder="Email"
                />
            </label>
            <br />
            <label htmlFor="pass">
                <input value={password} 
                       onChange={(event)=>setPassword(event.target.value)}
                       id="pass" 
                       type="password" 
                       name="password" 
                       placeholder="Password"
                />
            </label>
            <br />
            <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member? <button onClick={register} className="login__register">Register Now</button></p>
    </div>
  )
}

export default Login
