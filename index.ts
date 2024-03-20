#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

while(true){
    let user = await inquirer.prompt([
        {type: "number", name: "userInput", message: "Guess the number: "}
    ]);
    let computer = Math.floor(Math.random()*3);
    
    if(user.userInput === computer){
        console.log(`${chalk.cyanBright("Congratulations...")} You guessed the number`)
        console.log(`Computer: ${computer}`)
    }else{
        console.log(`${chalk.redBright("Try Again...")}`)
        console.log(`Computer: ${computer}`)
    }
}
