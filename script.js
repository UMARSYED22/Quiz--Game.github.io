// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three", "Four", "Five"],
//   question: "How Many pieces of bun are in a Mcdonald's Big Mac?",
// };
const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];


let score = 0;
let currentques = 0;
const totalScore = quesJSON.length;


//Accessing all the elements
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl=document.getElementById( "next") ;




showQuestion();

nextEl.addEventListener("click", () => {
   scoreEl.textContent = `Score:${score}/${totalScore}`;
  nextQuestion();
 } );
function showQuestion() {
  //destructuring the object
  const { question, options, correctAnswer } = quesJSON[currentques];

  //setting question text content
  questionEl.textContent = question;

  const shuffleoptions = shuffledOptions(options);

  //populating the div by buttons
  shuffleoptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
        
        

      } else {
        score = score - 0.25;
      }
      // console.log(score);
      scoreEl.textContent = `Score:${score}/${totalScore}`;
      nextQuestion();
      
    });
  });
}

function nextQuestion()
{
   optionEl.textContent = "";
  currentques++;
  // console.log(currentques);
  if (currentques >= quesJSON.length) {
    questionEl.textContent = "Quiz Completed!!!";
    nextEl.remove();
   
  } else {
    showQuestion();
  }

}









//shuffling options
function shuffledOptions(options)
{
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random ()* i);
    
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

