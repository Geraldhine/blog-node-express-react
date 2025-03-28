import { Router } from "express";

const router = Router(); //  Usar router de express

router.get('/', (req, res) => {
    res.send("Hola mundo");
    });

export default router;
