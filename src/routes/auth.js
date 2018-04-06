import express from 'express'
import User from '../models/User'
import bcrypt from "bcrypt"
import * as errors from '../errors/errors.auth'


const router = express.Router()

router.post('/login', (req, res) => {

    const { email, password } = req.body.credentials

    User.get({ email: email }, (err, user) => {

        if(err) {
            errors.errorDataBaseConnection(err, res)
            return
        }
        if(!user){
            errors.errorIncorrectEmail(res)
            return
        }
        if(user.comparePassword(password, user.password)){
            console.log("Success: User loggued in")
            res.json({ user: user.authJSON(user) });
            return
        }

        errors.errorIncorrectPassword(res)

    })

})

router.post('/register', (req, res) => {

    const { email, password } = req.body.credentials
    const role = 'registered_user'

    User.get({ email: email }, (err, user) => {
        if(err) {
            errors.errorDataBaseConnection(err, res)
            return
        }
        if(user){
            errors.errorEmailIsRegistered(res)
            return
        }
        // Hash the password
        bcrypt.hash(password, 10, (err, encryptedPassword) => {
            if(err) {
                errors.errorEncriptingPassword(err, res)
                return
            }
            // Add to database
            // Create a model instance
            var newUser = new User({
                email: email,
                password: encryptedPassword,
                role: role
            })
            // Save new user
            newUser.save()
        })
    })
})

export default router;
