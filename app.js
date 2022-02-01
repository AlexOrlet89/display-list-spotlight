import { family } from './family.js';
//the list of family members
import { renderFamily } from './utils.js';
//gives us a div we need to append to our HTML

const display = document.getElementById('display');
//grabs the display section in which we will append our freefloating div

for (let member of family) {
// console.log(member);
    const div = renderFamily(member);
//passes each member through 
    display.append(div);

}
renderFamily();


// let state
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
