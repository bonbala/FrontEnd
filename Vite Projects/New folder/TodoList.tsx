import React, { useState } from 'react'
import './style.css'
import { ITask } from './TodoList.i'

const TodoList = () => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [input, setInput] = useState<string>('')
    const [priority, setPriority] = useState<string>('')

    const AddTask = () => {
        if (input.trim() === '') {
            alert('Vui long chon')
            return
        };

        const newTask: ITask = {
            id: Date.now(),
            text: input,
            complete: false,
            priority
        }
        setTasks([...tasks, newTask])
        setInput('')
        setPriority('low')
    }

    const handleToggle = (id: number) => {
        const taskList : ITask[] = [...tasks]
        const newTaskList : ITask[] = taskList.map((item) => item.id === id ? {...item, complete : !item.complete} : item)
        setTasks(newTaskList)

    }

    const handleDelete = (id: number) => {
        const taskList : ITask[] = [...tasks]
        const newTaskList : ITask[] = taskList.filter((item)=> item.id !== id)
        setTasks(newTaskList)
    }

    const handleClearComplete = () => {
        const taskList : ITask[] = [...tasks]
        const newTaskList : ITask[] = taskList.map((item)=> item.complete === true ? {...item, complete : !item.complete} : item)
        setTasks(newTaskList)
    }



    return (
        <div>
            <h1>To-Do List</h1>
            <div className='input-container'>
                <input type='text' id='taskInput' placeholder='Add a task...' onChange={(e) => setInput(e.target.value)} value={input} />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="default">priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button onClick={AddTask}>Add</button>
                <button onClick={handleClearComplete} style={{backgroundColor:'green'}}>Clear Complete</button>
            </div>
            <ul id='taskList'>
                {tasks.map((item, index) => (<li>
                    <span onClick={() => handleToggle(item.id)} className={`${item.complete ? 'complete' : ''}`}>{item.text}</span>
                    <strong style={{ color: 'orange' }}>{item.priority}</strong>
                    <button style={{ backgroundColor: 'red' }} onClick={()=>handleDelete(item.id)}>Delete</button>
                </li>))}

            </ul>
        </div>
    )
}

export default TodoList
