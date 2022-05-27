
const marker1 = document.getElementById('marker1');
var modalMarker1 = document.getElementById("modalMarker1");

marker1.addEventListener('dblclick', marker1Function);

function marker1Function(){
    modalMarker1.classList.toggle('modal-reveal');
}

function evalResponse(){
    let code = document.getElementById("code").value;
    let x = 1;
    let y = 1;
    sum = eval(code)
    if(sum == (x+y)){
        modalMarker1.classList.toggle('modal-reveal');
        document.getElementById("nextLevel").click();
    }else{
        document.getElementById("wrong").style.display = "block";
    }
}