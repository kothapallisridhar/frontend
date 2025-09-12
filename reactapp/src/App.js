import React from 'react'
import { Layout } from './components/Layout'

export const App = () => {
  const person = {
    id: 1,
    fname: "Sridhar",
    lname: "Kothapalli",
    desig: "Architect" 
  }
  return (
    <div>
      <Layout name={"Sridhar"} person={person}/>
    </div>
  )
}

export default App;

