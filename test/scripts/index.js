const setup = () => {
    let metOfZonderEi = document.getElementById("metOfZonderEi");
    let fotoKip = document.getElementById("img");
    if(metOfZonderEi.selectedIndex === 1) {
        fotoKip.className = "with-egg";
    } else if(metOfZonderEi[2].selected) {
        fotoKip.className = "without-egg";
    }
    let tekstMetOfZonderEi = document.getElementById("note");
    let note = "Hierboven, een kip ";
    if(metOfZonderEi.value === "met een ei") {
        tekstMetOfZonderEi.innerText = note + "met een ei";
    } else if(tekstMetOfZonderEi.value === "zonder een ei") {
        tekstMetOfZonderEi.innerText = note + "zonder een ei";
    }
}
window.addEventListener("load", setup);