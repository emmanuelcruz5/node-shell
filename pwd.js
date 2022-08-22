module.exports = (done) => {
  const cwd = process.cwd(); //the current working directory

  // The stdin 'data' event fires after a user types in a line
  process.stdin.on("data", (data) => {
    if (data.toString().trim() === "pwd") {
      done(`${cwd}`);
    }
  });
};
