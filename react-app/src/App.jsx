import './App.css'
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'


function App(props) {

  console.dir(props)

  return (
    <div className='app'>
      <Greet/>
      <Welcome/>
    </div>
  )
}

export default App
