#! /usr/bin/env node

// Import the 'inquirer' module, which is command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold.underline("\n\t Welcome to word counter\n"))

// Declear a constant 'answers' and assign it to the result of inquirer.prompt function

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.yellow.bold("Enter your sentence to count the word: ")
    }
])

const words = answers.Sentence.trim().split(" ")

// Print the array of words to the console
console.log(words)

// Print the word count of the sentence to the console
console.log(chalk.red.bold(`Your sentence word count is ${words.length}`));
