//Name : Muqaddas haideri
// Date : 21-feb-2024

//question 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log("question 38");
function describe_city (city="", country="pakistan"){
    console.log(city+" is in "+country);

}
describe_city("karachi");
describe_city("lahore");
describe_city("Kulalampur","malaysia");

console.log("question 39");
//question 39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//"Lahore, Pakistan"

function city_country(city="",country=""){
console.log(city+","+country);
}
city_country("karachi","pakistan");
city_country("ankara","turkey");
city_country("dhaka","bangladesh");
city_country("bijing","china");

//question 40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album

// Function to create an album object
function make_album(artist="", title="", tracks="") {
    let album = {
        artist:artist,
        title:title
    };
    
   return album;
}

let album1= make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2"); 
let album3= make_album("Artist3", "Album3");
console.log(album1);
console.log(album2);
console.log(album3);

