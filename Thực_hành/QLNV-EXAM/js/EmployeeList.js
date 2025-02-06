function EmployeeList (){
    this.list = []
    this.addEmployee = (employee)=>{
        this.list.push(employee)
    }
    this.findIndex = (name)=> {
        let index = this.list.findIndex((item,index)=> name === item.name)
        return index
    }
    this.updateEmployee = (employee)=>{
        let index = this.findIndex(employee.name)
        this.list[index] = employee
    }
    this.deleteEmployee = (name)=>{
        let index = this.findIndex(name)
        this.list.splice(index,1)
    }
    this.searchEmployee = (content,list)=>{
        let emptyList = [];
        let normalContent = content.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        list.forEach((item) => {
            let normalTask = item.name.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let result = normalTask.indexOf(normalContent);
            if(result >= 0){            
                emptyList.push(item);
            }
          });
          console.log(emptyList)
          return emptyList
    }
    this.sortByName = () => {
        const newlist = this.list.sort(function(a,b){
           return a.name.localeCompare(b.name)
        })
        return newlist
    }
}