let global = {
    cardHistory: []
}

const zoek = () => {
    let inputField = document.querySelector("#commandoInput");
    let commando = document.querySelector("#commandoInput").value;
    let type = "";
    let url = "";
    let value = "";
    if(commando.substring(0,2) === "/g") {
        type = "g";
        url = "https://www.google.com/search?q=";
        value = commando.substring(3,commando.length+1);
        window.open(url+value.trim(), '_blank');
    } else if(commando.substring(0,2) === "/y") {
        type = "y";
        url = "https://www.youtube.com/results?search_query=";
        value = commando.substring(3,commando.length+1);
        window.open(url+value.trim(), '_blank');
    } else if(commando.substring(0,2) === "/t") {
        type = "t";
        url = "https://twitter.com/hashtag/";
        value = commando.substring(3,commando.length+1);
        window.open(url+value.trim(), '_blank');
    } else if(commando.substring(0,2) === "/i") {
        type = "i";
        url = "https://www.instagram.com/explore/tags/";
        value = commando.substring(3,commando.length+1);
        window.open(url+value.trim(), '_blank');
    } else if(commando.substring(0,1) === "/") {
        window.alert("Unknown command prefix");
    } else if(commando.trim() === "refresh pagina"){
        location.reload();
    } else {
        window.alert("Unknown command");
    }
    maakCard(type,url,value);
    inputField.value = "";
}

const maakCard = (type,url,value) => {
    let link = url+value;
    let title = "";
    let style = "";
    if(type === "g") {
        title = "Google";
        style = "text-white bg-primary";
    }
    if(type === "y") {
        title = "Youtube";
        style = "text-white bg-danger";
    }
    if(type === "t") {
        title = "Twitter";
        style = "text-white bg-dark";
    }
    if(type === "i") {
        title = "Instagram";
        style = "text-white bg-warning";
    }
    let card =
    `<div class="card ${style}" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 class="card-subtitle mb-3">${value.trim()}</h6>
            <a href="${link}" class="btn btn-info">Go!</a>
        </div>
    </div>`;
    let history = document.querySelector("#history");
    history.innerHTML += card;
    let cardInfo = {
        title: title,
        text: value,
        link: link,
        type: type
    }
    global.cardHistory.push(cardInfo);
    let string = JSON.stringify(global.cardHistory);
    localStorage.setItem("History", string);
}

const laadHistory = () => {
    let cardHistory = localStorage.getItem("History");
    let history = JSON.parse(cardHistory);
    for(let i=0;i<history.length;i++) {
        let type = history[i].type;
        let link = history[i].link;
        let value = history[i].text;
        maakCard(type,link,value);
    }
}

const setup = () => {
    let goButton = document.querySelector("#goButton");
    goButton.addEventListener("click",zoek);
    laadHistory();
}

window.addEventListener("load", setup);