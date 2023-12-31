interface Inventor {
    first: string,
    second: string,
    year: number,
    passed: number
}
let inventors = [
    {first: 'Oscar', second: "Issac", year: 2002, passed: 2080},
    {first: 'Berle', second: "Donner", year: 1821, passed: 1855},
    {first: 'Korban', second: "Dallas", year: 3044, passed: 3392},
    {first: 'Emmers', second: "Daniels", year: 1328, passed: 1452},
    {first: 'Holy', second: "Bellows", year: 527, passed: 555},
    {first: 'Carl', second: "Ebermoan", year: 1951, passed: 2091},
    {first: 'Hopner', second: "Kensington", year: 2050, passed: 2231},
    {first: 'Suaga', second: "Bishop", year: 1953, passed: 1999},
    {first: 'Zeke', second: "Childers", year: 4003, passed: 4210}
];

let people = ["Honest, Bayme", "Good, Chan", "Betcha, D665idn't", "Know, This", "Shut, Up", "Kept, Frayme", "Calso, Shrewd", "Bolero, Hellus", "Frumpt, Aurthur", "S'Bole, Varrlo", "Crud, Dumb", "Banner, Mark", "Ruffalo, Hulk", "Ulk, Zuzo", "Hurts, Donut", "Bold, Brass", "Kefler, Shissta", "Hold, DaPhone"];


// Array.prototype.filter()
// 1. Filter the list of incentors for those who were born in the 1950's
const oldBoys = inventors.filter(inventor => inventor.year >= 1950 && inventor.year <= 1959);
// console.log("Here's the old bois", oldBoys);

// .map()
// 2. Give us an array of the inventory first and last names
const names = inventors.map(inventor => `${inventor.first} ${inventor.second}`);
// console.log("Here's the inventors:", names);

// .sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const age = inventors.sort((a:Inventor, b: Inventor): number => a.year > b.year ? 1 : -1)
// console.log("This should be sorted:", age);

// .reduce()
// 4. How many years did all the inventors live?

const totalYearsAlive = inventors.reduce((accumulator: number, currentValue: Inventor): number => {
    let age = currentValue.passed - currentValue.year;
    return accumulator + age;
}, 0);

// console.log("How many years did they live?:", totalYearsAlive);

// Sort the inventors by years lived
const sortedByLifeLived: Inventor[] = inventors.sort((a:Inventor, b:Inventor): number => {
    let ageA = (a.passed - a.year);
    let ageB = (b.passed - b.year);
    if(ageA > ageB){
        return 1;
    } else {
        return -1;
    }
})
// console.log("Can we sort by how long they lived?:", sortedByLifeLived);

// Create a list of Boulevards in Paris that contain 'de' anywhere in the name

// sort the people alphebetically by last name

//  https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris