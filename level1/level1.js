let answers = ["Bianco", "Nero", "Fuchsia", "Napoleone aveva una capra, non un cavallo!"];
const correctAnswer = "bianco";

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

shuffle(answers);
document.getElementById("modalMarke1Answer1").innerText = answers[0];
document.getElementById("modalMarke2Answer2").innerText = answers[1];
document.getElementById("modalMarke3Answer3").innerText = answers[2];
document.getElementById("modalMarke4Answer4").innerText = answers[3];

const markers = document.querySelectorAll('.marker');

const marker1 = document.getElementById('marker1');
const marker2 = document.getElementById('marker2');
const marker3 = document.getElementById('marker3');
const marker4 = document.getElementById('marker4');
var modalMarker1 = document.getElementById("modalMarker1");
var modalMarker2 = document.getElementById("modalMarker2");
var modalMarker3 = document.getElementById("modalMarker3");
var modalMarker4 = document.getElementById("modalMarker4");
const scoreLabel = document.getElementById('score-label');
let score = 0;

marker1.addEventListener('click', () => { setVisibleMarker(marker1); marker1Function() });
marker2.addEventListener('click', () => { setVisibleMarker(marker2); marker2Function() });
marker3.addEventListener('click', () => { setVisibleMarker(marker3); marker3Function() });
marker4.addEventListener('click', () => { setVisibleMarker(marker4); marker4Function() });

function setVisibleMarker(marker) {
    marker.classList.toggle('visited-marker');
    marker.innerText = '!';
}

function marker1Function(event) {
    modalMarker1.classList.toggle('modal-reveal');
}

function marker2Function(event) {
    modalMarker2.classList.toggle('modal-reveal');
}

function marker3Function(event) {
    modalMarker3.classList.toggle('modal-reveal');
}

function marker4Function(event) {
    modalMarker4.classList.toggle('modal-reveal');
    if (score == 4) {
        document.getElementById("nextLevel").click();
    }
}

function selectAnswer(el) {
    if (el.innerText.toUpperCase() == correctAnswer.toUpperCase()) {
        scoreLabel.innerText = `${++score}/${markers.length}`
    } else {
        el.classList.add("wrong-answer");
    }
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modalMarker1 || event.target == modalMarker2 || event.target == modalMarker3 || event.target == modalMarker4) {
//         event.target.classList.toggle('modal-reveal');
//     }
// }
