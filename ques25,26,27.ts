//Name : Muqaddas haideri
// Date : 20-feb-2024
//question 25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
console.log("question 25");

var alien_color=["green","yellow","red"];
//A) Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if(alien_color.includes('green')){
    console.log("Player just earnef 5 points.");
}
//B) Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if(alien_color.includes('blue')){
    console.log("no output will be displayed")
}

//question 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//A) If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
console.log("question 26");


if(alien_color.includes('green')){
    console.log("You earned 5 point for shooting the alien");
}
//b)If the alien’s color isn’t green, print a statement that the player just earned 10 points.

else if(alien_color[0]!="green"){
    console.log("the player just earned 10 points");
}

//C) Write one version of this program that runs the if block and another that runs the else block.
if(alien_color.includes("pink")){
    console.log("The pink alien does not exist");
}else{
    console.log("just executing the else block");
}

//question 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//A) If the alien is green, print a message that the player earned 5 points.
console.log("question 27");

if(alien_color.includes('green')){
    console.log("player earned 5 points");
}
//B) If the alien is yellow, print a message that the player earned 10 points.
else if(alien_color.includes('yellow')){
    console.log("player earned 10 points");
}
//C) If the alien is red, print a message that the player earned 15 points.
else if(alien_color.includes('red')){
    console.log("player earned 15 points");
}