class StopWatch {
    
    constructor() {
        this.isRunning = false;
        this.hours       = "00";
        this.minutes     = "00";
        this.seconds     = "00";
        this.deciseconds = 0;
        this.startTime   = null;
        this.endTime     = null;
        this.secondsElapsed = 0;
        this.lapCounter  = 0;
        this.time        = "";
    }
    
    updateTime(){
        this.deciseconds += 1;
        if(this.deciseconds %10 == 0){
            this.secondsElapsed += 1;
            this.deciseconds = 0;
        }
        if(this.secondsElapsed >= 86400)
            this.secondsElapsed = 0;

        this.formatTime();

        document.getElementById("hours").innerHTML = this.hours;
        document.getElementById("minutes").innerHTML = this.minutes;
        document.getElementById("seconds").innerHTML = this.seconds;
        document.getElementById("deciseconds").innerHTML = this.deciseconds;
    }

    formatTime() {
        this.seconds = ('0' + Number.parseInt(this.secondsElapsed%60)).slice(-2);
        this.minutes = ('0' + Number.parseInt(this.secondsElapsed/60)).slice(-2);
        this.hours = ('0' + Number.parseInt(this.secondsElapsed/3600)).slice(-2);
        this.time = this.hours + ":" + this.minutes + ":" + this.seconds + "." + this.deciseconds;
    }

    //To implement both buttons functionality.
    toggle_start_stop() {
        if (this.startTime == null) {
            this.startTime = new Date();
            this.isRunning = true;
        }

        if (this.isRunning) {
            this.isRunning = false;
            document.getElementById("start").innerHTML = "Pause";
            document.getElementById("start").classList.toggle("active");
            $("#reset").show();
            $("#addLap").show();
        } else {
            this.isRunning = true;
            document.getElementById("start").innerHTML = "Start";
            document.getElementById("start").classList.toggle("active");
            $("#addLap").hide();
        }
    }

    reset(){
        if(!this.isRunning)
            this.toggle_start_stop();
        this.lapCounter = 0;
        this.secondsElapsed = -1;
        this.deciseconds = -1;
        this.updateTime();
        let lapList = document.getElementById("lapList");
        while(lapList.firstChild){
            lapList.removeChild(lapList.firstChild);
        }
        $("#reset").hide();
    }

    addLap(){
        let lap = "" + ++this.lapCounter;
        let text = lap.padStart(4,' ') + " - " + this.time;
        let tag = document.createElement("p");
        tag.classList.add("lap");
        tag.innerHTML = text;
        document.getElementById("lapList").appendChild(tag);
    }    
}


let watch = new StopWatch();
let interval = null;
document.getElementById("start").onclick = function(){
    watch.toggle_start_stop();
    if(!watch.isRunning) {
        interval = setInterval(watch.updateTime.bind(watch),100);
    } else {
        clearInterval(interval);
    }
    
};

document.getElementById("reset").onclick = function(){
    clearInterval(interval);
    watch.reset();
}

document.getElementById("addLap").onclick = function(){
    watch.addLap();
};


jQuery(document).ready(function($){
    $("#reset").hide();
    $("#addLap").hide();
});