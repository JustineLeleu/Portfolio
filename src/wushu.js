// HTML section for the Wushu Legacy project description

document.querySelector('#wushu').innerHTML = `
  <div class="bg-grayWhite dark:bg-grayLight w-[90vw] h-[90vh] rounded-b-md p-5 flex flex-col gap-3 overflow-scroll no-scrollbar">
    <h2 class="text-gray dark:text-white font-mono text-xl md:text-2xl lg:text-4xl">WUSHU LEGACY</h2>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">Wushu Legacy was a <strong>6 months production</strong> game made at the <strong>Game Academy</strong>. Wushu is a <strong>runner</strong> where the player play as Akakin and has to make his way to the enemy camp to kill the general. To achieve that he will have to <strong>face many enemies</strong> waiting for him <strong>along the path</strong> and kill them by <strong>entering the rights keys in time</strong>. The game is playable in <strong>solo and versus</strong> and also have an <strong>online leaderboard</strong> to compare score between all the players. We were a <strong>team of 5</strong> and I worked on it as a <strong>gameplay and UI programmer</strong>. Here is a few <strong>mechanics</strong> I made for the game and some of my work on the <strong>UI</strong>.</p>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Inputs</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">Since Wushu is a runner, the player does not have the hero control and <strong>move automatically</strong> trough the level. All he need to do is <strong>focus on the keys and enter them correctly</strong>.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/Wushu/VaincreOpti.gif" alt="Defeat enemy gif">
      <img src="/images/Wushu/InputsWIPOpti.gif" alt="Input demo gif">
    </div>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">The <strong>keys to enter</strong> appears to the player <strong>next to the enemy</strong> it belongs to once it has been <strong>activated</strong>. And the player has to enter them correctly <strong>before reaching the enemy</strong> or it will be to late. A <strong>line on the ground</strong> is there to tell the player when the <strong>time</strong> is almost up.</p>
    <img src="/images/Wushu/AkakinInputs01.jpg" alt="Code for inputs" class="mx-10 md:mx-40 lg:mx-80">
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Enemies</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">There is <strong>4 different types</strong> of enemies in the game and one of them is a <strong>special type</strong>, the <strong>crossbowmen</strong>. It's there to add a <strong>long distance enemy</strong> and a <strong>variation to the attacks</strong>. Crossbowmen launch a <strong>salve of arrows</strong> and each arrow has <strong>one key</strong>, a <strong>bullet time</strong> start to give the player enough time to enter those keys. But the point is not to kill the player with one salve so to avoid that <strong>only one arrow can hurt him</strong> and the others just  don't give any point.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/Wushu/ArrowsOpti.gif" alt="Arrows input gif">
      <img src="/images/Wushu/Crossbowmen.jpg" alt="Crossbowmen image">
    </div>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">The enemies are also <strong>spawned differently</strong> in the level. Some are waiting on the <strong>side of the road</strong> and get in position when the player arrive and <strong>others are packed</strong> waiting directly in the middle of the road. In <strong>the group</strong> situation there is only the <strong>middle enemy</strong> to defeat, the others are <strong>clones</strong> following him and dying in the same attack.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/Wushu/ClonesOpti.gif" alt="Enemy clones gif">
      <img src="/images/Wushu/Clones.jpg" alt="Clones descriptive image">
    </div>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Obstacles</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">Beside the enemies the player will also encounter <strong>obstacles like the statues</strong>. They spawn on the <strong>side of the road</strong> and so Akakin has to <strong>decal</strong> a little from his trajectory to hit them. Those obstacles are there to <strong>relax</strong> after series of enemies so they only have <strong>one key</strong> and <strong>don't hurt</strong> Akakin if the player miss it. They are also meant to give a little <strong>spectacular moment</strong> to the player by adding a <strong>camera movement</strong> and a <strong>bullet time</strong>.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/Wushu/StatueOpti.gif" alt="Statue destruction gif">
      <img src="/images/Wushu/Statue.jpg" alt="Statue image">
    </div>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">UI</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">The biggest problem with the UI was the <strong>navigation</strong> and the <strong>focus with gamepad</strong>. The buttons have different <strong>textures/materials and animations</strong> for each state. So for each group of buttons communicating with each other there is a <strong>function that deal with the navigation</strong>. Those functions <strong>first reset</strong> the last button focus and then <strong>find the next one</strong> to focus from the direction gave by the player. This way the focus is <strong>easily</strong> change and <strong>only once</strong> when the player decide it.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/Wushu/UIStates.jpg" alt="UI buttons states image">
      <img src="/images/Wushu/UI.jpg" alt="UI widget image">
    </div>
    
  </div>
`