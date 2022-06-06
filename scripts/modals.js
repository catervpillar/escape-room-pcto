function showModal(id) {
    if (id)
        document.getElementById(id).classList.toggle("show-modal");
}

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

function selectAnswer(button, question) {
    if (question.correctAnswers.includes(button.innerText)) {
        button.classList.add("correct-answer");
        question.isSolved = true;
    } else {
        button.classList.add("wrong-answer");
    }
    setTimeout(() => {
        showModal('multiple-choice-question-modal');
        if (question.isSolved == true) {
            document.getElementById(question.markerId).classList.toggle("disabled-marker");
            showRewardModal(question);
        }
    }, 3000);
}

function showInputQuestion(question) {
    document.getElementById('input-question').innerText = question.question;
    let answerInput = document.getElementById('answer-input');
    answerInput.value = "";

    let checkInputButton = document.getElementById('check-input-value-button');
    checkInputButton.onclick = () => {
        checkInputValue(document.getElementById('answer-input').value, question);
    };

    showModal('input-question-modal');
}

function checkInputValue(inputValue, question) {
    let answerInput = document.getElementById('answer-input');

    if (question.correctAnswers.includes(inputValue)) {
        answerInput.classList.add('correct-input-typed');
        question.isSolved = true;
    } else {
        answerInput.classList.add('wrong-input-typed');
    }
    setTimeout(() => {
        showModal('input-question-modal');
        if (question.isSolved) {
            document.getElementById(question.markerId).classList.toggle("disabled-marker");
            showRewardModal(question);
        }

        answerInput.classList.remove('wrong-input-typed', 'correct-input-typed');
    }, 3000);
}

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