const setup = () => {
    let gemeentes = [];
    let gemeente = "";
    while(gemeente !== 'stop') {
        gemeente = prompt("Geef een gemeente op. (Typ 'stop' om te stoppen)");
        if(gemeente !== 'stop') {
            gemeentes.push(gemeente);
        }
    }
    gemeentes.sort();
    let lijst = document.getElementById("lijstGemeentes");
    for(let i=0;i<gemeentes.length;i++) {
        lijst.innerHTML += "<option id='" + gemeentes[i] + "' name='gemeente' " + "value='" + gemeentes[i] + "'>" + gemeentes[i] + "</option>";
    }
}
window.addEventListener("load", setup);