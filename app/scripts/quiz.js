import { questions, answers, correctAnswers } from "./questions.js"

function generateQuiz(form) {

    let fquestions = document.createElement("fieldset")
    fquestions.setAttribute("id", "questions")

    for (let i = 0; i < questions.length; i++) {
        let qFieldset = document.createElement("fieldset");
        qFieldset.setAttribute("class", "qFieldset");
        let qlegend = document.createElement("legend");
        qlegend.innerHTML = questions[i][1];
        qFieldset.appendChild(qlegend);
        let index = 0;
        for (const a of answers[i]) {
            let label = document.createElement("label");
            label.setAttribute("for", a);
            label.innerHTML = a;
            let input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", questions[i][0]);
            input.setAttribute("id", a);
            input.setAttribute("value", index);
            if (index == 0){
                input.setAttribute("required", "true");
            }
            qFieldset.appendChild(input);
            qFieldset.appendChild(label);
            index++;
        }

        fquestions.appendChild(qFieldset);
    }



    let button = document.createElement("input");

    button.setAttribute("type", "submit");

    fquestions.appendChild(button);

    form.appendChild(fquestions);
}

function validateAnswers(event) {
    let aciertos = 0;
    let indicefallos = [];
    for (let index = 0; index < questions.length; index++) {
        const element = questions[index];
        let val = event.target[element[0]].value;
        if (val == correctAnswers[index]){
            aciertos++;
        }else{
            indicefallos.push(index);
        }
    }
    console.log("//------------//");
    console.log("aciertos -> ", aciertos);
    console.log("//-------------//");

    alert(`Has conseguido ${aciertos} aciertos \nEnhorabuena!!!`)

    //señalar errores en DOM

    let preguntas = document.querySelectorAll("fieldset.qFieldset")

    for (const f of indicefallos) {
        preguntas[f].style.borderColor = "red";
    }
}



window.onload = () => {

    let form = document.querySelector("#AeroQuiz")

    generateQuiz(form)

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validateAnswers(event);
    })
}