const setup = () => {
    let lijstItems = document.querySelectorAll("li");
    for(let i=0;i<lijstItems.length;i++) {
        lijstItems[i].className = "listitem";
    }
    let img = document.createElement("img");
    document.querySelector("body").appendChild(img);
    img.setAttribute("src","images/ik.png");
    img.setAttribute("alt","foto");
}
window.addEventListener("load", setup);