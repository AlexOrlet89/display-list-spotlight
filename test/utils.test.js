//here we test our render functions
import { renderFamily, renderPlanets, renderCereals, renderFourtet } from '../utils.js';
// import { cereals } from '../cereals.js';

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


test('renderCereals should return a div with a ul and two', (expect) => {

    const expected = `<div class="cereals"><h3>Reese's Puffs</h3><p>Alex's Take: Yeah, I like it, it's too much for breakfast-- like a dessert, so I can't really have it all that much.</p><ul><li>Calories: 300</li><li>Sugar: 500</li></ul></div>`;

    const actual = renderCereals({
        name:`Reese's Puffs`,
        likeIt:`Yeah, I like it, it's too much for breakfast-- like a dessert, so I can't really have it all that much.`,
        nutrition: {
            calories: 300,
            sugar: 500
        }
    });

    expect.equal(actual.outerHTML, expected);
});

test('renderFourtet should return the same as expected', (expect) => {

    const expected = `<div class="fourtet"><h3>Morning / Evening</h3><h5>2015</h5><ul><li>Morning Side</li><li>Evening Side</li></ul></div>`;

    const actual = renderFourtet({
        name: 'Morning / Evening',
        year: 2015,
        tracks: ['Morning Side', 'Evening Side']
    });

    expect.equal(actual.outerHTML, expected);

});