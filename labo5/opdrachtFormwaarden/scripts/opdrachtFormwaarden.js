const setup = () => {
    let toonButton = document.getElementById("toonResultaat");
    toonButton.addEventListener("click",toonResultaat);
}

const toonResultaat = () => {
    let isRoker = document.getElementById("isRoker").checked;
    if(isRoker) {
        console.log("Is een roker");
    } else {
        console.log("Is geen roker");
    }

    if(document.getElementById("nederlands").checked) {
        console.log("Moedertaal is NL");
    } else if(document.getElementById("frans").checked) {
        console.log("Moedertaal is FR");
    } else if(document.getElementById("engels").checked) {
        console.log("Moedertaal is EN");
    }

    let favBuurland = document.getElementById("favorieteBuurland").value;
    console.log("Favoriete buurland is " + favBuurland);

    let bestelling = document.getElementById("bestelling");
    let res = "";
    for(let i=0;i<bestelling.length;i++) {
        if(bestelling[i].selected) {
            res += bestelling[i].value + " ";
        }
    }
    console.log("Bestelling bestaat uit " + res);
}
window.addEventListener("load", setup);