function renderLicenseBadge(license) {
  if (license !== "None") {
    const licenseclip = license.replace(/\s+/g, "");
    return `![GitHub license](https://img.shields.io/badge/license-${licenseclip}-green.png)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
      
  This project is licensed under the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

  ${data.description}

  ## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Credits](#credits)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Contact](#contact)

------------------------------------------------------------

  ## Installation
  
  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage 
    
  ${data.usage}
  
  ## Credits  
  
  ${data.credits}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
${data.contribution}
  
  ## Tests

  To run tests, use the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Contact

  To get in contact with the original creator, send mail to ${
    data.email
  } or go to github.com/${data.github}
`;
}

module.exports = generateMarkdown;
