let todolist = new todoList();
let updateId;
let statusTask;
const getELE = (id) => {
    return document.getElementById(id)
}

const setLocalStorage = () => {
    localStorage.setItem("todoList",JSON.stringify(todolist.list))
}
const getLocalStotage = () => {
    let valueLocalStorage = localStorage.getItem("todoList")
    todolist.list = JSON.parse(valueLocalStorage)
    console.log(todolist.list)
    showToDoTaskList(todolist.list)
    showDoneTaskList(todolist.list)
}



const addTask = () => {
    let code = getELE("code").value
    let name = getELE("name").value
    let task = getELE("task").value 

    let todotask = new  todoTask(code,name,task) 
    console.log(todotask)

    todolist.addTask(todotask)

    console.log(todolist.list)
    setLocalStorage()
    showToDoTaskList(todolist.list)

    getELE("btnClose").click()
    getELE("form-area").reset()
}

const showToDoTaskList = (todolist) => {
    let content = ""
    todolist.map((item,index)=>{
        if(item.status === false){
            content+=
            `
             <tr>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.task}</td>
                <td class="d-flex justify-content-center">
                    <button onclick="deleteTask('${item.id}')" class="btn btn-danger mx-1">Delete</button>
                    <button onclick="viewTask('${item.id}')" class="btn btn-success mx-1">View</button>
                    <button onclick="completeTask('${item.id}')" class="btn btn-success mx-1">Complete</button>
                </td>
            </tr>
            `
        }
        
    })
    getELE("tableToDoList").innerHTML = content
}

const showDoneTaskList = (todolist) => {
    let content = ""
    todolist.map((item,index)=>{
        if(item.status === true){
            content+=
            `
             <tr>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.task}</td>
                <td class="d-flex justify-content-center">
                    <button onclick="deleteTask('${item.id}')" class="btn btn-danger mx-1">Delete</button>
                    <button onclick="viewTask('${item.id}')" class="btn btn-success mx-1">View</button>
                    <button onclick="incompleteTask('${item.id}')" class="btn btn-success mx-1">Incomplete</button>
                </td>
            </tr>
            `
        }
        
    })
    getELE("tableDoneList").innerHTML = content
}

const deleteTask = (id) =>{
    numberId = Number(id)
    todolist.deleteTask(numberId)
    setLocalStorage()
    showToDoTaskList(todolist.list)
    showDoneTaskList(todolist.list)
}
const viewTask = (id) =>{ 
    updateId = Number(id)
    console.log(updateId)
    let todotask = todolist.viewTask(updateId)
    console.log(todotask)
    statusTask = todotask.status
    getELE("code").disabled = true
    getELE("name").disabled = true
    getELE("code").value = todotask.code
    getELE("name").value = todotask.name
    getELE("task").value = todotask.task
    getELE("btnAdd").disabled = true

    document.querySelector(".modal").classList.add("show");
    document.querySelector(".modal").style.display = "block";

    getELE("btnClose").addEventListener("click",function(){
        getELE("code").disabled = false
        getELE("name").disabled = false
        getELE("btnAdd").disabled = false
        document.querySelector(".modal").classList.remove("show");
        document.querySelector(".modal").style.display = "none"
        getELE("form-area").reset()
      })
}
const completeTask = (id) => {
    numberId = Number(id)
    todolist.completeTask(numberId)
    // console.log(todolist.list)
    setLocalStorage()
    showToDoTaskList(todolist.list)
    showDoneTaskList(todolist.list)
}

const incompleteTask = (id) => {
    numberId = Number(id)
    todolist.incompleteTask(numberId)
    console.log(todolist.list)
    setLocalStorage()
    showToDoTaskList(todolist.list)
    showDoneTaskList(todolist.list)
}

const updateTask = () => {
    let code = getELE("code").value
    let name = getELE("name").value
    let task = getELE("task").value 

    let todotask = new  todoTask(code,name,task) 
    todotask.id = updateId
    todotask.status = statusTask
    
    todolist.updateTask(todotask)
    console.log(todotask)
    console.log(todolist.list)
    setLocalStorage()
    showToDoTaskList(todolist.list)
    showDoneTaskList(todolist.list)

    getELE("btnClose").click()

    getELE("btnClose").addEventListener("click",function(){
        getELE("code").disabled = false
        getELE("btnAdd").disabled = false
        document.querySelector(".modal").classList.remove("show");
        document.querySelector(".modal").style.display = "none"
        getELE("form-area").reset()
      })
}

getLocalStotage()
getELE("btnAdd").addEventListener("click", addTask)
getELE("btnUpdate").addEventListener("click", updateTask)
// getELE("btnAddTask").addEventListener("click", getELE("btnUpdate").disabled = true)




