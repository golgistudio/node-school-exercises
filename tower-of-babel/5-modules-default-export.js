var arg1 = process.argv[2];
var arg2 = process.argv[3];

import mathFuncs from './mathDefault'

console.log(mathFuncs.PI);
console.log(mathFuncs.sqrt(+arg1));
console.log(mathFuncs.square(+arg2));
