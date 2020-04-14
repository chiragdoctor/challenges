const readlineSync = require('readline-sync');

const ascii = require('./ascii');

const sentence = readlineSync.question('Enter the sentence : ');

const letters = sentence.split('');

const result = letters.map(letter => {
    const asciiValue = ascii[letter];
    return binary(asciiValue);
});


function binary(asciiValue, result = '') {
    if (asciiValue <= 1) {
        result = asciiValue + result;
        const noOfZeros = 8 - result.length;
        for(let i = 0; i < noOfZeros; i++) {
            result = '0' + result; 
        }    
        return result;
    } else {
        result = Math.floor(asciiValue % 2) + result;
        return binary(Math.floor(asciiValue / 2), result);
    }
}

console.log(result);
