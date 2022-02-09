let variablePrivee = "test";

let f1 = function() { console.log("Execution f1 " + variablePrivee);}
let f2 = function() { console.log("Execution f2 " + variablePrivee);}
let f3 = function() { console.log("Execution f3 " + variablePrivee);}

export default "Test export";

export {f1, f2, f3};
