#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const quiz: {
    question_1:string;
    question_2:string;
    question_3:string;
    question_4:string;
    question_5:string;
    question_6:string;
    question_7:string;
    question_8:string;
    question_9:string;
    question_10:string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type:"list",
        message:chalk.yellowBright("\nQ1:What does the unary plus (+) operator do when applied to a string in TypeScript?\n"),
        choices:["A) Converts the string to a number.","B) Converts the number to a string.","C) Negates the number.","D) Concatenates the string with a number."],
    },
    {
        name: "question_2",
        type:"list",
        message:chalk.yellowBright("\nQ2:What does the Math.floor() function do in TypeScript?\n"),
        choices:["A) Rounds a number down to the nearest integer.","B) Rounds a number up to the nearest integer.","C) Rounds a number to the nearest integer.","D) Returns the fractional part of a number."],
    },
    {
        name: "question_3",
        type:"list",
        message:chalk.yellowBright("\nQ3:Which keyword is used to define a function in TypeScript?\n"),
        choices:["A) Function.","B) Def.","C) Func.","D) Method."],
    },
    {
        name: "question_4",
        type:"list",
        message:chalk.yellowBright("\nQ4:Which TypeScript type is used to define a boolean value?\n"),
        choices:["A) Boolean.","B) boolean.","C) Boolen.","D) Bool."],
    },
    {
        name: "question_5",
        type:"list",
        message:chalk.yellowBright("\nQ5:What is the purpose of the let keyword in TypeScript?\n"),
        choices:["A) It declares a variable that cannot be reassigned.","B) It declares a variable that can be reassigned.","C) It defines a constant value.","D) It declares a function."],
    },
    {
        name: "question_6",
        type:"list",
        message:chalk.yellowBright("\nQ6:Which keyword is used to declare a constant value in TypeScript?\n"),
        choices:["A) let.","B) const.","C) var.","D) final."],
    },
    {
        name: "question_7",
        type:"list",
        message:chalk.yellowBright("\nQ7:Which TypeScript type is used to represent a true or false value?\n"),
        choices:["A) boolean.","B) Boolean.","C) bit.","D) bool."],
    },
    {
        name: "question_8",
        type:"list",
        message:chalk.yellowBright("\nQ8:Which of the following characters are allowed in variable names in TS?\n"),
        choices:["A) $.","B) @.","C) #.","D) &."],
    },
    {
        name: "question_9",
        type:"list",
        message:chalk.yellowBright("\nQ9:Which operator is used for string concatenation in TS?\n"),
        choices:["A) +.","B) -.","C) *.","D) /."],
    },
    {
        name: "question_10",
        type:"list",
        message:chalk.yellowBright("\nQ10:Which symbol is used to terminate a statement in TS?\n"),
        choices:["A) .","B) :","C) ;","D) ,"],
    }
]);

let score:number = 0;

switch(quiz.question_1){
    case "A) Converts the string to a number.":
        console.log(chalk.greenBright("1.Correct!"));
        ++score;
        break;
        default:
        console.log(chalk.redBright("1. Incorrect!"));  
}

switch(quiz.question_2){
    case "A) Rounds a number down to the nearest integer.":
        console.log(chalk.greenBright("2.Correct!"));
        ++score;
        break;
        default:
        console.log(chalk.redBright("2. Incorrect!"));  
}

switch(quiz.question_3){
    case "A) Function.":
        console.log(chalk.greenBright("3.Correct!"));
        ++score;
        break;
        default:
        console.log(chalk.redBright("3. Incorrect!"));  
}

switch(quiz.question_4){
    case "A) Boolean.":
        console.log(chalk.greenBright("4.Correct!"));
        ++score;
        break;
        default:
        console.log(chalk.redBright("4. Incorrect!"));  
}

switch(quiz.question_5){
    case "B) It declares a variable that can be reassigned.":
        console.log(chalk.greenBright("5.Correct!"));
        ++score;
        break;
        default:
        console.log(chalk.redBright("5. Incorrect!"));  
}

switch(quiz.question_6){
    case "B) const.":
        console.log(chalk.greenBright("6.Correct!"));
        ++score;
        break;
        default:
        console.log(chalk.redBright("6. Incorrect!"));  
}

switch(quiz.question_7){
    case "B) Boolean.":
        console.log(chalk.greenBright("7.Correct!"));
        ++score;
        break;
        default:
        console.log(chalk.redBright("7. Incorrect!"));  
}

switch(quiz.question_8){
    case "A) $.":
        console.log(chalk.greenBright("8.Correct!"));
        ++score;
        break;
        default:
        console.log(chalk.redBright("8. Incorrect!"));  
}

switch(quiz.question_9){
    case "A) +.":
        console.log(chalk.greenBright("9.Correct!"));
        ++score;
        break;
        default:
        console.log(chalk.redBright("9. Incorrect!"));  
}

switch(quiz.question_10){
    case "C) ;":
        console.log(chalk.greenBright("10.Correct!"));
        ++score;
        break;
        default:
        console.log(chalk.redBright("10. Incorrect!"));  
}

console.log(chalk.magentaBright(`\n\tSCORE: ${score}\n`));
