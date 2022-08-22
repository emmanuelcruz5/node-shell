//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cwd = process.cwd(); //the current working directory
  if (data.toString().trim() === "pwd") {
    process.stdout.write(cwd);
  } else {
    process.stdout.write(data.toString().trim() + "is not a vaild command");
  }

  process.stdout.write("\nprompt > ");
});

//console.log(process.cwd());
