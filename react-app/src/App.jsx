import './App.css'
import { Greet } from './components/Greet'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'


function App(props) {

  console.dir(props)

  return (
    <div className='app'>
      <Counter/>
      <Greet name='Ben'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Clark'>
        <button>Click</button>
        </Greet>
      <Welcome name='Welt'/>
      <Message/>
    </div>
  )
}

export default App
