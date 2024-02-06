// HTML section for the game projects section

document.querySelector('#gameSection').innerHTML = `
  <div class="mt-10">
  
    <div>
        <h2 class="text-gray dark:text-white font-mono text-lg md:text-2xl lg:text-4xl">Gameplay Projects</h2>
        <div class="border-t-2 border-borderGreen w-40 lg:w-80 translate-x-10"></div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
    
        <div class="flex flex-col items-center text-textWhite font-inter">
            <div class="group bg-[url('/images/Wushu/WushuLegacy_Keyart2000x2000.jpg')] bg-contain w-full aspect-square">
                <div class="invisible group-hover:visible flex flex-col items-center justify-center gap-5 bg-gray/[.80] w-full h-full text-white text-base md:text-xl lg:text-2xl">
                    <button id="wushuButton" class="border-b-2 border-borderGreen w-fit">Description</button>
                    <a href="https://bouftools.itch.io/wushu-legacy" class="border-b-2 border-borderGreen w-fit">Demo</a>
                </div>
            </div>
            <h3 class="text-gray dark:text-white text-base lg:text-xl text-center">WUSHU LEGACY</h3>
            <div class="text-grayLight dark:text-textWhite flex gap-5 text-xs lg:text-sm">
                <p>UE4</p>
                <p>Gameplay</p>
                <p>UI</p>
            </div>
        </div>
        
        <div class="flex flex-col items-center text-textWhite font-inter">
            <div class="group bg-[url('/images/NATM/NATMLogo.jpg')] bg-contain w-full aspect-square">
                <div class="invisible group-hover:visible flex flex-col items-center justify-center gap-5 bg-gray/[.80] w-full h-full text-white text-base md:text-xl lg:text-2xl">
                    <button id="NATMButton" class="border-b-2 border-borderGreen w-fit">Description</button>
                    <a href="https://github.com/JustineLeleu/GGJ-2021-A-nightmare-at-the-museum" class="border-b-2 border-borderGreen w-fit">Code</a>
                </div>
            </div>
            <h3 class="text-gray dark:text-white text-base lg:text-xl text-center">NIGHTMARE AT THE MUSEUM</h3>
            <div class="text-grayLight dark:text-textWhite flex gap-5 text-xs lg:text-sm">
                <p>UE4</p>
                <p>Gameplay</p>
                <p>UI</p>
            </div>
        </div>
        
        <div class="flex flex-col items-center text-textWhite font-inter">
            <div class="group bg-[url('/images/MultiGame/Title01.jpg')] bg-contain w-full aspect-square">
                <div class="invisible group-hover:visible flex flex-col items-center justify-center gap-5 bg-gray/[.80] w-full h-full text-white text-base md:text-xl lg:text-2xl">
                    <button id="multiButton" class="border-b-2 border-borderGreen w-fit">Description</button>
                </div>
            </div>
            <h3 class="text-gray dark:text-white text-base lg:text-xl text-center">MULTIPLAYER GAME</h3>
            <div class="text-grayLight dark:text-textWhite flex gap-5 text-xs lg:text-sm">
                <p>UE5</p>
                <p>Gameplay</p>
                <p>C++</p>
            </div>
        </div>
           
    </div>
    
    <div id="gameProjectInfos" class="fixed top-0 left-0 right-0 h-full backdrop-blur-sm flex justify-center items-center z-20 hidden">
        
        <button id="gameProjectInfosClose"><img src="/images/icons/close-icon.svg" alt="Close button icon" class="w-4 md:w-6 lg:w-8 absolute right-1 md:right-2 lg:right-5 top-1 md:top-2 lg:top-5 invert dark:invert-0"></button>
        <div id="wushu" class="module hidden"></div>
        <div id="NATM" class="module hidden"></div>
        <div id="multiGame" class="module hidden"></div>
        
    </div>
    
  </div>
`

const wushuButton = document.getElementById("wushuButton");
const NATMButton = document.getElementById("NATMButton");
const multiButton = document.getElementById("multiButton");
const gameModule = document.getElementById("gameProjectInfos");
const gameCloseButton = document.getElementById("gameProjectInfosClose");

gameCloseButton.addEventListener("click", () => {
    gameModule.classList.add("hidden");
    for (const child of document.querySelectorAll(".module")) {
        child.classList.add("hidden");
    }
});

wushuButton.addEventListener("click", () => {
    document.getElementById("wushu").classList.remove("hidden");
    gameModule.classList.remove("hidden");
})

NATMButton.addEventListener("click", () => {
    document.getElementById("NATM").classList.remove("hidden");
    gameModule.classList.remove("hidden");
})

multiButton.addEventListener("click", () => {
    document.getElementById("multiGame").classList.remove("hidden");
    gameModule.classList.remove("hidden");
})