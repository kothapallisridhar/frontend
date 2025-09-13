import React, { Component } from 'react'
import { PostsTwo } from './components/PostsTwo';

export default class AppC extends Component {

  constructor() {
    super();
    this.state = {
        isPosts: false
    }
  }  

//   componentWillMount() {
//     console.log("componentWillMount");
//     //this.setState({isPosts: !this.state.isPosts})
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   shouldComponentUpdate() {
//     console.log("componentShouldUpdate");
//     return true;
//   }
//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//     return true;
//   }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }
  render() {
    return (
      <div>
        {this.state.isPosts && <PostsTwo/>}
        <button onClick={()=>this.setState({isPosts:!this.state.isPosts})}>Show/Hide Posts</button>
      </div>
    )
  }
}
