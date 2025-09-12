import React, { Component } from 'react'
import LayoutClass from './components/LayoutClass'

export default class AppClass extends Component {

    state = {
        id: 8,
        name: "Sridhar",
        desig: "Architect",
    }
  render() {
    // const id = 1;
    // const name = "Sridhar";
    // const desig = "Architect";

    return (
      <div>
        <LayoutClass id={this.state.id} name={this.state.name} desig={this.state.desig}/>
      </div>
    )
  }
}
