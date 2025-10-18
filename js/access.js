// ACCESSIBILITY

// global variables
window.darkMode = false;

const main = document.querySelector("main");
const logo = document.querySelector("#logo");
const navContainer = document.querySelector(".nav-items-container");
const copyright = document.querySelector("#footer-copyright");
const credits = document.querySelector("#footer-credits");

// theme elements
const bgDark = document.querySelectorAll(".bg-dark");
const bgLight = document.querySelectorAll(".bg-light");
const textDark = document.querySelectorAll(".text-dark");
const textLight = document.querySelectorAll(".text-light");

window.onLoad = function()
{
}

function toggleDarkMode()
{
    window.darkMode = true;

    let a = 0; let b = 0;
    let c = 0; let d = 0;

    // LIGHT to DARK
    do
    {
        bgLight[a].classList.replace("bg-light", "bg-dark");
        a++;
    }
    while (a < bgLight.length);

    do
    {
        textLight[b].classList.replace("text-light", "text-dark");
        b++;
    }
    while (b < textLight.length);

    // DARK to LIGHT
    do
    {
        bgDark[c].classList.replace("bg-dark", "bg-secondary-subtle");
        c++;
    }
    while (c < bgDark.length);

    do
    {
        textDark[d].classList.replace("text-dark", "text-light");
        d++;
    }
    while (d < textDark.length);

    // inject internal styles
    const style = document.createElement("style");
    style.id = "dark-mode";
    style.innerHTML =
    `
    .nav-items a {color: #212529;}
    .nav-button, .nav-button-access {color: #212529;}

    .dropdown-menu .dropdown-item:hover,
    .dropdown-menu .dropdown-item:focus {background-color: #ff9393ff;}
    `;
    
    // check internal style sheet isn't already added
    if (document.querySelector("style") === null)
    {
        document.head.appendChild(style);
    }

    // darken logo
    logo.classList.remove("text-warning");
    logo.style.color = "#c79500ff";
    
    // customise footer text
    copyright.classList.replace("text-info", "text-primary");
    copyright.classList.add("fw-bold");
    credits.classList.add("fw-bold");
}

function toggleLightMode()
{
    window.darkMode = false;

    let a = 0; let b = 0;
    let c = 0; let d = 0;

    // DARK to LIGHT
    do
    {
        bgLight[a].classList.replace("bg-dark", "bg-light");
        a++;
    }
    while (a < bgLight.length);

    do
    {
        textLight[b].classList.replace("text-dark", "text-light");
        b++;
    }
    while (b < textLight.length);

    // LIGHT to DARK
    do
    {
        bgDark[c].classList.replace("bg-secondary-subtle", "bg-dark");
        c++;
    }
    while (c < bgDark.length);

    do
    {
        textDark[d].classList.replace("text-light", "text-dark");
        d++;
    }
    while (d < textDark.length);

    // remove internal style sheet (if already injected)
    if (document.querySelector("#dark-mode")!== null)
    {
        document.querySelector("#dark-mode").remove();
    }
    if (navContainer.classList.contains("fw-bold"))
    {
        // remove bold font weight from nav items
        navContainer.classList.remove("fw-bold");
    }
    if (!(logo.classList.contains("text-warning")))
    {
        // lighten logo
        logo.classList.add("text-warning");
    }
    logo.style.removeProperty("color"); // remove style, color
    
    // reset footer text
    copyright.classList.replace("text-primary", "text-info");

    if (copyright.classList.contains("fw-bold"))
    {
        // remove bold font weight
        copyright.classList.remove("fw-bold");
    }
    if (credits.classList.contains("fw-bold"))
    {
        // remove bold font weight
        credits.classList.remove("fw-bold");
    }
}