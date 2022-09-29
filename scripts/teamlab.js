let teamlabQuestions = [
    {
        level: "teamlab",
        markerId: "teamLabMarker1",
        questionType: "input",
        // question: "Qual è il risultato della moltiplicazione dei seguenti numeri binari?: 11010 x 10",
        // answers: null,
        // correctAnswers: ["52"],
        question: "Qual è il risultato della somma dei seguenti numeri?: 27 + 16",
        answers: null,
        correctAnswers: ["43"],
        isSolved: false,
        rewardId: "cpu"
    },
    {
        levelId: "teamlab",
        markerId: "teamLabMarker2",
        questionType: "multiple-choice",
        // question: "Qual è il tag radice di una pagina web?",
        // answers: [
        //     "<body>",
        //     "<script>",
        //     "<div>",
        //     "<html>"
        // ],
        // correctAnswers: ["<html>"],
        question: "Qual è il linguaggio per strutturare una pagina web?",
        answers: [
            "Inglese",
            "Java",
            "Corsivœ",
            "HTML"
        ],
        correctAnswers: ["HTML"],
        isSolved: false,
        rewardId: "monitor"
    },
    {
        level: "teamlab",
        markerId: "teamLabMarker3",
        questionType: "multiple-choice",
        // question: "Quali sono i 3 modi per poter attribuire uno stile CSS agli elementi HTML?",
        // answers: [
        //     "inline, embedded, esterno",
        //     "umbedded, outline, button",
        //     "interno, outline, inbedded",
        // ],
        // correctAnswers: ["inline, embedded, esterno"],
        question: "Quale di queste frasi il computer riesce ad elaborare?",
        answers: [
            "Hello World!",
            "01001000 01100101 01101100 01101100 01101111",
            "public static void main()",
            "x + y = z",
        ],
        correctAnswers: ["01001000 01100101 01101100 01101100 01101111"],
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