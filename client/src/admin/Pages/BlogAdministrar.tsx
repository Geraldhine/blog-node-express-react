import ArticleName from "../components/articleName";
import { Button as MUIButton, Typography, Box, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BlogAdministrar.css";
import Header from '../../home/components/Header'

const BlogAdministrar = () => {

  interface Article {
    articulo_titulo: string;
    id_articulo: number;
  }

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const ObtenerArticulos = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/articulos");
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    ObtenerArticulos();
  }, []);

  const hanldeClickDeleteArticle = async (id_articulo: number) => {
    setArticles(articles.filter((article) => article.id_articulo !== id_articulo));
  };
  return (
    <>
      <Header />
      <Box className="blogAdministrar">
        <Box className="title" sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: "10px"
        }}>
          <MUIButton
            color="brown"
            variant="outlined"
            className="botton"
            size="small"
            sx={{
              position: "absolute",
              right: "90px",
            }}
          >
            Añadir
          </MUIButton>

          <Typography
            fontFamily={"Caudex"}
            variant="h3"

            sx={{ textAlign: "center" }}
          >
            Mi Blog Personal
          </Typography>
        </Box>

        <Box className="articles">
          {articles.map((article, index) => (
            <Box key={index} className="article">
              <ArticleName name={article.articulo_titulo} id={article.id_articulo} />
              <MUIButton className="botton" variant="outlined" size="small">
                Editar
              </MUIButton>
              <MUIButton onClick={() => hanldeClickDeleteArticle(article.id_articulo)} variant="outlined" color="error" size="small">
                Borrar
              </MUIButton>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default BlogAdministrar;
