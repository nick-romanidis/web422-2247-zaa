const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJwt = require("passport-jwt");
//const cors = require("cors");
const dataService = require("./data-service");
const app = express();
app.use(express.json());

// Set up CORS
//app.use(cors);

// JSON Web Token Setup
let ExtractJwt = passportJwt.ExtractJwt;
let JwtStrategy = passportJwt.Strategy;

// Configure its options
let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: '&0y7$noP#5rt99&GB%Pz7j2b1vkzaB0RKs%^N^0zOP89NT04mPuaM!&G8cbNZOtH',
};

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log("Payload was received: " + jwt_payload);

    if (jwt_payload) {
        // The following will ensure that all routes using 
        // passport.authenticate have a req.user._id, req.user.userName, req.user.fullName & req.user.role values 
        // that matches the request payload data
        next(null, {
            _id: jwt_payload._id,
            userName: jwt_payload.userName,
            fullName: jwt_payload.fullName,
            role: jwt_payload.role
        });

    } else {
        next(null, false);
    }
});

// Tell passport to use the strategy we just made.
passport.use(strategy);

// Add the passport middleware to express.
app.use(passport.initialize());

// Route to return the vehicle data.
app.get("/api/vehicles", passport.authenticate('jwt', { session: false }), (req, res) => {
    dataService.getAllVehicles()
        .then(data => {
            res.json(data);
        }).catch(() => {
            res.status(500).end();
        })
});

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "user" && password === "pass") {
        let payload = {
            _id: "123",
            userName: "user",
            fullName: "fullName",
            role: "admin"
        };

        let token = jwt.sign(payload, jwtOptions.secretOrKey);

        res.json({
            message: "Login Successful",
            token
        });
    }
    else {
        res.status(422).json({ "message": msg });
    }
});

// In case the user accesses a route that doesn't exist.
app.use((req, res) => {
    res.status(404).end();
});

const HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, () => {
    console.log("API listening on: " + HTTP_PORT);
});