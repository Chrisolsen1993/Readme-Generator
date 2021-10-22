// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: "input",
        message:  "Please provide a brief description of your project.",
        name: "description",
      },
      {
        type: "input",
        message:  "What do you need to install in order for your application to work?",
        name: "installation",
       
      },
  
      {
        type: "input",
        message:  "How do you use your application?",
        name: "usage",
        
        },
        {
            type: "input",
            message:  "How would you run tests on this project?",
            name: "tests",
           
        },

        {
            type: "list",
            message: "What type of license would you like?",
            name: "license",
            choices: [
                "Apache License 2.0",
                "GNU GPLv3",
                "MIT",
                "ISC",
                "None"
            ]
        },
        {
            type: "list",
            message: "Would you like other developers to contribute to your project?",
            name: "contributors",
            choices: [
                "Yes",
                "No"
            ]
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
            
        },
        {
            type: "input",
            message: "What is your email adress?",
            name: "email",
            
        }
  

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((response) => {
    console.log(response)
    generateMarkdown(response)
})
}


// Function call to initialize app
init();


// inquirer
// .prompt([

//     )
// .then((response) =>{
//     readMeWriter(response)
// }
// )
// const readMeWriter = ()=>{
//     const readMeStarter = `
    
    
//     `
// }




