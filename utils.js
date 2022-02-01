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