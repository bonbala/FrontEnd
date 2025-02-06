var employeeList = new EmployeeList()

function getELE(id){
    return document.getElementById(id)
}
function setLocalStorage(){
    localStorage.setItem("employeeList",JSON.stringify(employeeList.list))
    var conuntEmployee = employeeList.list.length
    getELE("count").innerHTML = conuntEmployee
    
}
function getLocalStotage(){
    var valueLocalStorage = localStorage.getItem("employeeList")
    employeeList.list = JSON.parse(valueLocalStorage)
    console.log(employeeList.list)
    showEmployeeList(employeeList.list)
    showEmployeeListModal(employeeList.list)
    var conuntEmployee = employeeList.list.length
    getELE("count").innerHTML = conuntEmployee
}



function showEmployeeList(employeeList){
    var content = ""
    employeeList.map((item,index)=>{
        content+=
        `
        <tr>
			<td>${item.account}</td>
			<td>${item.fullName}</td>
			<td>${item.email}</td>
			<td>${item.date}</td>
			<td>${item.position}</td>
			<td>${item.salary}</td>
			<td>${item.workTime}</td>
			<td class="d-flex">
				<button onclick="deleteEmployee('${item.account}')" class="btn btn-danger mx-1">Xoá</button>
          		<button onclick="viewEmployee('${item.account}')" class="btn btn-success mx-1">Xem</button>
			</td>
		</tr>
        `
    })
    getELE("tableDanhSach").innerHTML = content
}
function showEmployeeListModal(employeeList){
    var content = ""
    employeeList.map((item,index)=>{
        content+=
        `
        <tr>
			<td>${item.account}</td>
			<td>${item.fullName}</td>
			<td>${item.workTime}</td>
		</tr>
        `
    })
    getELE("tableDanhSachModal").innerHTML = content
}
function addEmployee(){
    account = getELE("tknv").value;
    fullName = getELE("name").value;
    email = getELE("email").value;
    password = getELE("password").value;
    date = getELE("datepicker").value;
    salary = getELE("luongCB").value;
    position = getELE("chucvu").value;
    workTime = getELE("gioLam").value;

    var employee = new Employee(
        account,
        fullName,
        email,
        password,
        date,
        salary,
        position,
        workTime
    );

    employeeList.addEmployee(employee)
    console.log(employeeList.list)
    showEmployeeList(employeeList.list)
    showEmployeeListModal(employeeList.list)
    setLocalStorage()
    getELE("form-area").reset()
    getELE("btnDong").click()
    getELE("btnCapNhat").disabled = false  
}

function deleteEmployee(account){
    employeeList.deleteEmployee(account)
    console.log(employeeList.list)
    setLocalStorage()
    showEmployeeList(employeeList.list)
    showEmployeeListModal(employeeList.list)
}

function viewEmployee(account) {
    var employee = employeeList.viewEmployee(account);

    getELE("tknv").disabled = true
    getELE("tknv").value = employee.account;
    getELE("name").value = employee.fullName;
    getELE("email").value = employee.email;
    getELE("password").value = employee.password;
    getELE("datepicker").value = employee.date;
    getELE("luongCB").value = employee.salary;
    getELE("chucvu").value = employee.position;
    getELE("gioLam").value = employee.workTime;

    getELE("btnThemNV").disabled = true;
    document.querySelector(".modal").classList.add("show");
    document.querySelector(".modal").style.display = "block";

    getELE("btnDong").addEventListener("click",function(){
        getELE("tknv").disabled = false
        getELE("btnThemNV").disabled = false
        document.querySelector(".modal").classList.remove("show");
        document.querySelector(".modal").style.display = "none"
        getELE("form-area").reset()
      })
}

function updateEmloyee(){
    account = getELE("tknv").value;
    fullName = getELE("name").value;
    email = getELE("email").value;
    password = getELE("password").value;
    date = getELE("datepicker").value;
    salary = getELE("luongCB").value;
    position = getELE("chucvu").value;
    workTime = getELE("gioLam").value;

    var employee = new Employee(
        account,
        fullName,
        email,
        password,
        date,
        salary,
        position,
        workTime
    );

    employeeList.updateEmployee(employee)
    showEmployeeList(employeeList.list)
    showEmployeeListModal(employeeList.list)
    setLocalStorage()
}

function searchEmployee(){
    searchValue = getELE("searchName").value
    searchEmployeeList = employeeList.searchEmployee(searchValue)
    showEmployeeList(searchEmployeeList)
    console.log(searchValue)
}
getELE("btnThemNV").addEventListener("click",addEmployee)

getLocalStotage()  

getELE("btnCapNhat").addEventListener("click", updateEmloyee)

getELE("btnThem").addEventListener("click",function(){getELE("btnCapNhat").disabled = true})
getELE("btnDong").addEventListener("click",function(){getELE("btnCapNhat").disabled = false})

getELE("btnTimNV").addEventListener("click",searchEmployee)



