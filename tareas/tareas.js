const fs = require('fs');

let listadoPorHacer = []; // inicializado vacio

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); // Convierte un string en un json

    const dataJson = new Uint8Array(Buffer.from(data));
    fs.writeFile('db/data.json', dataJson, (err) => {
        if (err) throw err;
        console.log('Se guardo la informacion!');
    });


};

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];
    }


};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer; // retornamos lo que se acaba de crear

};

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

};

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => { // obtengo la posicion de esa tarea si cumple con la condicion
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true; // es como decir que la tarea se completo
    } else {
        return false;
    }

};

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion; // regresa los elementos que no coincidan
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}