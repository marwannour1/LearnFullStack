let a;
let b;
let c;
document.getElementById("myButton").onclick = function() {

    a = document.getElementById("ATextBox").value;
    a = Number(a);
    b = document.getElementById("BTextBox").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("labelC").innerHTML = "Side C: " + c;
}