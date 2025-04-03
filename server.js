const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send-feedback', (req, res) => {
    const feedback = req.body.feedback;
    if (feedback) {
        // Speichern Sie das Feedback in einer Datei oder einer Datenbank
        console.log('Feedback erhalten:', feedback);
        res.send('Feedback erhalten. Vielen Dank!');
    } else {
        res.status(400).send('Kein Feedback erhalten.');
    }
});

app.listen(3000, () => {
    console.log('Server läuft auf http://localhost:3000');
}); 