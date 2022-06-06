function showScreen(id) {
    let screens = document.getElementsByClassName("screen");

    for (let i = 0; i < screens.length; i++) {
        screens[i].classList.remove("show-screen");
    }

    if (id) {
        document.getElementById(id).classList.add("show-screen");

        let levels = ["atrio-screen", "teamlab-screen", "distributori-screen", "aulacisco-screen"];
        if (levels.includes(id)) {
            if (!infoHasBeenSeen) {
                setTimeout(() => {
                    showModal('info-modal');
                    infoHasBeenSeen = true;
                }, 1500);
            }
        }
    }
}

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function checkGameStatus() {
    let allItemsRedemed = true;

    for (let i = 0; i < inventoryItems.length; i++) {
        if (!inventoryItems[i].isRedeemed)
            allItemsRedemed = false;
    }

    if (allItemsRedemed) {
        console.log('all items redeemed!');
        showScreen("end-screen");
    }
}

let gameHasStarted = false;
let infoHasBeenSeen = false;

const startButton = document.getElementById('play-button');
startButton.addEventListener('click', () => {
    if (!gameHasStarted) {
        gameHasStarted = true;
        startButton.innerText = "Continua";
    }
});

showScreen("start-screen");