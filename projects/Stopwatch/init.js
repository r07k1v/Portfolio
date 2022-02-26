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
    start() {
        if (this.startTime == null) {
            this.startTime = new Date();
        }

        this.isRunning = true;
        $("#start-button").hide("slow");
        $("#pause-button").show("slow");
        $("#reset-button").show();
        $("#addLap-button").show();
    }

    pause() {
        this.isRunning = false;
        $("#start-button").show("slow");
        $("#pause-button").hide("slow");
        $("#addLap-button").hide();
    }

    reset() {
        this.lapCounter = 0;
        this.secondsElapsed = -1;
        this.deciseconds = -1;
        this.updateTime();
        
        let lapList = document.getElementById("lapList-container");
        while(lapList.firstChild){
            lapList.removeChild(lapList.firstChild);
        }

        this.pause();
        $("#reset-button").hide();
    }

    addLap(){
        let lap = "" + ++this.lapCounter;
        let tag = document.createElement("p");
        tag.classList.add("lap");
        tag.innerHTML = lap.padStart(4,' ') + " - " + this.time;
        document.getElementById("lapList-container").appendChild(tag);
    }    
}


let watch = new StopWatch();
let interval = null;

document.getElementById("start-button").onclick = function(){
    watch.start();
    interval = setInterval(watch.updateTime.bind(watch),100);
};

document.getElementById("pause-button").onclick = function(){
    clearInterval(interval);    
    watch.pause();
};

document.getElementById("reset-button").onclick = function(){
    clearInterval(interval);
    watch.reset();
};

document.getElementById("addLap-button").onclick = function(){
    watch.addLap();
};

jQuery(document).ready(function($){
    watch.reset();
    document.getElementById("buttons-container").style.display = "flow-root";
});