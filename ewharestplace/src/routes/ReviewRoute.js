const {Router} = require('express');

const { getReviews, saveReview, getBuildingData } = require("../controllers/ReviewController");

const route = Router();

route.get('/review/get', getReviews);
route.post('/review/save', saveReview);
route.get('/review/building-data', getBuildingData);


module.exports = route;