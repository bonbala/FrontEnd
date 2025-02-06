function EmployeeList (){
    this.list = []
    this.addEmployee = function(employee){
        this.list.push(employee)
    }
    this.deleteEmployee = function(account){
        var index = this.findIndex(account)
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
    this.findIndex = function(account){
        var index = this.list.findIndex((item)=>item.account === account);
        return index;
    }
    this.viewEmployee = function(account){
        var index = this.findIndex(account)
        employee = this.list[index]
        return employee
    }
    this.updateEmployee = function(employee){
        var index = this.findIndex(employee.account)
        console.log(index)
        if(index !== -1){
            this.list[index]=employee
        }
    }


    // Chưa hiểu
    this.searchEmployee = function(searchValue){
        var newListEmployee = [];
        var lowerCase = searchValue.toLowerCase().replace(/\s+/g, '');
        var accountNormalize = lowerCase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        
        this.list.forEach((employee)=>{
            var account = employee.account.toLowerCase().replace(/\s+/g, '');
            var accountEmployeeNormalize = account.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            var result = accountEmployeeNormalize.indexOf(accountNormalize);
            if (result >= 0) {
                newListEmployee.push(employee)
            }
        })
        console.log(newListEmployee)
        return newListEmployee;
    }
}