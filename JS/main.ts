let age:number = 22
let isHieu:boolean = true
let stringArr:string[] = ['hieu','hieu']
let numberArr:number[]=[1,2,3,4,5,6]
let arr:(string | number | boolean)[] = [1,'hieu', 2, true]
let objectArr:{name: string, age: number} = {
    name: 'Hieu',
    age: 22
}

objectArr.age = 23

interface IUser {
    name: string,
    age: number,
    id: string,
}

type User = {
    name: string,
    age: string,
    id: string,
}

let newUser: IUser = {
    name: 'hieu',
    age: 12,
    id: '123'
}

interface IEmployee extends IUser {
    job: string;
    calc: ()=> void
}

let employee: IEmployee = {
    name: 'hieu',
    age: 23,
    id: '123',
    job: 'IT',
    calc: function () {
        console.log('hieu')
    },
}

employee.calc()

let newList: [string | number, ...Array<string | number>] = [1, 'hieu', 2, 'trung']

function sum(a:number, b:number){
    return a + b
}

sum(2,3)