// HTML section for the introduction

document.querySelector('#intro').innerHTML = `
  <div>
    <div class="flex">
        <div class="z-10 w-full md:w-3/5 pt-[10%] pl-[5%] md:pl-[20%]">
            <h1 class="text-gray dark:text-white font-mono text-2xl md:text-4xl lg:text-6xl text-balance">Nice to meet you! I'm Justine Leleu</h1>
            <div class="border-t-2 border-borderGreen w-[90%] md:w-[70%] lg:w-[90%] translate-x-20"></div>
            <p class="text-grayLight dark:text-textWhite font-inter text-sm md:text-base lg:text-lg text-balance mt-10 mb-10">As a passionate developer for programming and video games, I started as a gameplay programmer. I then started to explore web development. Finally discovering an interest in Java and the challenges it brings with it.</p>
            <a href="#footer" class="text-grayLight dark:text-textWhite font-inter text-xs md:text-sm lg:text-base border-b-2 border-borderGreen">CONTACT ME</a>
        </div>
        
        <div class="md:mr-[16%] bg-grayWhite dark:bg-grayLight md:w-[25vw] md:h-[80vh] p-2 lg:p-10">
            <img src="/images/avatars/Cadre01.jpg" alt="my picture" class="rounded-full w-20 md:w-full mt-[40%]">
        </div>
    </div>
    
    <div class="border-t-2 border-grayWhite dark:border-grayLight w-2/3 m-auto mt-10"></div>
  </div>
`