import './App.css'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'


function App(props) {

  console.dir(props)

  return (
    <div className='app'>
      {/* <EventBind/> */}
      <ParentComponent/>
    </div>
  )
}

export default App
