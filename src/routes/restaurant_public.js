import express from 'express'
import Restaurant from '../models/Restaurant'
import * as errors from '../errors/errors.auth'

const router = express.Router()

router.get('/list', (req, res) => {

  Restaurant.scan().exec((err, restaurant_list) => {
    if(err) {
        errors.errorDataBaseConnection(err, res)
        return
    }
    if(!restaurant_list){
        errors.errorNotFoundRestaurants(res)
        return
    }
    res.json({ restaurant_list });    //If everything is ok then returns the restaurant_list
  })

})

export default router;
