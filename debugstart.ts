import {parse} from "./parser";


var line = "max(1,-1)";
var ast = parse(line);
console.log(JSON.stringify(ast,null,2));