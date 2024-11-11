const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, JS, images) from the root directory (no "public" folder)
app.use(express.static(__dirname));  // Serve files directly from the root directory

// Handle form submission via POST request
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Simple server-side validation (optional)
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    // Log the form data (this is where you can add logic to save data or send emails)
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Respond back to the client
    res.send('Thank you for your message!');
});

// Serve the HTML page when visiting the root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});