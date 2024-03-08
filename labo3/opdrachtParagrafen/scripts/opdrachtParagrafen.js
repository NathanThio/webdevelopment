const setup = () => {
    let paragrafen = document.getElementsByClassName("belangrijk");
    for(let i=0;i<paragrafen.length;i++) {
        if(paragrafen[i].classList.contains("belangrijk")) {
            paragrafen[i].classList.add("opvallend");
        }
    }
}
window.addEventListener("load", setup);