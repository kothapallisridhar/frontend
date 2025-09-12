import React, { Component } from 'react'
import HeaderClass from './HeaderClass'
import BodyClass from './BodyClass'
import FooterClass from './FooterClass'

export default class LayoutClass extends Component {
  render() {
    return (
      <div>
        <HeaderClass id={this.props.id} name={this.props.name} desig={this.props.desig}/>
        <BodyClass  id={this.props.id} name={this.props.name} desig={this.props.desig}/>
        <FooterClass  id={this.props.id} name={this.props.name} desig={this.props.desig}/>
      </div>
    )
  }
}
