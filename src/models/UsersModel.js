import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

module.exports = {
    fields:{
        email    : "text",
        password : "text",
        role : "text"
    },
    key:["email"],
    methods: {
        comparePassword: (password, dbPassword) => {
          return bcrypt.compareSync(password, dbPassword)
        },
        authJSON: (user) => {
          const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET)
          return {
            email: user.email,
            role: user.role,
            token: token
          }
        }
    }
}
