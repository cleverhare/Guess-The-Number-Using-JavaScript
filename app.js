// welcome to the guess the number game 
console.log("WLECOME TO  THE  GAME");
console.log("You have to guess the correct number between 1 to 100 /n     And 99 is the highest possible score");

// generating a random number
let random_number = Math.floor(Math.random() * 100);
// console.log(random_number);

// some needed variable declarations 
let user_num = 0;
let guesses = 0;

// loop to check the status regarding the number ie, smaller or bigger or exact
while (user_num !== random_number) {
   user_num = prompt("Enter your Guess : ")

  if (random_number > user_num) {
    console.log("The number you have entered is SMALLER than the original number ");
    console.log("Please Try again");
    guesses++;
  }
  else if (random_number < user_num) {
    console.log("The number you have entered is GREATER than the original number ");
    console.log("Please try again!");
    guesses++;
  }
  if (user_num == random_number) {
    guesses++
    let score = 100 - guesses
  console.log(`Congratulations. You have guessed the number` ); 
    console.log(`Thanks for playing and your score is:  ${score}` ); 
    break;
  }

}

//Done:- Hand coded by Soumyajit Brahma
// And Thanks for checking out this repl HARRY BHAI AND ALSO ALL THE INDIVIDUALS WHO HAVE CHECKED THIS REPL
