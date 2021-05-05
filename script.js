let timeParagraph = document.getElementById(`timeParagraph`)
let startStopButton = document.getElementById(`startStopButton`)
let resetButton = document.getElementById(`resetButton`)

let running = false
let time = 0
let intervalId

startStopButton.addEventListener(`click`, startStop)
resetButton.addEventListener(`click`, reset)

function startStop() {
  if (running == false) {
    intervalId = setInterval(run, 10)
    running = true
  } else {
    clearInterval(intervalId)
    running = false
  }
}

function reset() {
  clearInterval(intervalId)
  running = false

  time = 0
  timeParagraph.innerHTML = `0.00`
}

function run() {
  time = time + 1
  timeParagraph.innerHTML = (time / 100).toFixed(2)
}
