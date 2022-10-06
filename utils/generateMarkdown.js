// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## README-Generator
  ![badge](https://img.shields.io/badge/license-${data.license}-important)
  
  ## Description
  
   ${data.description}
 
## Table of Contents
  - [Description](#description)
  - [Documentation](#documentation)
  - [Usage](#usage)
  - [Screenshot](#screenshot)
  - [Features](#features)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)
  - [Testing](#testing)
  - [Contact](#contact)
## Documentation
  ${data.documentation}
 
## Usage
  ${data.usage}
## Screenshot
![Screenshot](${data.screenshot})
## Features
  ${data.features}
  
# Acknowledgements
  ${data.acknowledgements}
    
## License
  ![badge](https://img.shields.io/badge/license-${data.license}-important)
  <br>
  Permission to use this application is granted under the ${data.license} license. <https://opensource.org/licenses/${data.license}>
## Testing
  ${data.testing}
## Contact:
  Your Contact! <a href="mailto:${data.email}">${data.email}</a> 
  Your GitHub! <a href="mailto:${data.github}">${data.github}</a>
 


`;
}

module.exports = generateMarkdown;
