var familieLeden = ["Wim","Patrick","Sofie","Jules","Linda"];
const setup = () => {
    console.log(familieLeden);
    console.log(familieLeden[0] + " " + familieLeden[2] + " " + familieLeden[4]);
    let naam = prompt("Geef een naam mee om toe te voegen aan de familie.");
    console.log(VoegNaamToe(naam));
    console.log(familieLeden.toString());
}
const VoegNaamToe = (naam) => {
    familieLeden.push(naam);
    return familieLeden;
}

window.addEventListener("load", setup);

