// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();

// Set up body-parser middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve files (CSS, JS, images, and audio) from the "public" folder
app.use(express.static('public'));

// Serve files from "images" and "audio" folders (if not part of public)
app.use(express.static('images'));
app.use(express.static('audio'));

// Handle form submission via POST request
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Simple server-side validation
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    // where you can add logic to save data or send emails
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Respond back to the client
    res.send('Thank you for your message!');
});

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});