const setup = () => {
    let knop = document.getElementById("lidwoordOmzettenButton");
    knop.addEventListener("click",lidWoordenOmdraaien);
}

const lidWoordenOmdraaien = () => {
    let text = document.getElementById("zinDeEnHet").value.toLowerCase();
    let res = "";
    const woorden = text.split(' ');
    for(let i = 0;i<woorden.length;i++) {
        if(woorden[i] === "de") {
            woorden[i] = "het";
            res += woorden[i] + " ";
        } else if(woorden[i] === "het") {
            woorden[i] = "de";
            res += woorden[i] + " ";
        } else {
            res += woorden[i] + " ";
        }
    }
    res.trim();
    document.getElementById("resultaat").innerText = res;
}
window.addEventListener("load", setup);