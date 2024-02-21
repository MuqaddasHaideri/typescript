//Name : Muqaddas haideri
// Date : 19-feb-2024

//question 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("question 14");

let guests =["Ayesha","Naila","Alya","Wajiha","Muskan"];
for (let i=0; i<guests.length;i++){
console.log("Join us for good times and great company>> ["+guests[i]+ "]" ); 
}

//question 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// a)Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log("question 15");

console.log("\nGuests who are unable to come at dinner is >> [ " +guests[0]+" ] and [ "+guests[4]+ " ]\n");

//b)• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

guests[0] = "Shanzay";
guests [4] = "mishel";

//c)Print a second set of invitation messages, one for each person who is still in your list.
for (let i=0; i<guests.length;i++){
    console.log("I hope you would come to dinner. Your presence will make our gathering complete!>> ["+guests[i]+ "]" ); 
    }

//question 16
console.log("question 16");

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//A)Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("We have more space available, so i am inviting more friends at dinner.");


//b) Add one new guest to the beginning of your array.
let addatstart= "huma";
guests.unshift(addatstart);
//c)Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
let addatmid= Math.floor(guests.length/2);
guests.splice(addatmid,0,"hina");
//d) Print a new set of invitation messages, one for each person in your list.
let addatend="maheen";
guests.push(addatend);


console.log("updated guest-list is ======>");
for (let i=0;i<guests.length;i++){
console.log(guests[i]);
}
//question 17
console.log("question 17");

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

//A) Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("\n I apologize to everyone, i don't have that much space to adjust evryone. Thats why i am inviting only two people.\n");

//B)Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
guests.pop();
guests.pop();
guests.pop();
guests.pop();
guests.pop();
guests.pop();

//C)• Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log("As i have space for only two people so..");
for (let i=0; i<guests.length;i++){
    console.log("I hope you will come to the dinner >> ["+guests[i]+ "]" ); 
    }

    //D)• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
    guests.pop();
    guests.pop();
    
        console.log("People who has made time to join the dinner were  >>" ); 
        for (let i=0; i<guests.length;i++){
            console.log(guests[i]);
        }
    




























