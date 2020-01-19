const readline = require("readline");
// interface
const chalk = require("chalk");
const figlet = require("figlet");
const print = console.log;
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ">"
});
console.clear();
print(chalk.blue(figlet.textSync("Tasker")));
print(chalk.cyan("Type a command (Type help to list all the commands)"));
//
reader.prompt();
const tasks = [];
reader.on("line", function(data) {
  const command = data.split(" ")[0];
  // console.log(command);
  const Sarr = data.split(" ");
  // console.log(Sarr);
  Sarr.shift();
  if (command == "help") {
    print(`
    Available Commands
    1.  add task_name
    2.  ls(to list all tasks)
    3. delete id(enter task id to delete it)
    `);
  } else if (command == "add" && Sarr.length > 0) {
    tasks.push(Sarr.join(" "));
    print(Sarr.join(" ") + " added");
  } else if (command == "delete" && Sarr.length == 1) {
    const idx = Sarr[0] - 1;
    if(idx<0||idx>tasks.length-1){
      print("Please enter correct index");
      return;
    }
    console.log(tasks[idx] + " has been removed");
    tasks.splice(idx, 1);
  } else if (command == "ls") {
    for (let i = 0; i < tasks.length; i++) {
      print(`${i + 1} ${tasks[i]}`);
    }
  } else {
    print(chalk.red("Wrong Command"));
  }

  reader.prompt();
});

reader.on("close", function() {
  console.log("Thank You for using our cli");
});
