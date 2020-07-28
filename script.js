

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
         answers: {
            a: "Top, right, bottom, left",
            b: "Top, bottom, left, right",
            c: "Left, right, top, bottom"
        },
correctAnswer: "a"
    },
    {
        question: "How would you select an element with the class name 'example'?", 
         answers: {
            a: "example",
            b: "for (example)",
            c: "#example",
            d: ".example"
        },
        correctAnswer: "d",
    },
    {
        question: "The bootstrap grid system is based on how many columns?",
         answers: {
            a: "6",
            b: "1000",
            c: "12",
            d: "10"
        },
        correctAnswer: "c",
    },
{
        question: "Which plugin is used to cycle through elements, one after another, like a slideshow?",
         answers: {
            a: "Carousel",
            b: "Fluid container",
            c: "Merry-go-round",
            d: "Cycle"
        },
        correctAnswer: "a"
    },
    {
        question: "How does a for loop start?",
         answers: {
            a: "let i = 0",
            b: "for (i = 0; i > 5; i++)",
            c: "if (condition) {} else {}",
            d: "for (i > x;) let i = 0"
        },
        correctAnswer: "b",
    },
 
 
];

let questionNameH3 = document.querySelector("#quizQuestions")

//make a variable instead of 1 of something like current question
questionNameH3.textContent = quizQuestions[currentQuestion].question


let firstAnswerChoiceLi = document.querySelector("#answerChoice1")
let secondAnswerChoiceLi = document.querySelector("#answerChoice2")
let thirdAnswerChoiceLi = document.querySelector("#answerChoice3")
let fourthAnswerChoiceLi = document.querySelector("#answerChoice4")



firstAnswerChoiceLi.textContent = quizQuestions[1].answers[0]
secondAnswerChoiceLi.textContent = quizQuestions[1].answers[1]
thirdAnswerChoiceLi.textContent = quizQuestions[1].answers[2]
fourthAnswerChoiceLi.textContent = quizQuestions[1].answers[3]



