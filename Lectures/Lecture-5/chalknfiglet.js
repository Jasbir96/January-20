const print = console.log;
const chalk = require("chalk");
const figlet = require("figlet");
print(chalk.red("Red Color"));
print(chalk.cyan("Red Color"));
print(chalk.bgBlue("cyan Color"));
print(chalk.yellowBright("Yellow Color"));
print(chalk.underline("underline"));

print(chalk.green(figlet.textSync("Large Text")));
