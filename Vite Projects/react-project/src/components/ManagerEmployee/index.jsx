import React, { Component } from "react";
import '../ManagerEmployee/style.scss'
import FormComponent from "./FormComponent";

import InfosCard from "./InfosCard";
import RankingBoardComponent from "./RankingBoardComponent";


import { Badge, HStack, List, Flex, Button, Box  } from "@chakra-ui/react"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"
import { Avatar } from "@/components/ui/avatar"
import { LuTrophy } from "react-icons/lu"
import { LoremIpsum } from "react-lorem-ipsum"

export default class ManagerEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeList: [],
      bestEmloyees: [],
      formData: {
        name: '',
        email: '',
        phone: '',
        address: '', 
      }
    };
  }

  handleAddEmployee = (formData) => {
    this.setState((prevState)=>({
      employeeList: [...prevState.employeeList, formData]
    }))
  }

  handleUpdateEmployee = (formData) => {
    const index = this.state.employeeList.findIndex((item)=>item.id === formData.id)
    let newList = [...this.state.employeeList]
    newList[index] = formData
    this.setState({employeeList : newList})
  }

  handleAddFavorite = (id) => {
    const index = this.state.employeeList.findIndex((item)=>item.id === id)
    this.setState((prevState)=>({
      bestEmloyees: [... prevState.bestEmloyees, this.state.employeeList[index]]
    }))

  }
  handleDeleteFavorite = (id) => {
    const index = this.state.employeeList.findIndex((item)=>item.id === id)
    if(index >= 0){
      const newEmpolyee = [...this.state.bestEmloyees] 
      newEmpolyee.splice(index,1)
      this.setState({bestEmloyees: newEmpolyee})
    }
    
  }
  handleEditForm = (id) => {
    const index = this.state.employeeList.findIndex((item)=>item.id === id)
    if(index >= 0){
      const employee = this.state.employeeList[index]
      this.setState({formData: employee})

    }
  }
  

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          this.setState({ employeeList: data.slice(0,8) });
        }
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <>
        <Flex justifyContent='space-around'>
          <FormComponent handleAddEmployee={this.handleAddEmployee} formData={this.state.formData} handleUpdateEmployee={this.handleUpdateEmployee}/>
          <RankingBoardComponent bestEmloyees={this.state.bestEmloyees} handleDeleteFavorite={this.handleDeleteFavorite} />
        </Flex>

        <Flex flexWrap='wrap' gap='3' justifyContent='center' className='employee-list'>
          {this.state.employeeList.map((item,index)=>{
            {return <InfosCard key={item.id} item={item} handleAddFavorite={this.handleAddFavorite} handleEditForm={this.handleEditForm}/> }
          })}
        </Flex>
      </>
    );
  }
}
