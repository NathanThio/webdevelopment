let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 1000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
}
const setup = () => {
    let start = document.querySelector("#startButton");
    start.addEventListener("click",spelen);
    start.addEventListener("click",veranderFoto);
}

const spelen = () => {
    let start = document.querySelector("#startButton");
    start.style.display = 'none';
    let img = document.querySelector("#target");
    img.addEventListener("click",verplaatsFoto);
    clearInterval(global.timeoutId);
    global.timeoutId = setInterval(veranderFoto, global.MOVE_DELAY);
}

const verplaatsFoto = () => {
    let img = document.querySelector('#target');
    let playfield = document.querySelector('#playField');
    let maxWidth = playfield.offsetWidth;
    let maxHeight = playfield.offsetHeight;
    img.style.top = Math.round(Math.random()*maxWidth) + "px";
    img.style.left = Math.round(Math.random()*maxHeight) + "px";
    let scoreText = document.querySelector("#score");
    if(img.src.includes("0")) {
        alert(`GAME OVER\n je score is: ${global.score}`);
        clearInterval(global.timeoutId);
    } else {
        global.score++;
        scoreText.innerText = "Aantal hits " + global.score;
    }
}

const veranderFoto = () => {
    let img = document.querySelector('#target');
    img.src = global.IMAGE_PATH_PREFIX + Math.floor(Math.random()*global.IMAGE_COUNT) + global.IMAGE_PATH_SUFFIX;
}

window.addEventListener("load", setup);