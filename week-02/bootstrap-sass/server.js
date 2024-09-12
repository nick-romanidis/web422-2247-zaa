const HTTP_PORT = process.env.PORT || 8080;

const path = require('path');

// Configure express.
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/bootstrap-demo.html"));
});

// URL/Resource not found (this should be at the end).
app.use((req, res) => {
    res.status(404).send('Resource not found');
});

// Start listening for requests.
app.listen(HTTP_PORT, () => {
    console.log('Ready to handle requests on port ' + HTTP_PORT);
});