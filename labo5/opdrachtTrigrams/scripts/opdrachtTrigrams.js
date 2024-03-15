const setup = () => {
    let knop = document.getElementById("trigramButton");
    knop.addEventListener("click",maakTrigrams);
}

const maakTrigrams = () => {
    let text = document.getElementById("trigram").value;
    let res = "";
    for(let i = 0;i<text.length;i++) {
        if(i < (text.length - 2)) {
            res += text.substring(i,i+3) + "\n";
        }
    }
    console.log(res);
    document.getElementById("resultaat").innerHTML = res;
}
window.addEventListener("load", setup);