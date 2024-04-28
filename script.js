function updateClock() {
    const now = new Date();
    
    // Digital Clock
    const digitalClock = document.getElementById('digital-clock');
    digitalClock.textContent = now.toLocaleTimeString();
  
    // Analog Clock
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
  
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;
  
    hourHand.style.transform = `rotate(${hourDeg+180}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg+180}deg)`;
    secondHand.style.transform = `rotate(${secondDeg+180}deg)`;
  }
  
  // Initial call to update the clock
  updateClock();
  
  // Update clock every second
  setInterval(updateClock, 1000);
  