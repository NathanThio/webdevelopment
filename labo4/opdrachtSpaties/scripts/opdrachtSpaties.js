const setup = () => {
    let button = document.getElementById("submitButton");
    button.addEventListener('click',spatiesToevoegen);
}

const spatiesToevoegen = () => {
    let text = document.getElementById("textBox");
    let newText = "";
    for(let i=0;i<text.value.length;i++) {
        if(text.value.toString().substring(i,i+1) !== " ") {
            newText += text.value.toString().substring(i,i+1) + " ";
        } else {
            newText += "";
        }
    }
    console.log(newText);
}
window.addEventListener("load", setup);