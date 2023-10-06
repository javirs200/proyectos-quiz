import { questions } from "./questions.js"

function generateQuiz() {

    let form = document.querySelector("#jueguito")

    let fquestions = document.createElement("fieldset")

    for (const q of questions) {
        let qFieldset = document.createElement("fieldset")
        let qlabel = document.createElement("label")
        qlabel.setAttribute("for", q)
        qlabel.innerHTML = q
        qFieldset.appendChild(qlabel)

        for (let i = 0; i < 4; i++) {
            let input = document.createElement("input")
            input.setAttribute("type", "radio")
            input.setAttribute("name", q)
            input.setAttribute("id", q + i)
            let node = document.createElement("p")
            node.innerHTML = "hola"
            input.appendChild(node)
            qFieldset.appendChild(input)
        }

        //qFieldset.setAttribute(StylePropertyMapflex")

        fquestions.appendChild(qFieldset)
    }

    form.appendChild(fquestions)

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