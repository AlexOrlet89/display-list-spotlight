import { family } from './family.js';
import { planets } from './planets.js';
//the list of family members
import { renderFamily, renderPlanets } from './utils.js';
//gives us a div we need to append to our HTML

const display = document.getElementById('display');
//grabs the display section in which we will append our freefloating div

for (let member of family) {
// console.log(member);
    const div = renderFamily(member);
//passes each member through 
    display.append(div);

}
// renderFamily();

const display2 = document.getElementById('display2');

for (let planet of planets) {
  // console.log(planet);
    const div = renderPlanets(planet);
    display2.append(div);
}


// let state
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
