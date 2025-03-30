const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const folderPath = __dirname;

fs.readdirSync(folderPath).forEach((file) => {
  if (file.endsWith(".ts")) {
    console.log(`Running: ${file}`);
    exec(`ts-node ${path.join(folderPath, file)}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error running ${file}:\n${stderr}`);
      } else {
        console.log(`Output of ${file}:\n${stdout}`);
      }
    });
  }
});
