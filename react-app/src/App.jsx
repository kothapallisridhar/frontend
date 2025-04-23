import './App.css'
import User from './User'
import UserTwo from './UserTwo'

function App() {

  let users = [{id: 24, name: 'Alen', age: 23, place: 'Munich'},
    {id: 25, name: 'Glen', age: 24, place: 'Leipzig'},
    {id: 26, name: 'Ben', age: 27, place: 'Bremen'}
  ]

  return (
    <>
      {users.map(user => {
        return <User key={user.id} id={user.id} name={user.name} age={user.age} place={user.place}/>
      })}
      {/* <UserTwo name='Messi' age='38'/> */}
    </>
  )
}

export default App
