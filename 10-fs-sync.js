const {readFileSync, writeFileSync, writeFile } = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
//flag is for append
writeFileSync(
    './content/result-sync.txt',
    `Here are the results ${first}, ${second}`,
     {flag: 'a'}
)

console.log('done with this task')
console.log('starting with the next one')