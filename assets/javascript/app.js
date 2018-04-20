
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

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
