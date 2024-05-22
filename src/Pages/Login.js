import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import React, { useRef } from "react";
import {FaTwitter} from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";
import {app} from '../Firebase'
function Login() {
    const emailRef = useRef()
  const passwordRef = useRef()

  const navigate = useNavigate()
  function signin() {
    const email = emailRef.current.value
    const password =  passwordRef.current.value


    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("successfull")
    // ...
    navigate('/Tweets')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  }
  return (
    <div className="LoginPage">
      <div className="img"></div>
      <div className="login">
      <FaTwitter className="twt"/>
        <input type="email" id="email" ref={emailRef} placeholder="Enter your Email Address" />
        <input
          type="password"
          id="password"
          ref={passwordRef}
          placeholder="Enter your password"
        />
        <input  type="button" id="login" onClick={signin} value="Log In" />
        <div className="create">
          <p>Don't have an Account?</p>
          <Link to='/Registration'>Create</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
