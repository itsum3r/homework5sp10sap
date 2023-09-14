//1. Removing negative numbers using the filter method:
const number: number[] = [-1, 2, -3, 4, -5];
const positiveNumbers: number[] = number.filter(num => num >= 0);
console.log(positiveNumbers); // Output: [2, 4]
//2. Multiplying each number by 2 using the map method:
const numbers: number[] = [1, 2, 3, 4, 5];
const multipliedNumbers: number[] = numbers.map(num => num * 2);
console.log(multipliedNumbers); // Output: [2, 4, 6, 8, 10]
/////3. Filtering fruits with more than 5 characters using the filter method:
const fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];
const longFruits: string[] = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); 
//4. Squaring even numbers using the map and filter methods:
const numbe: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredEvenNumbers: number[] = number
  .filter(num => num % 2 === 0)
  .map(num => num ** 2);
console.log(squaredEvenNumbers); // Output: [4, 16, 36, 64, 100]

///5. Converting temperatures from Celsius to Fahrenheit using the map method:
const celsiusTemperatures: number[] = [0, 10, 20, 30, 40];
const fahrenheitTemperatures: number[] = celsiusTemperatures.map(temp => (temp * 9/5) + 32);
console.log(fahrenheitTemperatures);
/////7. Great! Here are some operations that result in the number 8:
- ///Addition: `console.log(4 + 4)`
- ///Subtraction: `console.log(16 - 8)`
- ///Multiplication: `console.log(2 * 4)`
- //Division: `console.log(64 / 8)`
/////////8. Here are four lines that each result in the number 8:
console.log(5 + 3)
console.log(10 - 2)
console.log(4 * 2)
console.log(16 / 2)
//9. That's cool! To reveal your favorite number, you can create a variable and print it. For example:
let favoriteNumber = 42;
console.log("My favorite number is " + favoriteNumber)

//12. That's a fun exercise! To personalize the messages, you can use a loop to iterate through the array of names and print a personalized message for each person. Here's an example in TypeScript:


let nam: string[] = ["Friend1", "Friend2", "Friend3"];

for (let name of nam) {
  console.log(`Hey ${name}, I hope you're doing well! Let's catch up soon.`);

}

//13. I love talking about transportation! If you had a favorite mode of transportation, like a car or a motorcycle, you can create an array to store different examples. Then, you can use a loop to print statements about each item. For example:


 let transportation: string[] = ["Honda motorcycle", "Tesla car", "Bicycle"];

 for (let item of transportation) {
   console.log(`I would like to own a ${item}. It would be so much fun!`);
}



var Guest: string[] = ["Javeria", "Talha", "Hannan", "sidra"];
console.log(name);
Guest.splice(3, 1, "Faiza")

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to invite to
// dinner. Then use your list to print a message to each person, inviting them to
//dinner.
for (let i = 0; i < Guest.length; i++) {
    // console.log(Names[i],"Good Evening");

    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");

    } else if (Guest[i] == "Talha") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Faiza") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }

}
console.log("Sidra cannot join us in the party");

// Q16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.

var Guest: string[] = ["Talha", "Hannan", "sidra"];
console.log(name);
Guest.splice(3, 1, "Faiza")
// b. Add one new guest to the beginning of your array.
Guest.unshift("Waleed")
// c. Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
// each person in your list.
Guest.splice(Guest.length / 2 + 1, 0, "Afridi")
// • Use append() to add one new guest to the end of your list. •
Guest.push("Razaq")
for (let i = 0; i < Guest.length; i++) {
    // console.log(Names[i],"Good Evening");

    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");

    } else if (Guest[i] == "umAR") {
      console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
  } else if (Guest[i] == "hamza") {
      console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
  } else if (Guest[i] == "ali") {
      console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
  } else if (Guest[i] == "hassan") {
      console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
  } else if (Guest[i] == "subhan") {
      console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
  } else if (Guest[i] == "usman") {
      console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
  }

}
console.log("Sidra cannot join us in the party");
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.
console.log("We found a bigger table so we will invite more mehmaan");

// 18. Seeing the World: Think of at least five places in the world you’d like to visit

