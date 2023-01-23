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
            <div className="my-3">
              <label htmlFor="">Type</label>
              <select name="" id="" className="form-control">
                <option value="">- Select Option-</option>
                <option value="">Green</option>
                <option value="">Roasted</option>
              </select>
            </div>
            <div className="my-3">
              <label htmlFor="">Size of Packaging (Kg)</label>
              <select name="" id="" className="form-control">
                <option value="">- Select Option-</option>
                <option value="">2 Kg</option>
                <option value="">5 Kg</option>
                <option value="">20 Kg</option>
                <option value="">40 Kg</option>
                <option value="">70 Kg</option>
              </select>
            </div>
            <div className="my-3">
              <label htmlFor="">Country of Origin</label>
              <select name="" id="" className="form-control">
                <option value="">- Select Option-</option>
                <option value="">Colombia</option>
                <option value="">Ecuador</option>
              </select>
            </div>
            <div className="my-3">
              <label htmlFor="">Region</label>
              <select name="" id="" className="form-control">
                <option value="">- Select Option-</option>
                <option value="">Huila</option>
                <option value="">Nariño</option>
                <option value="">Antioquia</option>
              </select>
            </div>
            <div className="col-4">
              <label htmlFor="">Quantity</label>
              <input type="number" className="form-control" />
            </div>

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
