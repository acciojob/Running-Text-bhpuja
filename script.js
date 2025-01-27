//your JS code here. If required.
const textElement = document.getElementById('text');
const speedInput = document.getElementById('speed');

const text = "We love Programming!";
let index = 0;
let speed = 500 / speedInput.value;

function renderText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(renderText, speed);
  }
}

speedInput.addEventListener('input', () => {
  const inputValue = parseInt(speedInput.value);
  if (inputValue >= 1 && inputValue <= 10) {
    speed = 500 / inputValue;
    textElement.textContent = ""; // Reset the text
    index = 0; // Reset the index
    renderText();
  }
});

renderText(); // Initial call to render text
