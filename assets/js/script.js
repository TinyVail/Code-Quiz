// setInterval(functionToCall, intervalTime)

/*

    let x =5;
    let y = "hello";
    let z = [5, 6, 7];
    let obj = {
        question: "this is the question",
        answers: ["answer 1", "answer 2"],
        correctAnswer: 0
    };
*/

$(window).on('load', function () {

    let questions = [
        "How do you check if two values are equal in JavaScript?",
        "Which is not a valid way to define a function in JavaScript?",
        "What is the difference between var and let in JavaScript?"
    ];

    let answers = [
        [
            "if(x1 = x2)",
            "(x1 == x2) if:",
            "if(x1 equals x2)",
            "if(x1.equals(x2)",
            "if(x1 == x2)"
        ],
        [
            "let x = new function(){};",
            "function x(){}",
            "const x = () => {}",
            "let x = function() {};"
        ],
        [
            "'var' creates a variable, 'let' lets code execute",
            "'let' creates a variable, 'var' updated a variable",
            "'let' is globally scoped, whereas 'var' is locally scoped",
            "'var' is globally scoped, whereas 'let' is locally scoped",
            "They are exactly the same"
        ]
    ];

    let correctAnswers = [4, 0, 3];

    let userScore = 0;

    let currentQuestion = 0;

    let startTime = new Date();

    let testTime = 10000 * 60; // 10 minutes

    let interval;

    const timeInput = () => {
        let msPassed = new Date() - startTime;
        let timeRemaining = testTime - msPassed;
        let formattedTime = new Date(timeRemaining).toISOString().substr(11, 8);
        $("#timer").html("<p> Time Remaining: " + formattedTime + " seconds</p>");
        if (timeRemaining <= 0) {
            document.getElementById("main").innerHTML = " Your Score Is: " + userScore + "/" + questions.length;
            clearInterval(interval);
        }
        
    }

    interval = setInterval(timeInput, 100);

    const display = () => {
        let answersGenerated = "";
        for (let i = 0; i < answers[currentQuestion].length; i++) {
            answersGenerated = answersGenerated +
                `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="anyname"  value="" id="answerHtml${i}">
                    <label class="form-check-label" for="answerHtml${i}">
                        ${answers[currentQuestion][i]}
                    </label>
                </div>
            `;
        }

        let questionHtml = `
		<div class="card">
            <div class="card-header">
                Question #${currentQuestion + 1}
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">${questions[currentQuestion]}</h5>
                ${answersGenerated}
            </div>
            <div class="card-body">
                <button type="button" class="btn btn-success" id="submitButton">Submit!</button>
            </div>
        </div>`;


        document.getElementById("main").innerHTML = questionHtml;
        document.getElementById("submitButton").onclick = () => {
            if (document.getElementById("answerHtml" + correctAnswers[currentQuestion]).checked) {
                userScore = userScore + 1;
            } else { // they got the question wrong
                testTime -= 1000 * 60; // lose 1 minute
            }
            currentQuestion = currentQuestion + 1;
            if (currentQuestion < questions.length) {
                display();
            } else {
                document.getElementById("main").innerHTML = " Your Score Is: " + userScore + "/" + questions.length;
                clearInterval(interval);
            }
        };
    }
    //When the html loads for the first time
    display();
});