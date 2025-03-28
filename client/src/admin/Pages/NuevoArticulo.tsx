import React from "react";
import "./NuevoArticulo.css";
import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";


const NuevoArticulo = () => {
  const [nuevoArticulo , setNuevoArticulo] = useState({
    articulo_titulo: "",
    articulo_categoria: "",
    articulo_etiqueta: "",
    id_usuario: 4,
    articulo_contenido: "",
  });

  const hanldeClickAddArticle =async e  => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/articulos", nuevoArticulo);
      alert("Articulo creado con exito");
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleChange = (e) => {
    setNuevoArticulo(prev =>({...prev,[e.target.name]: e.target.value}));
  };
  console.log(nuevoArticulo);
    
  return (
    <>
      <Box className="NuevoArticulo">
        <Box className="header-nuevoArticulo">
          <Typography variant="h4">Nuevo Articulo</Typography>
        </Box>
        <Box component="form" className="container-nuevoArticulo">
          <Typography variant="body1">Ingrese titulo</Typography>
          <TextField onChange={handleChange}
            fullWidth
            variant="outlined"
            name="articulo_titulo"
            size="small"
            sx={{ marginBottom: 2 }}
          />

          <Typography variant="body1">Ingrese categoria</Typography>
          <TextField onChange={handleChange}
            fullWidth
            variant="outlined"
            name="articulo_categoria"
            size="small"
            sx={{ marginBottom: 2 }}
          />
          <Typography variant="body1">Ingrese etiqueta</Typography>
          <TextField onChange={handleChange}
            fullWidth
            variant="outlined"
            name="articulo_etiqueta"
            size="small"
            sx={{ marginBottom: 2 }}
          />
          <Typography variant="body1">id usuario </Typography>
          <TextField onChange={handleChange}
            fullWidth
            defaultValue={4}
            variant="outlined"
            name="id_usuario"
            size="small"
            sx={{ marginBottom: 2 }}
          />

          <Box className="content">
            <Typography variant="body1">Ingrese Contenido</Typography>
            <TextField onChange={handleChange}
              fullWidth
              variant="outlined"
              name="articulo_contenido"
              size="small"
              multiline
              rows={4}
              sx={{ marginBottom: 2 }}
            />
          </Box>
            <Button  onClick={hanldeClickAddArticle} variant="contained" sx={{backgroundColor:"#8b5e3c",}}>Publicar</Button>
       
        </Box>
      </Box>
    </>
  );
};

export default NuevoArticulo;
