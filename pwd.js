module.exports = function() {
    process.stdout.write("prompt > ");

    const validCommands = ["pwd"];
    const cwd = process.cwd(); //the current working directory

    // The stdin 'data' event fires after a user types in a line
    process.stdin.on("data", (data) => {
        if (!validCommands.includes(data.toString().trim())) {
        process.stdout.write(
        `"${data.toString().trim()}"` + " is not a vaild command"
        );
    }

        if (data.toString().trim() === "pwd") {
            process.stdout.write(cwd);
        }

        process.stdout.write("\nprompt > ");
    });
}
