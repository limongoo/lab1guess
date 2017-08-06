console.log('start');

var counterCorrect = 0;
var counterWrong = 0;

// quiz function
function promptQuiz(){

// question 1
var question1 = prompt("Do I like tacos?", "yes or no");
  if (question1 === "yes") {
    alert ("You are correct, I love tacos!");
    counterCorrect++;
  }
  else {
    alert ("Sadface, you guessed incorrectly.");
    counterWrong++;
  }

// question 2
var correct = "Indonesia";
var question2 = "";
    while (question2 != correct.toLowerCase()) {
      question2 = prompt("Where was I born? Indonesia, Japan or Thailand");
      if (question2 === correct.toLowerCase()){
        alert ("You are correct!");
        counterCorrect++;
        break;
      }
      else {
        alert ("Try again please.");
        counterWrong++;
      }
    }

// question 3
var question3 = prompt("What's my favorite color?");
  if (question3 === "black") {
    alert ("You are correct!");
    counterCorrect++;
  }
  else {
    alert ("You are wrong.");
    counterWrong++;
  }
}

// Report counter
document.getElementById('yes').innerHTML = counterCorrect;
document.getElementById('no').innerHTML = counterWrong;

console.log(counterCorrect);
console.log(counterWrong);
console.log('end');
