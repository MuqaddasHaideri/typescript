//Name : Muqaddas haideri
// Date : 19-feb-2024


//question3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("question 3");

let username = "Muqaddas haideri Zafar haider";

let lowercase = username.toLowerCase();
let uppercase= username.toUpperCase();
function toTitleCase(username: string) {
    return username.replace(/\b\w/g, function(username) {
        return username.toUpperCase();
    });
}
let titlecase = toTitleCase(username);
console.log("conversion of name [ "+username+" ] into lowercase ===> "+lowercase );
console.log("conversion of name [ "+username+" ] into uppercase ===> "+uppercase );
console.log("conversion of name [ "+username+" ] into titlecase ===> "+titlecase );



