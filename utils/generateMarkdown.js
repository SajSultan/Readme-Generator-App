// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title.toUpperCase()}
  ## Badges
  ${answers.license}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}


  ## License
  ${answers.license}
  
 
  
  ## Contributing
  ${answers.contribution}


  # Contact
  * Github :${answers.github}
  * LinkedIn :${answers.linkedin}
  * Email :${answers.email}

  
`
}
module.exports = generateMarkdown;
