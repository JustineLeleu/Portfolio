// HTML section for the Calculator app project description

document.querySelector('#calculator').innerHTML = `
  <div class="bg-grayWhite dark:bg-grayLight w-[90vw] h-[90vh] rounded-b-md p-5 flex flex-col gap-3 overflow-scroll no-scrollbar">
    <h2 class="text-gray dark:text-white font-mono text-xl md:text-2xl lg:text-4xl">Calculator</h2>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">This is a <strong>calculator app made in Java</strong>. It contains the <strong>basic operators</strong> and some features like the display of the <strong>historic</strong>, the <strong>negative/positive</strong> button or the <strong>back/clear/clear all</strong> buttons. This app was a first project in <strong>Java</strong> and also using <strong>Maven</strong> so it was really a <strong>discovering project</strong>. We were two on this project working mostly in <strong>pair coding</strong>.</p>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">UI</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">We used the <strong>swing library</strong> to display the element for the user. The screen containing the historic and the user input is made of <strong>JLabel</strong> and the buttons are <strong>JButton</strong>. The buttons are stocked in an array and we used a loop to create and display them.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/calculator/screenshot.png" alt="App screenshot">
      <img src="/images/calculator/buttonsLoop.png" alt="Loop for buttons creation code">
    </div>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Operations</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">For the different actions we have an <strong>event listener</strong> function that will get the button pressed and with a <strong>switch case</strong> do the needed action. Every <strong>input is stocked</strong> so when an operation is called, meaning that the user finished his last input, we can <strong>call the correct operation</strong> and <strong>update the result</strong>.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/calculator/varStock.png" alt="Stock variables code">
      <img src="/images/calculator/operationMethod.png" alt="Method for operation code">
    </div>
    
  </div>
`