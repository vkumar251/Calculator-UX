// THEMES - extension accessibility file
import {toggleDarkMode} from './access.js';
import {toggleLightMode} from './access.js';
import {toggleThemes} from './access.js';
import {switch2D} from './themes_2.js';
import {switch3D} from './themes_2.js';
import {switchBMI} from './themes_2.js';

window.onload = function()
{
    // make external functions accessible globally
    window.toggleDarkMode = toggleDarkMode;
    window.toggleLightMode = toggleLightMode;
    window.toggleThemes = toggleThemes;
    window.switch2D = switch2D;
    window.switch3D = switch3D;
    window.switchBMI = switchBMI;
}
export function checkThemes()
{
    switchBanner();
    switchMenuCards();
    switchHeadings();
    switchArithmetics();

    // execute external functions
    switch2D(); 
    switch3D();
    switchBMI();
}

// Homepage banner
function switchBanner()
{
    const banner = document.querySelector("#home-banner");
    const bannerH1 = document.querySelector("#home-banner h1");
    const bannerLink = document.querySelector("#home-banner-link");

    // check home banner exists within the DOM
    if (document.body.contains(banner))
    {
        if (window.darkMode === true)
        {
            // change banner to sunset gradient when dark mode is enabled
            banner.classList.replace("gradient-sunrise", "gradient-sunset");

            bannerH1.classList.replace("text-primary", "text-info");
            bannerH1.classList.replace("text-shadow-white", "text-shadow-black");

            // update hyperlink colour
            bannerLink.classList.replace("text-green-dark-hover", "text-green-light-hover");
        }
        else
        {
            banner.classList.replace("gradient-sunset", "gradient-sunrise");
            bannerH1.classList.replace("text-info", "text-primary");
            bannerH1.classList.replace("text-shadow-black", "text-shadow-white");

            // update hyperlink colour
            bannerLink.classList.replace("text-green-light-hover", "text-green-dark-hover");
        }
    }
}

// Main menu cards
function switchMenuCards()
{
    const arithmeticsCard = document.querySelector("#arithmetics-card"); // target parent element
    
    // arithmetics card
    if (document.body.contains(arithmeticsCard))
    {
        // scan for all children elements within parent id, arithmetics-card
        const bgDarkElements = arithmeticsCard.querySelectorAll(".bg-dark-subtle"); 
        const bgBlackElements = arithmeticsCard.querySelectorAll(".bg-black");

        if (window.darkMode)
        {
            let length = bgDarkElements.length;

            for (let i = 0; i < length; i++)
            {
                // replace all child elements within parent element, arithmetics-card
                bgDarkElements[i].classList.replace("bg-dark-subtle", "bg-black");
            }

            var heading = arithmeticsCard.querySelector("h3")
            heading.classList.replace("text-yellow", "text-orange");
        }
        else
        {
            let length = bgBlackElements.length;

            for (let i = 0; i < length; i++)
            {
                // replace all child elements within parent element, arithmetics-card
                bgBlackElements[i].classList.replace("bg-black", "bg-dark-subtle");
            }

            var heading = arithmeticsCard.querySelector("h3")
            heading.classList.replace("text-orange", "text-yellow");
        }
    }

    // shapes card
    const shapesCard = document.querySelector("#shapes-card");
    if (document.body.contains(shapesCard))
    {
        const shapesDarkElements = shapesCard.querySelectorAll(".bg-dark-subtle");
        const shapesBlackElements = shapesCard.querySelectorAll(".bg-black");

        if (window.darkMode)
        {
            let length = shapesDarkElements.length;
            for (let i = 0; i < length; i++)
            {
                shapesDarkElements[i].classList.replace("bg-dark-subtle", "bg-black");
            }

            var heading = shapesCard.querySelector("h3")
            heading.classList.replace("text-green-light", "text-green-dark");
        }
        else
        {
            let length = shapesBlackElements.length;
            for (let i = 0; i < length; i++)
            {
                shapesBlackElements[i].classList.replace("bg-black", "bg-dark-subtle");
            }

            var heading = shapesCard.querySelector("h3")
            heading.classList.replace("text-green-dark", "text-green-light");
        }
    }

    // BMI card
    const bmiCard = document.querySelector("#bmi-card");
    if (document.body.contains(bmiCard))
    {
        const bmiDarkElements = bmiCard.querySelectorAll(".bg-dark-subtle");
        const bmiBlackElements = bmiCard.querySelectorAll(".bg-black");

        if (window.darkMode)
        {
            let length = bmiDarkElements.length;
            for (let i = 0; i < length; i++)
            {
                bmiDarkElements[i].classList.replace("bg-dark-subtle", "bg-black");
            }

            var heading = bmiCard.querySelector("h3")
            heading.classList.replace("text-red-light", "text-red-dark");
        }
        else
        {
            let length = bmiBlackElements.length;
            for (let i = 0; i < length; i++)
            {
                bmiBlackElements[i].classList.replace("bg-black", "bg-dark-subtle");
            }

            var heading = bmiCard.querySelector("h3")
            heading.classList.replace("text-red-dark", "text-red-light");
        }
    }

    // accessibility card
    const accessCard = document.querySelector("#access-card");
    if (document.body.contains(accessCard))
    {
        const accessDarkElements = accessCard.querySelectorAll(".bg-dark-subtle");
        const accessBlackElements = accessCard.querySelectorAll(".bg-black");

        if (window.darkMode)
        {
            let length = accessDarkElements.length;
            for (let i = 0; i < length; i++)
            {
                accessDarkElements[i].classList.replace("bg-dark-subtle", "bg-black");
            }

            var heading = accessCard.querySelector("h3")
            heading.classList.replace("text-blue-light", "text-blue-dark");
        }
        else
        {
            let length = accessBlackElements.length;
            for (let i = 0; i < length; i++)
            {
                accessBlackElements[i].classList.replace("bg-black", "bg-dark-subtle");
            }

            var heading = accessCard.querySelector("h3")
            heading.classList.replace("text-blue-dark", "text-blue-light");
        }
    }
}

