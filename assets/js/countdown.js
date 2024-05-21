// Set the end time for the countdown (in milliseconds)
const endTime = new Date("2024-05-27T00:00:00").getTime(); // Example end time

// Update the countdown every second
const countdownElement = document.getElementById("countdown");
const countdown_2 = document.getElementById("countdown_2");
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;

    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format the countdown text
    const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update the countdown element
    countdownElement.textContent = countdownText;
    countdown_2.textContent = countdownText;

    // If the countdown is over, clear the interval
    if (distance <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Expired"; // Or any other text you want
        countdown_2.textContent = "Expired"; // Or any other text you want
    }
}