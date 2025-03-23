let screen = document.getElementById("display");

let counterValue = 0;

screen.textContent = 0;

function increment() {
  counterValue++;
  screen.textContent = counterValue;
}

function reset() {
  counterValue = 0;
  screen.textContent = counterValue;
}

function decrement() {
  if (counterValue > 0) {
    counterValue--;
  }
  screen.textContent = counterValue;
}
