const setup = () => {
    let student1={
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : {
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"],
        aantalAutos : 2
    }
    console.log("-----Object omzetten naar JSON-----")
    console.log(JSON.stringify(student1));

    let text ='{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z", "adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}';
    let obj = JSON.parse(text);

    console.log("-----Properties opvragen-----");
    console.log(obj.voornaam);
    console.log(obj.adres.straat);
    console.log(obj.geboorteDatum);
}
window.addEventListener("load", setup);