const HTTP_PORT = process.env.PORT || 8080;

const path = require('path');

// Configure express.
const express = require('express');
const app = express();

// Add support for incoming JSON entities.
app.use(express.json());

// This variable will be used for persistent storage.
let colours = ['Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Fuschia'];

// Deliver the home page (for browser clients).
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// GET: Get all colours.
app.get("/api/colours", (req, res) => {
    res.json(colours);
});

// GET: Get a colour using it's ID
//      In this app the ID is simply the array index.
app.get("/api/colours/:colourId", (req, res) => {
    // Get the colour ID from the URL.
    const colourId = req.params.colourId;

    // Make sure the ID refers to a valid colour.
    if (colourId >= colours.length) {
        res.status(404).send("Colour not found.");
    }
    else {
        res.json(colours[colourId]);
    }
});

// POST: Add a new colour.
// This route expects a JSON object in the body, e.g. { "colourName": "Purple" }
app.post("/api/colours", (req, res) => {
    // Get the new colour name from the body.
    const newColour = req.body.colourName;

    // Add another colour to the array.
    colours.push(newColour);

    // Return the result as HTTP 201 since a resource was created.
    res.status(201).json({ message: `Added ${newColour} with ID ${colours.length}` });
});

// PUT: Edit existing colour.
// This route expects a JSON object in the body, e.g. { "colourName": "Purple" }
app.put("/api/colours/:colourId", (req, res) => {
    // Get the colour ID from the URL.
    const colourId = req.params.colourId;

    // Get the new colour name from the body.
    const newColour = req.body.colourName;

    // Make sure the ID refers to a valid colour.
    if (colourId >= colours.length) {
        res.status(404).send("Colour not found.");
    }
    else {
        // Replace the colour name at the specified ID (index).
        colours[colourId] = newColour;

        res.status(200).json({
            message: `Updated the colour with ID ${colourId} to ${newColour}`
        });
    }
});

// DELETE: Delete a colour.
app.delete("/api/colours/:colourId", (req, res) => {
    // Get the colour ID from the URL.
    const colourId = req.params.colourId;

    // Make sure the ID refers to a valid colour.
    if (colourId >= colours.length) {
        res.status(404).send("Colour not found.");
    }
    else {
        // Remove the colour from the array.
        colours.splice(colourId, 1);

        res.status(200).json({ message: `Deleted the colour with ID ${colourId}` });
    }
});

// URL/Resource not found (this should be at the end).
app.use((req, res) => {
    res.status(404).send('Resource not found');
});

// Start listening for requests.
app.listen(HTTP_PORT, () => {
    console.log('Ready to handle requests on port ' + HTTP_PORT);
});