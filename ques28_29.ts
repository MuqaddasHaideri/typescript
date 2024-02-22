//Name : Muqaddas haideri
// Date : 20-feb-2024

//question 28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
console.log("question 28");

let age = 28;

// A) If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("The person is just a baby.");
}
// B) If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
// C) If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
// D) If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
// E) If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
// F) If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("The person is an elder.");
}

//question 29
//favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
console.log("question 29");

let fruit=["Mango","grapes","water-melon"];

//A)• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (fruit.includes("banana")){
    console.log("i like banana");
}
else if (fruit.includes("Mango")){
    console.log("i like Mango");
}
else if (fruit.includes("orange")){
    console.log("i like orange")
}
else if (fruit.includes("strawberry"))
{
    console.log("i like strawberries")
}
else if (fruit.includes("pear")){
    console.log("i like pears")
}
