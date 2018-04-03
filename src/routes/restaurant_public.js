import express from "express"

const router = express.Router()
const models = require('express-cassandra')

router.get('/list', (req, res) => {

    models.instance.Restaurant.find({}, {raw: true, allow_filtering: true}, function(err, restaurant_list){
         //restaurant_list is an array of plain objects satisfying the query conditions above
         if(err) {
             errors.errorDataBaseConnection(res)
             return
         }
         if(!restaurant_list){
             errors.errorIncorrectRestaurant(res)
             return
         }
         res.json({ restaurant_list });    //If everything is ok then returns the restaurant_list
     });
  }
)

export default router;
