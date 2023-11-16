// Importar

import app from "./app.js";

// utilizar sequelize

import { sequelize } from "./database/database.js";

// Importar la estructura de tabla de base de datos

import './model/consultorios.js';
import './model/especialistas.js';
import './model/historiasclinicas.js';
import './model/pacientes.js';
import './model/asientos.js';

// iniciar el servidor en el puerto 3000 y testear la conexión

const port = process.env.PORT || 3000;
async function main() {

    try{
        
const env = process.env.NODE_ENV || 'development';

const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

        
    } catch (error){
        console.error('No se pudo conectar: ', error);
    };

};

main ();





