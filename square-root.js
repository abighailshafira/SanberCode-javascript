/*
  Buatlah sebuah program akar pangkat 2 dari x, di mana x merupakan bilangan genap, dengan kondisi sebagai berikut:
  - Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
  - Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
*/

const prompt = require("prompt-sync")({ sigint: true }); // import library to capture user input

const number = Number(prompt("Input number: "));

const squareRoot = (number) => {
  if (number < 0) {
    // check if the number is negative
    console.log("Negative number is not allowed.");
  } else if (number % 2 === 1) {
    // check if the number is odd
    console.log("Odd number is not allowed.");
  } else {
    // the number is even and positive
    const result = Math.sqrt(number); // method returns the square root of a number
    console.log(`The square root of ${number} is ${result}.`);
  }
};

squareRoot(number);
