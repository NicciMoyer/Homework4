function buildQuiz() {
    const output = []; 

    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = []; 

            for (letter in currentQuestion.answers){
                answers.push(
                    <label>
                        <input type="radio" name="question${ mber}" value="${}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>
                )
            }
            //this belongs on the html page
            { output.push(
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
            ) }
        }
    )
quizContainer.innerHTML = output.join('');     
}