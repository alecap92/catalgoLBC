import React, { useEffect, useState } from "react";

import { FaArrowCircleLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import { getCompaniesWithStock } from "@/utils/products";

const DetalleProducto = ({ producto }) => {
  const [logged, setLogged] = useState(false);
  const [companiesWithStock, setCompaniesWithStock] = useState([])
  const router = useRouter();

  useEffect(() => {
    let data = sessionStorage.getItem("autenticado");
    if (data === "true") {
      setLogged(true);
    }
  }, []);

  useEffect(() => {
    if(logged) {
      setCompaniesWithStock(getCompaniesWithStock(producto?.id))
    }
  }, [logged, producto?.id])

  return (
    <div style={{ margin: "50px 30px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaArrowCircleLeft size={34} style={{ margin: "20px 0px", cursor: "pointer" }} onClick={() => router.back()} />
        <h1 className="ms-3">{producto?.name?.toUpperCase()}</h1>
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

      {logged && (
        <div className="table-responsive my-5">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Nombre empresa</th>
                <th>Telefono</th>
                <th>Sitio Web</th>
              </tr>
            </thead>
            <tbody>
              {
                companiesWithStock.map(company => (
                  <tr key={ company?.name }>
                    <td>{ company?.name }</td>
                    <td>{ company?.phone }</td>
                    <td>{ company?.web }</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DetalleProducto;
