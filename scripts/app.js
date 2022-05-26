window.addEventListener('load', (event) => {

    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();

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

    function markerFunction(event) {
        let marker = document.getElementById(event.target.id)
        marker.classList.add('visited-marker');
    }

    let markers = document.querySelectorAll('.marker');
    markers.forEach(function (marker) {
        marker.addEventListener('click', markerFunction);
    });

});