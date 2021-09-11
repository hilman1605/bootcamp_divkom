const Body = document.querySelector("body")
const Header = document.querySelector("header")
const Footer = document.querySelector("footer")
const buttonDark = document.getElementById("buttonDark")
const buttonLight = document.getElementById("buttonLight")

const button = {
    dark: buttonDark,
    light: buttonLight
}

Body.className = "light";
Header.className = "light";
Footer.className = "light";

function DarkMode(){
    Body.className = "dark";
    Header.className = "dark";
    Footer.className = "dark";
    Header.style.color ="white";
    Footer.style.color ="white";
    button.dark.style.display = "none";
    button.light.style.display = "block";
}

function LightMode(){
    Body.className = "light";
    Header.className = "light";
    Footer.className = "light";
    Header.style.color ="black";
    Footer.style.color ="black";
    button.dark.style.display = "block";
    button.light.style.display = "none";
}
