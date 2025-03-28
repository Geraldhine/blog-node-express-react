import React from "react";

const Articulo = ({ title, img, text }) => {
    return (
      <div className="articulo-container">
        <hr />
        <h2 className="articulo-title">{title}</h2>
        <hr />
        <p className="articulo-date">17 feb 2025</p>
        <img src={img} alt="imagen-articulo" className="articulo-img" />
        <p className="articulo-text">{text}</p>
        <a href="/" className="articulo-volver">Volver&gt;</a>
      </div>
    );
  };
  
  export default Articulo;
  