//Name : Muqaddas haideri
// Date : 20-feb-2024

// question 23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("question 23");

//test1
let color= "black";
console.log("Alina's hair color is black? i pridict true ");
console.log(color=='black');
//test2
console.log("Alina's eye color is black ? i predict true");
console.log(color=='black');
//test3
console.log("Alina has a black car ?i predict true" );
console.log(color=='black');
//test4
console.log("Alina's hair color is not blonde? i predict true");
console.log(color!='blonde');
//test5
console.log("Alina's eye color is not blue? i predict true");
console.log(color!='blue');
//test6
console.log("Alina's hair color is not black? i predict false");
console.log(color!='black');
//test7
console.log("Alina's hair color is brown? i predict false" );
console.log(color=='brown');
//test8
console.log("Alina's eye color is not black? i predict false ");
console.log(color!='black');
//test9
console.log ("Alina's name does not contain letter \" L\"? i predict false");
console.log (color.includes('L'));
//test10
console.log("Alina's names does not contain the letter \" A \"? i predict false ");
console.log(color.includes('A'));


//question 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//A) Tests for equality and inequality with strings
console.log("question 24");

let string1 ="ABCD";
let string2 ="EFGH";
console.log("Is String 1 is equal to string 2? i predict false ");
console.log(string1==string2);
console.log("Is String 1 is not equal to string 2? i predict true ");
console.log(string1!=string2);

//B)Tests using the lower case function
console.log("Is string 1 is equal to lowercase element? i predict false");
console.log(string1.toLowerCase()==string1);
console.log("Is string 1 is not  equal to lowercase element? i predict true");
console.log(string1.toLowerCase()!=string1);

//C)• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1=33;
let num2=72;
console.log("num1 is equal num2 ? i predict false");
console.log(num1==num2);
console.log("num1 is not equal to num2 ? i predict true");
console.log(num1!=num2);
console.log("num1 is greater than num2 ? i predict false");
console.log(num1>num2);
console.log("num1 is less than num2 ? i predict true");
console.log(num1<num2);
console.log("num1 is greater than equal to num2 ? i predict false");
console.log(num1>=num2);
console.log("num1 is less than equal num2 ? i predict true");
console.log(num1<=num2);

//D) Tests using "and" and "or" operators
console.log("num1 is less than num2 ? OR num2 is less than num1  i predict true");
console.log(num1<num2 || num2<num1);
console.log("num1 is greater than num2 ? OR num2 is greater than num1?  i predict false");
console.log(num1>num2 && num2>num1);

//E)• Test whether an item is in a array
let fruits=["Apple","mango","banana","grapes"];
console.log("Is grapes is a fruit , i predict true");
console.log (fruits.includes("Apple"));
//F) Test whether an item is not in a array
console.log("Is carrot is a fruit , i predict false");
console.log (fruits.includes("carrot"));

