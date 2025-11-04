// Haunted House Adventure - script.js
// Images are served from Unsplash source queries (royalty-free). This satisfies "images from web".
const story = {
  start: {
    text: "It's midnight. You stand before an old, creaking mansion. Do you dare to enter?",
    image: "https://img.freepik.com/premium-photo/spooky-haunted-house-mansion-halloween-background-with-full-moon-generated-by-ai_942243-8305.jpg",
    choices: [
      { text: "Enter the house", next: "foyer" },
      { text: "Walk away", next: "leaveEnd" }
    ]
  },

  foyer: {
    text: "The door slams behind you! You see a dusty hallway and a flickering candle.",
    image: "https://tse4.mm.bing.net/th/id/OIP.et5rVTqKl8w2ZsUP2CtbhgHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
    choices: [
      { text: "Pick up the candle", next: "candle" },
      { text: "Walk down the hallway", next: "hallway" }
    ]
  },

  candle: {
    text: "As you lift the candle, a whisper says, 'The basement holds the truth.'",
    image: "https://img.freepik.com/premium-photo/dark-room-with-candles-it_893012-128575.jpg",
    choices: [
      { text: "Go to the basement", next: "basement" },
      { text: "Ignore the voice and go upstairs", next: "upstairs" }
    ]
  },

  hallway: {
    text: "A cold wind blows. A door creaks open on its own. Inside, you see a shadow moving.",
    image: "https://img.freepik.com/premium-photo/mysterious-haunted-mansion-hallway_813661-2920.jpg",
    choices: [
      { text: "Enter the room", next: "ghostEnd" },
      { text: "Run to the exit", next: "escapeEnd" }
    ]
  },

  basement: {
    text: "You descend into darkness. You find an old chest glowing faintly.",
    image: "https://img.freepik.com/premium-photo/treasure-chest-dark_1001749-4553.jpg",
    choices: [
      { text: "Open the chest", next: "treasureEnd" },
      { text: "Leave the basement", next: "trapEnd" }
    ]
  },

  upstairs: {
    text: "You hear footsteps behind you. Suddenly, the lights go out.",
    image: "https://t3.ftcdn.net/jpg/05/50/90/36/360_F_550903658_37pxXgusGNQrYJAwmE0uKtrPfulFyNVF.jpg",
    choices: [
      { text: "Hide in a room", next: "safeEnd" },
      { text: "Turn and face it", next: "curseEnd" }
    ]
  },

  // --- ENDINGS (8 total) ---
  leaveEnd: { text: "You leave safely... but wonder forever what was inside. 🕯️", image: "https://source.unsplash.com/1200x800/?moonlit-house,graveyard", choices: [] },
  ghostEnd: { text: "A ghostly figure screams! You vanish into thin air. 👻", image: "https://source.unsplash.com/1200x800/?ghost,apparition", choices: [] },
  escapeEnd: { text: "You burst through the front door and escape! 🏃‍♂️💨", image: "https://source.unsplash.com/1200x800/?running-out,escape", choices: [] },
  treasureEnd: { text: "The chest opens to reveal endless gold! You're rich! 💰", image: "https://source.unsplash.com/1200x800/?treasure,chest,gold", choices: [] },
  trapEnd: { text: "The door locks behind you... you’re trapped forever. 🔒", image: "https://source.unsplash.com/1200x800/?locked-door,dark-room", choices: [] },
  safeEnd: { text: "You find a hidden passage leading you safely outside. 🌕", image: "https://source.unsplash.com/1200x800/?moonlit-garden,secret-garden", choices: [] },
  curseEnd: { text: "You meet the ghost of the mansion's owner — and join them. 🩸", image: "https://source.unsplash.com/1200x800/?haunted-portrait,ghost-owner", choices: [] }
};

let currentStage = "start";

function startGame() {
  currentStage = "start";
  updatePage();
}

function updatePage() {
  const stage = story[currentStage];
  document.getElementById("story").textContent = stage.text;
  const img = document.getElementById("storyImage");
  img.src = stage.image;
  img.alt = stage.text;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  if (stage.choices.length === 0) {
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Adventure";
    restartBtn.addEventListener("click", startGame);
    choicesDiv.appendChild(restartBtn);
  } else {
    stage.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice.text;
      btn.addEventListener("click", () => {
        currentStage = choice.next;
        updatePage();
      });
      choicesDiv.appendChild(btn);
    });
  }
}

window.onload = startGame;
