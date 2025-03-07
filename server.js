require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3512;

// Middleware to parse JSON body
app.use(express.json());

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Email route for handling contact form submissions
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Configure Nodemailer
        let transporter = nodemailer.createTransport({
            service: 'Gmail', // Use your preferred email service (or SMTP settings)
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER, // Your email to receive messages
            subject: `New Contact Form Submission from ${name}`,
            text: `Message from: ${name} (${email})\n\n${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        });

        res.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: 'Email sending failed.' });
    }
});

// Handle React routing: return all other requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
