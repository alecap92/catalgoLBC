import { useEffect, useRef, useState } from "react";

import { FaArrowCircleLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import { getCompaniesWithStock } from "@/utils/products";
import emailjs from "@emailjs/browser";

import styles from "@/styles/components/detalleProducto.module.css";

const DetalleProducto = ({ product }) => {
  const [logged, setLogged] = useState(false);
  const [companiesWithStock, setCompaniesWithStock] = useState([]);
  // const [form, setForm] = useState([]);
  const [isSent, setIsSent] = useState();

  const form = useRef();
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_uvmnxpc", "template_9jg7ddo", form.current, "ib7WmF5Q6SMcb0lP_").then(
      (result) => {
        setIsSent(true);
        e.target.reset();
      },
      (error) => {
        console.log(error);
        setIsSent(false);
      }
    );
  };

  useEffect(() => {
    let data = sessionStorage.getItem("autenticado");
    if (data === "true") {
      setLogged(true);
    }
  }, []);

  useEffect(() => {
    if (logged) {
      getCompaniesWithStock(product?.id)
        .then((companies) => setCompaniesWithStock(companies))
        .catch(() => setCompaniesWithStock([]));
    }
  }, [logged, product?.id]);

  return (
    <div style={{ margin: "50px 30px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaArrowCircleLeft size={34} style={{ margin: "20px 0px", cursor: "pointer" }} onClick={() => router.back()} />
        <h1 className="ms-3">{product?.name?.toUpperCase()}</h1>
      </div>
      {product ? (
        <div className={styles.informacionProducto}>
          <img src={product.image} alt="" width="100%" style={{ maxWidth: "700px" }} />

          <div className={styles.informacionProductoPayload}>
            <p>{product.description}</p>
            <button
              type="button"
              style={{
                background: "#B9A46D",
                padding: "7px 15px",
                color: "white",
                border: "none",
                borderRadius: "10px",
                marginTop: "20px",
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Request Inquire
            </button>
          </div>
        </div>
      ) : (
        "cargando"
      )}

      {logged && companiesWithStock.length > 0 && (
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
              {companiesWithStock.map((company) => (
                <tr key={company?.name}>
                  <td>{company?.name}</td>
                  <td>{company?.phone}</td>
                  <td>{company?.web}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-dark">
              <form action="" onSubmit={submitHandler} ref={form}>
                <div className="row g-3">
                  <input type="text" name="productName" id="productName" value={product?.name} hidden />
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Company Name
                    </label>
                    <input type="text" className="form-control" aria-label="First name" name="CompanyName" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Full Name
                    </label>
                    <input type="text" className="form-control" aria-label="First name" name="FullName" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Phone (Add Country Code)
                    </label>
                    <input type="text" className="form-control" aria-label="First name" name="Phone" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input type="text" className="form-control" aria-label="First name" name="Email" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Country
                    </label>
                    <input type="text" className="form-control" aria-label="First name" name="Country" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Industry/Sector
                    </label>
                    <input type="text" className="form-control" aria-label="First name" name="Industry" />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">
                      Comments
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Add details: Quantity, Fob, Cif, message"
                      id="floatingTextarea"
                      rows={4}
                      name="Comments"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        background: "#B9A46D",
                        padding: "7px 15px",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        marginTop: "20px",
                      }}
                    >
                      Send Inquire
                    </button>
                  </div>

                  {isSent && (
                    <div className="col-12">
                      <div className="alert alert-success d-flex align-items-center" role="alert">
                        Success, your Inquire was sent!
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
