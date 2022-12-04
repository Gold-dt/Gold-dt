var szov = "";
var szov2 = "";

function gomb(x, y) {
    szov = szov + x;
    document.getElementById("fo").innerText = szov;
    if (y !== undefined) {
        szov2 = szov2 + y;
    } else {
        szov2 = szov2 + x;
    }
}

function szamol() {
    document.getElementById("fo").innerText = eval(szov2);
    document.getElementById("regi").innerText = szov + " = " + eval(szov);
    szov = "";
    szov2 = "";
}

function clr() {
    szov = "";
    szov2 = "";
    document.getElementById("fo").innerText = "";
    document.getElementById("regi").innerText = "";
}