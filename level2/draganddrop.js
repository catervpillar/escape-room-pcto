
var dragSrcEl = null;

const marker1 = document.getElementById('marker1');
const marker2 = document.getElementById('marker2');
var modalMarker1 = document.getElementById("modalMarker1");

function handleDragStart(e) {
    // this.style.opacity = '0.4';

    dragSrcEl = this;
    console.log(dragSrcEl);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
    // this.style.opacity = '1';
    // items.forEach(function (item) {
    //     item.classList.remove('over');
    // });
}

function handleDragOver(e) {
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDrop(e) {
    e.stopPropagation();

    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');

        modalMarker1.classList.toggle('modal-reveal');
    }

    return false;
}

let items = document.querySelectorAll('.drag');
// console.log(items);
items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
});

window.onclick = function (event) {
    if (event.target == modalMarker4) {
        event.target.classList.toggle('modal-reveal');
    }
}

function giveResponse(){
    res = document.getElementById("cavallo").value;
    if(res.toUpperCase() == "NERO"){
        modalMarker1.classList.toggle('modal-reveal');
        document.getElementById("nextLevel").click();
    }else{
        document.getElementById("wrong").style.display = "block";
    }
}