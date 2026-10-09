"use strict";
function rangeCheckerusingif(num) {
    let category;
    if (num < 0)
        category = 'Category A';
    else if (num >= 0 && num <= 50)
        category = 'Category B';
    else
        category = 'Category C';
    return category;
}
console.log('Result using if loop: ', rangeCheckerusingif(-1)); //A
console.log('Result using if loop: ', rangeCheckerusingif(0)); //B
console.log('Result using if loop: ', rangeCheckerusingif(49)); //B
console.log('Result using if loop: ', rangeCheckerusingif(50)); //B
console.log('Result using if loop: ', rangeCheckerusingif(51)); //C
console.log('Result using if loop: ', rangeCheckerusingif(1000)); //C
function rangeCheckerusingswitch(num) {
    let category;
    switch (true) {
        case num < 0:
            category = 'Category A';
            break;
        case num >= 0 && num <= 50:
            category = 'Category B';
            break;
        case num > 50:
            category = 'Category C';
            break;
        default:
            category = 'Invalid';
            break;
    }
    return category;
}
console.log('Result using switch case: ', rangeCheckerusingswitch(-1)); //A
console.log('Result using switch case: ', rangeCheckerusingswitch(0)); //B
console.log('Result using switch case: ', rangeCheckerusingswitch(49)); //B
console.log('Result using switch case: ', rangeCheckerusingswitch(50)); //B
console.log('Result using switch case: ', rangeCheckerusingswitch(51)); //C
console.log('Result using switch case: ', rangeCheckerusingswitch(1000)); //C
function wordLengthCategorizer(words) {
    return words.reduce((acc, word) => {
        if (word.length <= 3) {
            acc.short = (acc.short ?? 0) + 1;
        }
        else if (word.length <= 6) {
            acc.medium = (acc.medium ?? 0) + 1;
        }
        else {
            acc.long = (acc.long ?? 0) + 1;
        }
        return acc;
    }, { short: 0, medium: 0, long: 0 });
}
// Test cases
console.log(wordLengthCategorizer(["cat", "house", "elephant"])); // expected { short: 1, medium: 1, long: 1 }
console.log(wordLengthCategorizer(["a", "to", "sun", "light", "coding"])); // expected counts
console.log(wordLengthCategorizer(["typescript", "js", "go"])); // expected counts
