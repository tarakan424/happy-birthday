const compliments = [
  "Ти неймовірна людина 💖",
  "Твоя усмішка — як сонце 🌞",
  "Ти надихаєш інших ✨",
  "Ти дуже добра і чуйна 🤗",
  "Твоя енергія заряджає 🔋",
  "Ти справжній скарб 💎",
  "Ти робиш світ кращим 🌍",
  "Ти дуже талановита 🎨",
  "Ти заслуговуєш на все найкраще 🌈",
  "люблю тебе моє сонечко💘"
];

let index = 0;

function showCompliment() {
  if (index < compliments.length) {
    document.getElementById("compliment").textContent = compliments[index];

    // Зміна фону поступово до рожевого
    const pinkLevel = Math.floor((index + 1) * 25); // 0 → 250
    document.body.style.backgroundColor = `rgb(${pinkLevel}, 0, ${pinkLevel})`;

    index++;
    setTimeout(showCompliment, 5000);
  } else {
    document.getElementById("compliment").style.display = "none";
    document.getElementById("birthday").style.display = "block";
    startRoses();
  }
}

function startRoses() {
  setInterval(() => {
    const rose = document.createElement("div");
    rose.className = "rose";
    rose.textContent = "🌹";
    rose.style.left = Math.random() * 100 + "vw";
    document.getElementById("roses").appendChild(rose);

    // Видалити троянду після анімації
    setTimeout(() => rose.remove(), 5000);
  }, 300);
}

// Почати показ через 2 секунди
setTimeout(showCompliment, 2000);