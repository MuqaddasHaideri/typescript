//Name : Muqaddas haideri
// Date : 19-feb-2024

//question 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
console.log("question 18");

//A)Store the locations in a array. Make sure the array is not in alphabetical order.

let places =["Cappadocia","Kuala Lumpur","Zurich","California","Amsterdam"];

//B) Print your array in its original order.

console.log("The places in the world that i want to visit are>>> ");
for (let i=0;i<places.length;i++){
console.log ("[ "+places[i]+" ]");
}

//C)Print your array in alphabetical order without modifying the actual list.
let sortedplaces = [...places].sort();
console.log("The Name of places in alphabetical order in array >>");
for (let i=0;i<places.length;i++){
console.log ("[ "+sortedplaces[i]+" ]");
}

//D)• Show that your array is still in its original order by printing it.

console.log("Array is still in original order after sortng it in alphabetical order>>");
for (let i=0;i<places.length;i++){
    console.log ("[ "+places[i]+" ]");
    }

//E)Print your array in reverse alphabetical order without changing the order of the original list.

let reversearray=[...sortedplaces].reverse();
console.log("places in reverse alphabetial order in Array >>");
for (let i=0;i<places.length;i++){
    console.log ("[ "+reversearray[i]+" ]");}

//F)• Show that your array is still in its original order by printing it again.

console.log("Array is still in original order after reverse alphabetical order>>");
for (let i=0;i<places.length;i++){
    console.log ("[ "+places[i]+" ]");
    }

//G)Reverse the order of your list. Print the array to show that its order has changed.

let reverselist=  [...places].reverse();
console.log("places in reverse list order in Array >>");
for (let i=0;i<places.length;i++){
    console.log ("[ "+reverselist[i]+" ]");}

//H)• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Array is still in original order after reversing the list >>");
for (let i=0;i<places.length;i++){
    console.log ("[ "+places[i]+" ]");
    }


//question 19
console.log("question 19");

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

//i will count the places i have added in the list

let numbersofelement= places.length;
console.log("The number of elements in array are = "+numbersofelement);

//question 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("question 20");

let countries = ["Pakistan","Turkey","Malaysia","China","bangladesh"];

for(let i=0;i<countries.length;i++){
console.log(countries[i]);
}

