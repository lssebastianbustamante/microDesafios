const fs = require('fs');
const argumentos = process.argv[2];


switch (argumentos) {
    case "listar":
        const tareas = JSON.parse(fs.readFileSync('./archivoJson/tareas.json', 'utf-8'));
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




