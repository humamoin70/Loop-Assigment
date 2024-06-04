"use strict";
// 1. Create a blank array: Start by setting up an empty array named myWork that will hold
// objects.
// Write a for loop that runs from 1 to 10. In each iteration:
// let myWork = []
//     for ( let i = 1; i<= 10; i++ ) {
//         let lesson = {
//         name: `Lesson ${i}`,
//         ststus: i % 2 === 1
//         };
//         myWork.push(lesson);
//     }
//     console.log(myWork);
// /Counter increment ter (using do while loop)
// let counter:number = 0;
// let step = 5;
// do {
//     console.log(`Counter value ${counter}`);
//     counter += step;
// }while (counter <= 100)
//     console.log(`counter has been finished!`);
//     2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
let maximValue = 10;
let randomNumber = (Math.floor(Math.random() * maximValue + 1));
console.log(randomNumber);
let correctGuess = false;
let guessNumber = [2, 3, 5, 7, 8, 9, 10, 1];
let n = 0;
while (!correctGuess && n < guessNumber.length) {
    let currentGuess = guessNumber[n];
    if (currentGuess === randomNumber) {
        correctGuess = true;
        console.log(`Congrats! You've guessed the correct number.`);
    }
    else if (currentGuess < randomNumber) {
        console.log(`Your guess ${currentGuess} is too low... Try Again`);
    }
    else
        (currentGuess > randomNumber);
    {
        console.log(`Your guess ${currentGuess} is too high... Try Again`);
    }
    n++;
}
;
console.log(`The random number was ${randomNumber}`);
