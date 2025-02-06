function todoList(){
    this.list = [];

    this.addTask = function(todotask){
        this.list.push(todotask)
    }
    this.deleteTask = function(id){
        let  index = this.findIndex(id)
        if(index != -1){
            this.list.splice(index,1)
        }
    }
    this.findIndex = function(id){
        let index = this.list.findIndex((item)=>item.id === id);
        return index;
    }
    this.viewTask = function(id){
        let index = this.findIndex(id)
        todotask = this.list[index]
        return todotask
    }
    this.completeTask = function(id){
        let index = this.findIndex(id)
        if(index != -1){
            this.list[index].status = true
        }
    }
    this.incompleteTask = function(id){
        let index = this.findIndex(id)
        console.log(index)
        if(index != -1){
            this.list[index].status = false
        }
    }
    this.updateTask = function(todotask){
        let index = this.findIndex(todotask.id)
        if (index != -1){
            this.list[index] = todotask
        }
    }   
}