const fs = require('fs');

const funcionesTareas = {
    obtenerTareas: function() {
        let tareas =  JSON.parse(fs.readFileSync('./archivoJson/tareas.json', 'utf-8'));

        return tareas
    }
}

module.exports = funcionesTareas