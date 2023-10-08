import { questions,answers,correctAnswers } from "./questions.js"

function generateQuiz(form) {

    let fquestions = document.createElement("fieldset")
    fquestions.setAttribute("id", "questions")

    for (let i = 0;i<questions.length;i++) {
        let qFieldset = document.createElement("fieldset");
        let qlegend = document.createElement("legend");
        qlegend.innerHTML =  questions[i][1];
        qFieldset.appendChild(qlegend);
        let index = 0;
        for(const a of answers[i]) {
            let label = document.createElement("label");
            label.setAttribute("for",a);
            label.innerHTML = a;
            let input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", questions[i][0]);
            input.setAttribute("id", a);
            input.setAttribute("value", index);
            qFieldset.appendChild(label);
            qFieldset.appendChild(input);
            index++;
        }

        fquestions.appendChild(qFieldset);
    }

    form.appendChild(fquestions);

    let button = document.createElement("input");

    button.setAttribute("type", "submit")

    form.appendChild(button)
}

function validateAnswers(event){
    let aciertos = 0;
    console.log("//----------------//");
    for (let index = 0; index < questions.length; index++) {
        const element = questions[index];
        let val = event.target[element[0]].value; 
        console.log("Valida -> ",element[0],val,correctAnswers[index],val == correctAnswers[index]);
        if(val == correctAnswers[index])
        aciertos++;
    }
    console.log("----------------");
    console.log("aciertos -> ",aciertos);
    console.log("//----------------//");

}

window.onload = () => {

    let form = document.querySelector("#AeroQuiz")

    generateQuiz(form)

    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        validateAnswers(event);
    })


}