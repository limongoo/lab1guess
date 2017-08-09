  console.log('start');

// quiz function
// function promptQuiz(){

// counter
var counterCorrect = 0;
var counterWrong = 0;
var totalClick = 0;

// name
var userName = prompt("What's your name:");
  if (userName == "") {
    document.getElementById('name').innerHTML = "Welcome, robot person, whoever you are!";
  }
  else {
    document.getElementById('name').innerHTML = "Welcome, "+userName+"! You're not a robot!";
  }



question("Do I like tacos?", "yes", "q1");
question("Where was I born? Indonesia or Japan?", "Indonesia", "q2");
question("What's my favorite color?", "black", "q3");


// ask function
function askQuestions(question, answer, result) {
  var guess = prompt(question);
  if (guess.toLowerCase() === answer.toLowerCase()) {
    document.getElementById(result).innerHTML = "Muy bueno!";
    counterCorrect++;
    totalClick++;
  }
  else {
    document.getElementById(result).innerHTML = "Muy no bueno!";
    counterWrong++;
    totalClick++;
  }
}

askQuestions()

// question 1
// var question1 = prompt("Do I like tacos?", "yes or no");
//   if (question1 === "yes") {
//     alert ("You are correct, I love tacos!");
//     counterCorrect+=1;
//     totalClick++;
//   }
//   else {
//     alert ("Sadface, you guessed incorrectly.");
//     counterWrong+=1;
//     totalClick++;
//   }
//
// // question 2
// var correct = "Indonesia";
// var question2 = "";
//     while (question2 != correct.toLowerCase()) {
//       question2 = prompt("Where was I born? Indonesia, Japan or Thailand");
//       if (question2 === correct.toLowerCase()){
//         alert ("You are correct!");
//         counterCorrect+=1;
//         totalClick++;
//         break;
//       }
//       else {
//         alert ("Try again please.");
//         counterWrong+=1;
//         totalClick++;
//       }
//     }
//
// // question 3
// var question3 = prompt("What's my favorite color?");
//   if (question3 === "black") {
//     alert ("You are correct!");
//     counterCorrect+=1;
//     totalClick++;
//   }
//   else {
//     alert ("You are wrong.");
//     counterWrong+=1;
//     totalClick++;
//   }

// add counter to page
document.getElementById('yes').innerHTML = counterCorrect;
document.getElementById('no').innerHTML = counterWrong;
document.getElementById('click').innerHTML = totalClick;

// add answers to page
document.getElementById('q1').innerHTML = question+".";
document.getElementById('q2').innerHTML = question+".";
document.getElementById('q3').innerHTML = question+".";


console.log(counterCorrect);
console.log(counterWrong);

// }// End function

// Report counter
  console.log('end');
