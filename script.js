function correctQ1() {
    document.getElementById("quesOne").innerHTML="Correct!";
}

function incorrectQ1() {
    document.getElementById("quesOne").innerHTML="Incorrect!";
}

function correctQ2() {
    document.getElementById("quesTwo").innerHTML="Correct!";
}

function incorrectQ2() {
    document.getElementById("quesTwo").innerHTML="Incorrect!";
}

function correctQ3() {
    document.getElementById("quesThree").innerHTML="Correct!";
}

function incorrectQ3() {
    document.getElementById("quesThree").innerHTML="Incorrect!";
}

function correctQ4() {
    document.getElementById("quesFour").innerHTML="Correct!";
}

function incorrectQ4() {
    document.getElementById("quesFour").innerHTML="Incorrect!";
}

function correctQ5() {
    document.getElementById("quesFive").innerHTML="Correct!";
}

function incorrectQ5() {
    document.getElementById("quesFive").innerHTML="Incorrect!";
}

function correctQ6() {
    document.getElementById("quesSix").innerHTML="Correct!";
}

function incorrectQ6() {
    document.getElementById("quesSix").innerHTML="Incorrect!";
}

const answerSeven1 = document.getElementById("quesSeven1").value
const answerSeven2 = document.getElementById("quesSeven2").value
if (answerSeven1 === 7.32) {
    if (answerSeven2 === 0.68) {
        document.getElementById("questSeven").innerHTML="Correct!";
    }
} else {
    document.getElementById("questSeven").innerHTML="Inorrect!";
}