// HTML section for the multiplayer game project description

document.querySelector('#multiGame').innerHTML = `
  <div class="bg-grayWhite dark:bg-grayLight w-[90vw] h-[90vh] rounded-b-md p-5 flex flex-col gap-3 overflow-scroll no-scrollbar">
    <h2 class="text-gray dark:text-white font-mono text-xl md:text-2xl lg:text-4xl">MULTIPLAYER GAME</h2>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">I wanted to learn about <strong>multiplayer</strong>, so I made this prototype with the help of an online course. It is made with <strong>UE5</strong> and mainly with <strong>C++</strong>.</p>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Multiplayer plugin</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">First I made a <strong>plugin</strong> using the <strong>online subsytem steam</strong>. That plugin contains a <strong>widget</strong> offering the player two options: <strong>Host</strong> and create a session or <strong>join</strong> an existing one.</p>
    <img src="/images/MultiGame/MultiPlugin.gif" alt="Multi plugin demo gif" class="mx-10 md:mx-40 lg:mx-80">
        
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Weapons and pick ups</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">That project includes diverse types of <strong>weapons</strong>, <strong>projectile</strong> weapons, <strong>hitscan</strong> weapons, <strong>grenades</strong>. And an <strong>actor component</strong> is in charge of all that concern the <strong>fighting part</strong> including <strong>equipping and swapping</strong> weapons and the <strong>ammos</strong>. Then there is some <strong>pick ups</strong> allowing the player to obtain more <strong>ammos</strong> or regain <strong>health</strong>. Those also have their own actor component.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/MultiGame/Weapons.gif" alt="Weapons demo gif">
      <img src="/images/MultiGame/Pickups.gif" alt="Pickups demo gif">
    </div>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Replication</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">Since this is a multiplayer project there has to be some <strong>replication</strong>. Since the server is in charge things like <strong>health</strong> or some <strong>effects</strong> are replicated so the clients can know and display it.</p>
    <img src="/images/MultiGame/Replication.jpg" alt="Replication code part" class="mx-10 md:mx-40 lg:mx-80">
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Lag Compensation</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">Since it is a shooter, it's important to deal with <strong>lag</strong> problems. So, this project includes <strong>Client-side prediction</strong> allowing the client to do some actions like aiming or reloading without perturbation due to the lag. And also <strong>Server-side rewind</strong> using hit boxes to <strong>confirm a hit</strong> on the server even with lag. But the server side rewind is not used in case of really high ping to <strong>keep it fair</strong> for everyone.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/MultiGame/LagCompensation.gif" alt="Lag compensation demo gif">
      <img src="/images/MultiGame/Hitboxes.jpg" alt="Player hitboxes image">
    </div>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Cheating</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">In this case, the <strong>server is in charge</strong> and <strong>verify everything</strong>, but there are still things like the fire delay that are not checked and in that case there is a <strong>validation</strong> used to verify that data and <strong>kick out the cheating player</strong>.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/MultiGame/Cheat.gif" alt="Cheat demo gif">
      <img src="/images/MultiGame/Validate.jpg" alt="Validate for cheat code part">
    </div>
  </div>
`