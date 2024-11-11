// Function to play audio when the user clicks the speaker icon
function playAudio(audioId) {
    const audio = document.getElementById(audioId);

    // Check if the audio is paused or not
    if (audio.paused) {
        audio.currentTime = 0; // Start from the beginning
        audio.play().catch(error => {
            console.error('Error playing the audio:', error);
        });
    } else {
        audio.pause(); // Pause if the audio is already playing
    }
}

// Form validation (if necessary)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Check if all fields are filled out
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            event.preventDefault(); // Prevent form submission if fields are empty
        }
    });
});