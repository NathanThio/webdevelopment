const setup = () => {
    let knop = document.querySelector("#maakParagraaf");
    knop.addEventListener("click",maakParagraaf);
}

const maakParagraaf = () => {
    let p = document.createElement("p");
    p.innerText = "abc";
    document.querySelector("#myDIV").appendChild(p);
}

window.addEventListener("load", setup);