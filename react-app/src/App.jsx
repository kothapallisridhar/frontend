import './App.css'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'

const BGColorChange = () => {
  return (
    <div className="wrapper"><h2>Background Color changer</h2>
    <input type="color"  onChange={(e) => {
          document.body.style.background = e.target.value
    }}/>
    </div>
  )
}

function App(props) {

  console.dir(props)

  return (
    <div className='app'>
      <BGColorChange/>
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
    </div>
  )
}

export default App
