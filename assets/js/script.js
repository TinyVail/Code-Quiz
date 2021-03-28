// setInterval(functionToCall, intervalTime)

$(window).on('load', function () {

	let questions = [
		"Question 1: blah blah blah?",
		"Question 2: blah blah blah?",
		"Question 3: blah blah blah?",
        "Question 4: blah blah blah?",
        "Question 5: blah blah blah?"
	];

	let answers = [
		/*0:*/["answer 1", "answer 2", "answer 3", "answer 4"]
		/*1:*/["answer 1", "answer 2", "answer 3", "answer 4"]
        ["answer 1", "answer 2", "answer 3", "answer 4"]
        ["answer 1", "answer 2", "answer 3", "answer 4"]
        ["answer 1", "answer 2", "answer 3", "answer 4"]
	]
	//answers[0][0] = "answer 1"
	//answers[1][1] = "question 2 answer 2"
    // arrays start at 0 so answer 2 is 1 shown above

	let currentQuestion = 0;

    let startTime = new Date();

    const timeInput = () => {
        let secondsPassed = (new Date() - startTime) / 1000;
		let formattedTime = new Date(secondsPassed * 1000).toISOString().substr(11, 8);
        $("#timer").html("<p> Time Passed: " + formattedTime + " seconds</p>");
    }

    setInterval(timeInput, 100);

	const display = () => {
		let html = `
		<div class="card">
                <div class="card-header">
                    Question #${currentQuestion + 1}
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">What is the answer to this question?</h5>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Answer 1
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Answer 2
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Answer 3
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Answer 4
                        </label>
                    </div>
                </div>
            </div>`;
	}


});
/*
function funcName() {

}

OR

const funcName = () => {

}
*/

/*  HOMEWORKKKKKK ---->
	// Vanilla JS way to edit the DOM:
	document.getElementById("idGoesHere").innerHTML = "html goes here";
	// Jquery way to do EXACT same thing:
	$("#idGoesHere").html("html goes here");

*/