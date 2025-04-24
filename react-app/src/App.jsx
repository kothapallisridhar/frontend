import './App.css'
import { Greet } from './components/Greet'
import Hello from './components/Hello'
import Welcome from './components/Welcome'


function App(props) {

  console.dir(props)

  return (
    <div className='app'>
      <Greet name='Ben'/>
      <Greet name='Clark'/>
      <Greet name='Kene'/>
      <Welcome/>
      <Hello/>
    </div>
  )
}

export default App
