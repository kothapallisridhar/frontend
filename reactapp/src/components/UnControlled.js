import React, { useRef, useState } from 'react'
import '../appcon.css'

export const UnControlled = () => {
  const [errormsg, setErrorMsg] = useState(""); 
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if(usernameRef.current.value.length > 5 && usernameRef.current.value.length <= 12) {
        setErrorMsg("");
    } else {
        setErrorMsg("User Name must be 6 to 12 characters")
    }
  }
    
  return (
    <div className='container'>
        <form onSubmit={submitHandler}>
        <div className='form-group'>
        <label>User Name</label>
        <input type='text' ref={usernameRef}/>
        <span>{errormsg && "User Name must be 6 to 12 characters"}</span>
        </div>
        <div className='form-group'>
        <label>Password</label>
        <input type='password' ref={passwordRef}/>
        </div>
        <div className='button-group'>
            <input type='submit' value="Login"/>
        </div>
        </form>
    </div>

  )
}
