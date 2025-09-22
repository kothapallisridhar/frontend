import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { UserData } from './components/UserData';
import './App.css'

const App = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const mobilenoRef = useRef();
  const emailidRef = useRef();

  const [data, setData] = useState([]);
  const dataPostHandler = () => {
    let userdata = [...data];
    userdata.push({
      id: uuidv4(),
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      mobileno: mobilenoRef.current.value,
      emailid: emailidRef.current.value
    })
    setData(userdata);
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    mobilenoRef.current.value = "";
    emailidRef.current.value = "";
    
  }
  return (
    <div>
      {/* {console.log(uuidv4())}
      {console.log(data)} */}
      <div className='container'>
        <div className='form-group'>
          <label>User Name</label>
          <input type='text' ref={usernameRef}/>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' ref={passwordRef}/>
        </div>
        <div className='form-group'>
          <label>Mobile No</label>
          <input type='number' ref={mobilenoRef}/>
        </div>
        <div className='form-group'>
          <label>Email Id</label>
          <input type='email' ref={emailidRef}/>
        </div>
        <div className='btn-group'>
          <button onClick={dataPostHandler}>Add User</button>
        </div>
      </div>
      <div>
          <UserData userdata={data}/>
        </div>
    </div>
  )
}

export default App