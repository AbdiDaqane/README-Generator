// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "ReadMe generator! Lets Start, Please provide your full name."
  },

  {
    type: 'input',
    name: 'github',
    message: 'Enter your Github Username.'
  },

  {
    type: 'input',
    name: 'title',
    message: 'Enter the name of your Github repository application.'
  },

  {
    type:'input',
    name: 'description',
    message: 'Enter a description of your application.'
  },

  {
    type:'input',
    name: 'documentation',
    message: 'Enter a description for the problems you solved with this application.'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usages for your application.'
  },

  {
    type: 'input',
    name: 'screenshot',
    default: 'https://via.placeholder.com/150/0000FF/808080?Text=README-Generator',
    message: 'Enter a relative path for your screen shot image.'
  },

  {
    type: 'input',
    name: 'features',
    message: 'Please enter a list of the main features of your application.'
  },

  {
    type: 'input',
    name: 'acknowledgements',
    message: 'Please enter the names of all collaborators.'
  },

  {
    type: 'input',
    message: 'What license are you using?',
    name: 'license',
    choices: ['AAL', 'MIT', 'GNU, GPLv3']
  },

  {
    type: 'input',
    name: 'testing',
    message: 'What is the process used to test this application?'
  },

  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address'
  }
];
//End of questions array

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(userInput){
        const markdownString = generateMarkdown(userInput)
    // TODO: Create a function to write README file

         fs.writeFileSync(path.join(__dirname,'/dist/','README.md'), markdownString, function(err) {
            if(err) {
            console.log(err)
        }
        else {
            console.log('Look at your brand new README!')
        }
    
    })
})
}





// Function call to initialize app
init();
