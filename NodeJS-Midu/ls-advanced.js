const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require('picocolors');

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;

  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.log(pc.red("Ha ocurrido un error: ", error));
    process.exit(1);
  }

  let filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;

    try {
      stats = await fs.stat(filePath);
    } catch (error) {
      console.log("Ha ocurrido un error: ", error);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType} ${file.padEnd(20)} ${fileSize
      .toString()
      .padStart(10)} ${fileModified}`;
  });
  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => {
    console.log(pc.green(fileInfo));
  });
}

ls(folder);