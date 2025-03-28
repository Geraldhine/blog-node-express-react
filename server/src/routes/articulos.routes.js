import { Router } from "express";
import { getArticulos, createArticulos, updateArticulos, deleteArticulos,getArticulo,filtrarArticulos} from "../controllers/articulos.controller.js";


const router = Router();

router.get("/articulos", getArticulos);

router.get("/articulo/:id", getArticulo);

router.post("/articulos", createArticulos);

router.put("/uarticulos/:id", updateArticulos);

router.delete("/articulos/:id", deleteArticulos);

router.get("/filtrararticulos", filtrarArticulos);

export default router;
