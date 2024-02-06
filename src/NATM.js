// HTML section for the NATM project description

document.querySelector('#NATM').innerHTML = `
  <div class="bg-grayWhite dark:bg-grayLight w-[90vw] h-[90vh] rounded-b-md p-5 flex flex-col gap-3 overflow-scroll no-scrollbar">
    <h2 class="text-gray dark:text-white font-mono text-xl md:text-2xl lg:text-4xl">NIGHTMARE AT THE MUSEUM</h2>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">Nightmare at the Museum is a game made during the <strong>Global Game Jam 2021</strong>. The player incarnate a little boy <strong>locked inside a museum at night</strong> with a <strong>monster and a music box</strong> for only weapon. To win the game he has to <strong>find a way out</strong> but beware of the monster. We were a <strong>team of 7</strong> and I worked as a <strong>gameplay programmer</strong>. Here is some of my work during those few days.</p>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Fear</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">In the game the player incarnate a little boy trapped in a very scary situation and <strong>more the boy spend time in the dark the more he became frightened</strong>. Once his fear is too high, the player <strong>faint and have to start over</strong>. And the only indication for the player is the <strong>screen fading working as a fear bar</strong> by playing an animation.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/NATM/FearOpti.gif" alt="Fear mechanic gif">
      <img src="/images/NATM/FearUI.jpg" alt="Fear UI explanation image">
    </div>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">The player can <strong>reduce the fear</strong> by calming the boy only by <strong>playing music</strong> which has to reload eventually or by <strong>standing in the light</strong> but it will not last forever.</p>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Exits</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">There is <strong>locked doors</strong> everywhere in the museum but <strong>only one key</strong> hidden somewhere. To win the game the player has to <strong>find that key</strong> and then <strong>find the right door</strong> to escape.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/NATM/DoorsAndKey.jpg" alt="Doors and key explanation image">
      <img src="/images/NATM/WinOpti.gif" alt="Escape gif">
    </div>
  </div>
`