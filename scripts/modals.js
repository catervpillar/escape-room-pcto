/**
 * Shows the modal screen corresponding to the id given as input.
 * 
 * @param {*} id The id of the modal to show
 */
function showModal(id) {
    if (id)
        document.getElementById(id).classList.toggle("show-modal");
}

/**
 * Depending on the type of the question given as input, shows the appropriate modal
 * screen containing such question.
 * 
 * @param {*} question The question to show to the user
 */
function showQuestion(question) {
    switch (question.questionType) {
        case "multiple-choice":
            showMultipleChoiceQuestion(question);
            break;
        case "input":
            showInputQuestion(question);
            break;
        default:
            break;
    }
}

/**
 * Put the question's data inside the multiple choice question modal screen and shows it.
 * For each of the possible answers, an HTML element is created and appended as child of the
 * answers container HTML element which is inside the modal screen.
 * 
 * @param {*} question The question to show inside the modal
 */
function showMultipleChoiceQuestion(question) {
    shuffleArray(question.answers);
    document.getElementById('multiple-choice-question').innerText = question.question;
    let answersContainer = document.getElementById('multiple-choice-question-answers-container');
    var child = answersContainer.lastElementChild;

    while (child) {
        answersContainer.removeChild(child);
        child = answersContainer.lastElementChild;
    }

    for (let i = 0; i < question.answers.length; i++) {
        const answerButton = document.createElement('div');
        answerButton.classList.add('answer-button');
        answerButton.innerText = question.answers[i];
        answerButton.addEventListener('click', () => {
            selectAnswer(answerButton, question);
        });
        answersContainer.appendChild(answerButton);
    }

    showModal('multiple-choice-question-modal');
}

/**
 * Called when the user select one of the multiple answers of a question by clicking the
 * corresponding button element.
 * If the text of the clicked button corresponds to the correct answer of the question (or to
 * one of the correct ones, if there are more than one), the corresponding marker on the screen
 * will be disabled and the reward modal screen will be shown.
 * 
 * @param {*} button The answer button clicked by the user
 * @param {*} question The question to which the user has answered
 */
function selectAnswer(button, question) {
    if (question.correctAnswers.includes(button.innerText)) {
        button.classList.add("correct-answer");
        question.isSolved = true;
    } else {
        button.classList.add("wrong-answer");
    }
    setTimeout(() => {
        if (question.isSolved == true) {
            showModal('multiple-choice-question-modal');
            document.getElementById(question.markerId).classList.toggle("disabled-marker");
            showRewardModal(question);
        }
    }, 3000);
}

/**
 * Put the question's data inside the input question modal screen and shows it.
 * When the 'check-input-value-button' button is clicked, the text typed by the user
 * inside the appropriate input will be compared with the correct answer(s) of the question
 * prior to a security check of the inserted text to prevent XSS from user input values.
 * 
 * @param {*} question The question to show inside the modal
 */
function showInputQuestion(question) {
    document.getElementById('input-question').innerText = question.question;
    let answerInput = document.getElementById('answer-input');
    answerInput.value = "";

    let checkInputButton = document.getElementById('check-input-value-button');
    checkInputButton.onclick = () => {
        checkInputValue(htmlEncode(document.getElementById('answer-input').value), question);
    };

    showModal('input-question-modal');
}

/**
 * Checks whether the value entered by the user is the correct answer to the relevant question.
 * 
 * @param {*} inputValue The value typed by the user.
 * @param {*} question The question the user is answering to
 */
function checkInputValue(inputValue, question) {
    let answerInput = document.getElementById('answer-input');

    if (question.correctAnswers.includes(inputValue)) {
        answerInput.classList.add('correct-input-typed');
        question.isSolved = true;
    } else {
        answerInput.classList.add('wrong-input-typed');
    }
    setTimeout(() => {
        if (question.isSolved) {
            showModal('input-question-modal');
            document.getElementById(question.markerId).classList.toggle("disabled-marker");
            showRewardModal(question);
        }

        answerInput.classList.remove('wrong-input-typed', 'correct-input-typed');
    }, 3000);
}

/**
 * Retrieves the reward object belonging to the question given as input, puts its data inside
 * the appropriate reward modal screen and shows it.
 * 
 * @param {*} question the question whose reward is to be shown
 */
function showRewardModal(question) {
    let reward = inventoryItems.find(obj => {
        return obj.id === question.rewardId
    });

    if (reward) {
        document.getElementById("reward-name").innerText = reward.name;
        document.getElementById("reward-img").src = reward.imgSrc;
        showModal("reward-modal");
        reward.isRedeemed = true;
    }

    document.getElementById(`${reward.id}-inventory-item`).classList.add('unlocked-item');
}