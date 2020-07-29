// let question = []

let quizQuestions = [
    {
        question: "What does HTML stand for?",
         answers: [
            "Hyper Text Markup Language",
            "Hairy Teachers Make Lasagna",
            "Hyperlink Textual Markup Language",
            "Hyper Text Markdown Language"
         ],
        correctAnswer: "0",
    },
    {
        question: "Which character is used to indicate an end tag?",
         answers: [
            ".",
            "#",
            "/",
            "~"
         ],
correctAnswer: "c" ,
    },
{
        question: "In what order do you designate border sizes?",
         answers: [
             "Top, right, bottom, left",
             "Top, bottom, left, right",
             "Left, right, top, bottom", 
             "Right, left, top, bottom"
         ],
correctAnswer: "a"
    },
    {
        question: "How would you select an element with the class name 'example'?", 
         answers: [
             "example",
             "for (example)",
             "#example",
             ".example"
         ],
        correctAnswer: "d",
    },
    {
        question: "The bootstrap grid system is based on how many columns?",
         answers: [
             "6",
             "1000",
             "12",
             "10"
         ],
        correctAnswer: "c",
    },
{
        question: "Which plugin is used to cycle through elements, one after another, like a slideshow?",
         answers: [
             "Carousel",
             "Fluid container",
             "Merry-go-round",
             "Cycle"
         ],
        correctAnswer: "a"
    },
    {
        question: "How does a for loop start?",
         answers: [
             "let i = 0",
             "for (i = 0; i > 5; i++)",
             "if (condition) {} else {}",
             "for (i > x;) let i = 0"
         ],
        correctAnswer: "b",
    },
 
 
];


let questionNameH3 = document.querySelector("#quizQuestions");

questionNameH3.textContent = quizQuestions[0].question;


let firstAnswerChoiceLi = document.querySelector("#answerChoice1")
let secondAnswerChoiceLi = document.querySelector("#answerChoice2")
let thirdAnswerChoiceLi = document.querySelector("#answerChoice3")
let fourthAnswerChoiceLi = document.querySelector("#answerChoice4");

firstAnswerChoiceLi.textContent = quizQuestions[0].answers[0]
secondAnswerChoiceLi.textContent = quizQuestions[0].answers[1]
thirdAnswerChoiceLi.textContent = quizQuestions[0].answers[2]
fourthAnswerChoiceLi.textContent = quizQuestions[0].answers[3];



