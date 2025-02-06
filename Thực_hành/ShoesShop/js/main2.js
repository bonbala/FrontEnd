const getELE = function(id){
    return document.getElementById(id)
}
const minutesDisplay = getELE("minutes")
const secondsDisplay = getELE("seconds")
const btnStart = getELE("btnStart")
const btnPause = getELE("btnPause")
const btnRestart = getELE("btnRestart")

let countDown;
let totalTime = 5*60;
let reminingTime = totalTime;
let isCount = false

const showTimer = function(){
    let minutes = Math.floor(reminingTime/60);
    let seconds = reminingTime%60 === 0 ? "00" : reminingTime%60 ;
    console.log("minutes:", minutes);
    console.log("seconds:", seconds);
    minutesDisplay.innerText = minutes;
    secondsDisplay.innerText = seconds
}


const startCoutTime = function(){
    if(!isCount){
        isCount = true
        countDown = setInterval(() => {
            reminingTime--;
            showTimer()
            if(reminingTime<=0){
                clearInterval(countDown)
            }
        }, 1000)
    };
    
}
const handlePause = function(){
    clearInterval(countDown);
    isCount = true
}
const handleRestart = function(){
    clearInterval(countDown);
    reminingTime = totalTime;
    isCount = true;
    showTimer()
}
btnStart.addEventListener("click", startCoutTime)
btnPause.addEventListener("click", handlePause)
btnRestart.addEventListener("click",handleRestart)