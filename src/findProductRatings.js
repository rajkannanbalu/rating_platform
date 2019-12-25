'use strict'

function findProductRatings(productId) {
    const ratingsList = getSampleRatingsList();
    const productRatingsCount = ratingsList.filter(rating => rating.productId == productId)
    const ratingAggregation =  productRatingsCount.reduce((prev,curr) => (prev[curr.ratingValue] = ++prev[curr.ratingValue] || 1, prev), {})            
    const ratings = []
    const totalRatings = Object.keys(ratingAggregation).reduce(function (accumulator, currentValue) {        
        return accumulator + (currentValue * ratingAggregation[currentValue])
      }, 0)   
   Object.keys(ratingAggregation).map(ratingValue => {
       ratings.push({ratingValue: ratingValue, count: ratingAggregation[ratingValue]})
   });
   const averageRating = (totalRatings/productRatingsCount.length).toFixed(2);
   const finalResponse  = {
       product_id : productId,
       avg_rating_value: averageRating,
       no_of_ratings_given: productRatingsCount.length,
       individual_ratings: ratings
   }
   return finalResponse;   

}

function getSampleRatingsList() {
    const ratings  = [
        {
            ratingValue:5,
            customerId: 1001,
            productId: 1
        },
        {
            ratingValue:5,
            customerId: 1002,
            productId: 1
        },
        {
            ratingValue:3,
            customerId: 1003,
            productId: 1
        },
        {
            ratingValue:1,
            customerId: 1001,
            productId: 2
        },
        {
            ratingValue:4,
            customerId: 1003,
            productId: 1
        },
        {
            ratingValue:4,
            customerId: 1001,
            productId: 1
        },
        {
            ratingValue:2,
            customerId: 1001,
            productId: 2
        },
        {
            ratingValue:2,
            customerId: 1001,
            productId: 1
        }
    ];

    return ratings;
}

console.log(findProductRatings(1));


