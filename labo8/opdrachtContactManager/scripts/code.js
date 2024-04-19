let personen=[];

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    valideer();

    let voornaamInput = document.getElementById('txtVoornaam');
    let familienaamInput = document.getElementById('txtFamilienaam');
    let geboortedatumInput = document.getElementById('txtGeboorteDatum');
    let emailInput = document.getElementById('txtEmail');
    let aantalKinderenInput = document.getElementById('txtAantalKinderen');

    let persoon = {
        voornaam: voornaamInput.value,
        familienaam: familienaamInput.value,
        geboortedatum: geboortedatumInput.value,
        email: emailInput.value,
        aantalkinderen: aantalKinderenInput.value
    }

    let lijstPersonen = document.getElementById('lstPersonen');
    if(lijstPersonen.selectedIndex >= 0){
        personen[lijstPersonen.selectedIndex] = persoon;
        let allePersonen = document.querySelectorAll('option');
        let aanpassen = allePersonen[lijstPersonen.selectedIndex];
        aanpassen.value = voornaamInput.value + " " + familienaamInput.value;
        aanpassen.innerText = voornaamInput.value + " " + familienaamInput.value;
    }
    else{
        personen.push(persoon);
        let text = `<option value="${voornaamInput.value + " " + familienaamInput.value}">${voornaamInput.value + " " + familienaamInput.value}</option>`;
        lijstPersonen.innerHTML += text;
    }
};

const geselecteerd = () =>{
    let selected = document.getElementById("lstPersonen").selectedIndex;
    console.log(selected);
    console.log(personen[selected]);
    let persoon = personen[selected];
    document.getElementById('txtVoornaam').value = persoon.voornaam;
    document.getElementById('txtFamilienaam').value = persoon.familienaam;
    document.getElementById('txtGeboorteDatum').value = persoon.geboortedatum;
    document.getElementById('txtEmail').value = persoon.email;
    document.getElementById('txtAantalKinderen').value = persoon.aantalkinderen;
}

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    let voornaam = document.getElementById('txtVoornaam');
    voornaam.value = '';
    let familienaam = document.getElementById('txtFamilienaam');
    familienaam.value = '';
    let geboortedatum = document.getElementById('txtGeboorteDatum');
    geboortedatum.value = '';
    let email = document.getElementById('txtEmail');
    email.value = '';
    let aantalkinderen = document.getElementById('txtAantalKinderen');
    aantalkinderen.value = '';

    let lijst = document.getElementById('lstPersonen');
    lijst.selectedIndex = -1;
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click",geselecteerd);
};

window.addEventListener("load", setup);