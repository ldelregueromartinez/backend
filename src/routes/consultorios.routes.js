import { Router } from 'express';
import { createConsultorios, getConsultorios, getConsultorio, deleteConsultorio, putConsultorio } from '../controllers/consultorios.controllers.js';

const router = Router();

//Rutas

router.get('https://create-react-app-beta-snowy.vercel.app/consultorios',getConsultorios );
router.post('/consultorios',createConsultorios );
router.put('/consultorios/:id', putConsultorio);
router.delete('/consultorios/:id', deleteConsultorio );
router.get('/consultorios/:id', getConsultorio );


export default router;

