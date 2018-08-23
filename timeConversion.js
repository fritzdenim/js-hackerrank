function timeConversion(s) {
    console.log(s);
    let time = s.split(":"),
        hours = +time[0],
        minutes = +time[1],
        seconds = parseInt(time[2]),
        isAm = (s.substr(s.length-2)=="AM") ? true : false;

    if (isAm) {
        hours = hours;
        if (hours==12) {
            hours = 0;
        }
    } else if(!isAm && hours==12) {
        hours = hours;
    } else {
        hours = hours + 12;
    }

    hours = (hours < 10) ? "0"+hours : hours;
    minutes = (minutes < 10) ? "0"+minutes : minutes;
    seconds = (seconds < 10) ? "0"+seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;

    // console.log(hours, minutes, seconds);
}

// let answer = timeConversion("07:05:45PM");
let answer = timeConversion("06:40:03AM");
console.log(answer);