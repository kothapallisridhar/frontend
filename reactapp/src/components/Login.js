import React, { useRef, useState } from 'react'
import './Login.css'

export const Login = ({authHandler, uname, upwd}) => {
  const [errorMsg, setErrorMsg] = useState("");  
  const userRef = useRef();
  const pwdRef = useRef();
  const onSubmitHandler = () => {
    if(userRef.current.value === uname && pwdRef.current.value === upwd) {
        authHandler();
    } else {
        setErrorMsg("Please check Username and Password!");
    }
  }
    return (
    <div className='container'>
        <h1>Login Page</h1>
        <div className='form-group'>
            <label>Username </label>
            <input type='text' ref={userRef}></input>
        </div>    
        <div className='form-group'>
            <label>Password </label>
            <input type='password' ref={pwdRef}></input>
        </div>
        <div>
            <span id='error'>{errorMsg}</span>
        </div>
        <div>
        <button className='button-group' onClick={onSubmitHandler}>Login</button>
        </div>
    </div>
  )
}
