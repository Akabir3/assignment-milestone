const express = require('express'); // Import express framework
const bodyParser = require('body-parser'); // Import body-parser for handling form data

const app = express();
const PORT = 3000; // Set server port

// Middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, JS, images) from the root directory (no "public" folder)
app.use(express.static(__dirname));  // Serve files directly from the root

// Handle form submissions via POST request
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});