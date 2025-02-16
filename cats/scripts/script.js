function makeColourValue() {
  return Math.round(Math.random() * 255);
}

function setButtonColour(button, red, green, blue) {
  button.setAttribute(
    "style",
    "background-color : rgb(" + red + "," + green + "," + blue + ");"
  );
}
let buttons = document.getElementsByClassName("colourButton");
let heading = document.getElementById("colourValue");
let answerMessage = document.getElementById("answer");
let answerButton = Math.round(Math.random() * (buttons.length - 1));
let resetbutton = document.getElementById("resetButton");

function startGame() {
  answerMessage.innerHTML = "";
  let answerButton = Math.round(Math.random() * (buttons.length - 1));
  for (let i = 0; i < buttons.length; i++) {
    let red = makeColourValue();
    let green = makeColourValue();
    let blue = makeColourValue();
    setButtonColour(buttons[i], red, green, blue);
    if (i === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }

    buttons[i].addEventListener("click", function () {
      if (this === buttons[answerButton]) {
        answerMessage.innerHTML = "Correct";
      } else {
        answerMessage.innerHTML = "Wrong answer! Guess again!";
      }
    });
  }
}
startGame();
resetButton.addEventListener("click", startGame);
