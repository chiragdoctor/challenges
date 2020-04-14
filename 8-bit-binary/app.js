const readlineSync = require('readline-sync');

const ascii = require('./ascii');

const sentence = readlineSync.question('Enter the sentence : ');

const letters = sentence.split('');

