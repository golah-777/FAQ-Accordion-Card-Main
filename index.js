let revealAnswerOneEl = document.getElementById("reveal-answer-one");

let revealAnswerTwoEl = document.getElementById("reveal-answer-two");

let revealAnswerThreeEl = document.getElementById("reveal-answer-three");

let revealAnswerFourEl = document.getElementById("reveal-answer-four");

let revealAnswerFiveEl = document.getElementById("reveal-answer-five");

const answerOneEl = document.getElementById("answer-one");

const answerTwoEl = document.getElementById("answer-two");

const answerThreeEl = document.getElementById("answer-three");

const answerFourEl = document.getElementById("answer-four");

const answerFiveEl = document.getElementById("answer-five");

const boldOneEL = document.getElementById("bold-one")
const boldTwoEL = document.getElementById("bold-two")
const boldThreeEL = document.getElementById("bold-three")
const boldFourEL = document.getElementById("bold-four")
const boldFiveEL = document.getElementById("bold-five")


function answerNoOne (){
  revealAnswerOneEl.style.transform = 'rotate(180deg)'
  boldOneEL.style.fontWeight = '800'
  boldOneEL.style.color = 'black'
  boldOneEL.style.fontSize = '13px'

  answerOneEl.style.display= 'inline'
  
  answerTwoEl.style.display= 'none'
  answerThreeEl.style.display= 'none'
  answerFourEl.style.display= 'none'
  answerFiveEl.style.display= 'none'

 // for other function to not work

 revealAnswerFiveEl.style.transform = 'rotate(360deg)'
 boldFiveEL.style.fontWeight = '400'
 boldFiveEL.style.color = 'hsl(237, 12%, 33%)'
 boldFiveEL.style.fontSize = '13px'

 revealAnswerTwoEl.style.transform = 'rotate(360deg)'
 boldTwoEL.style.fontWeight = '400'
 boldTwoEL.style.color = 'hsl(237, 12%, 33%)'
 boldTwoEL.style.fontSize = '13px'

 revealAnswerThreeEl.style.transform = 'rotate(360deg)'
 boldThreeEL.style.fontWeight = '400'
 boldThreeEL.style.color = 'hsl(237, 12%, 33%)'
 boldThreeEL.style.fontSize = '13px'

 revealAnswerFourEl.style.transform = 'rotate(360deg)'
 boldFourEL.style.fontWeight = '400'
 boldFourEL.style.color = 'hsl(237, 12%, 33%)'
 boldFourEL.style.fontSize = '13px'  
};


function answerNoTwo (){
  revealAnswerTwoEl.style.transform = 'rotate(180deg)'
  boldTwoEL.style.fontWeight = '800'
  boldTwoEL.style.color = 'black'
  boldTwoEL.style.fontSize = '13px'

 answerTwoEl.style.display= 'inline'

 answerOneEl.style.display= 'none'
 answerThreeEl.style.display= 'none'
 answerFourEl.style.display= 'none'
 answerFiveEl.style.display= 'none'

 // for other function to not work

 revealAnswerOneEl.style.transform = 'rotate(360deg)'
 boldOneEL.style.fontWeight = '400'
 boldOneEL.style.color = 'hsl(237, 12%, 33%)'
 boldOneEL.style.fontSize = '13px'

 revealAnswerFiveEl.style.transform = 'rotate(360deg)'
 boldFiveEL.style.fontWeight = '400'
 boldFiveEL.style.color = 'hsl(237, 12%, 33%)'
 boldFiveEL.style.fontSize = '13px'

 revealAnswerThreeEl.style.transform = 'rotate(360deg)'
 boldThreeEL.style.fontWeight = '400'
 boldThreeEL.style.color = 'hsl(237, 12%, 33%)'
 boldThreeEL.style.fontSize = '13px'

 revealAnswerFourEl.style.transform = 'rotate(360deg)'
 boldFourEL.style.fontWeight = '400'
 boldFourEL.style.color = 'hsl(237, 12%, 33%)'
 boldFourEL.style.fontSize = '13px' 
 
};

