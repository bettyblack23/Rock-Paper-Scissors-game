
let values = ["rock", "paper", "scissors"];

let answers = [];

firstRoundPaper = () => {
    document.querySelector(".game").style.display = "none";
    document.querySelector(".game2").style.display = "grid";
    document.querySelector(".me-paper").style.display = "grid";
    answers[0] = values.indexOf("paper");
    secondRound();
}

firstRoundScissors = () => {
    document.querySelector(".game").style.display = "none";
    document.querySelector(".game2").style.display = "grid";
    document.querySelector(".me-scissors").style.display = "grid";
    answers[0] = values.indexOf("scissors");
    secondRound();
}

firstRoundRock = () => {
    document.querySelector(".game").style.display = "none";
    document.querySelector(".game2").style.display = "grid";
    document.querySelector(".me-rock").style.display = "grid";
    answers[0] = values.indexOf("rock");
    secondRound();
}

secondRound = () => {
    document.querySelector(".game2").style.display = "flex";

    document.querySelector(".cpu-circle").style.display = "grid";
    setTimeout(function () {
        document.querySelector(".cpu-circle").style.display = "none";
        document.querySelector(".cpu").style.background = "none";
        answers[1] = Math.floor(Math.random() * values.length)
        if (answers[1] === values.indexOf("paper")) {
            document.querySelector(".cpu-paper").style.display = "grid";
        } else if (answers[1] === values.indexOf("scissors")) {
            document.querySelector(".cpu-scissors").style.display = "grid";
        } else if (answers[1] === values.indexOf("rock")) {
            document.querySelector(".cpu-rock").style.display = "grid";
        }
        theResults();
    }, 1500);
    console.log(answers);
}

let winner;
let winnerText;
let winnerCounter = 0;

theResults = () => {
    console.log('gets called');
    if (answers.includes(values.indexOf("paper")) && answers.includes(values.indexOf("scissors"))) {
        winner = values.indexOf("scissors");
    } else if (answers.includes(values.indexOf("rock")) && answers.includes(values.indexOf("scissors"))) {
        winner = values.indexOf("rock");
    } else if (answers.includes(values.indexOf("rock")) && answers.includes(values.indexOf("paper"))) {
        winner = values.indexOf("paper");
    }
    console.log(answers.includes(values.indexOf("paper")));
    console.log(answers.answer1);
    console.log(answers.answer2);

    if (winner == answers[0] && winner != answers[1]) {
        console.log("You Win")
        winnerText = 'You Win';
        winnerCounter++;

    } else if (winner == answers[1] && winner != answers[0]) {
        console.log("You Lose")
        winnerText = 'You Lose';
        winnerCounter--;
    } else {
        console.log("draw")
        winnerText = 'Draw';
    }

    scoreCount();
    writeOut();
    document.querySelector(".play-again-container").style.display = "flex";


}

writeOut = () => {
    document.getElementById("result_text").innerHTML = winnerText;
}

scoreCount = () => {
    document.getElementById("number_score").innerHTML = winnerCounter;
}

playAgain = () => {
    document.querySelector(".game2").style.display = "none";
    document.querySelector(".me-scissors").style.display = "none";
    document.querySelector(".me-paper").style.display = "none";
    document.querySelector(".me-rock").style.display = "none";
    document.querySelector(".cpu-paper").style.display = "none";
    document.querySelector(".cpu-rock").style.display = "none";
    document.querySelector(".cpu-scissors").style.display = "none";
    document.querySelector(".game").style.display = "flex";
    document.querySelector(".play-again-container").style.display = "none";
}