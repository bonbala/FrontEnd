const totalTime = 5*60
let remindTime = totalTime
let countDown
let isCount = false
const startBtn = document.getElementById("start")
const pauseBtn = document.getElementById("pause")
const restartBtn = document.getElementById("restart")

const minutesDisplay = document.getElementById("minute")
const secondsDisplay = document.getElementById("second")

const showTimer = () => {
    const minutes = Math.floor(remindTime/60)
    const seconds = remindTime%60 === 0 ? '00' :remindTime%60

    minutesDisplay.innerHTML = minutes
    secondsDisplay.innerHTML = seconds
}

const x = 6%2;
const y = x? "one" : "two"
console.log(y)
console.log(x)

console.log(X.Y)

const start  = () =>{
    if(!isCount){
       
        isCount = true
        countDown = setInterval(()=>{
        remindTime--
        
        if(remindTime<=0){
            clearInterval(countDown)
        }
        
        console.log(remindTime)
        showTimer()
    
    },1000)
    }
}

const pause  = () =>{
    console.log(remindTime)
    clearInterval(countDown)
    isCount = false
}

const restart  = () =>{

    clearInterval(countDown)
    remindTime = totalTime
    isCount = false
    showTimer()
}
restartBtn.addEventListener("click",restart)
pauseBtn.addEventListener("click",pause)
startBtn.addEventListener("click",start)

