let eventDate = new Date(2024, 0, 1);

let daysView = document.querySelector('#days-count');
let hoursView = document.querySelector('#hours-count');
let minutesView = document.querySelector('#minutes-count');
let secondsView = document.querySelector('#seconds-count');

function changeTime() {
    let diffTime = Math.round((eventDate - new Date()) / 1000);

    let days = Math.floor(diffTime / 86400);
    diffTime %= 86400;
    let hours = Math.floor(diffTime / 3600);
    diffTime %= 3600;
    let minutes = Math.floor(diffTime / 60);
    diffTime %= 60;
    let seconds = diffTime;

    daysView.textContent = days;
    hoursView.textContent = hours;
    minutesView.textContent = minutes;
    secondsView.textContent = seconds;
}

changeTime();
setInterval(changeTime, 1000);