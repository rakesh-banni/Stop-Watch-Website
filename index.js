/**stop watch  */

const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");
const timeDisplay =document.querySelector("#displayTime");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let intervalId;
let secs = 0;
let hrs = 0;
let mins = 0;
let millisecs = 0;
let paused = true;

startbtn.addEventListener("click",()=>{
    if(paused){
        paused=false
        startTime = Date.now() - elapsedTime; 
        intervalId = setInterval(update, 75);
        timeDisplay.style.animationPlayState = "running"
    }
})
pausebtn.addEventListener("click",()=>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime
        clearInterval(intervalId)
        timeDisplay.style.animationPlayState = "paused"
    }
})
resetbtn.addEventListener("click",()=>{
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    secs = 0;
    hrs = 0;
    mins = 0;
    millisecs = 0;
    paused = true;
    clearInterval(intervalId)
    timeDisplay.textContent = "00:00:00:00"
    timeDisplay.style.animationPlayState = "paused"
})

function update(){
        elapsedTime = Date.now() - startTime
        millisecs = Math.floor((elapsedTime)%60)
        secs = Math.floor((elapsedTime/1000)%60)
        mins = Math.floor((elapsedTime/(1000*60))%60)
        hrs = Math.floor((elapsedTime/(1000*60*60))%60)

        millisecs = pad(millisecs)
        secs = pad(secs)
        mins = pad(mins)
        hrs = pad(hrs)
        timeDisplay.textContent = `${hrs}:${mins}:${secs}:${millisecs}`

        function pad(unit){
            return ("0"+unit).length>2 ? unit:"0"+unit
        }
}