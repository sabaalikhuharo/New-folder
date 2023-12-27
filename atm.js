import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter your Id"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter your pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "savings"],
        message: "select your account type",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast cash", "withdraw"],
        message: "select your transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "ammount",
        choices: [1000, 2000, 10000, 20000],
        message: "Enter your ammount",
        when(answers) {
            return answers.transactionType == "fast cash";
        }
    },
    {
        type: "number",
        name: "ammount",
        message: "Enter your ammount",
        when(answers) {
            return answers.transactionType == "withdraw";
        }
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmmount = answers.ammount;
    if (balance >= EnteredAmmount) {
        const remaining = balance - EnteredAmmount;
        console.log("your remaining balance is ", remaining);
    }
    else {
        console.log("insufficient balance");
    }
}
