let count = document.getElementById("count").innerHTML;

document.getElementById("decrease").onclick = function(){
    count--;
    document.getElementById("count").innerHTML = count;   
}


document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("count").innerHTML = count;   
}

document.getElementById("increase").onclick = function(){
    count++;
    document.getElementById("count").innerHTML = count;   
}

let userName = "marwan nour";
for (let i = 0; i < userName.length; i++)
{
    console.log(userName.charAt(i));
}
console.log(userName[0,4])