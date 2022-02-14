class StopWatch {
    
    constructor() {
        this.hours   = "00";
        this.minutes = "00";
        this.seconds = "00";
        this.startTime =  null;
        this.endTime =  null;
    }
    
    updateTime(){
        this.endTime = new Date();
        let difference = this.endTime - this.startTime;    
        difference = Number.parseInt(difference/1000);
        this.seconds = ('0' + difference%60).slice(-2);
        this.minutes = ('0' + Number.parseInt(difference/60)).slice(-2);
        this.hours = ('0' + Number.parseInt(difference/3600)).slice(-2);

        document.getElementById("hours").innerHTML = this.hours;
        document.getElementById("minutes").innerHTML = this.minutes;
        document.getElementById("seconds").innerHTML = this.seconds;
    }

    start(){
        this.startTime = new Date();
    }

    stop(){
        alert("stopping");
    }

    addLap(){
        alert("Adding lap");
    }    
}

let watch = new StopWatch();
let interval = null;
document.getElementById("start").onclick = function(){
    watch.start();
    interval = setInterval(watch.updateTime.bind(watch),1000);
};
document.getElementById("stop").onclick = function(){
    clearInterval(interval);
};
document.getElementById("addLap").onclick = function(){
    watch.addLap();
};



/*class StopWatch {
    constructor() {
        this.startTime = 0.0;
        this.isActive = false;
        this.swTimer = 0.0;
    }

    start = function() {
        if (!this.isActive) {
            this.startTime = new Date();
            this.isActive = true;
        } 
        else
            console.log("Aready started");
    }

    stop = function() {
        if (this.isActive) {
            this.isActive = false;
            this.swTimer += this.calculateDifference();
        }
        else
            console.log("Aready stoped");
    }

    reset = function() {
        this.swTimer = 0.0;
        this.isActive = false;
        sw = document.getElementById("time");
        sw.innerHTML = Number.parseFloat(0).toFixed(1);
        return this.swTimer;
    }

    calculateDifference = function() {
        let endTime = new Date();
        let difference = endTime - this.startTime;
        difference /= 1000;
        return difference;
    }
};

function updateTime(watch) {
    sw = document.getElementById("time");
    sw.innerHTML = Number.parseFloat(watch.calculateDifference() + watch.swTimer).toFixed(1);
}

function getInterval() {
    return setInterval(updateTime, 100, watch);
}

let watch = new StopWatch();

sw = document.getElementById("time");
sw.innerHTML = watch.reset();
let interval;

function startWatch() {
    watch.start();
    interval = getInterval();
}

function stopWatch() {
    watch.stop();
    clearInterval(interval);
}

function resetWatch() {
    stopWatch();
    watch.reset();
    startWatch();
}
*/