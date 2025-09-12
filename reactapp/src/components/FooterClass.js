import React, { Component } from 'react'

export default class FooterClass extends Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>
        <h4>ID: {this.props.id}</h4>
        <h4>Name: {this.props.name}</h4>
        <h4>Designation: {this.props.desig}</h4>
      </div>
    )
  }
}
