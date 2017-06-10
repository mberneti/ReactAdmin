// let deadline = '2015-12-31';
// let deadline = '31/12/2015';
// let deadline = 'December 31 2015';
// let deadline = 'December 31 2015 23:59:59 GMT+0200';
// let timeInMinutes = 10;
// let currentTime = Date.parse(new Date());
// let deadline = new Date(currentTime + timeInMinutes*60*1000);
let endtime = 0;
let timeinterval = null;
let _callback=null;

function getTimeRemaining() {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function updateClock() {
    let t = getTimeRemaining();
    _callback(t);
    //   clock.innerHTML = 'days: ' + t.days + '<br>' +
    //                     'hours: '+ t.hours + '<br>' +
    //                     'minutes: ' + t.minutes + '<br>' +
    //                     'seconds: ' + t.seconds;
    if (t.total <= 0) {
        console.log(t.total);
        clearInterval(timeinterval);
    }
}


export function getTimerMin(min) {
    let t = getTimeRemaining(endtime);
    // clock.innerHTML = 'days: ' + t.days + '<br>' +
    //     'hours: ' + t.hours + '<br>' +
    //     'minutes: ' + t.minutes + '<br>' +
    //     'seconds: ' + t.seconds;
    if (t.total <= 0) {
        console.log(t.total);
        clearInterval(timeinterval);
    }
}

export function initTimer(min, callback) {
    _callback=callback;
    let currentTime = Date.parse(new Date());
    endtime = new Date(currentTime + min * 60 * 1000);

    updateClock(); // run function once at first to avoid delay
    if(timeinterval)
        clearInterval(timeinterval);
    timeinterval = setInterval(updateClock, 1000);

}
