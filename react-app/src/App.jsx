import './App.css'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'


function App(props) {

  console.dir(props)

  return (
    <div className='app'>
      <NameList/>
      {/* <UserGreeting/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
    </div>
  )
}

export default App
