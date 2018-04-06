import dynamoose from '../config/configDB'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

var Schema = dynamoose.Schema;

var user = new Schema({
    email: String,
    password: String,
    role: String
})

user.methods.comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword)
}
user.methods.authJSON = (user) => {
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET)
    return {
      email: user.email,
      role: user.role,
      token: token
    }
}

module.exports = dynamoose.model('user', user)
