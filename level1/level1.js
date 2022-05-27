let q1 = {
    question: "Di che colore era il cavallo bianco di Napoleone?",
    answers: ["Bianco", "Nero", "Fuchsia", "Napoleone aveva una capra, non un cavallo!"],
    correctAnswer: "bianco"
}

let q2 = {
    question: "Le tende da sole… soffrono di solitudine?",
    answers: ["Si", "No", "Ma vaff..."],
    correctAnswer: "Ma vaff..."
}

let q3 = {
    question: "Perché i gatti hanno i canini, ma i cani non hanno i gattini?",
    answers: ["Mistero della fede", "Non è vero, i cani hanno i gattini"],
    correctAnswer: "Mistero della fede"
}

let q4 = {
    question: "Ma perché si chiama carta da parati e non da pareti?",
    answers: ["Si sono evidentemente sbagliati a nominarla", "Boh", "Suona meglio"],
    correctAnswer: "Si sono evidentemente sbagliati a nominarla"
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

shuffle(q1.answers);
shuffle(q2.answers);

const markers = document.querySelectorAll('.marker');

const marker1 = document.getElementById('marker1');
const marker2 = document.getElementById('marker2');
const marker3 = document.getElementById('marker3');
const marker4 = document.getElementById('marker4');
var questionModal = document.getElementById("questionModal");

let score = 0;

marker1.addEventListener('click', () => { openQuestionModal(q1); setVisibleMarker(marker1); });
marker2.addEventListener('click', () => { openQuestionModal(q2); setVisibleMarker(marker2); });
marker3.addEventListener('click', () => { openQuestionModal(q3); setVisibleMarker(marker3); });
marker4.addEventListener('click', () => { openQuestionModal(q4); setVisibleMarker(marker4); });

function setVisibleMarker(marker) {
    marker.classList.toggle('visited-marker');
    marker.innerText = '!';
}

function openQuestionModal(q) {
    document.getElementById("question").innerText = q.question;
    const answersContainer = document.getElementById('answers-container');

    var child = answersContainer.lastElementChild;
    while (child) {
        answersContainer.removeChild(child);
        child = answersContainer.lastElementChild;
    }

    for (let i = 0; i < q.answers.length; i++) {
        const answerButton = document.createElement('div');
        answerButton.classList.add('answer-button');
        answerButton.innerText = q.answers[i];
        answerButton.addEventListener('click', () => { selectAnswer(answerButton, q) });

        answersContainer.appendChild(answerButton);
    }
    questionModal.classList.toggle('modal-reveal');
}

function selectAnswer(el, question) {
    if (el.innerText.toUpperCase() == question.correctAnswer.toUpperCase()) {
        el.classList.add("correct-answer");
        setTimeout(() => {
            questionModal.classList.toggle('modal-reveal');
            document.getElementById('score-label').innerText = `${++score}/${markers.length}`;
        }, 3000);
    } else {
        el.classList.add("wrong-answer");
    }
}
