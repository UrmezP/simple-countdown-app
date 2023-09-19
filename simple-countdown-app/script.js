window.addEventListener("load", function () {
  // utility methods
  const handleInput = (e) => {
    updateCounterState(e.target.value);
  };

  var counterState = 5;
  var counterInterval;

  const stopTimer = () => {
    stopButton.classList.add("hidden");
    startButton.classList.remove("hidden");
    clearInterval(counterInterval);
  };

  const handleStart = () => {
    if (counterState == 0) {
      this.alert("add input");
      return;
    }
    counterInterval = setInterval(
      () => updateCounterState(counterState - 1),
      1000
    );
    startButton.classList.add("hidden");
    stopButton.classList.remove("hidden");
  };

  const updateCounterState = (value) => {
    counterState = value;
    counter.innerHTML = value;
    if (value == 0) {
      stopTimer();
      return;
    }
  };

  // show counter
  const counter = document.getElementById("counter");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  counter.classList.add("fadeIn");

  // Start with timer set to 0
  updateCounterState(counterState);

  // Add listener to input field
  this.document
    .querySelector('input[type="number"]')
    .addEventListener("input", handleInput);

  this.document
    .querySelector("button#start")
    .addEventListener("click", handleStart);
  this.document
    .querySelector("button#stop")
    .addEventListener("click", stopTimer);
});
