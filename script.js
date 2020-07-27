const question = document.getElementById('quizQuestions');
const answers = Array.from(document.getElementsByClassName(''));

let currentQuestion = {}


function buildQuiz() {
    const output = []
    const answers = []

    quizQuestions.forEach((currentQuestion, questionNumber)

let quizQuestions = [
        {
            question: "What does HTML stand for?",
            answers: {
                a: "Hyper Text Markup Language",
                b: "Hairy Teachers Make Lasagna",
                c: "Hyperlink Textual Markup Language",
                d: "Hyper Text Markdown Language"
            },
            correctAnswer: "a"
        },
        {
            question: "Which character is used to indicate an end tag?",
            answers: {
                a: ".",
                b: "#",
                c: "/",
                d: "~"
            }
    correctAnswer: : "c" },
        {
            question: "In what order do you designate border sizes?",
            answers: {
                a: "Top, right, bottom, left",
                b: "Top, bottom, left, right",
                c: "Left, right, top, bottom"
            }
    correctAnswer: "a"
        },
        {
            question: "How would you select an element with the class name 'example'?, 
    answers: {
                a: "example",
                b: "for (example)",
                c: "#example",
                d: ".example"
            },
            correctAnswer: "d"
        },
        {
            question: "What will the following return: Boolean(5 > 10)",
            answers: {
                a: "True",
                b: "False"
            }
    correctAnswer: "b"
        },
        {
            question: "The bootstrap grid system is based on how many columns?",
            answers: {
                a: "6",
                b: "1000",
                c: "12",
                d: "10"
            },
            correctAnswer: "c"
        }
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
            question: "Javascript is case-sensitive.",
            answers: {
                a: "True",
                b: "False"
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
            correctAnswer: "b"
        },
        {
            question: "Javascript and Java are the same thing.",
            answers: {
                a: "True",
                b: "False"
            }
    correctAnswer: "b"
        },
    ];




    for (letter in currentQuestion.answers) {
        answers.push(
            <label>
                <input type="radio" name="question${questionNumber}" value="$letter">
                    ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>
                )
            }
            {output.push(
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>
            )}
        }
    )
quizContainer.innerHTML = output.join('');
}
});





{/* //insert timer alteration code here//
function score() {
    const answerBank = quizGroup.querySelectorAll('.answers');
    let correctAnswer = 0;

    quizQuestions.forEach(currentQuestion, questionNumber) => {

        const answerBank = answerBank[questionNumbe];
        const selector = 'input[name=question${questionNumber}]: checked';
        const userAnswer = (answerBank. querySelector(selector) || {}).value;
 */
                    // if (userAnswer === currentQuestion.correctAnswer) {

                    //                         answerBank[questionNumber].style.color = 'green';
                    // }
                    // else {
                    //                         answerBank[questionNumber].style.color = 'red';
                    // })
                    // resultsContainer.innerHTML = `${correctAnswer} out of ${quizQuestions.length}`;

                };


}








    {/* // Compare answers
    if ((answer === true && questions[i].a === "t") ||
        (answer === false && questions[i].a === "f")) {
                                // Increase score
                                score++;
        alert("Correct!");
    }
    else {
                                alert("Wrong!");
    }
}

// Show total at end
alert("You got " + score + "/" + questions.length); */ } 
