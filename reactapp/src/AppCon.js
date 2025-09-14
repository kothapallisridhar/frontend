import React, { useState } from 'react'
import './appcon.css'
import { UnControlled } from './components/UnControlled';

export const AppCon = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usererror, setUserError] = useState(true);

  const usernameChangeHandler = (e) => {
    setUserName(e.target.value);
    if(username.length > 5 && username.length <= 12) {
        setUserError(false);
    } else {
        setUserError(true);
    }
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }
  const submitHandler = () => {
    alert("User Name: " + username + ", Password: " + password);
  }
  return (
    <>
    <div className='container'>
        <div className='form-group'>
        <label>User Name</label>
        <input type='text' onChange={usernameChangeHandler}/>
        <span>{usererror && "User Name must be 6 to 12 characters"}</span>
        </div>
        <div className='form-group'>
        <label>Password</label>
        <input type='password' onChange={passwordChangeHandler}/>
        </div>
        <div className='button-group'>
            <button onClick={submitHandler}>Login</button>
        </div>
    </div>
     <UnControlled/>
     </>
  )
}
