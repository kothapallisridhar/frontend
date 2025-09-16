import React from 'react'
import { Login } from './Login'

export const HOC = (Component) => {
  return (
    class extends React.Component {
        state = {
            auth: true,
            name: "Sridhar",
        }
        render() {
            return (
                <>
                {this.state.auth ? <Component name={this.state.name}/> : <Login/>}
                </>
            )
        }
    }
  )
}
