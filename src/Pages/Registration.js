import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useRef } from 'react'
import {FaTwitter} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
function Registration() {


    const emailRef = useRef()
  const passwordRef = useRef()
  const nameRef = useRef()

  const navigate = useNavigate()
  
  function create() {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const name = nameRef.current.value



    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password, name)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(name)
    navigate('/Tweets')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
  }


  return (
    <div className='RegistrationPage'>
    <div className="img"></div>
    <div className="register">
    <FaTwitter className='twt'/>
        <input type="text" id="name" ref={nameRef} placeholder='Enter your full name' />
        <input type="email" id="email" ref={emailRef} placeholder='Enter your Email Address' />
        <input type="password" id="password" ref={passwordRef} placeholder='Enter your password' />
        <input type="button" id="register" onClick={create} value="Register" />
        <div className="account">
          <p>Already have an Account?</p>
          <Link to='/'>Log In</Link>
        </div>
    </div>
    </div>
  )
}

export default Registration