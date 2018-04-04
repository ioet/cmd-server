import express from 'express'
import path from "path";
import bodyParser from "body-parser";
import passport from 'passport';
import dotenv from "dotenv"

import auth from "./routes/auth";
import restaurant_public from "./routes/restaurant_public";
import restaurant_private from "./routes/restaurant_private";

dotenv.config()

require("./config/passport")

const app = express();
const authbyrole = (role) => passport.authenticate(role, { session: false })

// parser
app.use(bodyParser.json());
// routes
app.use("/api/auth", auth);
app.use("/api/private/restaurant", authbyrole(process.env.SA_ROLE), restaurant_private)
app.use("/api/public/restaurant", restaurant_public)

app.listen(process.env.APP_PORT, () => console.log("Running on localhost: " + process.env.APP_PORT))
