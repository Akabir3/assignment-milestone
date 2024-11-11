// Function to play audio
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play(); // Play the audio file associated with the given ID
}


// Form validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            event.preventDefault(); // Prevents form submission if fields are empty
        }
    });
});