import React, { Component } from "react";
import ChildClassaComponent from "./ChildClassaComponent";
import DisplayMessage from "./DisplayMessage";

export default class ClassComponent extends Component {
  // Phien ban dau tien classComponent contructor
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "Dong",
      listFruit: [
        {id: 1, name: 'Dua Hau', price: 300, count: 1},
        {id: 2, name: 'Oi', price: 100, count: 1},
        {id: 3, name: 'Cam', price: 200, count: 1},
        {id: 4, name: 'Xoai', price: 400, count: 1},
        
      ],
      listCart: [{id: 1, name: 'Dua Hau', price: 300, count: 0}],
      listUser: [],
      listUserAdded: [],
      message: 'hello',
    };
  }
  // Phien ban nang cap cua classComponent
  // state = {
  //   count: 1,
  //   name: ''
  // }
  handleAddNewCart = (item) => {
    const newListCart = [...this.state.listCart]
    const index = newListCart.findIndex(cartItem => cartItem.id === item.id)
    // console.log(index)
    // console.log(newListCart[index])
    if(index===-1){
      newListCart.push(item)    
    }
    else{
      newListCart[index].count += 1
    }

    this.setState({listCart: newListCart})
    console.log('newListCart: ',newListCart)
    
  }

  AddUser = (item)=>{
    const newListUser = [...this.state.listUserAdded]
    newListUser.push(item)
    this.setState({listUserAdded: newListUser})
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        if(data.length>0){
          this.setState({listUser : data})
        }
      })
      .catch((error) => console.log("error:", error));
  }
  componentDidUpdate(prevProps, prevState){
    const {listUserAdded} = prevState;
    // console.log('component cha')
    // console.log('prevProps', prevProps)
    // console.log('prevState', prevState)
    // console.log('.............')
    if(listUserAdded !== this.state.listUserAdded && this.state.listUserAdded.length < 5){
      alert('added success')
    }else if(listUserAdded !== this.state.listUserAdded && this.state.listUserAdded.length > 4){
      alert('added error')
    }
    
  }
  handDisplay = () =>{
    const newMessage = new Date().toLocaleDateString()
    this.setState({message: newMessage})
  }
  render() {
    console.log(this.state.listUserAdded)
    return (
      <div>
        <DisplayMessage message={this.state.message} handDisplay={this.handDisplay} ></DisplayMessage>
      </div>
    );
  }
}
