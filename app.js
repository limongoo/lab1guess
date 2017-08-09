  console.log('start');

// quiz function
function promptQuiz(){

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



askQuiz("Do I like tacos?", "yes", "q1");
askQuiz("Where was I born? Indonesia or Japan?", "Indonesia", "q2");
askQuiz("What's my favorite color?", "black", "q3");


// ask function
function askQuiz(question, answer, result) {


  var guess = prompt(question);
  if (guess.toLowerCase() === answer.toLowerCase()) {
    document.getElementById(result).innerHTML = "Correct, bueno!";
    counterCorrect++;
    totalClick++;
  }
  else {
    document.getElementById(result).innerHTML = "Wrong, no bueno!";
    counterWrong++;
    totalClick++;
  }
}



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

}// End function

// Report counter
  console.log('end');
