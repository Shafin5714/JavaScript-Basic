//for importing 
export function myfunc(num){
    return num+1;
}



//for exporting 
import {myfunc} from './lib.js'

console.log(myfunc(6));

//use live sever for output


//Extra
/* Import / Export */

// NAMED EXPORTS

//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

// IMPORT PART OF A MODULE

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); 
console.log(diag(4, 3)); 



// IMPORTING COMPLETE MODULE

//------ main.js ------
import * as lib from 'lib';
console.log(lib.square(11));
console.log(lib.diag(4, 3)); 


// IMPORTING WITH MORE CONVENIENT ALIAS
import {reallyReallyLongModuleMemberName as shortName}
  from 'my-module';






// SINGLE DEFAULT EXPORT

//------ myFunc.js ------
export default function () { ··· } // no semicolon!

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();
