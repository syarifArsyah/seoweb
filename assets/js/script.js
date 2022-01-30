let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

let themebtn = document.querySelector("#theme-btn");

themebtn.onclick = () => {
    themebtn.classList.toggle("fa-sun");

    if (themebtn.classList.contains("fa-sun")) {
        document.body.classList.add("active");
    } else {
        document.body.classList.remove("active");
    }
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let windowScroll = window.scrollY;
    let percentage = (windowScroll / maxHeight) * 100;
    document.querySelector(".header .scroll-indicator").style.width =
        percentage + "%";
};