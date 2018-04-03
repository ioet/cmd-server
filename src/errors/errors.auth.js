module.exports = {
    errorDataBaseConnection: (res) => {
        res.status(400).json({errors: { global: "Error from database connection." } })
    },
    errorIncorrectEmail: (res) => {
        res.status(400).json({errors: { global: "Incorrect email." } })
    },
    errorIncorrectRestaurant: (res) => {
        res.status(400).json({errors: { global: "Error during retrieving the list of restaurants" } })
    },
    errorIncorrectPassword: (res) => {
        res.status(400).json({errors: { global: "Incorrect password." } })
    },
    errorEmailIsRegistered: (res) => {
        res.status(400).json({errors: { global: "The email is already registered." } })
    },
    errorEncriptingPassword: (res) => {
        res.status(400).json({errors: { global: "Error encrypting password." } })
    },
    errorSavingUser: (res) => {
        res.status(400).json({errors: { global: "Error saving new user." } })
    }
}
