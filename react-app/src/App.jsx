import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'
import About from './components/About'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes className='routes'>
        <Route className='routes' path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App
