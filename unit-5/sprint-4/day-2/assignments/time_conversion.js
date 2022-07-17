
const timeConversion = (time) => {

    //if time is more than 59 minutes
    if (time >= 3600000) {

        var hours = Math.floor(time / 3600000);
        time = time - 3600000 * hours;
    }

    // if time is more than 59 seconds
    if (time >= 60000) {

        var minutes = Math.floor(time / 60000);
        time = time - 60000 * minutes;
    }

    //if time is positive.
    if (time > 0) {

        var seconds = Math.floor(time / 1000);
    }

    //different types of returrn according to the singularity and plurality of time.


    ////if all three(hours, minutes and seconds) are greater than zero.

    if (hours > 0 && minutes > 0 && seconds > 0) {
        return hours + " hours " + minutes + " minutes " + seconds + " seconds";

    };


    //for exact hours

    if (hours <= 1) {
        if (hours > 0 && minutes == undefined && seconds == undefined) {
            // return hours + " hours " + 0 + " minutes " + 0 + " seconds";
            return hours + " hour";
        }
    } else {
        if (hours > 0 && minutes == undefined && seconds == undefined) {
            // return hours + " hours " + 0 + " minutes " + 0 + " seconds";
            return hours + " hours";
        }
    }

    //for hours and seconds greater than zero and for exact minutes.

    if (hours <= 1) {
        if (seconds <= 1) {
            if (hours > 0 && minutes == undefined && seconds > 0) {
                // return hours + " hours " + 0 + " minutes " + 0 + " seconds";
                return hours + " hour " + 0 + " minute " + seconds + " second";
            }
        } else {
            if (hours > 0 && minutes == undefined && seconds > 0) {
                // return hours + " hours " + 0 + " minutes " + 0 + " seconds";
                return hours + " hour " + 0 + " minute " + seconds + " seconds";
            }
        }
        x
    } else {
        if (seconds <= 1) {
            if (hours > 0 && minutes == undefined && seconds > 0) {
                // return hours + " hours " + 0 + " minutes " + 0 + " seconds";
                return hours + " hours " + 0 + " minute " + seconds + " second";
            }
        } else {
            if (hours > 0 && minutes == undefined && seconds > 0) {
                // return hours + " hours " + 0 + " minutes " + 0 + " seconds";
                return hours + " hours " + 0 + " minute " + seconds + " seconds";
            }
        }

    }


    //for hours and minutes greater than zero and exact seconds
    if (hours > 0 && minutes > 0 && seconds == undefined) {
        return hours + " hours " + minutes + " minutes";
    }

    ////for less than hours

    //for both minutes and seconds greater than zero.

    if (hours == undefined && minutes > 0 && seconds > 0) {
        return minutes + " minutes " + seconds + " seconds";
    }


    // for minutes greater than zero and exact seconds
    if (minutes <= 1) {
        if (hours == undefined && minutes > 0 && seconds == undefined) {
            return minutes + " minute";
        }
    } else {
        if (hours == undefined && minutes > 0 && seconds == undefined) {
            return minutes + " minutes";
        }
    }


    //for seconds greater than zero and exact minutes.

    if (seconds <= 1) {
        if (hours == undefined && minutes == undefined && seconds >= 0) {
            return seconds + " second";
        }

    } else {
        if (hours == undefined && minutes == undefined && seconds >= 0) {
            return seconds + " seconds";
        }

    }
}

// console.log(timeConversion(7200000))

module.exports = timeConversion;