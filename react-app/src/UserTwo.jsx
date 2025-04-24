import React from 'react'

class UserTwo extends React.Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <>
              <h2>Count: {this.state.counter}</h2>
              <button onClick={() => this.setState({counter: this.state.counter + 1})}>Count</button>
            </>
        )
    }
}

export default UserTwo;