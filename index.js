#! /usr/bin/env node
//The app will show the students multiple choice questions and promt the user to reply.
//In the end it will show the students the result of the quiz.
import inquirer from "inquirer";
import chalk from "chalk";
let points = 0;
let questions1 = await inquirer.prompt([
    {
        name: "One",
        type: "list",
        message: "\nWhat keyword is used to define a permenant variable type in TypeScript?",
        choices: ["var", "const", "let", "type"]
    },
]);
if (questions1.One === "const") {
    console.log(chalk.green("your answer is correct"));
    points++;
}
else {
    console.log(chalk.red("Incorrect answer, Right answer is const"));
}
let questions2 = await inquirer.prompt([
    {
        name: "Two",
        type: "list",
        message: "\nWhich of the following is a primitive data type in TypeScript?",
        choices: ["Object", "String", "Array", "function"]
    }
]);
if (questions2.Two === "String") {
    console.log(chalk.green("your answer is correct"));
    points++;
}
else {
    console.log(chalk.red("Incorrect answer, Right answer is String"));
}
;
let questions3 = await inquirer.prompt([
    {
        name: "Three",
        type: "list",
        message: "\nWhat symbol is used to access a property of an object in TypeScript?",
        choices: [" : ", " ; ", " . ", " > "]
    },
]);
if (questions3.Three === " . ") {
    console.log(chalk.green("your answer is correct"));
    points++;
}
else {
    console.log(chalk.red("Incorrect answer, Right answer is ."));
}
let questions4 = await inquirer.prompt([
    {
        name: "Four",
        type: "list",
        message: "\nWhat keyword is used to define a function in TypeScript?",
        choices: ["if", "for", "function", "class"]
    },
]);
if (questions4.Four === "function") {
    console.log(chalk.green("your answer is correct"));
    points++;
}
else {
    console.log(chalk.red("Incorrect answer, Right answer is function"));
}
if (points >= 4) {
    console.log(chalk.green("\nCongratulations! You have passed the quiz."));
}
else {
    console.log(chalk.red(`\nSorry, your quiz score is ${points}`));
}
