// importar el módulo

import Sequelize from "sequelize"; 

// conexion con la base  https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database

export const sequelize = new Sequelize("salute", "fl0user", "DbYg9l4HsFry", {
    host: "ep-jolly-bread-41790663.us-east-2.aws.neon.fl0.io",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
        ssl: "require"
      }
   
    
});

