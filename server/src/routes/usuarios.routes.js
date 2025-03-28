import { Router } from "express";
import {obtenerUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} from "../controllers/usuarios.controller.js";

const router = Router(); //  Usar router de express

// Rutas de usuarios


router.get('/usuarios',obtenerUsuario);

router.post('/usuarios', crearUsuario);

router.put('/usuarios/:id', actualizarUsuario);

router.delete('/usuarios/:id', eliminarUsuario);

export default router;
