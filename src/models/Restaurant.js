import dynamoose from '../config/configDB'

var Schema = dynamoose.Schema;

var restaurant = new Schema({
  id: Number,
  name: String,
  location: String,
  score: String
})

module.exports = dynamoose.model('restaurant', restaurant)
