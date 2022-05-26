// const markers = document.querySelectorAll('.marker');

const marker1 = document.getElementById('marker1');
const marker2 = document.getElementById('marker1');
const marker3 = document.getElementById('marker1');
const marker4 = document.getElementById('marker1');

marker1.addEventListener('click', marker1Function);

function marker1Function(event) {
    console.log(event.target.id);
    marker1.classList.add('visited-marker');
}