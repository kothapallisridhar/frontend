import React from 'react'

class UserTwo extends React.Component {

    render() {
        return (
            <>
              <h1>Name: {this.props.name}</h1>
              <h2>Age: {this.props.age}</h2>
            </>
        )
    }
}

export default UserTwo;