import React from "react";

import { FaArrowCircleLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const DetalleProducto = ({ producto }) => {
  const router = useRouter();

  return (
    <div style={{ margin: "50px 30px" }}>
      <FaArrowCircleLeft
        size={34}
        style={{ margin: "20px 0px", cursor: "pointer" }}
        onClick={() => router.back()}
      />

      {producto ? (
        <div className="row">
          <div className="col-md-6">
            <img src={producto.image} alt="" />
          </div>

          <div className="col-md-6">
            <h1 style={{ margin: "20px 0px" }}>{producto.name}</h1>
            <h2>Descripcion</h2>
            <p>{producto.description}</p>
            <h2>Caracteristicas</h2>
            <ul>
              {producto.caracteristicas?.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ul>
            <button
              style={{
                background: "#B9A46D",
                padding: "7px 15px",
                color: "white",
                border: "none",
                borderRadius: "10px",
              }}
            >
              Solicitar Cotizacion
            </button>
          </div>
        </div>
      ) : (
        "cargando"
      )}
    </div>
  );
};

export default DetalleProducto;
