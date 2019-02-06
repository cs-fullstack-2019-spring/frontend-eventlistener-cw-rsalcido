// var userinput="";
// // var buttonclick = document.getElementById("btn1");
// //
// // buttonclick.addEventListener('click', function(){
// //     while (userinput !== 'n') {
// //         userinput= prompt("Would you like to continue being asked to quit?");
// //
// //     }
// // });


/ If you click the #1 button the title should change to "1" and the background to blue.

function changeBackground(e)
{
    bgCol.style.background= "blue";
}

function changeText(e)
{
    tC.innerText = "1";
}
var tC = document.querySelector(".textChange");
var cC = document.getElementById("btn2");
cC.addEventListener("click",changeBackground);
cC.addEventListener("click", changeText);

// If you click the #2 button the title should change to "2" and the background to red. Use classlist to change the background.
var element = document.querySelector("aside");
function backGroundChange() {
    element.classList.toggle("redBackground")
}

function changeText2(e) {
    tC2.innerText = "2"
}
var tC2= document.querySelector(".textChange2");
var button2 = document.getElementById("btn3");
button2.addEventListener("click", backGroundChange);
button2.addEventListener("click", changeText2);

var header = document.getElementById("#head");
function addText() {
    header.innerText += "0";
}