// Page headings
function switchHeadings()
{
    const arithmeticsH = document.querySelector("#arithmetics-heading");
    const shapes2D = document.querySelector("#shapes-2d-heading");
    const shapes3D = document.querySelector("#shapes-3d-heading");
    const bmi = document.querySelector("#bmi-heading");

    // arithmetics
    if (document.body.contains(arithmeticsH))
    {
        const title = arithmeticsH.querySelector("h2");
        if (window.darkMode)
        {
            arithmeticsH.classList.replace("gradient-cherry-light", "gradient-cherry-dark");
            title.classList.replace("text-orange", "text-yellow");
        }
        else
        {
            arithmeticsH.classList.replace("gradient-cherry-dark", "gradient-cherry-light");
            title.classList.replace("text-yellow", "text-orange");
        }
    }

    // 2d shapes
    if (document.body.contains(shapes2D))
    {
        const title = shapes2D.querySelector("h2");

        if (window.darkMode)
        {
            shapes2D.classList.replace("gradient-ocean-light", "gradient-ocean-dark");
            title.classList.replace("text-green-dark", "text-green-light");
        }
        else
        {
            shapes2D.classList.replace("gradient-ocean-dark", "gradient-ocean-light");
            title.classList.replace("text-green-light", "text-green-dark");
        }
    }

    // 3d shapes
    if (document.body.contains(shapes3D))
    {
        const title = shapes3D.querySelector("h2");

        if (window.darkMode)
        {
            shapes3D.classList.replace("gradient-ocean-light", "gradient-ocean-dark");
            title.classList.replace("text-green-dark", "text-green-light");
        }
        else
        {
            shapes3D.classList.replace("gradient-ocean-dark", "gradient-ocean-light");
            title.classList.replace("text-green-light", "text-green-dark");
        }
    }

    // bmi
    if (document.body.contains(bmi))
    {
        const title = bmi.querySelector("h2");

        if (window.darkMode)
        {
            bmi.classList.replace("gradient-wood-light", "gradient-wood-dark");
            title.classList.replace("text-red-dark", "text-red-light");
        }
        else
        {
            bmi.classList.replace("gradient-wood-dark", "gradient-wood-light");
            title.classList.replace("text-red-light", "text-red-dark");
        }
    }
}

