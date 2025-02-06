const getELE = (id) => {
    return document.getElementById(id)
}

const employeeList = new EmployeeList()
const validation = new Validation()
let oldEmployeeList = []
let indexOld = null
const setLocalStorage = () => {
    localStorage.setItem("employeeList",JSON.stringify(employeeList.list))
}

const getLocalStorage = () => {
    valueLocalStorage = localStorage.getItem("employeeList")
    if (valueLocalStorage != null){
        let list = JSON.parse(valueLocalStorage)
        employeeList.list = list
        oldEmployeeList=[...list]
        console.log(oldEmployeeList)
    }
    showEmployee(employeeList.list)
}


const checkVal = (name,age,position,department,role) =>{
    let isVal = true
    isVal = validation.isEmty(name);
    isVal &= validation.isEmty(age);
    isVal &= validation.isEmty(position) ;
    isVal &= validation.isEmty(department);
    isVal &= validation.isEmty(role);
    if(!isVal){
        alert("Nhap thong tin day du")
    }
    return isVal
}

const addEmployee = () => {
    
    let name = getELE("name").value;
    let age = getELE("age").value;
    let position = getELE("position").value;
    let department = getELE("department").value;
    let role = getELE("role").value;
    let isVal = checkVal(name,age,position,department,role)
    
    if(isVal){
        let employee = new Employee(name,age,position,department,role)
        employeeList.addEmployee(employee)
        oldEmployeeList.push(employee)
        resetEmployeeList()
        setLocalStorage()
        showEmployee(employeeList.list)
        console.log("addOldE: ",oldEmployeeList)
        console.log("addE: ",employeeList.list)
    }  
}

const resetEmployeeList = () => {
    employeeList.list = [...oldEmployeeList]
}

const showEmployee = (employeeList) => {
    content = ""
    employeeList.map((item,index)=>{
        content +=`
        <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.position}</td>
            <td>${item.department}</td>
            <td>${item.role}</td>
            <td>
              <button onclick="editEmployee('${item.name}')">Edit</button>
              <button onclick="deleteEmployee('${item.name}')">Delete</button>
            </td>
          </tr>
        `
    } )
getELE("employeeList").innerHTML = content
}

const editEmployee = (name) =>{
    indexOld = findIndexOldList(name,oldEmployeeList) 
    getELE('addButton').style.display ='none';
    getELE('updateButton').style.display = 'block'
    
    let index = employeeList.findIndex(name)
    let employee = employeeList.list[index]

    getELE("name").value = employee.name;
    getELE("age").value = employee.age;
    getELE("position").value = employee.position;
    getELE("department").value = employee.department;
    getELE("role").value = employee.role;
}

const updateEmployee = () => {
    
    let name = getELE("name").value;
    let age = getELE("age").value;
    let position = getELE("position").value;
    let department = getELE("department").value;
    let role = getELE("role").value;

    let employee = new Employee(name,age,position,department,role)
    employeeList.updateEmployee(employee)
    oldEmployeeList[indexOld] = employee
    resetEmployeeList()
    setLocalStorage()
    showEmployee(employeeList.list)

    getELE('addButton').style.display ='block'
    getELE('updateButton').style.display = 'none'
    console.log('e:', employeeList.list)
    console.log('old', oldEmployeeList)
}

const deleteEmployee = (name) => {
    indexOld = findIndexOldList(name,oldEmployeeList)
    employeeList.deleteEmployee(name)
    oldEmployeeList.splice(indexOld,1)
    resetEmployeeList()
    setLocalStorage()
    showEmployee(employeeList.list)  
}


const searchEmployee = () => {
    let content = getELE("searchInput").value
    console.log(content)
    let searchResult = employeeList.searchEmployee(content,employeeList.list)
    showEmployee(searchResult)
}


const sortByName = () => { 
    let list = employeeList.sortByName()
    showEmployee(list)
    console.log("After sort E: ", employeeList.list)
    console.log("After sort oldE: ", oldEmployeeList) 
}

const findIndexOldList = (name,list) => {
    let index = list.findIndex((item,index)=> name === item.name)
    return index
}

getLocalStorage();