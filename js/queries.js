const sidebar = document.querySelector("#sidebar");
const sidebarPane = document.querySelector("#sidebar-pane");
const sidebarItems = document.querySelectorAll("#sidebar div a");

const rows = document.querySelectorAll(".row");

// responsive viewports
const smScreen = window.matchMedia("(max-width: 576px)");
const mdScreen = window.matchMedia("(max-width: 768px)");
const lgScreen = window.matchMedia("(max-width: 992px)");
const xlScreen = window.matchMedia("(max-width: 1200px)");
const xxlScreen = window.matchMedia("(max-width: 1600px)");

sidebar.className = "d-none";
sidebarPane.className = "d-none";

window.onload = function()
{
    viewport(smScreen);
    smScreen.addEventListener("change", viewport);

    if (window.darkMode === false)
    {
        for (let i = 0; i < sidebarItems.length; i++)
        {
            sidebarItems[i].classList.add("text-light");
        }
    }
    else
    {
        for (let i = 0; i < sidebarItems.length; i++)
        {
            sidebarItems[i].classList.add("text-dark");
        }
    }
}

function openSidebar()
{
    // append classes currently named d-none to d-block
    sidebar.className = "d-block";
    sidebarPane.className = "d-block";

    // change sidebar background colour if dark mode is enabled
    if (window.darkMode === true)
    {
        sidebar.classList.remove("bg-dark");
        sidebar.classList.add("bg-secondary-subtle");
        for (let i = 0; i < sidebarItems.length; i++)
        {
            sidebarItems[i].classList.remove("text-light");
            sidebarItems[i].classList.add("text-dark");
        }
    }
    else
    {
        sidebar.classList.remove("bg-secondary-subtle");
        sidebar.classList.add("bg-dark");
        for (let i = 0; i < sidebarItems.length; i++)
        {
            sidebarItems[i].classList.remove("text-dark");
            sidebarItems[i].classList.add("text-light");
        }
    }

    // create sidebar animation
    let width = 0;
    const animate = function()
    {
        sidebar.style.width = `${width}%`;
        width++;

        if (width <= 50)
        {
            // repeat animation until width reaches 50%
            animateLoop = setTimeout(animate, 0); 
            // note: 0 = miliseconds, replace with new value for slower animation
        }
        else
        {
            // end animation loop after completion
            clearInterval(animateLoop);
        }
    }

    animate();
}
function closeSidebar()
{
    const sidebar = document.querySelector("#sidebar");
    const sidebarPane = document.querySelector("#sidebar-pane");
    sidebarPane.className = "d-none";

    // create sidebar animation
    let width = 50;
    const animate = function()
    {
        sidebar.style.width = `${width}%`;
        width--;

        if (width >= 0)
        {
            // repeat animation until width reaches 0%
            animateLoop = setTimeout(animate, 0); 
        }
        else
        {
            sidebar.className = "d-none";

            // end animation loop after completion
            clearInterval(animateLoop); 
        }
    }

    animate();
}

// toggle class m-2 when viewport is smScreen
function viewport(value)
{
    rows.forEach(row => 
    {
        if (value.matches)
        {
            row.classList.add("m-2");
        }
        else
        {
            row.classList.remove("m-2");
        }
    });
}