const square = (number) => number*number;
console.log(square(3))

const calCentury = (number) => Math.ceil(number/100);
console.log(calCentury(2019))

const cutString = (string) => {
    if(string.length>10){
       let newString = string.slice(0,10)
       console.log(newString,'...')
    }else(
        console.log(string)
    )
    
}
cutString("LuongHoangNhatHieu")

const capitalFirstLetter = (string) => {
    let newString = string[0].toUpperCase()+string.slice(1)
    console.log(newString)
}
capitalFirstLetter("luongHoangNhatHieu")

const Min = (arr) => {
    console.log(Math.min(...arr)) 
}
Min([1,2,3,4,5,0])

const sortName = (list) =>{
    console.log(list.sort())
}
sortName(["Cody", "Rey", "BiVilly", "Key", "Davis"])