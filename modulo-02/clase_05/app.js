const funcionesTareas = require('./funciones/funcionesTareas')
const argumentos = process.argv[2];


switch (argumentos) {
    case "listar":
        let tareas = funcionesTareas.obtenerTareas();
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




