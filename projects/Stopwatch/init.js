class StopWatch {
    
    constructor() {
        this.isRunning = false;
        this.hours   = "00";
        this.minutes = "00";
        this.seconds = "00";
        this.startTime =  null;
        this.endTime =  null;
        this.secondsElapsed = 0;
    }
    
    updateTime(){
        this.secondsElapsed += 1;
        if(this.secondsElapsed >= 86400)
            this.secondsElapsed = 0;
        this.seconds = ('0' + this.secondsElapsed%60).slice(-2);
        this.minutes = ('0' + Number.parseInt(this.secondsElapsed/60)).slice(-2);
        this.hours = ('0' + Number.parseInt(this.secondsElapsed/3600)).slice(-2);

        document.getElementById("hours").innerHTML = this.hours;
        document.getElementById("minutes").innerHTML = this.minutes;
        document.getElementById("seconds").innerHTML = this.seconds;
    }

    /*
    //To implement both buttons functionality.
    start_stop() {
        
    }
    */

    start(){
        if (this.startTime == null)
            this.startTime = new Date();
        if (this.isRunning) {
            console.log("Already runnings");
        } else {
            document.getElementById("stop").innerHTML = "Stop";
        }
        this.isRunning = true;
    }

    stop(){
        if (!this.isRunning) {
            this.secondsElapsed = -1;
            this.updateTime();
            document.getElementById("stop").innerHTML = "Stop";
            return;
        }
        this.isRunning = false;
        document.getElementById("stop").innerHTML = "Reset";
    }

    addLap(){
        alert("Adding lap");
    }    
}

let watch = new StopWatch();
let interval = null;
document.getElementById("start").onclick = function(){
    if(!watch.isRunning) {
        watch.start();
        interval = setInterval(watch.updateTime.bind(watch),1000);
    } else {
        console.log("Already running");
    }
};
document.getElementById("stop").onclick = function(){
    watch.stop();
    clearInterval(interval);
};
document.getElementById("addLap").onclick = function(){
    watch.addLap();
};