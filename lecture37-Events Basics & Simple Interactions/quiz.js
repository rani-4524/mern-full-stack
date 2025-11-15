
const questions=[
    {
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit!",
       options:[
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      correctOption:2,
    },
    {
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit!",
       options:[
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      correctOption:2,
    },
    {
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit!",
       options:[
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      correctOption:2,
    },
    {
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit!",
       options:[
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      correctOption:2,
    },
    {
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit!",
       options:[
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      correctOption:2,
    },
];

let currentQuesIndex = 0;
let score = 0;
let correctAnsScore = 4;
let wrongAnsScore = -1;

let questionSection=document.querySelector(".questions");

let questionTitle = document.querySelector(".question-title");


const option1=document.querySelector(".option-1");
const option2=document.querySelector(".option-2");
const option3=document.querySelector(".option-3");
const option4=document.querySelector(".option-4");

const nextBtn=document.querySelector(".next");

const scoreSection = document.querySelector(".score");

function changeScore(optionNumber){
  if(questions[currentQuesIndex].correctOption === optionNumber)
    score += correctAnsScore;
  else score += wrongAnsScore;
}

function changeQuestion(){
  if(currentQuesIndex === questions.length - 1){
    questionSection.style.display="none";
    scoreSection.style.display = "block";
    scoreSection.textContent = "Your Score " + score;
  }

  currentQuesIndex++;

  const questionObj = questions[currentQuesIndex];

  questionTitle.textContent = questionObj.title
  option1.textContent=questionObj.options[0];
  option2.textContent=questionObj.options[1];
  option3.textContent=questionObj.options[2];
  option4.textContent=questionObj.options[3];
}


nextBtn.addEventListener("click" , changeQuestion);

option1.addEventListener("click" ,()=>{
  changeScore(1);
  changeQuestion();
});
option2.addEventListener("click" ,()=>{
  changeScore(2);
  changeQuestion();
});
option3.addEventListener("click" ,()=>{
  changeScore(3);
  changeQuestion();
});
option4.addEventListener("click" ,()=>{
  changeScore(4);
  changeQuestion();
});