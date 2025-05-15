// terminal.js

const text = [
  "Hey there! 👋",
  "Welcome to my portfolio.",
  "Loading profile...",
  "Access granted ✔",
];

const terminalText = document.getElementById("terminal-text");
const terminalScreen = document.getElementById("terminal-screen");
const enterText = document.querySelector(".enter-text");

let lineIndex = 0;
let charIndex = 0;
let currentLine = "";
let isTyping = true;

// Create cursor span
const cursor = document.createElement("span");
cursor.classList.add("cursor");
terminalText.appendChild(cursor);

function typeLine() {
  if (lineIndex < text.length) {
    currentLine = text[lineIndex];
    if (charIndex < currentLine.length) {
      terminalText.insertBefore(document.createTextNode(currentLine.charAt(charIndex)), cursor);
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      terminalText.insertBefore(document.createElement("br"), cursor);
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 500);
    }
  } else {
    // Done typing
    isTyping = false;
    enterText.style.opacity = 1;
    document.body.addEventListener("click", hideTerminalOnce);
  }
}

// Hide terminal and reveal main content
function hideTerminalOnce() {
  if (!isTyping) {
    terminalScreen.style.display = "none";
    document.body.removeEventListener("click", hideTerminalOnce);
  }
}

window.onload = typeLine;
