module.exports = {
    errorDataBaseConnection: (err, res) => {
        console.log(err)
        res.status(400).json({errors: { global: "- Error from database connection." } })
    },
    errorIncorrectEmail: (res) => {
        console.log("- Error: Incorrect email")
        res.status(400).json({errors: { global: "Incorrect email." } })
    },
    errorNotFoundRestaurants: (res) => {
        console.log("- Error: Not found restaurants")
        res.status(400).json({errors: { global: "Error during retrieving the list of restaurants" } })
    },
    errorIncorrectPassword: (res) => {
        console.log("- Error: Incorrect password")
        res.status(400).json({errors: { global: "Incorrect password." } })
    },
    errorEmailIsRegistered: (
      res) => {
        console.log("- Error: The email is registered")
        res.status(400).json({errors: { global: "The email is already registered." } })
    },
    errorEncriptingPassword: (err, res) => {
        console.log(err)
        res.status(400).json({errors: { global: "- Error encrypting password." } })
    }
}
