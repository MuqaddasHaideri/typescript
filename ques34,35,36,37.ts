//Name : Muqaddas haideri
// Date : 20-feb-2024

//question 34
console.log("question 34");
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizza=["Margherita","BBQ Chicken","fagita"];

for(let i=0;i<pizza.length;i++){
    console.log(pizza[i]);
}
//a)Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for(let i=0;i<pizza.length;i++){
    console.log("i like "+pizza[i]+" pizza");
}
//c)Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("I really, really like pizza a lot! It's my absolute favorite food. I can eat it anytime, anywhere, and I never get tired of it. Whether it's cheesy, saucy, or loaded with toppings, pizza always makes me happy. It's just the best!");

console.log("question 35");
//question 35
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animal=["cat","dog","rabbit"];
for(let i=0;i<animal.length;i++){
    console.log(animal[i]);
}
console.log("i like "+animal[0]+"'s eyes");
console.log(animal[2]+"are cute and fluffly");
console.log(animal[1]+" would make a great pet");

console.log("Any of these animals would be fascinating to see in the wild!");

//question 35
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// Function to make a shirt with given size and message
function makeShirt(size:string, message:string) {
    console.log( size+" shirt will be made with the message: "+message);
}

// Call the function
makeShirt("Large", "hii");
//question 36
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("question 36");
makeShirt("large","i love typesript");
makeShirt("medium","i love java");
makeShirt("small","i love javascript");
