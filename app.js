/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*----------------------------------------------------------------------------------------------------------------
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

/* attempt 1 */
// const isAdult = (a) => {
//     let result;
//     if (a >= 18) {
//         result = `${a} is an Adult`;
//     }
//     else {
//         result = `${a} is a Minor`;
//     }
//     return result;
// }

// console.log('Exercise 2 Result:', isAdult(21));
// console.log('Exercise 2 Result:', isAdult(15));

/* version 2 */
const isAdult = (a) => {
    if (a >= 18) return `${a} is an Adult`;
    return `${a} is a Minor`;
}

console.log('Exercise 2 Result:', isAdult(21));
console.log('Exercise 2 Result:', isAdult(15));

/* ----------------------------------------------------------------------------------------------------------------
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/


/* my initial solution */
const isCharAVowel = (a) => {
    let letter;
    if ((a === "a") || (a === "e") || (a === "i") || (a === "o") || (a === "u")) {
        letter = true;
    }
    else { 
        letter = false;
    }
    return letter;
}
console.log('Exercise 3 Result:', isCharAVowel("a"));


/* Help to simplify from Alara */
const isCharAVowel2 = (a) => {
    const vowels = "aeiou";
    const vowel = vowels.includes(a);
    return vowel;
}
console.log('Exercise 3 Result:', isCharAVowel2("a"));


/*further refinement from Alara */
const isCharAVowel3 = (character) => {
    return "aeiouAEIOU".includes(character);
}
console.log('Exercise 3 Result:', isCharAVowel3("A"));


/*----------------------------------------------------------------------------------------------------------------
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (a, b) => {
    // let email;
    // email = a + "@" + b;
    // return email;
    return a + "@" + b;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*----------------------------------------------------------------------------------------------------------
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, time) => {
    // let greeting;
    // greeting = `Good ${time}, ${name}!`;
    // return greeting;
    return `Good ${time}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*----------------------------------------------------------------------------------------------------------
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

/* first attempt */
// const maxOfThree = (a, b, c) => {
//     if (a >= b && a>=c) {
//         return a;
//     }
//     else if (b >= a && b >= c) {
//         return b;
//     }
//     else {
//         return c;
//     }
// }

// console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/* version 2 */
const maxOfThree = (a, b, c) => {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*----------------------------------------------------------------------------------------------------------
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (bill, tipamount) => {
    // tip = ((tipamount / 100) * bill); 
    // return tip;
    return ((tipamount / 100) * bill);
}

console.log('Exercise 7 Result: The tip will cost $' + calculateTip(50, 20));

/*----------------------------------------------------------------------------------------------------------
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

/* attempt 1 */
// const convertTemperature = (temp, scale) => {
//     let temperature;
//     if (scale === "F") {
//         temperature = "Temp in F is " + ((temp - 32) * (5/9));
//     }
//     else if (scale === "C") {
//         temperature = "Temp in C is " + ((temp * (9/5)) + 32);
//     }
//     else {
//         temperature = "error in scale format";
//     }
//     return temperature;
// }

// console.log('Exercise 8 Result:', convertTemperature(32, "C"));
// console.log('Exercise 8 Result:', convertTemperature(32, "F"));

/* version 2 */
const convertTemperature = (temp, scale) => {
    if (scale === "F") return "Temp in F is " + ((temp - 32) * (5/9));
    if (scale === "C") return "Temp in C is " + ((temp * (9/5)) + 32);
    return "error in scale format";
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('Exercise 8 Result:', convertTemperature(32, "F"));
console.log('Exercise 8 Result:', convertTemperature(32, "f"));

/*----------------------------------------------------------------------------------------------------------
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

/* attempt 1 */
// const basicCalculator = (num1, num2, operation) => {
//     let value;
//     if (operation === "add") {
//         value = (num1 + num2);
//     }
//     else if (operation === "subtract") {
//         value = (num1 - num2);
//     }
//     else if (operation === "multiply") {
//         value = (num1 * num2);
//     }
//     else if (operation === "divide") {
//         value = (num1 / num2);
//     }
//     else {
//         value = "error in operation syntax";
//     }
//     return value;
// }

// console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));
// console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
// console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));
// console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));
// console.log('Exercise 9 Result:', basicCalculator(10, 5, "error"));

/* version 2 */
const basicCalculator = (num1, num2, operation) => {
    let value;
    if (operation === "add") return (num1 + num2);
    if (operation === "subtract") return (num1 - num2);
    if (operation === "multiply") return (num1 * num2);
    if (operation === "divide") return (num1 / num2);
    return "error in operation syntax";
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "error"));

/*----------------------------------------------------------------------------------------------------------
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

/* first attempt */
// const calculateGrade = (grade) => {
//     if (grade >= 90) {
//         grade = "You got an A, Congrats!"
//     }
//     else if (grade >= 80) {
//         grade = "B";
//     }
//     else if (grade >= 70) {
//         grade = "C";
//     }
//     else if (grade >= 60) {
//         grade = "D";
//     }
//     else {
//         grade = "You got an F, study more!";
//     }
//     return grade;
// }

// console.log('Exercise 10 Result:', calculateGrade(85));
// console.log('Exercise 10 Result:', calculateGrade(95));
// console.log('Exercise 10 Result:', calculateGrade(55));

/* version 2 */
const calculateGrade = (grade) => {
    if (grade >= 90) return "You got an A, Congrats!";
    if (grade >= 80) return "B";
    if (grade >= 70) return "C";
    if (grade >= 60) return "D";
    return "You got an F, study more!";
};

console.log('Exercise 10 Result:', calculateGrade(85)); // "B"
console.log('Exercise 10 Result:', calculateGrade(95)); // "You got an A, Congrats!"
console.log('Exercise 10 Result:', calculateGrade(55)); // "You got an F, study more!";

/*----------------------------------------------------------------------------------------------------------
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (first, second) => {
    return first.slice(0, 3) + second.slice(0, 3) + (first.length + second.length)
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

/*----------------------------------------------------------------------------------------------------------
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

const numArgs = (...args) => {
    return args.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));