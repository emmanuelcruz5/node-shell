module.exports = (done) => {
  const fs = require("fs");

  process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    const dataArr = input.split(" ");
    const command = dataArr[0];
    const filename = dataArr[1];

    if (command === "cat") {
      fs.readFile(filename, function (err, data) {
        if (err) {
          throw err;
        }
        done(data);
      });
    }
  });
};
