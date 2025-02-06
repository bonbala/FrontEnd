import React, { Component } from 'react'

export default class ChildClassaComponent extends Component {
  render() {
    const {item} = this.props
    const {id, name, price} = item
    return (
        <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{price}</td>
        <td><button className="btn btn-success" onClick={()=>this.props.handleAddNewCart(item)}>Add</button></td>
      </tr>
    )
  }
}
