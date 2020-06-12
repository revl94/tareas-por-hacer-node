const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
};

const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea una actividad o tarea por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optsActualizar)
    .command('borrar', 'Borra una tarea por hacer', opts)
    .help()
    .argv;


module.exports = {
    argv
};