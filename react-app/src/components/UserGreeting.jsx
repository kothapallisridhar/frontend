import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin: true
      }
    }
  render() {

    // short circuit approach
    return this.state.isLoggedin && <div>Welcome Sridhar</div>

     // ternary operator approach
    //return this.state.isLoggedin ? (<div>Welcome Sri</div>) : (<div>Welcome Guest</div>)

   
    // if(this.state.isLoggedin) {
    //     return (<div>Welcome Sri</div>)
    // } else {
    //     return (<div>Welcome Guest</div>)
    // }
    // return (
    //     <div>
    //         <div>Welcome Sri</div>
    //         <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting