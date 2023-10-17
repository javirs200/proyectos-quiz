import { questions, answers, correctAnswers } from "./questions.js"


function validateOne(event) {
    
    let parentFieldset = event.target.parentElement

    let input = event.target.previousSibling;

    let id = input.name.split('Q')[1];

    let v = input.value;

    if(v == correctAnswers[id-1]){
        parentFieldset.style.borderColor = "var(--colorAcierto)"
    }else{
        parentFieldset.style.borderColor = "var(--colorFallo)"
    }

}

function generateQuiz(form) {

    let fquestions = document.createElement("fieldset")
    fquestions.setAttribute("id", "questions")

    for (let i = 0; i < questions.length; i++) {
        let qFieldset = document.createElement("fieldset");
        qFieldset.setAttribute("class", "qFieldset");
        let qlegend = document.createElement("legend");
        qlegend.innerHTML = "<h3>"+questions[i][1]+"</h3>";
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
            label.addEventListener("click",validateOne)
            qFieldset.appendChild(label);
            index++;
        }

        fquestions.appendChild(qFieldset);
    }

    let button = document.createElement("input");

    button.setAttribute("type", "submit");
        
    button.setAttribute("value", "Validar");

    fquestions.appendChild(button);

    form.appendChild(fquestions);
}

function validateAnswers(event) {
    let aciertos = 0;
    let preguntas = document.querySelectorAll("fieldset.qFieldset")
    for (let index = 0; index < questions.length; index++) {
        const element = questions[index];
        let val = event.target[element[0]].value;
        if (val == correctAnswers[index]){
            aciertos++;
            preguntas[index].style.borderColor = "var(--colorAcierto)";
        }else{
            preguntas[index].style.borderColor = "var(--colorFallo)";
        }
    }
    
    let msj = `Has conseguido ${aciertos} aciertos \nEnhorabuena!!!`

    //mostrar numero de aciertos

    let h2 = document.querySelector("h2#puntos")
    if(h2 == null){
        h2 = document.createElement("h2");
        h2.setAttribute("id","puntos")
        document.querySelector("form").appendChild(h2);
    }
    h2.innerHTML = msj;
    
    h2.scrollIntoView();
}



window.onload = () => {

    let form = document.querySelector("#AeroQuiz")

    generateQuiz(form)

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validateAnswers(event);
    })
}