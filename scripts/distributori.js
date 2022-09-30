let distributoriQuestions = [
    {
        levelId: "distributori",
        markerId: "distributoriMarker1",
        questionType: "input",
        question: "Seleziona il prodotto inserendo un numero (che dovresti già sapere):",
        answers: null,
        // correctAnswers: ["52"],
        correctAnswers: ["3"],
        isSolved: false,
        rewardId: "ram"
    },
    {
        level: "distributori",
        markerId: "distributoriMarker2",
        questionType: "multiple-choice",
        question: "Quando è nato il World Wide Web?",
        answers: [
            "6 agosto 1991",
            "17 marzo 2005",
            "22 dicembre 1989",
            "20 luglio 1969"
        ],
        correctAnswers: ["6 agosto 1991"],
        isSolved: false,
        rewardId: "hdd"
    },
    {
        level: "distributori",
        markerId: "distributoriMarker3",
        questionType: "multiple-choice",
        question: "Qual è la differenza tra gamification e serious game?",
        answers: [
            "il serious game è un videogioco educativo, mentre la gamification no",
            "la gamification è un videogioco educativo, mentre il serious game no",
            "gamification e serious game sono sinonimi",
            "La gamification ha una motivazione intrinseca mentre i serious game hanno motivazione estrinseca"
        ],
        correctAnswers: ["il serious game è un videogioco educativo, mentre la gamification no"],
        isSolved: false,
        rewardId: "gpu"
    }
];

document.getElementById('distributoriMarker1').addEventListener('click', () => {
    showQuestion(distributoriQuestions[0]);
});

document.getElementById('distributoriMarker2').addEventListener('click', () => {
    showQuestion(distributoriQuestions[1]);
});

document.getElementById('distributoriMarker3').addEventListener('click', () => {
    showQuestion(distributoriQuestions[2]);
});