import React from "react";

import { FaArrowCircleLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const DetalleProducto = ({ producto }) => {
  const router = useRouter();

  return (
    <div style={{ margin: "50px 30px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaArrowCircleLeft
          size={34}
          style={{ margin: "20px 0px", cursor: "pointer" }}
          onClick={() => router.back()}
        />
        <h1 className="ms-3">{producto.name?.toUpperCase()}</h1>
      </div>
      {producto ? (
        <div className="row">
          <div className="col-md-6">
            <img src={producto.image} alt="" />
          </div>

          <div className="col-md-5">
            <p>{producto.description}</p>

            <button
              style={{
                background: "#B9A46D",
                padding: "7px 15px",
                color: "white",
                border: "none",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              Request Inquiry
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
