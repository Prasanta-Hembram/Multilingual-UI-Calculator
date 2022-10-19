# Multiscript Web UI-Calculator
Simple Multiscript Web Calculator forked from Simple Calculator With Clean UI.
# Calculator in Multiscript
* It will increase use of numbers in native language script (language having their own script).
* An open source calculator that supports multiscipt is uncommon.
* Try this unique calculator in your own your mother language. 
* Show your 💓 towards your mother tongue by contributing something, add features and making it more popular.  
## Contributing

In general, we follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Work on your fork
    1. Make your changes and additions
        - If you are adding a new language (but try to find languages having unique ISO 15924, [find script codes here in Wikipedia](https://en.wikipedia.org/wiki/Script_(Unicode))) to the project then create a folder inside **locales** with a valid ISO 639-2 Code. 
		- Then inside the newly created folder three files must be there, locale.html (replace locale with three letter language code), main.css, and script.js
		- You can copy all these three files from the **eng** Template folder and place them inside yours.
		- locale.html - Translate these words in your language: Calculator, Home and numbers.
		- main.css - This should be uniform for all languages, otherwise it will look odd. But if you can make css more better then please go ahead create a separate issue for this.
		- script.js - From the line 3 to 14 replace all the numbers with your own language script. In the line 65 there is function called localize, which you can completly ignore or delete if you have translated your number in locale.html file
		- After making all the changes move out of the locals folder and edit index.html file and find div element with id="list-items", and add your language with path. Also, don't forget to add your language to unordered list below.
		- If you are making changes to codes may it be minor or major please don't forget to add inline comments.
    2. Change or add tests if needed using VS Code live server.
    3. Add changes to README.md if needed
4. Commit changes to your own branch
5. Repeat step 3(3) above
6. Push your work back up to your fork
7. Submit a Pull request so that we can review your changes

### License
Distributed under the MIT License. See [`LICENSE`](https://github.com/Code-Recursion/UI-Calculator/blob/master/LICENSE.md).
