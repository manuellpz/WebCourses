const fs = require('node:fs/promises')
const path = require('node:path');

(async () => {
  const route = process.argv[2] ?? '.'
  fs.readdir(route)
    .then((files) => {
      files.forEach(async (file) => {
        const filePath = await path.join(route, file)
        const stat = await fs.stat(filePath)
        const isDirectory = stat.isDirectory() ? 'd' : 'f'

        console.log(
          `${isDirectory} - ${file.padEnd(30)} ${stat.mtime
            .toLocaleString()
            .padStart(10)}`
        )
      })
    })
    .catch((error) => console.log(error))
})()
