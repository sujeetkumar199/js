function updateClockAndGreeting() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const clock = document.getElementById('clock');
  const greeting = document.getElementById('greeting');

  // Set clock
  clock.textContent = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;

  // Set greeting based on time
  let message = '';
  if (hours >= 5 && hours < 12) {
    message = '🌅 Good Morning, Sujeet! Have a nice day!';
  } else if (hours >= 12 && hours < 17) {
    message = '☀️ Good Afternoon, Sujeet!';
  } else if (hours >= 17 && hours < 21) {
    message = '🌇 Good Evening, Sujeet!';
  } else {
    message = '🌙 Good Night, Sujeet!';
  }

  greeting.textContent = message;
}

setInterval(updateClockAndGreeting, 1000);
updateClockAndGreeting();
