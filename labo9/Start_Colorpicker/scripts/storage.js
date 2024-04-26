
const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    localStorage.setItem("redSlider",red);
    localStorage.setItem("greenSlider",green);
    localStorage.setItem("blueSlider",blue);
};

const restoreSliderValues = () => {
    let redSlider = document.getElementById("sldRed");
    redSlider.value = localStorage.getItem("redSlider");
    let greenSlider = document.getElementById("sldGreen");
    greenSlider.value = localStorage.getItem("greenSlider");
    let blueSlider = document.getElementById("sldBlue");
    blueSlider.value = localStorage.getItem("blueSlider");
};

const storeSwatches = () => {
    let favorieten= [];
    let swatchContainer = document.getElementById("swatchComponents");
    for(let swatch of swatchContainer.children) {
        let computedStyle = window.getComputedStyle(swatch);
        let backgroundColor = computedStyle.backgroundColor;
        let rgbValues = backgroundColor.match(/\d+/g);
        let swatchColors = {
            red: rgbValues[0],
            green: rgbValues[1],
            blue: rgbValues[2]
        }
        favorieten.push(swatchColors);
    }
    let swatches = JSON.stringify(favorieten);
    localStorage.setItem("favorieten",swatches);
};

const restoreSwatches = () => {
    let favorieten = localStorage.getItem("favorieten");
    let swatches = JSON.parse(favorieten);
    for(let i=0;i<swatches.length;i++) {
        let red = swatches[i].red;
        let green = swatches[i].green;
        let blue = swatches[i].blue;
        addSwatchComponent(red,green,blue);
    }
};