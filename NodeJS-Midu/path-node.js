const path = require("node:path");

//Barra separadora de folder según SO
console.log(path.sep);

//Unir rutas con el separador correcto dependiendo del sistema operativo
const filepath = path.join("backend", "subfolder", "subfolder", "database.php");
console.log(filepath);

//Obtener el nombre de un archivo dentro de una ruta
const basename = path.basename('backend/subfolder/subfolder/database.php');
console.log(basename);

//Obtener la extensión de un archivo
const ext = path.extname('database.php');
console.log(ext);