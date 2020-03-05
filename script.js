
function send1(){
    let text = document.getElementById("value").value;
    document.getElementById("value").value = ""

    if(!text) return;

    let res = document.getElementById("result")
    let div = document.createElement("div");
    let p = document.createElement("p");

    div.className="container1"
    p.className= "bigdiv1"
    res.appendChild(div)
    div.appendChild(p)
    p.innerHTML= text;
    
}

function send2(){
    let text = document.getElementById("value").value;
    document.getElementById("value").value = ""

    if(!text) return;

    let res = document.getElementById("result")
    let div = document.createElement("div");
    let p = document.createElement("p");

    div.className="container2"
    p.className= "bigdiv2"
    res.appendChild(div)
    div.appendChild(p)
    p.innerHTML= text;
    
}