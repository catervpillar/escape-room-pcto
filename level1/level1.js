window.addEventListener('load', () => {
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    const markers = document.querySelectorAll('.marker');

    const marker1 = document.getElementById('marker1');
    const marker2 = document.getElementById('marker2');
    const marker3 = document.getElementById('marker3');
    const marker4 = document.getElementById('marker4');
    var modalMarker1 = document.getElementById("modalMarker1");
    const scoreLabel = document.getElementById('score-label');
    let score = 0;

    marker1.addEventListener('click', marker1Function);
    marker2.addEventListener('click', marker2Function);
    marker3.addEventListener('click', marker3Function);
    marker4.addEventListener('click', marker4Function);
    // marker2.addEventListener('click', openNav);

    function marker1Function(event) {
        console.log(event.target.id);
        marker1.classList.add('visited-marker');
        modalMarker1.classList.toggle('modal-reveal');
        scoreLabel.innerText = `${++score}/${markers.length}`
    }

    function marker2Function(event) {
        console.log(event.target.id);
        marker2.classList.add('visited-marker');
        modalMarker2.classList.toggle('modal-reveal');
        scoreLabel.innerText = `${++score}/${markers.length}`
    }

    function marker3Function(event) {
        console.log(event.target.id);
        marker3.classList.add('visited-marker');
        modalMarker3.classList.toggle('modal-reveal');
        scoreLabel.innerText = `${++score}/${markers.length}`
    }

    function marker4Function(event) {
        console.log(event.target.id);
        marker4.classList.add('visited-marker');
        modalMarker4.classList.toggle('modal-reveal');
        scoreLabel.innerText = `${++score}/${markers.length}`
        if(score == 4){
            document.getElementById("nextLevel").click();
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalMarker1 || event.target == modalMarker2 || event.target == modalMarker3 || event.target == modalMarker4) {
            event.target.classList.toggle('modal-reveal');
        }
    }
})