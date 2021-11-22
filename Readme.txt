****************************************************************************************
This is Proof of Concept (POC) for automation using Webdriverio, TypeScript, Node, Cucumber and Page Object Model framework
Author: Suresh Nagumalla


Use Case:
The Stack & Frameworks
- Nodejs - language/runtime
- Typescript - via npm
- WebDriverIO - via npm
- Cucumber - via npm

The Problem
Using the above stack, complete the following steps:
1. Access http://automationpractice.com/
2. Search for a product
3. Select a product
4. Select different options from standard (Size/Color/Package from the Item)
5. Add it to a cart

Requirements
The code must be invocable with only these requirements:
- npm install
- npm start

****************************************************************************************

Instructions:
Prerequisites: 
1. Chrome browser is installed in the computer.
2. Node, NPM, Type Script are installed in the machine
(you can check the setup using the following commands: (at windows command prompt or termincal shell for mac)
node -v
npm -v
tsc -v
If you see version numbers for the above commands, that means you have these installed correctly.


Execution:
1. Download the zip file from github repository:
https://github.com/SureshNagumalla/WebdriverIO-POC.git
2. Extract the contents.
3. Open Terminal (Windows command prompt/mac terminal shell)
4. Run the following command
npm install
This will install the necessary node modules (It will create the node_module folder with the dependencies)
5. Run the following command
npx wdio wdio.conf.ts
This will execute the automate script in chrome browser. It does the following:
a) Opens http://automationpractice.com/ website
b) searches for "Printed Chiffon Dress" product
c) Changes quanity and size from the default ones
d) adds the product to cart

---------------------------------------------------------
Here is the program flow explained:
1. This uses Page Object Model.
Page.ts and Securepage.ts are the generic pages ( utilities)
LoginPage.ts uses these POs and also has the necessary selectors (getters are used to return the elements) and methods for the login page.
2.Login.feature file has the Scenario written in Gherkin language using cucumber.
3.Steps.ts has step implementations for the above feature file
4.Package.json has the list of required dependencies.
5.wdio.conf.ts is the runner file which kicks off the scenario execution.
----------------------------------------------------------
 


