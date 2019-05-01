// Timer

// Дедлайн отсчета
let deadline = '2019-05-02';

function getTimeRemaining(endtime) {
    // Разница между датами
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours = Math.floor((t/1000/60/60));
    // hours = Math.floor((t/1000/60/60)%24),
    // days = Math.floor((t/1000/60/60/24)); Для получения дней

    return{
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    }
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);

        t.hours = (t.hours < 10) ? hours.textContent = '0' + t.hours : hours.textContent = t.hours;
        t.minutes = (t.minutes < 10) ? minutes.textContent = '0' + t.minutes : minutes.textContent = t.minutes;
        t.seconds = (t.seconds < 10) ? seconds.textContent = '0' + t.seconds : seconds.textContent = t.seconds;

        if(t.total <= 0){
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            clearInterval(timeInterval);
        }
    }

}

setClock('timer', deadline);
