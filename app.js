// import functions and grab DOM elements
import { family } from './family.js';
// console.log(family);

const familySection = document.getElementById('family-section');

familySection.textContent = 'awefawef';

export function renderFamily() {
    for (let member of family) {
        console.log(member);
    }
}
renderFamily();
// let state
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
