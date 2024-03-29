#! /usr/bin/env node
import inquirer from "inquirer"

// 1)computer will generate a randomNumber
// 2)user input for guessing number
// 3)compare user input with computer generate number and show result


const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
       name: "userGussedNumber",
       type: "number",
       message: "please guess a number between 1-6",
    }
]);
if (answer.userGussedNumber === randomNumber){
    console.log("congratulation you guess right number");
}else{
    console.log("you guess wrong number");
}