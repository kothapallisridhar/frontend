import './App.css'
import { Greet } from './components/Greet'
import Hello from './components/Hello'
import Welcome from './components/Welcome'


function App(props) {

  console.dir(props)

  return (
    <div className='app'>
      <Greet name='Ben'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Clark'>
        <button>Click</button>
        </Greet>
      <Greet name='Kene'/>
      <Welcome name='Welt'/>
      <Hello/>
    </div>
  )
}

export default App
