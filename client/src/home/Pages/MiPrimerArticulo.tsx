
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./MiPrimerArticulo.css";
import Footer from "../components/footer";
import { Box, Divider, Grid2, LinearProgress } from "@mui/material";
import Header from "../components/Header"

interface Article {
  id_articulo: number;
  articulo_titulo: string;
  articulo_contenido: string;
  fecha_de_creacion: string;
}

const PaginaArticulo = () => {

  const [article, setArticle] = useState<Article | null>(null);

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/articulo/${id}`)
      .then(response => setArticle(response.data))
      .catch(error => console.error("Error:", error));
  }, [id]);


  if (!article) return <p>Cargando artículo...</p>;

  return (
    <>
      <Header />
      <Box>
        <Grid2 className="Home-Articulos">

          <Grid2 className="articulo-title">
            <hr />
            <h2>{article.articulo_titulo}</h2>
            <hr />
          </Grid2>

          <Box className="articulo-date">
            <h3>{article.fecha_de_creacion}</h3>
          </Box>
          <Box className="articulo-img">
            <img src="https://picsum.photos/200/300" alt="imagen" />
          </Box>
          <Box className="articulo-text">
            <p>{article.articulo_contenido}</p>
          </Box>
          <a  className="articulo-volver" href="">Volver</a>
        </Grid2>
        <Footer />
      </Box>
    </>
  );
};

export default PaginaArticulo;

