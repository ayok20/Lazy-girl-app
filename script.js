// 🔄 Workouts & Buttons
const workouts = [
  "5-Min Morning Stretch",
  "3-Min TikTok Dance",
  "Couch Leg Lifts",
  "Lazy Yoga Flow",
  "Bedtime Wind-down"
];

const affirmations = [
  "You’re glowing AND growing! 💫",
  "One stretch at a time, queen 👑",
  "You got this, hot girl! 💖",
  "Stretch now, slay later 💅🏾",
  "You’re not lazy, you're energy-efficient 😌",
  "Even slow progress is progress 🐢✨",
  "Slay today, rest later 😘"
];

// 🔗 Selecting elements
const shuffleBtn = document.querySelector(".shuffle");
const startBtn = document.querySelector(".start");
const workoutTitle = document.querySelector(".workout-title");
const affirmationText = document.getElementById("affirmation-text");
const timerDisplay = document.querySelector(".timer-display");

// 🔁 Shuffle Workout & Affirmation
shuffleBtn.addEventListener("click", () => {
  const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
  workoutTitle.textContent = randomWorkout;

  const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  affirmationText.textContent = randomAffirmation;
});

// 🔁 Load Affirmation on App Start
window.addEventListener("load", () => {
  const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  affirmationText.textContent = randomAffirmation;
});

// 🕒 Timer Logic
let countdown;
startBtn.addEventListener("click", () => {
  clearInterval(countdown);
  let timeLeft = 300;

  countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `⏱️ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "🎉 You did it, queen!";
   
// LET'S GOOOOOO CONFETTI TIME!
    confetti({ 
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
    });
  }
    timeLeft--;
  }, 1000);
});

