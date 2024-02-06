// HTML section for the footer

document.querySelector('#footer').innerHTML = `
  <div class="bg-grayWhite dark:bg-grayLight mt-10">
    <div class="grid grid-cols-2 gap-10 w-2/3 m-auto py-10">
        <div class="flex flex-col items-center">
            <h2 class="text-gray dark:text-white font-mono text-xl md:text-3xl lg:text-5xl">Contact</h2>
            <div class="text-grayLight dark:text-textWhite text-[8px] md:text-sm lg:text-base font-inter items-start flex flex-col gap-2 mt-5">
                <div class="flex gap-1 md:gap-5">
                    <img src="images/icons/phone-icon.svg" alt="phone icon" class="w-4 md:w-5 lg:w-6 invert dark:invert-0">
                    <p>+32 491 07 75 77</p>
                </div>
                <div class="flex gap-1 md:gap-5">
                    <img src="images/icons/mail-icon.svg" alt="mail icon" class="w-4 md:w-5 lg:w-6 invert dark:invert-0">
                    <p>justine.leleu@hotmail.com</p>
                </div>
            </div>
        </div>
        
        <div class="flex flex-col items-center">
            <h2 class="text-gray dark:text-white font-mono text-xl md:text-3xl lg:text-5xl">Links</h2>
            <div class="text-grayLight dark:text-textWhite font-inter text-[8px] md:text-sm lg:text-base items-start flex flex-col gap-2 mt-5">
                <a href="https://github.com/JustineLeleu" class="flex gap-1 md:gap-5"><img src="images/icons/github-icon.svg" alt="github icon" class="w-4 md:w-5 lg:w-6 invert dark:invert-0">GitHub</a>
                <a href="https://www.linkedin.com/in/justineleleu/" class="flex gap-1 md:gap-5"><img src="images/icons/linkedin-icon.svg" alt="linkedin icon" class="w-4 md:w-5 lg:w-6 invert dark:invert-0">LinkedIn</a>
                <a href="images/resume.pdf" target="_blank" class="flex gap-1 md:gap-5"><img src="images/icons/resume-icon.svg" alt="resume icon" class="w-4 md:w-5 lg:w-6 invert dark:invert-0">Resume</a>
            </div>
        </div>
    </div>
  </div>
`