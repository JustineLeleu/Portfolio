// HTML section for the java projects section

document.querySelector('#javaSection').innerHTML = `
  <div class="mt-10">
    <div>
        <h2 class="text-gray dark:text-white font-mono text-lg md:text-2xl lg:text-4xl">Java Projects</h2>
        <div class="border-t-2 border-borderGreen w-40 lg:w-80 translate-x-10"></div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
    
        <div class="flex flex-col items-center text-textWhite font-inter">
            <div class="group bg-[url('/images/cogip/cogipLogo.png')] bg-contain w-full aspect-square">
                <div class="invisible group-hover:visible flex flex-col items-center justify-center gap-5 bg-gray/[.80] w-full h-full text-white text-base md:text-xl lg:text-2xl">
                    <button id="cogipButton" class="border-b-2 border-borderGreen w-fit">Description</button>
                    <a href="https://github.com/JustineLeleu/Java_week_6_cogip_API" class="border-b-2 border-borderGreen w-fit">API Code</a>
                    <a href="https://github.com/JustineLeleu/java_week_6_cogip_CLI" class="border-b-2 border-borderGreen w-fit">CLI Code</a>
                </div>
            </div>
            <h3 class="text-gray dark:text-white text-base lg:text-xl text-center">COGIP PROJECT</h3>
            <div class="text-grayLight dark:text-textWhite flex gap-5 text-xs lg:text-sm">
                <p>Java</p>
                <p>Spring Boot</p>
                <p>Maven</p>
            </div>
        </div>
        
        <div class="flex flex-col items-center text-textWhite font-inter">
            <div class="group bg-[url('/images/TicTacToe/TicTacToeLogo.png')] bg-contain w-full aspect-square">
                <div class="invisible group-hover:visible flex flex-col items-center justify-center gap-5 bg-gray/[.80] w-full h-full text-white text-base md:text-xl lg:text-2xl">
                    <button id="ticTacToeButton" class="border-b-2 border-borderGreen w-fit">Description</button>
                    <a href="https://github.com/JustineLeleu/TicTacToe" class="border-b-2 border-borderGreen w-fit">Code</a>
                </div>
            </div>
            <h3 class="text-gray dark:text-white text-base lg:text-xl text-center">TicTacToe App</h3>
            <div class="text-grayLight dark:text-textWhite flex gap-5 text-xs lg:text-sm">
                <p>Java</p>
                <p>Android Studio</p>
            </div>
        </div>
        
    </div>
    
    <div id="javaProjectInfos" class="fixed top-0 left-0 right-0 h-full backdrop-blur-sm flex justify-center items-center z-20 hidden">
        
        <button id="javaProjectInfosClose"><img src="/images/icons/close-icon.svg" alt="Close button icon" class="w-4 md:w-6 lg:w-8 absolute right-1 md:right-2 lg:right-5 top-1 md:top-2 lg:top-5 invert dark:invert-0"></button>
        <div id="cogip" class="module hidden"></div>
        <div id="ticTacToe" class="module hidden"></div>
        
    </div>
  </div>
`

const cogipButton = document.getElementById("cogipButton");
const ticTacToeButton = document.getElementById("ticTacToeButton");
const javaModule = document.getElementById("javaProjectInfos");
const javaCloseButton = document.getElementById("javaProjectInfosClose");

javaCloseButton.addEventListener("click", () => {
    javaModule.classList.add("hidden");
    for (const child of document.querySelectorAll(".module")) {
        child.classList.add("hidden");
    }
});

cogipButton.addEventListener("click", () => {
    document.getElementById("cogip").classList.remove("hidden");
    javaModule.classList.remove("hidden");
})

ticTacToeButton.addEventListener("click", () => {
    document.getElementById("ticTacToe").classList.remove("hidden");
    javaModule.classList.remove("hidden");
})