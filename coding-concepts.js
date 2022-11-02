// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
 console.log(colors.push("indigo"))

// a) Your answer: "indigo" will be added to the array at the last index(4).
// b) Verify and explain: My answer is incorrect. It seems that "indigo" has indeed been passed to the array,
//however the |const colors| has not been called. This will display the length of the array with 
//the index of 5.  

// --------------------1) What will this log?

const cohort = "LEARN 2022"
 console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: My answer of 10 is correct. I came to this conclusion, understanding that
//the informational command |.length| returns the number of elements in a string, plus one.

// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: My answer of o is correct. The constant greeting is run in console.log, 
//and the index of 4 within the array. What is called is index 4, (o), in the string "Hello World!"   

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:"Ruby"
// b) Verify and explain: My answer of "Ruby" is correct. The constant |languages| is being argued with
//the constant |index| as an array. When console.log is ran the terminal outputs "Ruby" because the value
// of |index| is 1. "Ruby" lies at index 1 in the array of |const languages|.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:["SATURDAY", "SUNDAY"]
// b) Verify and explain: My answer is incorrect. The terminal outputs a furious: TypeError: 
//weekendDays.toUpperCase is not a function. At first I thought the instructors had sabotaged the
//syntax somehow to keep us on our toes. Then I came to understand the method |.toUpperCase|
// only works on a string. This code is written with |const weekendDays| as an array.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer:array 4
// b) Verify and explain: My answer is incorrect. The terminal output is: number. I came to
//the incorrect answer thinking that |typeof| and |.length| operators were going to output what
//the value of |const dataTypes| is, as well as how many indexes.
