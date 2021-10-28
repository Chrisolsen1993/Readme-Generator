// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "Apache") {
    return "![Apache](/assets/Apache.svg)";
  } else if (license === "GNU") {
    return "![GNU](/assets/GNU.svg)";
  } else if (license === "MIT") {
    return "![MIT](/assets/MIT.svg)";
  } 
  else if (license === "None"){
    return ""
  }
  else {
    return "![ISC](/assets/ISC.svg)";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "[Apache](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU") {
    return "[GNU](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } 
  else if (license === "None"){
    return"";
  }
  else {
    return "[ISC](https://opensource.org/licenses/ISC)";
  }

}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  return `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Collaboration](#collaboration)
  - [Tests](#tests)
  - [Questions](#questions)

${badge}
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}


## License
Link for license choosed\n
${link}

## Contribution
Use this guidlines for collaboration
${data.contribution}

## Tests
Test applications
${data.tests}

## Questions
If you have any question you can reach me trough github or either you can email me Thanks.\n
[github](https://www.github.com/${data.github})
${data.email}



`;
}

module.exports = generateMarkdown;
