/**
 * HTML encoder functions to prevent XSS from user input values.
 * 
 * @param {*} str the string to encode
 * @returns the encoded string
 */
function htmlEncode(str) {
    return String(str).replace(/[^\w. ]/gi, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
}

/**
 * Hides all the screens with class "screen" and shows only the one corresponding to the id
 * given as input.
 * If the screen to show corresponds to the screen of one of the levels of the game and if
 * it's the first time a level's screen is shown (i.e. the variable "infoHasBeenSeen"
 * is false), the info modal will be shown too.
 * 
 * @param {*} id the id of the screen to show
 */
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

/**
 * Shuffles the items of the array given as input.
 * 
 * @param {*} array the array to shuffle
 * @returns the shuffled array
 */
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

/**
 * Checks if all items of the inventory have been redeemed.
 * If so, the end screen of the game is shown.
 */
function checkGameStatus() {
    let allItemsRedemed = true;

    for (let i = 0; i < inventoryItems.length; i++) {
        if (!inventoryItems[i].isRedeemed)
            allItemsRedemed = false;
    }

    if (allItemsRedemed)
        showScreen("end-screen");
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