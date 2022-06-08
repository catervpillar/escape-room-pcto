let atrioQuestions = [
    {
        levelId: "atrio",
        markerId: "atrioMarker1",
        questionType: "multiple-choice",
        question: "Quale di questi linguaggi viene usato per modificare lo stile di una pagina web?",
        answers: [
            "CSS",
            "Javascript",
            "HTML",
            "Python"
        ],
        correctAnswers: ["CSS"],
        isSolved: false,
        rewardId: "case"
    }
];

document.getElementById('atrioMarker1').addEventListener('click', () => {
    showQuestion(atrioQuestions[0]);
});