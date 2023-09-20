window.addEventListener("load", function () {
  var counterState = 5;
  var counterInterval;

  // utility methods
  const handleInput = (e) => {
    updateCounterState(e.target.value);
  };

  const stopTimer = () => {
    stopButton.classList.add("hidden");
    startButton.classList.remove("hidden");
    clearInterval(counterInterval);
  };

  const handleStart = () => {
    if (counterState == 0) {
      alert("add input");
      return;
    }

    counterInterval = setInterval(() => {
      updateCounterState(counterState - 1);
      if (counterState == 0) {
        dialog.showModal();
        return;
      }
    }, 1000);
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

  const counter = document.getElementById("counter");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");

  // open/close dialog logic
  const dialog = document.querySelector("dialog");
  const closeDialog = document.querySelector("dialog button");

  closeDialog.addEventListener("click", () => {
    dialog.close();
  });

  // show counter
  counter.classList.add("fadeIn");

  // Start with timer set to 0
  updateCounterState(counterState);

  // Add listener to input field
  document
    .querySelector('input[type="number"]')
    .addEventListener("input", handleInput);

  document.querySelector("button#start").addEventListener("click", handleStart);
  document.querySelector("button#stop").addEventListener("click", stopTimer);
});
