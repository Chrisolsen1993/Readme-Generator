// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "Apache") {
    return "![Apache](/assets/Apache.svg)";
  } else if (license === "GNU") {
    return "![GNU](/assets/GNU.svg)";
  } else if (license === "MIT") {
    return "![MIT](/assets/MIT.svg)";
  } else {
    return "![ISC](/assets/ISC.svg)";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  return `# ${data.title}
${badge}
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
  ${badge}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  [github](https://www.github.com/${data.github})
  ${data.email}



`;
}

module.exports = generateMarkdown;
