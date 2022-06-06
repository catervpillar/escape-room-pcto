let aulaCiscoQuestions = [
    {
        levelId: "aulacisco",
        markerId: "aulaCiscoMarker1",
        questionType: "multiple-choice",
        question: "Qual è la differenza tra client e server?",
        answers: [
            "Il client fa una richiesta, il server la elabora e risponde",
            "Il server fa una richiesta, il client la elabora e risponde",
            "Il client è il cliente del negozio, il server è il negoziante"
        ],
        correctAnswers: ["Il client fa una richiesta, il server la elabora e risponde"],
        isSolved: false,
        rewardId: "cooling-fan"
    },
    {
        levelId: "aulacisco",
        markerId: "aulaCiscoMarker2",
        questionType: "multiple-choice",
        question: "Come si chiamava la macchina a cui lavorò Alan Turing?",
        answers: [
            "Enigma",
            "Colossus",
            "Macchina di Turing",
            "Fiat Panda"
        ],
        correctAnswers: ["Enigma"],
        isSolved: false,
        rewardId: "motherboard"
    }
];

document.getElementById('aulaCiscoMarker1').addEventListener('click', () => {
    showQuestion(aulaCiscoQuestions[0]);
});

document.getElementById('aulaCiscoMarker2').addEventListener('click', () => {
    showQuestion(aulaCiscoQuestions[1]);
});

function controllaStatoAulaCisco() {
    // let livelloCompletato = true;

    // if (!domanda1AulaCisco.isSolved)
    //     livelloCompletato = false;
    // if (!domanda2AulaCisco.quesitoRisolto)
    //     livelloCompletato = false;

    // return livelloCompletato;
}