const setup = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

const wijzigTekst = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Hello World!";
}
window.addEventListener("load", setup);