// Arithmetics page
function switchArithmetics()
{
    let head = document.head;
    let page = document.body;
    let darkMode = window.darkMode;
    let style = document.querySelector("style");

    const addCard = document.querySelector("#add-card");
    const subtractCard = document.querySelector("#subtract-card");
    const multiplyCard = document.querySelector("#multiply-card");
    const divideCard = document.querySelector("#divide-card");

    // style (for placeholder colour)
    if (head.contains(document.querySelector("#placeholders")))
    {
        try
        {
            if (darkMode === true)
            {
                style.textContent = 
                `
                .nav-items a,
                .nav-items-footer a {color: #212529;}
                .nav-button, .nav-button-access {color: #212529;}

                .dropdown-menu .dropdown-item:hover,
                .dropdown-menu .dropdown-item:focus {background-color: #ff9393ff;}

                .nav-items-container div a,
                .nav-items-container .nav-items-footer a {color: #f8f9fa;}

                .nav-items-container div:hover,
                .nav-items-container div a:focus,
                .nav-items-container button:hover,
                .nav-items-container button:focus,
                .nav-items-container .nav-items-footer a:hover,
                .nav-items-container .nav-items-footer a:focus {color: grey !important;}
                
                input {color: white;} ::placeholder {color: #c5c5c5;}`;
            }
            else
            {
                style.textContent = `input {color: black;} ::placeholder {color: #444444;}`;
            }
        }
        catch (e)
        {
            console.warn("Matching class attributed identified: Skipping actions");
        }
    }

    // add
    if (page.contains(addCard))
    {
        let title = addCard.querySelector("h3");
        let results = addCard.querySelector("#add-results");
        let footer = addCard.querySelector(".card-footer");

        try
        {
            if (darkMode)
            {
                var body = addCard.querySelector(".bg-dark-subtle");

                if (title.classList.contains("text-warning")) {title.classList.replace("text-warning", "text-orange");}
                if (body.classList.contains("bg-dark-subtle")) {body.classList.replace("bg-dark-subtle", "bg-black");}
                if (results.classList.contains("text-orange")) {results.classList.replace("text-orange", "text-warning");}
                if (footer.classList.contains("bg-pink-light")) {footer.classList.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                var body = addCard.querySelector(".bg-black");

                if (title.classList.contains("text-orange")) {title.classList.replace("text-orange", "text-warning");}
                if (body.classList.contains("bg-black")) {body.classList.replace("bg-black", "bg-dark-subtle");}
                if (results.classList.contains("text-warning")) {results.classList.replace("text-warning", "text-orange");}
                if (footer.classList.contains("bg-pink-dark")) {footer.classList.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e)
        {
        }
    }

    // subtract
    if (page.contains(subtractCard))
    {
        let title = subtractCard.querySelector("h3");
        let results = subtractCard.querySelector("#subtract-results");
        let footer = subtractCard.querySelector(".card-footer");

        try
        {
            if (darkMode)
            {
                var body = subtractCard.querySelector(".bg-dark-subtle");

                if (title.classList.contains("text-warning")) {title.classList.replace("text-warning", "text-orange");}
                if (body.classList.contains("bg-dark-subtle")) {body.classList.replace("bg-dark-subtle", "bg-black");}
                if (results.classList.contains("text-orange")) {results.classList.replace("text-orange", "text-warning");}
                if (footer.classList.contains("bg-pink-light")) {footer.classList.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                var body = subtractCard.querySelector(".bg-black");

                if (title.classList.contains("text-orange")) {title.classList.replace("text-orange", "text-warning");}
                if (body.classList.contains("bg-black")) {body.classList.replace("bg-black", "bg-dark-subtle");}
                if (results.classList.contains("text-warning")) {results.classList.replace("text-warning", "text-orange");}
                if (footer.classList.contains("bg-pink-dark")) {footer.classList.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e)
        {
        }
    }

    // multiply
    if (page.contains(multiplyCard))
    {
        let title = multiplyCard.querySelector("h3");
        let results = multiplyCard.querySelector("#multiply-results");
        let footer = multiplyCard.querySelector(".card-footer");

        try 
        {
            if (darkMode)
            {
                var body = multiplyCard.querySelector(".bg-dark-subtle");

                if (title.classList.contains("text-warning")) {title.classList.replace("text-warning", "text-orange");}
                if (body.classList.contains("bg-dark-subtle")) {body.classList.replace("bg-dark-subtle", "bg-black");}
                if (results.classList.contains("text-orange")) {results.classList.replace("text-orange", "text-warning");}
                if (footer.classList.contains("bg-pink-light")) {footer.classList.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                var body = multiplyCard.querySelector(".bg-black");

                if (title.classList.contains("text-orange")) {title.classList.replace("text-orange", "text-warning");}
                if (body.classList.contains("bg-black")) {body.classList.replace("bg-black", "bg-dark-subtle");}
                if (results.classList.contains("text-warning")) {results.classList.replace("text-warning", "text-orange");}
                if (footer.classList.contains("bg-pink-dark")) {footer.classList.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e) 
        {
        }
    }

    // divide
    if (page.contains(divideCard))
    {
        let title = divideCard.querySelector("h3");
        let results = divideCard.querySelector("#divide-results");
        let footer = divideCard.querySelector(".card-footer");

        try 
        {
            if (darkMode)
            {
                var body = divideCard.querySelector(".bg-dark-subtle");

                if (title.classList.contains("text-warning")) {title.classList.replace("text-warning", "text-orange");}
                if (body.classList.contains("bg-dark-subtle")) {body.classList.replace("bg-dark-subtle", "bg-black");}
                if (results.classList.contains("text-orange")) {results.classList.replace("text-orange", "text-warning");}
                if (footer.classList.contains("bg-pink-light")) {footer.classList.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                var body = divideCard.querySelector(".bg-black");

                if (title.classList.contains("text-orange")) {title.classList.replace("text-orange", "text-warning");}
                if (body.classList.contains("bg-black")) {body.classList.replace("bg-black", "bg-dark-subtle");}
                if (results.classList.contains("text-warning")) {results.classList.replace("text-warning", "text-orange");}
                if (footer.classList.contains("bg-pink-dark")) {footer.classList.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e) 
        {
        }
    }
}