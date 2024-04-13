#! /user/bin/evn node
import inquirer from "inquirer";
// variable for balance
let mybalance = 20000; //dollar
// variable for pin code
let mypincode = 345000;
// for showing current balance on the top
console.log("your current balance is:" + mybalance);
//work for user input for atm machine pincode
const answer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "please enter your pincode here:",
    }
]);
//condition statement
// work for pincode confirmation
if (answer.Pin === mypincode) {
    console.log("your pincode is correct!");
    // work for click on withdraw or Check balance list
    const operationans = await inquirer.prompt([
        {
            name: "operation",
            message: "please select options:",
            type: "list",
            choices: ["withdraw", "Fast Cash", "Check Balance"]
        }
    ]);
    // work for withdraw start
    if (operationans.operation === "withdraw") {
        const Amountans = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter Amount:",
                type: "number",
            }
        ]);
        // work for to Check if the amount is greater than or equal to 20000
        if (Amountans.Amount >= 20000) {
            console.log("insufficient amount");
        }
        // work for to Check if the amount is greater than or equal to 20000 end
        //work for The amount you are withdrawing from my balance will be deducted from my balance.
        else {
            mybalance -= Amountans.Amount;
            console.log("your Remaning Balance is: " + mybalance);
        }
        //work for The amount you are withdrawing from my balance will be deducted from my balance. end
        // work for withdraw end
        //   work for fast cash feature start
    }
    else if (operationans.operation === "Fast Cash") {
        const Fastcashans = await inquirer.prompt([
            {
                name: "fastcash",
                message: "please select Amount:",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        mybalance -= Fastcashans.fastcash;
        console.log("your Remaning Balance is: " + mybalance);
    }
    //   work for fast cash feature end
    //  work start for Check Balance 
    else if (operationans.operation === "Check Balance") {
        console.log("Your balance is: " + mybalance);
    }
    //  work start for Check Balance 
}
else {
    console.log("pincode invalid");
}
// project complete
