const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click",aantalKeerAn2);
}

const aantalKeerAn = () => {
    let text = document.getElementById("tekst").innerText.toLowerCase();
    let index = text.indexOf("an",0) + 1;
    let res = 1;
    while(index<text.length) {
        let a = text.indexOf("an",index);
        index = index + (index - a);
        res++;
    }
    document.getElementById("res").innerText = res.toString();
}

const aantalKeerAn2 = () => {
    let text = document.getElementById("tekst").innerText.toLowerCase();
    let index = text.lastIndexOf("an",text.length);
    let res = 0;
    while(index>0) {
        let a = text.lastIndexOf("an",index-1);
        index = index - (index - a);
        res++;
    }
    document.getElementById("res").innerText = res.toString();
}
window.addEventListener("load", setup);