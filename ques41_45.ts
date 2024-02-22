//Name : Muqaddas haideri
// Date : 21-feb-2024

//question 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("question 41");
let magicians =["magician1","magician2","magician3","magician4","magician5"];
function show_magician(magicians=[""]) {
    if (!magicians) {
        magicians = [];}
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);}}

show_magician(magicians);

//question 42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

console.log("question 42");
function make_great(magicians=[""]) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
make_great(magicians);

//question 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// Call make_great() with a copy of the array of magicians' names
let greatMagicians = make_great([...magicians]);

// Show original magicians
console.log("Original Magicians:");
show_magician(magicians)

// Show magicians with "the Great" added
console.log("\n The Great Magicians:");

show_magician(greatMagicians);

//question 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("question 44");
function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    

        console.log("- " + items);

    console.log("Sandwich is ready to serve !\n");
}
makeSandwich("chicken", "Cheese", "Lettuce", "Tomato");
makeSandwich("beef cheese", "ketchup");
makeSandwich("mayonees", "chicken");

//question 45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...info: [string, any][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };
    info.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

const car = createCar('Toyota', 'Corolla', ['color', 'black'], ['year', 2017]);
console.log(car);

