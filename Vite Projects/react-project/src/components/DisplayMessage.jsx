import React, { Component } from 'react'

export default class DisplayMessage extends Component {
  componentDidUpdate(prevProps,prevState){
    const prevMessage = prevProps.message
    console.log('component con')
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    console.log('.............')
    if(prevMessage !== this.props.message){
      alert('have change')
    }
  }
  render() {
    return (
      <div>
        <h1>Display: {this.props.message}  </h1>
        <button className="btn btn-success" onClick={()=>this.props.handDisplay()}>Dislay</button>
      </div>
    )
  }
}
