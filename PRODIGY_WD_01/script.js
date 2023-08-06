const start = document.querySelector(".start");
start.addEventListener("click",startBtn);
const lap = document.querySelector(".lap").addEventListener("click",lapBtn);
const reset = document.querySelector(".reset").addEventListener("click",resetBtn);
const lapList = document.querySelector(".ol"); 

var min ,sec ,ms, startTimer;
min = sec = ms = 0+"0" ;
var numberOfLap = 1;

function startBtn(){
    console.log("start");
    start.classList.add("active");
    
    startTimer = setInterval(()=>{
        ms++;
        ms = ms < 10 ? "0"+ms : ms;

        if(ms == 100){
            sec++;
            sec = sec < 10 ? "0"+sec : sec;
            ms = 0 + "0";
        }
        if(sec == 60){

        }
        putValue();
        },10);    
    }

function resetBtn(){
    console.log("reset");   
    ms = sec = min = 0+"0";
    putValue();
    clearInterval(startTimer);
}

function lapBtn(){
    console.log("lap");
    const list = document.createElement("li");
    list.classList.add('link');
    list.classList.remove('active');
    list.innerText = "# "+numberOfLap +" : "+ min +" : "+ sec + " : "+ ms ;
    lapList.appendChild(list);
    numberOfLap++;
}

function putValue(){
    document.querySelector("#ms").innerText = ms;
    document.querySelector("#sec").innerText = sec;
}