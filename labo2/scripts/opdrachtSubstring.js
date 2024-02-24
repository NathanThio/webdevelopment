const setup = () => {
    let substrButton = document.getElementById("substrButton");
    substrButton.addEventListener("click",substring);
}

const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let text = txtInput.value;
    let substrFirstIndex = document.getElementById("substrFirstIndex");
    let firstIndex = substrFirstIndex.value;
    let substrSecondIndex = document.getElementById("substrSecondIndex");
    let secondIndex = substrSecondIndex.value;
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = text.substring(firstIndex,secondIndex);
}
window.addEventListener("load", setup);