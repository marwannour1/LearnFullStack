// let username = window.prompt("what's your name?");
// window.alert("hello " + username);
// document.getElementById("p1").innerHTML = "hello " + username;
let username;

//using html
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log("username: " + username);
    document.getElementById("p2").innerHTML = "Hello again " + username;
}

let y = 0;
y = Boolean(" ");
console.log("y: ", y, typeof y);