function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let startTimerBtn = $('#start-timer')
                        .click(startTimer); // .on('click', startTimer);
    let stopTimerBtn = $('#stop-timer')
                        .click(stopTimer);  // .on('click', stopTimer);
    let time = 0;
    let isIncrementing = false;
    let timerInterval;

    function startTimer() {
        if (!isIncrementing) {
            timerInterval = setInterval(incrementTime, 1000);
            isIncrementing = true;
        }
    }

    function stopTimer() {
        clearInterval(timerInterval);
        isIncrementing = false;
    }

    function incrementTime() {
        time++;
        let hoursText = ('0' + Math.trunc(time / 3600)).slice(-2);
        let minutesText = ('0' + Math.trunc((time % 3600) / 60)).slice(-2);
        let secondsText = ('0' + (time % 60)).slice(-2);
        hours.text(hoursText);
        minutes.text(minutesText);
        seconds.text(secondsText);
    }
}