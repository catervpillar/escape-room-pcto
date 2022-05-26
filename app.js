window.addEventListener('load', (event) => {

    function markerFunction(event) {
        console.log(event.target.id);
        console.log(event.target);
        let marker = document.getElementById(event.target.id)
        marker.classList.add('visited-marker');
    }

    let markers = document.querySelectorAll('.marker');
    markers.forEach(function (marker) {
        marker.addEventListener('click', markerFunction);
    });

});