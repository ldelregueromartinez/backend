// Iniciar el servidor
import express from 'express';
// utilizar, instanciarlo
const app = express();

// Importar 

import especialistasRoutes from './routes/especialistas.routes.js';
import historiasclinicasRoutes from './routes/historiasclinicas.routes.js';
import pacientesRoutes from './routes/pacientes.routes.js';
import consultoriosRoutes from './routes/consultorios.routes.js';
import asientosRoutes from './routes/asientos.routes.js';

// Midlewares

app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'https://backend-dev-ateq.4.us-1.fl0.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
    next();
    
});


app.use(express.json());

//Rutas
app.use(especialistasRoutes);
app.use(historiasclinicasRoutes);
app.use(pacientesRoutes);
app.use(consultoriosRoutes);
app.use(asientosRoutes);


// exportar el servidor

export default app;