// 18(a) Store the locations in a array. Make sure the array is not in alphabetical order.
var favLocations: string[] = ["a", "e", "t", "c", "f"];
// 18(b). Print your array in its original order.
console.log("Array in its origional order is: ", favLocations);
// 18(c). Print your array in alphabetical order without modifying the actual list.
var copyArray: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray.sort();
console.log(copyArray);

// 18(d). Show that your array is still in its original order by printing it.
console.log(favLocations);

// 18(e). Print your array in reverse alphabetical order without changing the order of the original list.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);

// 18(f). Show that your array is still in its original order by printing it again
console.log("18(f) origional", favLocations);
// 18(g). Reverse the order of your list. Print the array to show that its order has changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);

// 18(h). Reverse the order of your list again. Print the list to show it’s back to its original order.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.sort();
console.log(copyArray1);
// 18(i). Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.sort();
console.log(copyArray1);

// 18(j). Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var Dinner: string[] = ["Ali", "fatima", "Ahmed"]
var Maxpeople: number = 0
for (let i = 0; i < Dinner.length; i++) {
  
  Maxpeople = Maxpeople + i;


}
console.log("Totall nuber of people you invited are ", Maxpeople);



// 20. Think of something you could store in a array. For example, you could make a list
// of mountains, rivers, countries, cities, languages, or anything else you’d like. Write
// a program that creates a list containing these items.

var Arr: string[] = ["Python", "Farhan", "Nokia", "Open Ai", "Meta"];
console.log("List of items");
console.log(".............");
var Arr_1 = Arr.map((items, index) => {
    console.log((index + 1) + ". " + items);


})
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

var car: { model: number, name: string, color: string } = {
  model: 2020,
  name: "BMW",
  color: "Black"
};


// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program

var ErrorIndex: string[] = ["Farhan", "Leo", "AI", "Specialist"];
ErrorIndex.splice(1, 0, "DataScience");
console.log(ErrorIndex);
console.log(ErrorIndex[10]); 

// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// a. Look closely at your results, and make sure you understand why each line evaluates to True or False.

// Example 1 test for equality
let num: number = 42;
console.log("Is number == 42? I predict True.");
console.log(num == 42);
// Example 2  test for enequality
let fruit: string = "banana";
console.log("is fruit is not equal to apple? i pridict the true");
console.log(fruit != "Apple");
// Example 3  Numeric comparison
let num1: number = 20;
console.log("is number<30? i pridecit the true");
console.log(num1 < 30);

// Example 4  weekend test
let day: string = "sunday"
console.log("is it sunday? i pridict true");
console.log(day == "sunday");
// Example 5  weekend test
let year: string = "September"
console.log("is it September? i pridict true");
console.log(year == "September");


// Example 6  logical
let isweekend = true;
let hasPlane = false;
console.log("today i have a plan i pridict false");
console.log(isweekend && hasPlane);

// Example 7  logical
let isRainyDay = true;
console.log("it is raining ? i pridict false ");
console.log(!isRainyDay);

// Example 8  logical
let isFeePaid = false;
console.log(" fee is paid ? i pridict false ");
console.log(isFeePaid);
// Example 9 logical operators

let isNameFarhan = true;
let isAge26 = true;
console.log("my age is 26? i pridict false");
console.log(!isAge26);

// Example 10 logical operators

let uni = true;
console.log("i didnt go to uni i prodict false");
console.log(!uni);

// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// a. Tests for equality and inequality with strings
// Equality
let equality: string = "Leo";
console.log("is leo==leo? i pridict true");
console.log(equality == "Leo");
// inequality
let equality1: string = "Leo";
console.log("is leo==leo? i pridict true");
console.log(equality1 == "leo");



// b. Tests using the lower case function

let lowerCase: string = "farhan";
let isLowerCase = false;
console.log("it is lower case? i predict true");
console.log(lowerCase.toLowerCase() == "farhan");
// c. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let a: number = 10;
let b: number = 20;
console.log("start", a == b);
console.log(a != b);
console.log(a >= b && a <= b);
console.log(a >= b || a <= b);
console.log(a <= b);
console.log("............");

// d. Tests using "and" and "or" operators
let c: number = 20;
let d: number = 30;
console.log(c == d && c < d);
console.log(c == d || c < d);
console.log("*****");

// e. Test whether an item is in a array
var arr2: string[] = ["Chocolate", "Sandwich", "Pizza", "burger"];
if (arr2.includes("Chocolate")) {
    console.log("Chocolate");
} else {
    console.log("item not include");

}


