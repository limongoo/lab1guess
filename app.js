console.log('start');

var question1 = prompt("Do I like tacos?", "yes/no");
  if (question1 === "yes") {
    alert ("You are correct, I love tacos!");
  }
  else {
    alert ("Sadface, you guessed incorrectly.");
  }

var correct = "Indonesia";
var question2 = prompt("Where was I born? (Indonesia, Japan or Thailand");
  if (question2 === correct.toLowerCase()) {
    alert ("You are correct!");
  }
  else {
    alert ("Try again please.");
    while (question2 != correct.toLowerCase()) {
      prompt("Where was I born? (Indonesia, Japan or Thailand");
      if (correct.toLowerCase()){
        alert ("You are correct!");
        break;
      }
      else {
        alert ("Try again please.");
      }
    }
  }

var question3 = prompt("What's my favorite color?");
  if (question3 === "black") {
    alert ("You are correct!");
  }
  else {
    alert ("You are wrong.");
  }




console.log('end');
