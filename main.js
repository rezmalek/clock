const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')
function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();
    var secondsDegrees = ((seconds / 60) * 360) + 90; // turn seconds into degrees. 90 is related to the 90 deg rotation in css
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    var hoursDegrees = ((hours / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // our function need to run every second