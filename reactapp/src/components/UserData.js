import React from 'react'

export const UserData = ({userdata}) => {
  return (
    <div>
      <h1>User Details</h1>
      {console.log(userdata)}
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Password</th>
            <th>Mobile No</th>
            <th>Email Id</th>
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
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
