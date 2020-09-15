let m = document.querySelector(".m-in");
let r = document.querySelector(".r-in");
let i = document.querySelector(".i-in");

let spanM = document.querySelector(".m-sp");
let spanR = document.querySelector(".r-sp");
let spanI = document.querySelector(".i-sp");
let btn = document.querySelector("button");

let out = document.querySelector(".out");

let numberMath, numberRus, numberInfo;

m.value = 0;
r.value = 0;
i.value = 0;

function colors(val) {
    val.nextElementSibling.style.color = "white";
    let n = Math.floor(val.value/20);
    if(n <= 2) val.nextElementSibling.style.backgroundColor = "red";
    if(n <= 3 && n > 2) val.nextElementSibling.style.backgroundColor = "orange";
    if(n <= 4 && n > 3) val.nextElementSibling.style.backgroundColor = "lime";
    if(n == 5) val.nextElementSibling.style.backgroundColor = "green";
}

m.onchange = function() {
    spanM.innerText = "Математика = " + Math.floor(this.value/20);
    numberMath = Math.floor(this.value/20);
    colors(this);
}

r.onchange = function() {
    spanR.innerText = "Русский язык = " + Math.floor(this.value/20);
    numberRus = Math.floor(this.value/20);
    colors(this);
}

i.onchange = function() {
    spanI.innerText = "Информатика = " + Math.floor(this.value/20);
    numberInfo = Math.floor(this.value/20);
    colors(this);
}

btn.onclick = function() {
    let sr = (numberMath + numberRus + numberInfo)/3;
    console.log(sr);
    if(sr < 3) {
        out.style.color = "red";
        out.innerText = "Ты двоечник !!!";
    } 
    if(sr < 4 && sr >= 3) {
        out.style.color = "orange";
        out.innerText = "Ты троечник !!!";
    } 
    if( sr >= 4 && sr < 5) {
        out.style.color = "lime";
        out.innerText = "Ты хорошист !!!";
    } 
    if(sr == 5) {
        out.style.color = "green";
        out.innerText = "Ты отличник !!!";
    } 
}