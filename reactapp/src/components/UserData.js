import React from 'react'
import './UserData.css'

export const UserData = ({userdata}) => {
  return (
    <div className='container-data'>
      <h1>User Details</h1>
      {console.log(userdata)}
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Password</th>
            <th>Mobile No</th>
            <th>Email Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map(element => {
            return (
              <tr key={element.id}>
                <td>{element.username}</td>
                <td>{element.password}</td>
                <td>{element.mobileno}</td>
                <td>{element.emailid}</td>
                <td><button>Edit</button><button>Del</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
