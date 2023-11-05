let icon = document.querySelector("header nav .bars");
let menue = document.querySelector("header nav ul");
let closeBtn = document.querySelector("header nav .close");

icon.onclick = function () {
    menue.classList.add("open")
}
closeBtn.onclick = function () {
    menue.classList.remove("open")
}