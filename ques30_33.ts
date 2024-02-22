//Name : Muqaddas haideri
// Date : 20-feb-2024

//question 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
console.log("question 30");

let users=["Admin","muqaddas","sania","huma","laraib","javeria"];

//a)If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//b) Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
for(let i=0;i<users.length;i++){
if (users[i]=="Admin")
{
    console.log("Hello Admin,would u like to see the status report.");
}
 else {
    console.log("hello "+users[i]+ " thank you for logging in again")
 }
}
//question 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//A)If the list is empty, print the message We need to find some users!
//B)Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("question 31");

let newlist=["user1","user2","user3","user4","user5"];

newlist.pop();
newlist.pop();
newlist.pop();
newlist.pop();
newlist.pop();
if(newlist.length==0){
console.log("the list is empty!");
}

//question 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
console.log("question 32");
//A) Make a list of five or more usernames called current_users.
let currentusers=["naluri","laraib","aisha","lish","isaac"];
//b)Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let newlists=["naluir","reem","zainab","hadiqa","lish"];
//c)• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
for (let i = 0; i < newlists.length; i++) {
    let userExists = false;
    for (let j = 0; j < currentusers.length; j++) {
        if (newlists[i] == currentusers[j]) {
            console.log(newlists[i] + " is already in use. Please enter a new username.");
            userExists = true;
            break; 
        }
    }
    if (!userExists) {
        console.log(newlists[i] + " is available.");
    }
}
//question 33
console.log("question 33");
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

//A)Store the numbers 1 through 9 in a array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//b)Loop through the array.
//c)• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (let i = 0;i <numbers.length; i++) {
    let Ending;
    if (numbers[i] === 1) {
        Ending = "st";
    } else if (numbers[i] === 2) {
        Ending = "nd";
    } else if (numbers[i] === 3) {
        Ending = "rd";
    } else {
        Ending = "th";
    }
    console.log(numbers[i] + Ending);
}
