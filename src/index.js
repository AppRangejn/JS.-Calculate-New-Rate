'use strict';

/**
 * @param {number} ratingWinner 
 * @param {number} ratingOpponent 
 * @returns {number}
 */
function calculateRating(ratingWinner, ratingOpponent){
    if(isNaN(ratingWinner + ratingOpponent) || ratingWinner < 0 || ratingOpponent < 0){
        return NaN;
    }

    if(ratingWinner === 0) return ratingOpponent;

    if(ratingOpponent === 0) return ratingWinner

    if (ratingOpponent > ratingWinner) {
        return Number((ratingWinner + (ratingOpponent - ratingWinner + 5) / 3).toFixed(1));
    }

    const difference = ratingWinner - ratingOpponent;
    if (difference <= 2) return ratingWinner + 2;
    if (difference < 20) return ratingWinner + 1;
    
    return ratingWinner;
}   

console.log(calculateRating(10, 12));
