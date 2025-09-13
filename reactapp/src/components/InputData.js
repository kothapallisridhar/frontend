import React, {useRef, useState} from 'react'

export const InputData = () => {
  const [error, setError] = useState(false);
  const userNameRef = useRef();
  const passwordRef = useRef();
  const emailIdRef = useRef();
  
  const saveHandler = () => {
    if(userNameRef.current.value.length < 8) {
      setError(true);
      userNameRef.current.focus();
    } else {
      setError(false);
      console.log(emailIdRef.current.value);
      console.log(passwordRef.current.value);
      console.log(userNameRef.current.value);
    }
  }
  return (
    <>
      <div>
        <label>User Name </label>
        <input type='text' ref={userNameRef}/>
        { error ? <span>{" Name should be more than 7 charcters"}</span> : ""}
      </div>
      <div>
        <label>Email </label>
        <input type='email' ref={emailIdRef}/>
      </div>
      <div>
        <label>Password </label>
        <input type='password' ref={passwordRef}/>
      </div>
      <div>
        <button onClick={saveHandler}>Show User Data</button>
      </div>
    </>
  )
}
