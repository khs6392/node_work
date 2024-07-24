// useTotal2.js                                  /java ==> import a.b.*
//import total from "./totalModule.js";
import * as mymath from "./totalModule.js"; //{ total, findNum, filterNum }
console.log(mymath.total(10, 20, 30, 40));
console.log(mymath.total(5, 6, 7));
let arr = [1, 2, 3, 4];
console.log(mymath.findNum(4, arr));
console.log(mymath.filterNum(2, arr));
// npm init
