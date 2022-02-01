//here we test our render functions
import { renderFamily } from '../utils.js';

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
