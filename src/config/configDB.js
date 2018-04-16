import dotenv from "dotenv"
var dynamoose = require('dynamoose')
dotenv.config()

const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
  db: {
    accessKeyId: process.env.DEV_AK,
    secretAccessKey: process.env.DEV_SK,
    region: process.env.DEV_REGION
  }
}

const local = {
  db: {
    region: process.env.LOCAL_REGION
  }
}

const config = {
 dev,
 local
}

dynamoose.AWS.config.update(config[env].db);
if(env==='local') dynamoose.local(process.env.LOCAL_DB_PORT)

module.exports = dynamoose
