const text = document.getElementById("text");
const bottle = document.getElementById("bottle");
const truthBtn = document.getElementById("truthBtn");
const dareBtn = document.getElementById("dareBtn");

let isSpinning = false;
let currentRotation = 0;
let selectedPlayer = "";

const players = ["Aarav", "Shreya", "Harshita", "Abid"];

const truths = [
"What is your biggest fear?",
"Have you ever lied to your best friend?",
"Who do you secretly like?",
"What is your most embarrassing moment?",
"Have you ever cheated in an exam?",
"What is one thing you regret?",
"Who was your first crush?",
"What is your biggest insecurity?"
];

const dares = [
"Dance for 30 seconds 😂",
"Sing a song loudly 🎤",
"Do 10 pushups 💪",
"Talk in a funny voice for 1 minute 🤪",
"Act like a monkey 🐒",
"Send a random emoji to someone 📱",
"Do your best impression of a teacher 👨‍🏫",
"Spin again and do double dare 😈"
];

bottle.addEventListener("click", () => {
if (isSpinning) return;

isSpinning = true;
text.innerText = "Spinning... 🌀";

const randomSpin = Math.floor(Math.random() * 360) + 720;
currentRotation += randomSpin;

bottle.style.transform = `rotate(${currentRotation}deg)`;

setTimeout(() => {
    const normalizedAngle = currentRotation % 360;

    let index;
    if (normalizedAngle >= 315 || normalizedAngle < 45) index = 0; // top
    else if (normalizedAngle >= 45 && normalizedAngle < 135) index = 1; // right
    else if (normalizedAngle >= 135 && normalizedAngle < 225) index = 2; // bottom
    else index = 3; // left

    selectedPlayer = players[index];

    text.innerText = `${selectedPlayer}'s turn! Choose Truth or Dare 🎯`;

    isSpinning = false;
}, 1000);

});

truthBtn.addEventListener("click", () => {
if (isSpinning || selectedPlayer === "") return;

const randomTruth = truths[Math.floor(Math.random() * truths.length)];

text.innerText = `${selectedPlayer} 🤔 Truth: ${randomTruth}`;

});

dareBtn.addEventListener("click", () => {
if (isSpinning || selectedPlayer === "") return;
const randomDare = dares[Math.floor(Math.random() * dares.length)];

text.innerText = `${selectedPlayer} 😈 Dare: ${randomDare}`;

});
