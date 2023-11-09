# cypress-bdd
cypress cucumber bdd

- Cypress 13.4.0
- NodeJs 20.9.0

## Pre-requisites
Install:
- NodeJS
- Visual Studio Code
  
## Setup
1. Create folder and open in Visual Studio code
2. Open terminal and run command "npm init" to generate package.json file
3. Install Cypress:
   - ```npm install cypress --save-dev```
5. Install Cucumber preprocessor:
   - ```npm install --save-dev @badeball/cypress-cucumber-preprocessor```
   - ```npm i @bahmutov/cypress-esbuild-preprocessor```                     
7. Other dependencies
   - ```npm i --save-dev @cypress/webpack-preprocessor```
8. To open Cypress dashboard: "npx cypress open"
9. Create folders in e2e: "features" and "step_definitions"
10. Create folders in support: "pages" and "utils"

## Test Execution
- For commandline execution:
  ```npx cypress run``` 

- Run headless in chrome browser: 
  ```npx cypress run --headless --browser chrome```

# Test Environment
- https://www.saucedemo.com/

# References
- https://docs.cypress.io/guides/references/assertions
- https://docs.cypress.io/guides/references/error-messages
- https://docs.cypress.io/guides/guides/command-line
