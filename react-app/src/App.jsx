import './App.css'
import User from './User'
import UserTwo from './UserTwo'

function App() {
  return (
    <>
      <User name='Alice' age='25' place='Bangalore'/>
      <User name='Harry' age='24' place='Hyderabad'/>
      <User name='Lene' age='26' place='Chennai'/>
      <UserTwo name='Messi' age='38'/>
    </>
  )
}

export default App
