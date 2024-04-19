const setup = () => {
    let huidigeDatum = new Date();
    let verjaardag = new Date("2004-11-13");
    let verschil = (huidigeDatum-verjaardag) / (1000*60*60*24);

    console.log("Aantal dagen: " + Math.round(verschil));
}
window.addEventListener("load", setup);