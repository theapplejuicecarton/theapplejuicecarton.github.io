// Set the date we're counting down to (May 12, 2025)
const countdownDate = new Date("May 12, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the difference between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Days remaining
    const minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60)); // Minutes remaining
    const seconds = Math.floor((distance % (1000 * 60)) / 1000); // Seconds remaining

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = `You have ${days} days, ${minutes} minutes, and ${seconds} seconds until your first exam`;

    // When the countdown is over, display a "spooky" message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "⚠️ The Time Has Come... ⚠️";
        document.body.style.backgroundColor = "#bb0000"; // Change background to red when time is up
        document.body.style.color = "#fff"; // Ensure text is visible
    }
}, 1000);

