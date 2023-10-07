import { questions,answers } from "./questions.js"


function generateQuiz() {

    let form = document.querySelector("#jueguito")

    let fquestions = document.createElement("fieldset")
    fquestions.setAttribute("id", "questions")

    for (let i = 0;i<questions.length;i++) {
        let qFieldset = document.createElement("fieldset");
        let qlegend = document.createElement("legend");
        qlegend.innerHTML =  questions[i];
        qFieldset.appendChild(qlegend);

        for(const a of answers[i]) {
            let label = document.createElement("label");
            label.setAttribute("for",a);
            label.innerHTML = a;
            let input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name",  questions[i]);
            input.setAttribute("id", a);
            qFieldset.appendChild(label);
            qFieldset.appendChild(input);
        }

        fquestions.appendChild(qFieldset);
    }

    form.appendChild(fquestions);

    let button = document.createElement("input");
    button.setAttribute("type", "submit")
    button.addEventListener("click",(event)=>{
        event.preventDefault;
        validateAnswers();
    })

    form.appendChild(button)


}

function validateAnswers(){
    console.log("valida ?");
}

window.onload = () => {
    generateQuiz()
}