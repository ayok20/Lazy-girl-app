const workouts = [
  "5-Minute Morning Stretch",
  "Wall Sit Challenge",
  "Lazy Bedtime Yoga",
  "Seated Arm Circles",
  "Leg Raises on the Couch"
];

const affirmations = [
  "You're glowing and growing!",
  "You got this, hot girl!",
  "Slay at your own pace 💅🏽",
  "Your small steps matter 💖",
  "Progress over perfection ✨"
];

const timerDisplay = document.querySelector('.timer-display');
const shuffleBtn = document.querySelector('.shuffle');
const startBtn = document.querySelector('.start');
const workoutTitle = document.querySelector('.workout-title');
const affirmationText = document.getElementById('affirmation-text');

shuffleBtn.addEventListener('click', () => {
  const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
  const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  workoutTitle.textContent = randomWorkout;
  affirmationText.textContent = randomAffirmation;
});

startBtn.addEventListener('click', startTimer);

function startTimer() {
  let time = 5 * 60;
  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `⏱️ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(interval);
      timerDisplay.textContent = "🎉 You did it!";
      confetti();
    }
  }, 1000);
}

function saveJournal() {
  const journalEntry = document.getElementById('journal').value;
  localStorage.setItem('lazyGirlJournal', journalEntry);
  document.getElementById('save-message').textContent = "Saved! ✅";
}

// Load saved entry on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedEntry = localStorage.getItem('lazyGirlJournal');
  if (savedEntry) {
    document.getElementById('journal').value = savedEntry;
  }
});

let waterCount = localStorage.getItem('lazyGirlWater') 
  ? parseInt(localStorage.getItem('lazyGirlWater')) 
  : 0;

document.getElementById('water-count').textContent = waterCount;

function addWater() {
  waterCount++;
  document.getElementById('water-count').textContent = waterCount;
  localStorage.setItem('lazyGirlWater', waterCount);
}

function resetWater() {
  waterCount = 0;
  document.getElementById('water-count').textContent = waterCount;
  localStorage.setItem('lazyGirlWater', waterCount);
}

function closeWelcome() {
  document.getElementById('welcome-overlay').style.display = 'none';
}

const modeToggle = document.getElementById('modeToggle');

// Load saved mode
window.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('lazyGirlDarkMode');
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    modeToggle.checked = true;
  }
});

// Toggle switch logic
modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('lazyGirlDarkMode', 'enabled');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('lazyGirlDarkMode', 'disabled');
  }
});

// ⛔ Prevent multiple timers
let timerRunning = false;

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;

  let time = 5 * 60;
  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `⏱️ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(interval);
      timerDisplay.textContent = "🎉 You did it!";
      confetti();
      timerRunning = false;
    }
  }, 1000);
}

// 🕒 Auto-close welcome screen after 4s
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('welcome-overlay').style.display = 'none';
  }, 4000);
});
