// HTML section for the COGIP project description

document.querySelector('#ticTacToe').innerHTML = `
  <div class="bg-grayWhite dark:bg-grayLight w-[90vw] h-[90vh] rounded-b-md p-5 flex flex-col gap-3 overflow-scroll no-scrollbar">
    <h2 class="text-gray dark:text-white font-mono text-xl md:text-2xl lg:text-4xl">Tic Tac Toe</h2>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">This is a Tic Tac Toe game for <strong>android</strong> that I made as a first introduction to android studio. It include a two players mode to play with a friend on the same phone and also a solo mode to play against an <strong>IA</strong> made with the minimax algorithm. My objective with this project was to discover <strong>android studio</strong> with an easy to make small app.</p>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Gameplay</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">Since my objective was to discover android studio, I mostly wanted to make buttons do things when clicked. So for the gameplay I simply used a grid as a background and placed <strong>buttons</strong> as the tiles. I also have two different <strong>activities</strong>, for the main menu and for the game, that communicates between them.</p>
    <div class="grid grid-cols-3 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/TicTacToe/screen03.jpg" alt="Main menu screenshot">
      <img src="/images/TicTacToe/screen01.jpg" alt="In game screenshot">
      <img src="/images/TicTacToe/screen02.jpg" alt="Win screen screenshot">
    </div>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">IA</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">I chose to make a Tic Tac Toe because it was simple to make but also because I thought it would be an easy project to implement a <strong>basic IA system</strong>. So I implemented a solo mode with a <strong>minimax algorithm</strong> and with the possibility to choose the <strong>difficulty</strong> by adding a maximum for the <strong>recursion</strong> of the minimax function.</p>
    <img src="/images/TicTacToe/minimaxAlgo.png" alt="Minimax Algorithm code" class="mx-10 md:mx-40 lg:mx-80">
    
  </div>
`