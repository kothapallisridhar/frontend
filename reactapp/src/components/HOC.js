import React from 'react'
import { Login } from './Login'

export const HOC = (Component) => {
  return (
    class extends React.Component {
        state = {
            auth: false,
            uname: "Sridhar",
            upwd: "Sridhar",
        }
        render() {
            const authHandler=() => {
                this.setState({ auth: !this.state.auth });
            };
            return (
                <>
                {this.state.auth ? <Component name={this.state.uname} authHandler={authHandler} /> : <Login authHandler={authHandler} uname={this.state.uname} upwd={this.state.upwd}/>}
                </>
            )
        }
    }
  )
}
