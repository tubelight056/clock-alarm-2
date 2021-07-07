let hours=new Date().getHours();
let seconds=new Date().getUTCSeconds();
let min=new Date().getMinutes();

function Clock(){
    let hours=document.querySelector(".hours");
    let min=document.querySelector(".minutes");
    let seconds=document.querySelector(".seconds");
    let alarmtime;
    let currenttime={hours:new Date().getHours(),minutes:new Date().getMinutes(),seconds:new Date().getUTCSeconds()};
    this.start=()=>{
        currenttimecalc=setInterval(() => {
            currenttime.seconds=currenttime.seconds+1;
            if(currenttime.seconds>59){
                currenttime.seconds=00;
                currenttime.minutes=currenttime.minutes+1;
            }
            if(currenttime.minutes>59){
                currenttime.minutes=00;
                currenttime.hours=currenttime.hours+1;
            }
            if(currenttime.hours>23){
                currenttime.hours=00;
            }  
            let time=`${currenttime.hours}:${currenttime.minutes}:${currenttime.seconds}`;
            if(alarmtime && time==`${alarmtime}:0`){
                document.querySelector(".alarmpage").style.opacity=1;
            };
            hours.innerHTML=currenttime.hours;
            min.innerHTML=currenttime.minutes;
            seconds.innerHTML=currenttime.seconds;
         }, 1000);
    }
    this.time=()=>{
        this.start();
    }
    this.alarm=()=>{
        alarmtime=document.querySelector("#alarm").value;
    },
    this.alarmoff=()=>{
        document.querySelector(".alarmpage").style.opacity=0;
    }
}

let clock=new Clock();
clock.time();