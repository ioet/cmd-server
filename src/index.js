import express from 'express'
import path from "path";
import bodyParser from "body-parser";
import passport from 'passport';
import dotenv from "dotenv"

import auth from "./routes/auth";
import restaurant_public from "./routes/restaurant_public";

dotenv.config()

const app = express();

// parser
app.use(bodyParser.json());
// routes
app.use("/api/auth", auth);
app.use("/api/public/restaurant", restaurant_public)

app.listen(process.env.APP_PORT, () => console.log("Running on localhost: " + process.env.APP_PORT))
