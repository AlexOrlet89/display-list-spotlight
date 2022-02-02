export function renderFamily(member) {
    // the member will be the individual items looped on app.js
    const div = document.createElement('div');
    div.classList.add('family');
    //creating a div and adding family class.
    const h3 = document.createElement('h3');
    // creating an h2 (name) to later append to our div
    h3.textContent = `his name is ${member.name}`;
    // h2 will now textfill with family member's name
    const label = document.createElement('label');
    // creating a label (food) to later append to our div
    label.textContent = `he loves ${member.food}`;
    //label will populate member.food
    div.append(label, h3);
    //here we append them, but the div is not yet added to html
    return div;
    //returns function
}

export function renderPlanets(planet) {
    const div = document.createElement('div');
    div.classList.add('planets');

    const h5 = document.createElement('h5');
    h5.textContent = `hey... checkout the`;
    const h3 = document.createElement('h3');
    h3.textContent = `${planet.name}`;

    const p = document.createElement('p');

    p.textContent = ` ${planet.name} has ${planet.numOfRings} number of rings, is ${planet.orderFromSun}(rd/th) away from the sun and has about ${planet.population} people hanging out on it. Cool!`;

    div.append(h5, h3, p);
    return div;
}

// import { cereals } from '../cereals.js';

export function renderCereals(cereal) {
    const div = document.createElement('div');
    div.classList.add('cereals');

    const h3 = document.createElement('h3');
    h3.textContent = `${cereal.name}`;

    const p = document.createElement('p');
    p.textContent = `Alex's Take: ${cereal.likeIt}`;

    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');

    li1.textContent = `Calories: ${cereal.nutrition.calories}`;
    li2.textContent = `Sugar: ${cereal.nutrition.sugar}`;
    ul.append(li1, li2);
    div.append(h3, p, ul);
    return div;
}

export function renderFourtet(album) {
    const div = document.createElement('div');
    div.classList.add('fourtet');

    const h3 = document.createElement('h3');
    h3.textContent = `${album.name}`;

    const h5 = document.createElement('h5');
    h5.textContent = `${album.year}`;

    const ul = document.createElement('ul');
    for (let track of album.tracks) {
        console.log(track);
        let li = document.createElement('li');
        li.textContent = `${track}`;
        ul.append(li);
    }
    div.append(h3, h5, ul);
    return div;

}