
var questions = [{
    question: "What percent of all adults have their mobile phone within arm’s reach every hour of every day?",
    choices: ["91%", "78%", "54%", "26%"],
    correctAnswer: 0
}, {
    question: "Out of 6.8 billion people on the planet, only 3.5 billion of them use a toothbrush. How many of them use a mobile phone?",
    choices: ["4 Billion!", "2 Billion!", "900 Million!", "All of them!"],
    correctAnswer: 0
}, {
    question: "Which one of these companies started in a garage?",
    choices: ["Hewlett Packard", "Apple", "Microsoft", "All of the above"],
    correctAnswer: 3
}, {
    question: "How many Snapchat messages are being sent every day?",
    choices: ["1 Billion", "350 Million", "64 Million", "1 Million"],
    correctAnswer: 1
}];


var questionContainer = $("#questionArea");
var score = 0;
var quizOver = false;
var clock;
var timerInterval;
var timer = $('#timer');

$(document).ready(function () {

  $('#start-btn').on('click', function() {
    $(this).remove();
    playGame();
    $('#reset-btn').hide ();
  });

  function startTimer() {
    timer.text(clock);

    timerInterval = setInterval(function() {
    clock-=1;
    timer.text(clock);

    if(clock == 0) {
      timer.empty();
      scoreGame();
    }

    }, 1000);
  }

  function playGame() {
    clock = 60;
      questionContainer.empty();

    setUpBoard();
    makeScoreGameBtn();
    startTimer();
  }

  function makeScoreGameBtn() {
    var scoreGameBtn = $('<button>');
    scoreGameBtn.text('Submit');

    scoreGameBtn.on('click', scoreGame);

    questionContainer.append(scoreGameBtn);

  }

  function scoreGame() {
    clearInterval(timerInterval);

    var answers = $('input:checked');

    for(var i = 0; i < questions.length; i++) {
      var correctAnswer = questions[i].choices[questions[i].correctAnswer];

      if(correctAnswer == $(answers[i]).attr('answer')) {
        score++;
      }
    }

    var scoreResult = $("<p>");
    scoreResult.text("You got " + score + " questions right.");

    questionContainer.empty();

    questionContainer.append(scoreResult);

    $('#reset-btn').show ();
    $('#reset-btn').on ('click', resetGame);
    // setTimeout(playGame, 5000);

  }

  function resetGame () {
    timer.empty();
    clearInterval(timerInterval);
    playGame();
  }
  

  function setUpBoard() {

    for(var i = 0; i < questions.length; i++) {
      var questionDiv = $('<div>');
      questionDiv.attr('question', 'question' + i);
      var currentQuestion = questions[i];
      var questionBox = $('<p>');
      questionBox.text(currentQuestion.question);

      var answersBox = $('<div>');

      for(var j = 0; j < currentQuestion.choices.length; j++) {
        var currentAnswerChoice = currentQuestion.choices[j];
        var currentAnswerBox = $('<input>' + currentAnswerChoice + '</input>');
        currentAnswerBox.attr({type: 'radio',
                              name: 'answer' + i,
                              id: 'radios',
                              answer: currentAnswerChoice});
        answersBox.append(currentAnswerBox);
      }

      questionDiv.append(questionBox);
      questionDiv.append(answersBox);

      questionContainer.append(questionDiv);

    }




  }




});
