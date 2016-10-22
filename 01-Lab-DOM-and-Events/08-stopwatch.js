function stopwatch() {
    let time, intervalId;
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', function () {
        time = -1;
        incrementTime();
        intervalId = setInterval(incrementTime, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    });

    stopBtn.addEventListener('click', function () {
        clearInterval(intervalId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    });

    function incrementTime() {
        time++;
        document.getElementById('time').textContent =
            ('0' + Math.trunc(time / 60)).slice(-2)
            + ':'
            + ('0' + (time % 60)).slice(-2);
    }
}