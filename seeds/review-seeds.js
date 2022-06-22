const { Review } = require('../models');

const reviewdata = [
    {
        rev_text: "WOW... just... WOW... Stunning",
        rev_diff: "Medium",
        user_id: 1,
        trail_id: 2,
    },
    {
        rev_text: "Absolutely positively amazingly terrifically fantastic!",
        rev_diff: "Easy",
        user_id: 2,
        trail_id: 4,
    },
    {
        rev_text: "I truly felt like this trail was an inspiration to my soul.",
        rev_diff: "Hard",
        user_id: 3,
        trail_id: 1,
    },
    {
        rev_text: "This was incredibly easy to get lost on, 10/10 would do again",
        rev_diff: "Hard",
        user_id: 1,
        trail_id: 1,
    },
    {
        rev_text: "Yeah... kinda boring.",
        rev_diff: "Medium",
        user_id: 3,
        trail_id: 5,
    }
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;