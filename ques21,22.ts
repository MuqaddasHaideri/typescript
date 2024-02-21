//Name : Muqaddas haideri
// Date : 20-feb-2024


//question 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("question 21");



let data={
id : "21",
name : "Hina",
surname : "khan",
marks : "77"
}
console.log("Name of the student is = "+data.name);
console.log("Surname of the student is = "+data.surname);
console.log("ID of the student is = "+data.id);
console.log("Marks gained by the student out of 100 is "+data.marks);
//question 22
console.log("question 22");

//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let arr=["east","west","north","south"];

//array index out of bound this will give undefined.
//console.log(arr[4]);
//thats why we write 
console.log(arr[3]);