const setup = () => {
    let sliders = document.getElementsByClassName("sliders");
    sliders[0].addEventListener("change",update);
    sliders[0].addEventListener("input",update);
    sliders[1].addEventListener("change",update);
    sliders[1].addEventListener("input",update);
    sliders[2].addEventListener("change",update);
    sliders[2].addEventListener("input",update);
    let colorBox = document.getElementById("colorBox");
    colorBox[0].addEventListener("change",update);
    colorBox[0].addEventListener("input",update);
    colorBox.addEventListener("click",maakColorBox);
}

const update = () => {
    let sliders = document.getElementsByClassName("sliders");
    let valueRood= "" + sliders[0].value;
    let valueGroen = "" + sliders[1].value;
    let valueBlauw = "" + sliders[2].value;
    document.getElementById("colorRedValue").innerText = valueRood;
    document.getElementById("colorGreenValue").innerText = valueGroen;
    document.getElementById("colorBlueValue").innerText = valueBlauw;
    let colorBox = document.getElementById("colorBox");
    document.getElementById("colorBox").style.backgroundColor = `rgb(${valueRood},${valueGroen},${valueBlauw})`
}

const maakColorBox = () => {
    let sliders = document.getElementsByClassName("sliders");
    let rood = sliders[0].value;
    let groen = sliders[1].value;
    let blauw = sliders[2].value;
    let box = document.createElement("div");
    box.id = "colorBox";
    box.style.backgroundColor = `rgb(${rood},${groen},${blauw})`;
    document.querySelector("#colorBoxList").appendChild(box);
}

window.addEventListener("load", setup);