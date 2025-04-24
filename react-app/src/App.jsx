import './App.css'
import { Greet } from './components/Greet'


function App(props) {

  console.dir(props)

  return (
    <div className='app'>
      <Greet/>
    </div>
  )
}

export default App
