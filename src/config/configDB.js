import dotenv from "dotenv"

var dynamoose = require('dynamoose')

dotenv.config()

dynamoose.AWS.config.update({
  accessKeyId: process.env.AK,
  secretAccessKey: process.env.SK,
  region: 'us-east-1'
})

module.exports = dynamoose
