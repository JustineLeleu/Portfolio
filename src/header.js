// HTML section for the header

let isSmallScreen = (window.innerWidth < 768);

document.querySelector('#header').innerHTML = `
  <div class="absolute left-2 flex gap-2 z-20">
    <div id="headerBurger" class="md:hidden">
        <button id="headerButton" class="mt-2">
            <img src="/images/icons/menu-icon.svg" alt="menu icon" class="w-4">
        </button>    
    </div>
    <div id="headerMenu" class="bg-grayWhite dark:bg-grayLight p-2 md:mt-2 rounded-3xl ${isSmallScreen ? 'hidden' : ''}">
        <ul class="flex gap-5 items-center">
            <li><a href="https://github.com/JustineLeleu" title="github profile"><img src="/images/icons/github-icon.svg" alt="github icon" class="w-4 md:w-5 lg:w-6 invert dark:invert-0"></a></li>
            <li><a href="https://www.linkedin.com/in/justineleleu/" title="linkedin profile"><img src="/images/icons/linkedin-icon.svg" alt="linkedin icon" class="w-4 md:w-5 lg:w-6 invert dark:invert-0"></a></li>
            <li><a href="/images/Resume.pdf" target="_blank" title="resume"><img src="/images/icons/resume-icon.svg" alt="resume icon" class="w-4 md:w-5 lg:w-6 invert dark:invert-0"></a></li>
        </ul>
    </div>
  </div>
`

const button = document.getElementById("headerButton");
const menu = document.getElementById("headerMenu");
const burger = document.getElementById("headerBurger");
let isMenuDisplayed = false;

window.addEventListener("resize", () => {
    if (window.innerWidth < 768 && !isSmallScreen)
    {
        isSmallScreen = true;
        burger.classList.remove("hidden");
        menu.classList.add("hidden");
    }
    if (window.innerWidth >= 768 && isSmallScreen)
    {
        isSmallScreen = false;
        burger.classList.add("hidden");
        menu.classList.remove("hidden");
    }
})

button.addEventListener("click", displayMenu);

function displayMenu()
{
    console.log("click");
    if (isMenuDisplayed) menu.classList.add("hidden");
    else menu.classList.remove("hidden");
    isMenuDisplayed = !isMenuDisplayed;
}