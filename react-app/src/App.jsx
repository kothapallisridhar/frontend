import './App.css'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Counter from './components/Counter'
import Product from './components/Product'

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

  let prod1 = {
    id: 1,
    name: "iPhone",
    aprice: 150000,
    dprice: 120000
  }

  return (
    <div className='app'>
      <Product prodDetails={prod1}/>
      {/* <Counter/> */}
      {/* <BGColorChange/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
    </div>
  )
}

export default App
