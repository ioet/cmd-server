import express from "express"
import bcrypt from "bcrypt"
import * as errors from "../errors/errors.auth"

const router = express.Router()
var models = require('express-cassandra')

router.post('/login', (req, res) => {

    const { email, password } = req.body.credentials

    models.instance.Users.findOne({ email: email }, (err, user) => {
        if(err) {
            errors.errorDataBaseConnection(res)
            return
        }
        if(!user){
            errors.errorIncorrectEmail(res)
            return
        }
        if(user.comparePassword(password, user.password)){
            res.json({ user: user.authJSON(user) });
        }else{
            errors.errorIncorrectPassword(res)
        }
    });
})

router.post('/register', (req, res) => {

    const { email, password } = req.body.credentials

    models.instance.Users.findOne({ email: email }, (err, user) => {
        if(err) {
            console.log(err)
            errors.errorDataBaseConnection(res)
            return
        }
        if(user){
            errors.errorEmailIsRegistered(res)
            return
        }
        // Hash the password
        bcrypt.hash(password, 10, (err, encryptedPassword) => {
            if(err) {
                errors.errorEncriptingPassword(res)
                return
            }
            // Add to database
            // Create a model instance
            var newUser = new models.instance.Users({
                email: email,
                password: encryptedPassword,
                role: 'registered_user'
            });
            // Save new user
            newUser.save(function(err){
                if(err) {
                    errors.errorSavingUser(res)
                    return;
                }
                res.json({ user: "Registered user" });
            });
        });

    })
})

export default router;
