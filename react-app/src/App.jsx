import './App.css'
import User from './User'
import UserTwo from './UserTwo'

// function displayMessage() {
//   alert("Hello")
// }

function App(props) {
  console.dir(props)
  let users = [{id: 24, name: 'Alen', age: 23, place: 'Munich'},
    {id: 25, name: 'Glen', age: 24, place: 'Leipzig'},
    {id: 26, name: 'Ben', age: 27, place: 'Bremen'}
  ]

  function displayMessage(num, e) {
    alert("button clicked! " + num)
    console.log(e.target)
    console.dir(e.target)
  }

  return (
    <>
    <h2 style={{display: 'flex', gap: 20, color: 'orange'}}>{props.children}</h2>
      {users.map(user => {
        return <User key={user.id} id={user.id} name={user.name} age={user.age} place={user.place}/>
      })}
      <button onClick={(e) => displayMessage(10, e)}>Click</button>
      <input type="text" onKeyUp={(e) => displayMessage(10, e)}/>
      {/* <UserTwo name='Messi' age='38'/> */}
    </>
  )
}

export default App
