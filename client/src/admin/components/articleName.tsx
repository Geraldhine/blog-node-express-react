import React from "react";
import { Link } from "react-router";

const ArticleName = ({ name, id }) => {
  return (
    <div className="articleName">
      <Link to={`/articulo/${id}`} style={{ textDecoration: "none", color: "black"}}>
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default ArticleName;
