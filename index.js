const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body');
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

btnStart.addEventListener('click', start);
  let intervalID = null;

function start(){
  intervalID = setInterval(() => {
  const indexColor = randomIntegerFromInterval(0, colors.length-1);
  body.style.backgroundColor = colors[indexColor];
  }, 1000);
    if (intervalID) {
        btnStart.disabled = true;
    }
    btnStop.addEventListener('click', stop)
};

function stop(){
        clearInterval(intervalID);
        btnStart.disabled = false;
};