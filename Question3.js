
function runButtonClickFunction()
{
    console.log("button clicked")
}

function changeBackground()
{
    headerElement.classList.add("redBackground")
}

var button1Element = document.getElementById("btn2");
var button2Element = document.querySelector("#btn3");
var headerElement = document.querySelector("header");

button1Element.onclick = runButtonClickFunction;
button1Element.onclick = changeBackground;
button2Element.addEventListener('click', runButtonClickFunction);
button2Element.addEventListener('click', changeBackground);