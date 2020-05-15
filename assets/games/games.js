var userNumber = 9;
var counter = 0;
var maxTries = 6;

alert("You have 10 guesses Guess 1-10");

var randomNumber = Math.floor(Math.random() * userNumber) + 1;

while (guess != randomNumber) {
  var guess = prompt("What's Your Guess");
  counter = counter + 1;

  if (counter > maxTries) {
    document.write("You're out of tries. Press Return To Restart");
    break;
  }

  if (guess == randomNumber) {
    document.write("Congrats You Got The Correct Number");
    document.write("<p> The Random Number Was" + guess);
    document.write("<p> It Took You" + counter + "<p>");
  }
}

console.log("Program Complete");
