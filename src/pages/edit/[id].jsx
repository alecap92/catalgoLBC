import { getProductById } from "@/utils/products";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaArrowCircleLeft } from "react-icons/fa";
import { SIDEBAR_CATEGORIES } from "@/constants/sidebar";

const EditarProducto = () => {
  const router = useRouter();
  const id = router.query.id;
  const [producto, setProducto] = useState([]);
  const [form, setForm] = useState([]);

  const getProduct = async () => {
    if (id) {
      const response = await fetch(
        `https://www.ccacback.com/api/v1/products/${id}`
      );
      const data = await response.json();

      setProducto(data.busqueda[0]);
    } else {
    }
  };

  const saveHandler = () => {
    axios
      .put(`https://www.ccacback.com/api/v1/products/${id}`, form)
      .then((res) => {
        Swal.fire("Exito!", "Ha sido almacenado exitosamente!", "success");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Ups!", "Ha ocurrido un problema!", "error");
      });
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div>
      <div className="container py-5">
        <div className="d-flex align-items-center">
          <FaArrowCircleLeft
            size={35}
            className="me-3"
            onClick={() => router.back()}
          />
          <h1>Editar Producto: {producto.name}</h1>
        </div>

        <img
          src={`https://catalgo.vercel.app/${producto.image}`}
          alt=""
          style={{ maxWidth: "300px" }}
          className="my-5"
        />
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Nombre del producto
            </label>
            <input
              type="text"
              className="form-control"
              aria-label="name"
              name="name"
              defaultValue={producto.name}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              aria-label="image"
              name="image"
              defaultValue={producto.image}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Categoria
            </label>
            <select
              name="category"
              id="category"
              className="form-control"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            >
              <option value="" hidden>
                - Seleccione - {producto.category}
              </option>

              {SIDEBAR_CATEGORIES.map((item) =>
                item.subCategories.map((item, index) => (
                  <option key={index} value={item.urlTag}>
                    {item.label}
                  </option>
                ))
              )}
              <option value="Coffee">Coffee</option>
            </select>
          </div>

          <div className="col-md-6">
            <label
              htmlFor="region"
              className="form-label"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            >
              Origen (Departamento)
            </label>
            <input
              type="text"
              className="form-control"
              aria-label="region"
              name="region"
              defaultValue={producto.region}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="countryOfOrigin" className="form-label">
              Pais de Origen
            </label>
            <input
              type="text"
              className="form-control"
              aria-label="countryOfOrigin"
              name="countryOfOrigin"
              defaultValue={producto.countryOfOrigin}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="description" className="form-label">
              Descripcion
            </label>
            <textarea
              name="description"
              id="description"
              cols="20"
              rows="4"
              className="form-control"
              defaultValue={producto.description}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <button className="btn btn-primary mt-5" onClick={() => saveHandler()}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default EditarProducto;
