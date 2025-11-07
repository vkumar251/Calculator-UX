// Extension file to themes.js
const style = document.querySelector("style");
const footers = document.querySelectorAll(".card-footer");

// 2D Shapes page
export function switch2D()
{
    const squareCard = document.querySelector("#square-card");
    const rectangleCard = document.querySelector("#rectangle-card");
    const circleCard = document.querySelector("#circle-card");

    // style (for placeholder colour)
    if (document.head.contains(document.querySelector("#placeholders-2d")))
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

                input {color: white;} ::placeholder {color: #c5c5c5;}
                input[type="checkbox"] 
                {
                    transform: scale(1.5);
                    accent-color: #c300ff;
                    cursor: pointer;
                }`;
            }
            else
            {
                style.textContent = 
                `
                input {color: black;} ::placeholder {color: #444444;}
                input[type="checkbox"] 
                {
                    transform: scale(1.5);
                    accent-color: #680088;
                    cursor: pointer;
                }`;
            }
        }
        catch (e)
        {
        }
    }

    // square
    if (document.body.contains(squareCard))
    {
        let title = squareCard.querySelector("h3");
        let body = squareCard.querySelector(".bg-dark-subtle, .bg-black");
        let results = squareCard.querySelector("#square-results");

        try
        {
            var titleC = title.classList;
            var bodyC = body.classList;
            var resultsC = results.classList;
            var footerC = footers[0].classList;

            if (darkMode)
            {
                if (titleC.contains("text-green-light")) {titleC.replace("text-green-light", "text-green-dark");}
                if (bodyC.contains("bg-dark-subtle")) {bodyC.replace("bg-dark-subtle", "bg-black");}
                if (resultsC.contains("text-orange")) {resultsC.replace("text-orange", "text-warning");}
                if (footerC.contains("bg-pink-light")) {footerC.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                if (titleC.contains("text-green-dark")) {titleC.replace("text-green-dark", "text-green-light");}
                if (bodyC.contains("bg-black")) {bodyC.replace("bg-black", "bg-dark-subtle");}
                if (resultsC.contains("text-warning")) {resultsC.replace("text-warning", "text-orange");}
                if (footerC.contains("bg-pink-dark")) {footerC.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e) 
        {
        }
    }

    // rectangle
    if (document.body.contains(rectangleCard))
    {
        let title = rectangleCard.querySelector("h3");
        let body = rectangleCard.querySelector(".bg-dark-subtle, .bg-black");
        let results = rectangleCard.querySelector("#rectangle-results");

        try
        {
            var titleC = title.classList;
            var bodyC = body.classList;
            var resultsC = results.classList;
            var footerC = footers[1].classList;

            if (darkMode)
            {
                if (titleC.contains("text-green-light")) {titleC.replace("text-green-light", "text-green-dark");}
                if (bodyC.contains("bg-dark-subtle")) {bodyC.replace("bg-dark-subtle", "bg-black");}
                if (resultsC.contains("text-orange")) {resultsC.replace("text-orange", "text-warning");}
                if (footerC.contains("bg-pink-light")) {footerC.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                if (titleC.contains("text-green-dark")) {titleC.replace("text-green-dark", "text-green-light");}
                if (bodyC.contains("bg-black")) {bodyC.replace("bg-black", "bg-dark-subtle");}
                if (resultsC.contains("text-warning")) {resultsC.replace("text-warning", "text-orange");}
                if (footerC.contains("bg-pink-dark")) {footerC.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e)
        {
        }
    }

    // circle
    if (document.body.contains(circleCard))
    {
        let title = circleCard.querySelector("h3");
        let body = circleCard.querySelector(".bg-dark-subtle, .bg-black");
        let results = circleCard.querySelector("#circle-results");

        try
        {
            var titleC = title.classList;
            var bodyC = body.classList;
            var resultsC = results.classList;
            var footerC = footers[2].classList;

            if (darkMode)
            {
                if (titleC.contains("text-green-light")) {titleC.replace("text-green-light", "text-green-dark");}
                if (bodyC.contains("bg-dark-subtle")) {bodyC.replace("bg-dark-subtle", "bg-black");}
                if (resultsC.contains("text-orange")) {resultsC.replace("text-orange", "text-warning");}
                if (footerC.contains("bg-pink-light")) {footerC.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                if (titleC.contains("text-green-dark")) {titleC.replace("text-green-dark", "text-green-light");}
                if (bodyC.contains("bg-black")) {bodyC.replace("bg-black", "bg-dark-subtle");}
                if (resultsC.contains("text-warning")) {resultsC.replace("text-warning", "text-orange");}
                if (footerC.contains("bg-pink-dark")) {footerC.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e)
        {
        }
    }
}

// 3D Shapes page
export function switch3D()
{
    const cubeCard = document.querySelector("#cube-card");
    const cuboidCard = document.querySelector("#cuboid-card");
    const cylinderCard = document.querySelector("#cylinder-card");
    const sphereCard = document.querySelector("#sphere-card");
    
    // style (for placeholder colour)
    if (document.head.contains(document.querySelector("#placeholders-3d")))
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

                input {color: white;} ::placeholder {color: #c5c5c5;}
                input[type="checkbox"] 
                {
                    transform: scale(1.5);
                    accent-color: #c300ff;
                    cursor: pointer;
                }`;
            }
            else
            {
                style.textContent = 
                `
                input {color: black;} ::placeholder {color: #444444;}
                input[type="checkbox"] 
                {
                    transform: scale(1.5);
                    accent-color: #680088;
                    cursor: pointer;
                }`;
            }
        }
        catch (e)
        {
        }
    }

    // cube
    if (document.body.contains(cubeCard))
    {
        let title = cubeCard.querySelector("h3");
        let body = cubeCard.querySelector(".bg-dark-subtle, .bg-black");
        let results = cubeCard.querySelector("#cube-results");
        
        try
        {
            var titleC = title.classList;
            var bodyC = body.classList;
            var resultsC = results.classList;
            var footerC = footers[0].classList;
            
            if (darkMode)
            {
                
                if (titleC.contains("text-green-light")) {titleC.replace("text-green-light", "text-green-dark");}
                if (bodyC.contains("bg-dark-subtle")) {bodyC.replace("bg-dark-subtle", "bg-black");}
                if (resultsC.contains("text-orange")) {resultsC.replace("text-orange", "text-warning");}
                if (footerC.contains("bg-pink-light")) {footerC.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                if (titleC.contains("text-green-dark")) {titleC.replace("text-green-dark", "text-green-light");}
                if (bodyC.contains("bg-black")) {bodyC.replace("bg-black", "bg-dark-subtle");}
                if (resultsC.contains("text-warning")) {resultsC.replace("text-warning", "text-orange");}
                if (footerC.contains("bg-pink-dark")) {footerC.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e)
        {
        }
    }

    // cuboid
    if (document.body.contains(cuboidCard))
    {
        let title = cuboidCard.querySelector("h3");
        let body = cuboidCard.querySelector(".bg-dark-subtle, .bg-black");
        let results = cuboidCard.querySelector("#cuboid-results");
        
        try
        {
            var titleC = title.classList;
            var bodyC = body.classList;
            var resultsC = results.classList;
            var footerC = footers[1].classList;
            
            if (darkMode)
            {
                
                if (titleC.contains("text-green-light")) {titleC.replace("text-green-light", "text-green-dark");}
                if (bodyC.contains("bg-dark-subtle")) {bodyC.replace("bg-dark-subtle", "bg-black");}
                if (resultsC.contains("text-orange")) {resultsC.replace("text-orange", "text-warning");}
                if (footerC.contains("bg-pink-light")) {footerC.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                if (titleC.contains("text-green-dark")) {titleC.replace("text-green-dark", "text-green-light");}
                if (bodyC.contains("bg-black")) {bodyC.replace("bg-black", "bg-dark-subtle");}
                if (resultsC.contains("text-warning")) {resultsC.replace("text-warning", "text-orange");}
                if (footerC.contains("bg-pink-dark")) {footerC.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e)
        {
        }
    }

    // cylinder
    if (document.body.contains(cylinderCard))
    {
        let title = cylinderCard.querySelector("h3");
        let body = cylinderCard.querySelector(".bg-dark-subtle, .bg-black");
        let results = cylinderCard.querySelector("#cylinder-results");
        
        try
        {
            var titleC = title.classList;
            var bodyC = body.classList;
            var resultsC = results.classList;
            var footerC = footers[2].classList;
            
            if (darkMode)
            {
                
                if (titleC.contains("text-green-light")) {titleC.replace("text-green-light", "text-green-dark");}
                if (bodyC.contains("bg-dark-subtle")) {bodyC.replace("bg-dark-subtle", "bg-black");}
                if (resultsC.contains("text-orange")) {resultsC.replace("text-orange", "text-warning");}
                if (footerC.contains("bg-pink-light")) {footerC.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                if (titleC.contains("text-green-dark")) {titleC.replace("text-green-dark", "text-green-light");}
                if (bodyC.contains("bg-black")) {bodyC.replace("bg-black", "bg-dark-subtle");}
                if (resultsC.contains("text-warning")) {resultsC.replace("text-warning", "text-orange");}
                if (footerC.contains("bg-pink-dark")) {footerC.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e)
        {
        }
    }

    // sphere
    if (document.body.contains(sphereCard))
    {
        let title = sphereCard.querySelector("h3");
        let body = sphereCard.querySelector(".bg-dark-subtle, .bg-black");
        let results = sphereCard.querySelector("#sphere-results");
        
        try
        {
            var titleC = title.classList;
            var bodyC = body.classList;
            var resultsC = results.classList;
            var footerC = footers[3].classList;
            
            if (darkMode)
            {
                
                if (titleC.contains("text-green-light")) {titleC.replace("text-green-light", "text-green-dark");}
                if (bodyC.contains("bg-dark-subtle")) {bodyC.replace("bg-dark-subtle", "bg-black");}
                if (resultsC.contains("text-orange")) {resultsC.replace("text-orange", "text-warning");}
                if (footerC.contains("bg-pink-light")) {footerC.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                if (titleC.contains("text-green-dark")) {titleC.replace("text-green-dark", "text-green-light");}
                if (bodyC.contains("bg-black")) {bodyC.replace("bg-black", "bg-dark-subtle");}
                if (resultsC.contains("text-warning")) {resultsC.replace("text-warning", "text-orange");}
                if (footerC.contains("bg-pink-dark")) {footerC.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e)
        {
        }
    }
}
export function switchBMI()
{
    const calcCard = document.querySelector("#bmi-calculator");
    const infoCard = document.querySelector("#bmi-info");

    // calculator
    if (document.body.contains(calcCard))
    {
        let title = calcCard.querySelector("h3");
        let body = calcCard.querySelector(".bg-dark-subtle, .bg-black");
        let results = calcCard.querySelector("#bmi-results");

        try
        {
            var titleC = title.classList; 
            var bodyC = body.classList;
            var resultsC = results.classList; 
            var footerC = footers[0].classList;

            if (darkMode)
            {
                if (titleC.contains("text-red-light")) {titleC.replace("text-red-light", "text-red-dark");}
                if (bodyC.contains("bg-dark-subtle")) {bodyC.replace("bg-dark-subtle", "bg-black");}
                if (resultsC.contains("text-orange")) {resultsC.replace("text-orange", "text-warning");}
                if (footerC.contains("bg-pink-light")) {footerC.replace("bg-pink-light", "bg-pink-dark");}
            }
            else
            {
                if (titleC.contains("text-red-dark")) {titleC.replace("text-red-dark", "text-red-light");}
                if (bodyC.contains("bg-black")) {bodyC.replace("bg-black", "bg-dark-subtle");}
                if (resultsC.contains("text-warning")) {resultsC.replace("text-warning", "text-orange");}
                if (footerC.contains("bg-pink-dark")) {footerC.replace("bg-pink-dark", "bg-pink-light");}
            }
        }
        catch (e)
        {
        }
    }

    // information
    if (document.body.contains(infoCard))
    {
        let title = infoCard.querySelector("h3");
        let body = infoCard.querySelector(".bg-dark-subtle, .bg-black");
        let div = infoCard.querySelector("#formula-div");

        // arrays (for chart columns)
        const chartHeadings = 
        [
            infoCard.querySelector("#bmi-heading-1").classList, infoCard.querySelector("#bmi-heading-2").classList,
        ];
        const chartRows = 
        [
            infoCard.querySelector("#bmi-row-1").classList, infoCard.querySelector("#bmi-row-2").classList,
            infoCard.querySelector("#bmi-row-3").classList, infoCard.querySelector("#bmi-row-4").classList,
            infoCard.querySelector("#bmi-row-5").classList, infoCard.querySelector("#bmi-row-6").classList,
            infoCard.querySelector("#bmi-row-7").classList, infoCard.querySelector("#bmi-row-8").classList,
        ];

        try
        {
            var titleC = title.classList;
            var bodyC = body.classList;
            var divC = div.classList;

            if (darkMode)
            {
                if (titleC.contains("text-red-light")) {titleC.replace("text-red-light", "text-red-dark");}
                if (bodyC.contains("bg-dark-subtle")) {bodyC.replace("bg-dark-subtle", "bg-black");}
                if (divC.contains("bg-primary-subtle")) {divC.replace("bg-primary-subtle", "bg-primary");}

                for (const chartHeading of chartHeadings)
                {
                    chartHeading.replace("bg-success", "bg-success-subtle");
                }
                for (const chartRow of chartRows)
                {
                    chartRow.replace("bg-success-subtle", "bg-success");
                }
            }
            else
            {
                if (titleC.contains("text-red-dark")) {titleC.replace("text-red-dark", "text-red-light");}
                if (bodyC.contains("bg-black")) {bodyC.replace("bg-black", "bg-dark-subtle");}
                if (divC.contains("bg-primary")) {divC.replace("bg-primary", "bg-primary-subtle");}

                for (const chartHeading of chartHeadings)
                {
                    chartHeading.replace("bg-success-subtle", "bg-success");
                }
                for (const chartRow of chartRows)
                {
                    chartRow.replace("bg-success", "bg-success-subtle");
                }
            }
        }
        catch (e)
        {
        }
    }
}