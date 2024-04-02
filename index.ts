#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([{
    message: "Enter first number", type: "number", name: "firstnumber"},
    {message: "Enter second number", type:"number", name:"secondnumber"},
    {message: "Select one of the operators to perform operations", type:"list", name:"operator", choices:["ADDITION","SUBTRACTION","MULTIPLICATION","DIVISION"]}
])

if (answer.operator === "ADDITION"){
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "SUBTRACTION"){
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "MULTIPLICATION"){
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "DIVISION"){
    console.log(answer.firstnumber / answer.secondnumber);
}
else{
    console.log("Please select valid operator")
}
