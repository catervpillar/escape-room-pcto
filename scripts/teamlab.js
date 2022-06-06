let teamlabQuestions = [
    {
        level: "teamlab",
        markerId: "teamLabMarker1",
        questionType: "input",
        question: "Qual è il risultato della moltiplicazione dei seguenti numeri binari?: 11010 x 10",
        answers: null,
        correctAnswers: ["52"],
        isSolved: false,
        rewardId: "cpu"
    },
    {
        levelId: "teamlab",
        markerId: "teamLabMarker2",
        questionType: "multiple-choice",
        question: "Qual è il tag radice di una pagina web?",
        answers: [
            "<body>",
            "<script>",
            "<div>",
            "<html>"
        ],
        correctAnswers: ["<html>"],
        isSolved: false,
        rewardId: "monitor"
    },
    {
        level: "teamlab",
        markerId: "teamLabMarker3",
        questionType: "multiple-choice",
        question: "Quali sono i 3 modi per poter attribuire uno stile CSS agli elementi HTML?",
        answers: [
            "inline, embedded, esterno",
            "umbedded, outline, button",
            "interno, outline, inbedded",
        ],
        correctAnswers: ["inline, embedded, esterno"],
        isSolved: false,
        rewardId: "keyboard-and-mouse"
    }
];

document.getElementById('teamLabMarker1').addEventListener('click', () => {
    showQuestion(teamlabQuestions[0]);
});

document.getElementById('teamLabMarker2').addEventListener('click', () => {
    showQuestion(teamlabQuestions[1]);
});

document.getElementById('teamLabMarker3').addEventListener('click', () => {
    showQuestion(teamlabQuestions[2]);
});

function controllaStatoTeamLab() {
    // let livelloCompletato = true;

    // if (!domanda1TeamLab.quesitoRisolto)
    //     livelloCompletato = false;
    // if (!domanda2TeamLab.quesitoRisolto)
    //     livelloCompletato = false;
    // if (!domanda3TeamLab.quesitoRisolto)
    //     livelloCompletato = false;

    // return livelloCompletato;
}