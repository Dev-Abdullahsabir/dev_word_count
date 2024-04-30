import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words",
    },
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`The number of words in the sentence is ${words.length}`);
