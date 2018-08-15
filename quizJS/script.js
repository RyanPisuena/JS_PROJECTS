let questions = [{
    prompt: "Javascript is a case-sensitive language \n (a) yes \n (b) no",
    answer: "a"
  },
  {
    prompt: "(As of August 7, 2018) What is the latest version of JS? \n (a) ES0 \n (b) IE8 (c) ES6 (d) Mozilla Firefox",
    answer: "c"
  },
  {
    prompt: "Is Java the same as Javascript? \n (a) yes \n (b) no",
    answer: "b"
  }
]

let score = 0;

for (let i = 0; i < questions.length; i++) {
  let response = window.prompt(questions[i].prompt);
  if (response == questions[i].answer) {
    score++;
  } else
    alert("incorrect.");

  alert("you received" + score + "/" + questions.length);
}
