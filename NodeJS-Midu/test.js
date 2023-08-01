const fs = require("node:fs/promises");
const path = require("node:path");

const folder = process.argv[2] ?? ".";

fs.readdir(folder)
  .then((files) => {
    files.forEach(async (file) => {
      let route = path.join(folder, file);
      let stats = await fs.stat(route);
      let isDirectory = stats.isDirectory() ? 'd' : 'f';
      console.log(`${isDirectory} ${file.padEnd(25)} ${stats.mtime.toLocaleString().padStart(20)}`);
    });
  })
  .catch((error) => console.log(error));
