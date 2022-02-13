class StopWatch {
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