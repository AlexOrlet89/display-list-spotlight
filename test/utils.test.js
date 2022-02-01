//here we test our render functions
import { renderFamily, renderPlanets } from '../utils.js';

const test = QUnit.test;

test('renderFamily should return a <div> with family name and food-likes', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="family"><label>he loves Gumbo</label><h3>his name is Alex</h3></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFamily({
        name: 'Alex',
        food: 'Gumbo'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderPlanets should return a div with planet stats', (expect) => {

    const expected = `<div class="planets"><h5>hey... checkout the</h5><h3>Earth</h3><p> Earth has 0 number of rings, is 3(rd/th) away from the sun and has about 7000000000 people hanging out on it. Cool!</p></div>`;

    const actual = renderPlanets({
        name: 'Earth', //h3
        numOfRings: 0, //p for the rest?
        orderFromSun: 3,
        population: 7000000000,
    });

    expect.equal(actual.outerHTML, expected);
});
