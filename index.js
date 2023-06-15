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


function answerNoOne (){

  const boldOneEL = document.getElementById("bold-one")

  revealAnswerOneEl.style.transform = 'rotate(180deg)'
  boldOneEL.style.fontWeight = '800'
  boldOneEL.style.color = 'black'
  boldOneEL.style.fontSize = '13px'

  answerOneEl.style.display= 'inline'
  
  
};


function answerNoTwo (){
 
  const boldTwoEL = document.getElementById("bold-two")

  revealAnswerTwoEl.style.transform = 'rotate(180deg)'
  boldTwoEL.style.fontWeight = '800'
  boldTwoEL.style.color = 'black'
  boldTwoEL.style.fontSize = '13px'

 answerTwoEl.style.display= 'inline'
 
};

function answerNoThree (){
  const boldThreeEL = document.getElementById("bold-three")

 
  revealAnswerThreeEl.style.transform = 'rotate(180deg)'
  boldThreeEL.style.fontWeight = '800'
  boldThreeEL.style.color = 'black'
  boldThreeEL.style.fontSize = '13px'

  answerThreeEl.style.display= 'inline'
};

function answerNoFour (){
  const boldFourEL = document.getElementById("bold-four")

  revealAnswerFourEl.style.transform = 'rotate(180deg)'
  boldFourEL.style.fontWeight = '800'
  boldFourEL.style.color = 'black'
  boldFourEL.style.fontSize = '13px'

  answerFourEl.style.display= 'inline'
};

function answerNoFive (){
  const boldFiveEL = document.getElementById("bold-five")
 
  revealAnswerFiveEl.style.transform = 'rotate(180deg)'
  boldFiveEL.style.fontWeight = '800'
  boldFiveEL.style.color = 'black'
  boldFiveEL.style.fontSize = '13px'

  answerFiveEl.style.display= 'inline'
};