function answerNoThree (){
  revealAnswerThreeEl.style.transform = 'rotate(180deg)'
  boldThreeEL.style.fontWeight = '800'
  boldThreeEL.style.color = 'black'
  boldThreeEL.style.fontSize = '13px'

  answerThreeEl.style.display= 'inline'

  answerTwoEl.style.display= 'none'
  answerOneEl.style.display= 'none'
  answerFourEl.style.display= 'none'
  answerFiveEl.style.display= 'none'

  // for other function to not work

  revealAnswerOneEl.style.transform = 'rotate(360deg)'
  boldOneEL.style.fontWeight = '400'
  boldOneEL.style.color = 'hsl(237, 12%, 33%)'
  boldOneEL.style.fontSize = '13px'

  revealAnswerTwoEl.style.transform = 'rotate(360deg)'
  boldTwoEL.style.fontWeight = '400'
  boldTwoEL.style.color = 'hsl(237, 12%, 33%)'
  boldTwoEL.style.fontSize = '13px'

  revealAnswerFiveEl.style.transform = 'rotate(360deg)'
  boldFiveEL.style.fontWeight = '400'
  boldFiveEL.style.color = 'hsl(237, 12%, 33%)'
  boldFiveEL.style.fontSize = '13px'

  revealAnswerFourEl.style.transform = 'rotate(360deg)'
  boldFourEL.style.fontWeight = '400'
  boldFourEL.style.color = 'hsl(237, 12%, 33%)'
  boldFourEL.style.fontSize = '13px'
};

function answerNoFour (){
  revealAnswerFourEl.style.transform = 'rotate(180deg)'
  boldFourEL.style.fontWeight = '800'
  boldFourEL.style.color = 'black'
  boldFourEL.style.fontSize = '13px'

  answerFourEl.style.display= 'inline'

  answerTwoEl.style.display= 'none'
  answerThreeEl.style.display= 'none'
  answerOneEl.style.display= 'none'
  answerFiveEl.style.display= 'none'

  // for other function to not work

  revealAnswerOneEl.style.transform = 'rotate(360deg)'
  boldOneEL.style.fontWeight = '400'
  boldOneEL.style.color = 'hsl(237, 12%, 33%)'
  boldOneEL.style.fontSize = '13px'

  revealAnswerTwoEl.style.transform = 'rotate(360deg)'
  boldTwoEL.style.fontWeight = '400'
  boldTwoEL.style.color = 'hsl(237, 12%, 33%)'
  boldTwoEL.style.fontSize = '13px'

  revealAnswerThreeEl.style.transform = 'rotate(360deg)'
  boldThreeEL.style.fontWeight = '400'
  boldThreeEL.style.color = 'hsl(237, 12%, 33%)'
  boldThreeEL.style.fontSize = '13px'

  revealAnswerFiveEl.style.transform = 'rotate(360deg)'
  boldFiveEL.style.fontWeight = '400'
  boldFiveEL.style.color = 'hsl(237, 12%, 33%)'
  boldFiveEL.style.fontSize = '13px'
};

function answerNoFive (){
  revealAnswerFiveEl.style.transform = 'rotate(180deg)'
  boldFiveEL.style.fontWeight = '800'
  boldFiveEL.style.color = 'black'
  boldFiveEL.style.fontSize = '13px'

  answerFiveEl.style.display= 'inline'

  answerTwoEl.style.display= 'none'
  answerThreeEl.style.display= 'none'
  answerFourEl.style.display= 'none'
  answerOneEl.style.display= 'none'

  // for other function to not work

  revealAnswerOneEl.style.transform = 'rotate(360deg)'
  boldOneEL.style.fontWeight = '400'
  boldOneEL.style.color = 'hsl(237, 12%, 33%)'
  boldOneEL.style.fontSize = '13px'

  revealAnswerTwoEl.style.transform = 'rotate(360deg)'
  boldTwoEL.style.fontWeight = '400'
  boldTwoEL.style.color = 'hsl(237, 12%, 33%)'
  boldTwoEL.style.fontSize = '13px'

  revealAnswerThreeEl.style.transform = 'rotate(360deg)'
  boldThreeEL.style.fontWeight = '400'
  boldThreeEL.style.color = 'hsl(237, 12%, 33%)'
  boldThreeEL.style.fontSize = '13px'

  revealAnswerFourEl.style.transform = 'rotate(360deg)'
  boldFourEL.style.fontWeight = '400'
  boldFourEL.style.color = 'hsl(237, 12%, 33%)'
  boldFourEL.style.fontSize = '13px'
};