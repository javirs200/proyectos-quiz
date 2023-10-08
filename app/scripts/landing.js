let body = document.querySelector('body');

let titulo = document.createElement("h1");

titulo.innerHTML = "Bienvenido"

let link = document.createElement("a");

link.innerHTML = "goQuiz"

link.setAttribute("href","./pages/quiz.html")

body.appendChild(titulo)

body.appendChild(link)


