console.log('start');

// quiz function
function promptQuiz(){

// question 1
var question1 = prompt("Do I like tacos?", "yes or no");
  if (question1 === "yes") {
    alert ("You are correct, I love tacos!");
  }
  else {
    alert ("Sadface, you guessed incorrectly.");
  }

// question 2
var correct = "Indonesia";
var question2 = "";
    while (question2 != correct.toLowerCase()) {
      question2 = prompt("Where was I born? Indonesia, Japan or Thailand");
      if (question2 === correct.toLowerCase()){
        alert ("You are correct!");
        break;
      }
      else {
        alert ("Try again please.");
      }
    }

// question 3
var question3 = prompt("What's my favorite color?");
  if (question3 === "black") {
    alert ("You are correct!");
  }
  else {
    alert ("You are wrong.");
  }

}


console.log('end');
