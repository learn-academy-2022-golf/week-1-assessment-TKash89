// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
//const fruit1 = "apple"
//const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
//const fruit3 = "cherry"
//const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
            //  Creating this function, I will utilize the Boolean primitive data type. I spent the most time on this code with a failed results.
// I created a function using the provided variables. I created a const |boilPoint| to run everything in console.log.
// The output reads |Cannot access 'temp1' before initialization|. I attempted different combinations and checked my syntax and have not been 
//able to display the correct result. 





    const boilPoint = (temp1) => {
    if(temp1 < 212) {
        return `${temp1} is below boiling point`
    }
    else if(temp2 > 212){
        return `${temp2} is above boiling point`
    }
    else( temp3 === 212)  ;
        return `${temp3} is at boiling point`
    }

console.log(boilPoint(temp1))
console.log(boilPoint(temp2))
console.log(boilPoint(temp3))

const temp1 = 42
  // Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
        //To solve this, I begin with the accessor |.join| in order to combine the
  // two arrays. This is outputing the arrays adding themselves together instead of my intended action.

       //Realizing |.join| creates a string, I proceed with accessor |.concat|, successfully
  //combining the arrays into one.

      //Next, in order to return the length and not the parameters, I choose to create a variable
  // called |combinePadres| to bring both constants together.

      // Getting the output: |9| requires to console log my new variable, arguing a .length 
  //built in method.


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]


var combinePadres = padres1984WorldSeriesRuns. concat(padres1998WorldSeriesRuns)

console.log(combinePadres.length)

// Expected output: 9




// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
        //To solve this problem, I need to convert this string into an Array. I begin to set 
    //up a console.log, next my goal is to use the array method |.split("")| to convert the 
    //string "Golf 2022" into an array. Specifically using ("") as the argument to separate each
    // individual letter.
        //Once the string has been changed to an array, I can now freely reverse the letters in 
    //the array with |.reverse|.
        // My last step is to now bring the output back to the original string. I add a
    //|.join| in order to accomplish this. With the code below, the outcome in terminal
    //shows the intended answer.



const currentCohort = "Golf 2022"

console.log(currentCohort.split("").reverse().join()) 
 
// Expected output: "2202 floG"




// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

          // To find last index of the provided values, I utilize the built in method array 
    //accessor |.lastIndexOf|.
          // Setting up console.log, I run the array |myNumbers| with the built in method |.lastOfIndex|.
    // Const |givenValue1| will be the target. Running the code in terminal provides the expected
    //output: 7.
          //I use the exact same method to return the last index of const |givenValue2|, and 
    //get the expected outut: 8.
          //****** Even though I did get the correct answer using this straigh-forward method, 
    //I don't quite understand why these ARE the answers. I'm counting the indexes and it is not 
    //making sense the way |.lastIndexOf| is finding these answers.  

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

console.log(myNumbers.lastIndexOf(givenValue1))

// Expected output: 7

const givenValue2 = 10

console.log(myNumbers.lastIndexOf(givenValue2))

// Expected output: 8




// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

          //The two arrays provided, I broke into two different steps to solve:
          //I set up a |console.log| and put the first constant to argue with the built in method
      // |.sort|. This mutator built in method gave me an output of the array (Lowest-Highest).
          //My second step was to use the built in method mutator |.reverse| in order to reverse the array.
          // I set up the same code for the other constant, getting the correct result in terminal.

        

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]


console.log(sanDiegoSummerTemperatures.sort().reverse())
console.log(sanDiegoWinterTemperatures.sort().reverse())