var inquirer = require("inquirer");

// array of questions for user
// WHEN I enter my project title
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README
// WHEN I enter my GitHub username
// WHEN I enter my email address
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project.",
    default: "Title",
  },
  {
    type: "input",
    name: "description",
    message: "What general info should others know about your project?",
    default: "No description provided.",
  },
  {
    type: "rawlist",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "Description",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  console.log("Let's make your README.");
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

// function call to initialize program
init();
