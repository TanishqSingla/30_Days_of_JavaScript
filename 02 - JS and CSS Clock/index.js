const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; //why +90?, Well to compensate the offset

  const min = now.getMinutes();
  const minDegrees = (min / 60) * 360 + 90;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;

  if (seconds >= 59) {
    secondHand.style.transform = `rotate(${secondsDegrees - 1}deg)`;
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  if (mins >= 59) {
    minHand.style.transform = `rotate(${minsDegrees - 1}deg)`;
    minHand.style.transition = "none";
  } else {
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
  }
  //minHand.style.transform = `rotate(${minsDegrees}deg)`;

  if (hours >= 59) {
    hourHand.style.transform = `rotate(${hoursDegrees - 1}deg)`;
    hourHand.style.transition = "none";
  } else {
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }
}

setInterval(setDate, 1000);
