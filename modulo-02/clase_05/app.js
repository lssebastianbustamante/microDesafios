const fs = require('fs');
const argumentos = process.argv[2];

tareas = JSON.parse(fs.readFileSync('./archivoJson/tareas.json', 'utf-8'))

switch (argumentos) {
    case "listar":
        tareas.forEach(element => {
            console.log(element.titulo)
        });
        break;
    case undefined:
        console.log('Tiene que pasar un parametro')
        break;

    default:
        console.log('No entiendo')
}




