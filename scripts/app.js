window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

showScreen("start-screen");

/**
 * Seleziona l'elemento corrispondente all'id passato in input e gli applica la classe "show-screen"
 * che lo rende visibile, togliendola a priori da tutti gli altri elementi con classe "screen".
 * 
 * @param {*} id - L'id dell'elemento da mostrare
 */
function showScreen(id) {
    let screens = document.getElementsByClassName("screen");

    for (let i = 0; i < screens.length; i++) {
        screens[i].classList.remove("show-screen");
    }

    document.getElementById(id).classList.toggle("show-screen");
}

/**
 * To animate the entrance of the HTML components.
 */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}