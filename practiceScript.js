


// let currentQuestion = document.getElementById("quizQuestions")
// currentQuestion.innerText = quizQuestions[0].question

// let choiceBank = document.getElementById("answerChoice")
// choiceBank.innerText =  answerChoice[0].answers







  



    // }
//     function showResults(questions, quizContainer, resultsContainer) {
        
//     }
//     showQuestions(questions, quizContainer)

//     submitButton.onClick = function () {
//         showResults(questions, quizContainer, resultsContainer)
//     }
// }









    // quizQuestions.forEach((currentQuestion, questionNumber), 



    // for (letter in currentQuestion. answerChoice) {

    //     console.log(currentQuestion. answers[letter])


    //     console.log(letter)}

        // answers.push(
        //     <label>
        //         <input type="radio" name="question${questionNumber}" value="$letter">
        //             ${letter} :
        //                 ${currentQuestion.answers[letter]}
        //             </label>
        //         )
        //     }
        //     {output.push(
        //             <div class="question"> ${currentQuestion.question} </div>
        //             <div class="answers"> ${answers.join('')} </div>
        //     )}, 
        // }
        
    
// quizContainer.innerHTML = output.join('');



//changes the color of the button when clicked

//     var themeSwitcher = document.querySelector("#theme-switcher");
//     var container = document.querySelector(".answers");
//     var mode = "dark";

//     themeSwitcher.addEventListener("click", function() {
//      if (mode === "dark") {
//                     mode = "light";
//         answers.setAttribute("class", "light");
//      }
//      else {
//                     mode = "dark";
//         answers.setAttribute("class", "dark");
//      }
//     });
// }






/* //insert timer alteration code here//
function score() {
    const  answerChoice = quizGroup.querySelectorAll('.answers');
    let correctAnswer = 0;

    quizQuestions.forEach(currentQuestion, questionNumber) => {

        const  answerChoice =  answerChoice[questionNumbe];
        const selector = 'input[name=question${questionNumber}]: checked';
        const userAnswer = ( answerChoice. querySelector(selector) || {}).value;
 */
                    // if (userAnswer === currentQuestion.correctAnswer) {

                    //                          answerChoice[questionNumber].style.color = 'green';
                    // }
                    // else {
                    //                          answerChoice[questionNumber].style.color = 'red';
                    // })
                    // resultsContainer.innerHTML = `${correctAnswer} out of ${quizQuestions.length}`;

                

                
                // var quizTime = 120
                // var timer = document.getElementsByClassName(".timer");
                // var answerInput = document.getElementById("");
                

                // function quizTimer() {
                //     append(timer);
                  

                //         var timeInterva = setInterval(function() {
                //           timerEl.textContent = quizTime + " seconds remaining";
                //          quizTime--;
                                         
                
                  
                //     }, 1000);
                //   






//      // Compare answers
//     if ((answer === true && questions[i].a === "t") ||
//         (answer === false && questions[i].a === "f")) {
//                                 // Increase score
//                                 score++;
//         alert("Correct!");
//     }
//     else {
//                                 alert("Wrong!");
//     }
// }

// // Show total at end
// alert("You got " + score + "/" + questions.length); //


// function buildQuiz() {
//     const output = []; 

//     quizQuestions.forEach(
//         (currentQuestion, questionNumber) => {

//             const answers = []; 

//             for (letter in currentQuestion.answers){
//                 answers.push(
//                     <label>
//                         <input type="radio" name="question${ mber}" value="${}">
//                         ${letter} :
//                         ${currentQuestion.answers[letter]}
//                     </label>
//                 )
//             }
//             //this belongs on the html page
//             { output.push(
//                 <div class="question"> ${currentQuestion.question} </div>
//                 <div class="answers"> ${answers.join('')} </div>
//             ) }
//         }
//     )
// quizContainer.innerHTML = output.join('');     
// }