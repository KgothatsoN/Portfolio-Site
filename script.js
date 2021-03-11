let theme = localStorage.getItem("theme")
const title = document.querySelector("#title");

let j = 0;
let text = "Lotjhani, I'm Kgothatso Ntuli...";
let speed = 100;

(function typeEffect()   {
    if (j < text.length)    {
        title.innerHTML += text.charAt(j);
        j++;
        setTimeout(typeEffect, speed);
    }
})();

if (theme==null)
{
    setTheme("dark")
}
else
{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot")

for (let i=0; themeDots.length > i;i++)
{
    themeDots[i].addEventListener("click", function()
    {
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode)
{
    if (mode=="dark")
    {
        document.getElementById("theme-style").href = "main.css"
    }

    if (mode=="light")
    {
        document.getElementById("theme-style").href = "dark.css"
    }

    localStorage.setItem("theme", mode)
}