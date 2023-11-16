import { Router } from 'express';
import { createConsultorios, getConsultorios, getConsultorio, deleteConsultorio, putConsultorio } from '../controllers/consultorios.controllers.js';

const router = Router();

//Rutas

router.get('https://ldelregueromartinez.github.io/consultorios',getConsultorios );
router.post('https://ldelregueromartinez.github.io/consultorios',createConsultorios );
router.put('https://ldelregueromartinez.github.io/consultorios/:id', putConsultorio);
router.delete('https://ldelregueromartinez.github.io/consultorios/:id', deleteConsultorio );
router.get('https://ldelregueromartinez.github.io/consultorios/:id', getConsultorio );


export default router;

