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

marker1.addEventListener('click', marker1Function);
marker2.addEventListener('click', marker2Function);
marker3.addEventListener('click', marker3Function);
marker4.addEventListener('click', marker4Function);

function marker1Function(event) {
    marker1.classList.add('visited-marker');
    modalMarker1.classList.toggle('modal-reveal');
    marker1.innerText = '!';
    scoreLabel.innerText = `${++score}/${markers.length}`
}

function marker2Function(event) {
    marker2.classList.add('visited-marker');
    modalMarker2.classList.toggle('modal-reveal');
    marker2.innerText = '!';
    scoreLabel.innerText = `${++score}/${markers.length}`
}

function marker3Function(event) {
    marker3.classList.add('visited-marker');
    modalMarker3.classList.toggle('modal-reveal');
    marker3.innerText = '!';
    scoreLabel.innerText = `${++score}/${markers.length}`
}

function marker4Function(event) {
    marker4.classList.add('visited-marker');
    modalMarker4.classList.toggle('modal-reveal');
    marker4.innerText = '!';
    scoreLabel.innerText = `${++score}/${markers.length}`
    if (score == 4) {
        document.getElementById("nextLevel").click();
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalMarker1 || event.target == modalMarker2 || event.target == modalMarker3 || event.target == modalMarker4) {
        event.target.classList.toggle('modal-reveal');
    }
}