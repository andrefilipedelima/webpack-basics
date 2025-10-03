//const { add, addnMultiply } = require("./functions/add");
const { add: addNumbers, subtract } = require('./functions');

function add() {
    console.log('Helow');
}

//const output1 = add(1,2);
//const output2 = addnMultiply(1,2,3);

const output4 = addNumbers(1,2);

console.log('output4', output4);
add();

const output3 = subtract(3,2);

//console.log('output1', output1);
//console.log('output2', output2);

console.log('output3', output3);