// f. Test whether an item is not in a array
var arr3: string[] = ["Chocolate", "Sandwich", "Pizza", "burger"];
if (arr3.includes("fries")) {
    console.log("Chocolate");
} else 
    console.log("item not include");


// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

var alien_color: string[] = ["green", "yellow", "red"];
// a. Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let color: boolean = alien_color.includes("green")
if (color) {
    console.log("Player just earned 5 points");

}

//b. Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

if (color) {
    console.log("Test is pass");
    console.log(color == true);
} else {
    console.log(false);

}

// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var alien_color2: string[] = ["green", "yellow", "red"];
// a. If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let color2: boolean = alien_color2.includes("Green")
if (color2) {
    console.log("player just earned 5 points for shooting the alien.");
    // b. If the alien’s color isn’t green, print a statement that the player just earned 10 points. 
} else {
    console.log("player just earned 10 points.");

}

// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var alien_color3: string[] = ["green", "yellow", "red"];

//a. If the alien is green, print a message that the player earned 5 points.
for (let i = 0; i < alien_color3.length; i++) {
    if (alien_color3[i] == "green") {
        console.log(alien_color3[i], "So, player earned 5 points.");
        //b. If the alien is yellow, print a message that the player earned 10 points.
    } else if (alien_color3[i] == "yellow") {
        console.log(alien_color3[i], "So,player earned 10 points.");
        //c. If the alien is red, print a message that the player earned 15 points.
    } else if (alien_color3[i] == "red") {
        console.log(alien_color3[i], "So,player earned 15 points.");
    }
}


// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

var age: number = 24;
// a. If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("person is baby");
    // b. If the person is at least 2 years old but less than 4, print a message that the  person is a toddler. 
} else if (age == 2 || age < 4) {
    console.log("person is a toddler.");
    // c. If the person is at least 4 years old but less than 13, print a message that the person is a kid.   
} else if (age == 4 || age < 13) {
    console.log("person is a kid");
    // d. If the person is at least 13 years old but less than 20, print a message that the person is a teenager.    
} else if (age == 13 || age < 20) {
    console.log("person is a teenager.");
    // e. If the person is at least 20 years old but less than 65, print a message that the person is an adult.   
} else if (age == 20 || age < 65) {
    console.log("person is an adult.");
    // f. If the person is age 65 or older, print a message that the person is an  elder    
} else if (age >= 65) {
    console.log("person is an  elder");

}

// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// a. Make a array of your three favorite fruits and call it favorite_fruits.
var favFruits: string[] = ["apple", "banana", "orange", "dates", "kiwi", "grapes"]

// b. Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
favFruits.map((fruit) => {
    if (fruit == "apple") {
        console.log("i like apple it Gives the energy");

    } else if (fruit == "banana") {
        console.log("i like banana it Gives the energy ");

    } else if (fruit == "orange") {
        console.log("i like orange it Gives the energy ");

    } else if (fruit == "dates") {
        console.log("i like dates it Gives the energy ");

    } else if (fruit == "kiwi") {
        console.log("i like kiwi it Gives the energy ");

    } else {
        console.log("i dont like ");

    }

    // 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:


var usernames: string[] = ["admin", "farhan", "ali", "asad"]

// a. If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
usernames.map((Names) => {
    if (Names == "admin") {
        console.log("HELLO ADMIN would you like to see a status report?");
        // b. Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.     
    } else if (Names == "farhan") {
        console.log("Hello", Names, "thank you for logging in again.");

    } else if (Names == "ali") {
        console.log("Hello", Names, "thank you for logging in again.");

    } else if (Names == "asad") {
        console.log("Hello", Names, "thank you for logging in again.");

    }
})

console.log(".........******");

// by using for loop
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("HELLO ", usernames[i], "would you like to see a status report?");

    } else {
        console.log("Hello", usernames[i], "thank you for logging in again.");

    }
}



// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

var users: string[] = ["Farhan", "Ali", "Asad", "Hassan"]
// a. Remove all of the usernames from your array, and make sure the correct message is printed.

while (users.length > 0) {
    users.pop()
}
// b. If the list is empty, print the message We need to find some users!
if (users.length == 0) {
    console.log("We Need some users!");

}






