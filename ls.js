module.exports = (done) => {
  const fs = require("fs");
  // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
  process.stdin.on("data", (data) => {
    if (data.toString().trim() === "ls") {
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          done(files.join("\n"));
        }
      });
    }
  });
};
