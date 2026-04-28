const maths = require('./maths');

function greet(name){
    return `Grace to You, ${name}`;
}

console.log(greet("Yoel Kelev"));

console.log(
    `Your Answer is ${maths.divide(125000, 500)}`);