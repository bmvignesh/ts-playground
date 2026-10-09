"use strict";
const sentences = [
    "Hello world",
    "TypeScript makes coding fun",
    "Practice daily coding exercises for growth"
];
function wordCounter(text) {
    let words = text.toLowerCase().split(' ');
    return words.length;
}
console.log(wordCounter("TypeScript makes coding fun"));
function rangeCategorization(text) {
    let words = text.toLowerCase().split(' ');
    const wordCount = words.length;
    let category;
    if (wordCount <= 3)
        category = 'Low';
    else if (wordCount <= 6)
        category = 'Medium';
    else
        category = 'High';
    return { wordCount, category };
}
console.log(rangeCategorization("Practice daily coding exercises for growth"));
function evenOddSplitter(text) {
    let words = text.toLowerCase().split(' ');
    const evenWords = [];
    const oddWords = [];
    for (let word of words) {
        if (word.length % 2 == 0)
            evenWords.push(word);
        else
            oddWords.push(word);
    }
    return { evenWords, oddWords };
}
console.log(evenOddSplitter("TypeScript makes coding fun"));
function analyzeText(text) {
    let words = text.toLowerCase().split(' ');
    const wordCount = words.length;
    let category;
    if (wordCount <= 3) {
        category = 'Low';
    }
    else if (wordCount >= 4 && wordCount <= 6) {
        category = 'Medium';
    }
    else {
        category = 'High';
    }
    const evenWords = [];
    const oddWords = [];
    for (let word of words) {
        if (word.length % 2 === 0)
            evenWords.push(word);
        else
            oddWords.push(word);
    }
    return { wordCount, category, evenWords, oddWords };
}
console.log(analyzeText('Practice daily coding exercises for growth'));
function characterAnalyzer(sentence) {
    const cleaned = sentence.toLowerCase().replace(/\s+/g, "");
    const charCount = cleaned.length;
    let category;
    const vowels = [];
    const consonants = [];
    if (charCount <= 20)
        category = 'Short';
    else if (charCount > 20 && charCount <= 50)
        category = 'Medium';
    else
        category = 'Long';
    for (let char of cleaned) {
        if ("aeiou".includes(char))
            vowels.push(char);
        else
            consonants.push(char);
    }
    return { charCount, category, vowels, consonants };
}
console.log(characterAnalyzer('Practice daily coding exercises for growth'));
function numberAnalyzer(numarray) {
    let numberCount = numarray.length;
    let category;
    if (numberCount >= 1 && numberCount <= 3)
        category = "Small";
    else if (numberCount >= 4 && numberCount <= 7)
        category = "Medium";
    else
        category = "High";
    function isPrime(num) {
        if (num <= 1)
            return false;
        if (num === 2)
            return true;
        if (num % 2 === 0)
            return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0)
                return false;
        }
        return true;
    }
    const primearray = numarray.filter(isPrime);
    const nonprimearray = numarray.filter(n => !isPrime(n));
    return { numberCount, category, primearray, nonprimearray };
}
console.log(numberAnalyzer([1, 2, 3, 4, 5, 9, 11, 15, 17]));
function checkPrime(num) {
    if (num <= 1)
        return false;
    if (num === 2)
        return true;
    if (num % 2 === 0)
        return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0)
            return false;
    }
    return true;
}
console.log(checkPrime(7));
function wordPropertyAnalyzer(sentence) {
    let sentenceLength = sentence.length;
    let words = sentence.split(' ');
    const wordCount = words.length;
    let sentenceCategory;
    if (sentenceLength >= 1 && sentenceLength <= 3)
        sentenceCategory = 'Low';
    else if (sentenceLength >= 4 && sentenceLength <= 7)
        sentenceCategory = 'Medium';
    else
        sentenceCategory = 'High';
    const upparray = [];
    const lowarray = [];
    for (let word of words) {
        if (word.charAt(0) === word.toUpperCase().charAt(0) && word.charAt(0) != word.toLowerCase().charAt(0))
            upparray.push(word);
        else
            lowarray.push(word);
    }
    return { wordCount, sentenceCategory, upparray, lowarray };
}
console.log(wordPropertyAnalyzer('I LoVe yOU'));
function ageGroupAnalyzer(ages_array) {
    let ageCount = ages_array.length;
    let ageCategory;
    if (ageCount >= 1 && ageCount <= 3)
        ageCategory = 'Small';
    else if (ageCount >= 4 && ageCount <= 7)
        ageCategory = 'Medium';
    else
        ageCategory = 'Large';
    const minors = [];
    const adults = [];
    for (let age of ages_array) {
        if (age < 18)
            minors.push(age);
        else
            adults.push(age);
    }
    return { ageCount, ageCategory, minors, adults };
}
console.log(ageGroupAnalyzer([71, 64, 43, 38, 12, 11]));
