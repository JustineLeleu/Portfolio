// HTML section for the COGIP project description

document.querySelector('#cogip').innerHTML = `
  <div class="bg-grayWhite dark:bg-grayLight w-[90vw] h-[90vh] rounded-b-md p-5 flex flex-col gap-3 overflow-scroll no-scrollbar">
    <h2 class="text-gray dark:text-white font-mono text-xl md:text-2xl lg:text-4xl">COGIP</h2>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">This is the COGIP Microservice Architecture Challenge. In this challenge we had to design and implement a <strong>REST API</strong> and a <strong>non-interactive CLI</strong> user interface in a <strong>microservice architecture</strong>. We were 3 working on that project and we used Srping Boot and Maven.</p>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">DataBase</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">For the database we were given an sql. That database contains 4 tables: company, contact, invoice and user. We used PHPMyAdmin to access the database during development and we later switch to a server.</p>
    <img src="/images/cogip/cogip-DB.png" alt="DataBase image" class="mx-10 md:mx-40 lg:mx-80">
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">API</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">Next we worked on the <strong>REST API</strong> in an exclusively API-related code repository. The API had to <strong>retrieve data</strong> in JSON format and <strong>modify the database</strong> while adhering to <strong>role-based access restrictions</strong>.</p>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">First we implemented the API using <strong>Spring Data JPA</strong>. I personally worked on the contact table implementation. First we have an <strong>entity</strong> to connect to the contact table, then a <strong>repository</strong> and a <strong>service</strong> to make the connection with the controller and finally the <strong>controller</strong> for the requests.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/cogip/contactEntity.svg" alt="Contact entity code">
      <img src="/images/cogip/contactController.svg" alt="Contact controller code">
    </div>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">Authentication</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">Once the API was implemented I worked on the <strong>authentication and authorization</strong> using <strong>Spring Security</strong>. I implemented the <strong>JPA for the authentication</strong> and dealt with the security config allowing access depending on the <strong>authority</strong> of the login user. For the authentication I generate a <strong>token</strong> that can be stored and used to verify the authority.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/cogip/securityConfig.svg" alt="Security config code">
      <img src="/images/cogip/authenticationResponse.jpg" alt="Authentication response JSON">
    </div>
    
    <h3 class="text-gray dark:text-white font-mono text-lg md:text-xl lg:text-2xl mt-5">CLI</h3>
    <p class="text-grayLight dark:text-textWhite font-inter text-xs md:text-base lg:text-lg text-justify">Next was <strong>non-interactive CLI</strong> and for that we used <strong>Spring Shell</strong>. Since I worked on the authentication I implemented it for the client side too, I worked on the login command, stored the token and added it to the others commands.</p>
    <div class="grid grid-cols-2 gap-2 md:gap-20 md:px-20 items-center">
      <img src="/images/cogip/shellCapture.jpg" alt="Spring shell demo capture">
      <img src="/images/cogip/authenticationCommands.svg" alt="Authentication commands code">
    </div>
    
  </div>
`