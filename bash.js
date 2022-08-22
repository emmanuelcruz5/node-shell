const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write(`\nprompt: `);
};

cat(done);
pwd(done);
ls(done);
