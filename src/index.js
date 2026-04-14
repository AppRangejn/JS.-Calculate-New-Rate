'use strict';

const valueWinner = Number(prompt("Введіть рейтинг переможця:"));
const valueOpponent = Number(prompt("Введіть рейтинг суперника:"));

if(isNaN(valueWinner) || isNaN(valueOpponent) || valueWinner < 0 || valueOpponent < 0){
    console.error("Помилка, дані введено некоректно(текст або число менше за нуль)");
}
else{
    const newRating = calculateRating(valueWinner, valueOpponent);
    console.log(`Новий рейтинг переможця: ${newRating}`);
}

/**
 * @param {number} ratingWinner 
 * @param {number} ratingOpponent 
 * @returns {number}
 */
function calculateRating(ratingWinner, ratingOpponent){
    if(isNaN(ratingWinner) || isNaN(ratingOpponent) || ratingWinner < 0 || ratingOpponent < 0){
        return 0;
    }

    let bonus = 0;
    let result = 0;

    if(ratingWinner === 0){
        result = ratingOpponent;
    }

    else if(ratingOpponent === 0){
        result = ratingWinner;
    }

    else if(ratingWinner >= ratingOpponent){
        const difference = ratingWinner - ratingOpponent;
        if (difference >=0  && difference <=2){
            bonus = 2;
        }
        else if(difference > 2 && difference < 20){
            bonus = 1;
        }
        else if(difference >= 20){
            bonus = 0;
        }
        result = ratingWinner + bonus;
    }

    else {
        bonus = (ratingOpponent - ratingWinner +5)/3;
        result = ratingWinner + bonus
    }


    return Number(result.toFixed(1));
}   

