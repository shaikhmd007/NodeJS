// to know current working directory
/* 
console.log('-->>>current dir.. is ⤵️');
console.log(__dirname);

console.log('-->>current file.. is ⤵️');
console.log(__filename);

// check Extension
const path = require('path')
const filePath = './tempCodeRunnerFile.mjs'
const getExtension = path.extname(filePath)

console.log('extension is ', getExtension);
 */


// Read Files

const { writeFileSync } = require('node:fs');
const fs = require('node:fs')

console.log('start');
const readingFile = fs.readFileSync("./ReadingDataFile.txt");
console.log(readingFile.toString());
console.log('End reading');


// Write Files
fs.writeFileSync('./OverritenFile.txt', 'I Am OverRidding the file contents')
