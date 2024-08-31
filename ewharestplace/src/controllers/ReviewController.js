
const ReviewModel = require("../models/ReviewModel");

module.exports.getReviews = async(req, res)=>{
    const place = req.query;
    console.log(place);
    const reviews = await ReviewModel.find(place);
    res.send(reviews);
};

module.exports.saveReview = async(req, res, next) =>{
    const {nickname, rating, content} = req.body;
    const {place} = req.query;

    ReviewModel.create({nickname, place, rating, content})
    .then((data)=> {console.log("save successfully...");
        res.status(201).send(data);
    })
    .catch((err)=> 
        {console.log({error: err, msg : "something Wrong"});
    res.send(err);}
)
};

module.exports.getBuildingData = async (req, res)=>{
    try{
        const code = req.query.code;
        const reviews = await ReviewModel.find({place: code});

        const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

        const latestReview = reviews.length > 0 ? reviews[0].content : "리뷰가 없습니다.";

        res.send({
            avgRating : avgRating.toFixed(2),
            latestReview
        });
    } catch (err){
        console.log(err);
        res.status(500).send({ error : "Something Wrong"});
    }
};

