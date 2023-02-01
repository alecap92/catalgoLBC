import React, { useEffect, useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { getCompaniesWithStock } from "@/utils/products";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import { SIDEBAR_CATEGORIES } from "@/constants/sidebar";

const Listado = () => {
  const [listadoDeProductos, setListadoDeProductos] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const getProducts = async () => {
    const response = await fetch("https://www.ccacback.com/api/v1/products");
    const data = await response.json();

    setListadoDeProductos(data.products);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://www.ccacback.com/api/v1/products", newProduct)
      .then((res) => {
        Swal.fire("Exito!", "Ha sido creado exitosamente!", "success");
        console.log(res.data);
        e.target.reset();
        getProducts();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Ups!", "Ha ocurrido un problema!", "error");
      });
  };

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras deshacer esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://www.ccacback.com/api/v1/products/${id}`)
          .then((res) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            getProducts();
          })
          .catch((err) => {
            Swal.fire("Ups!", "Ha ocurrido un problema!", "error");
          });
      }
    });
  };

  const searchHandler = (e) => {
    setIsSearching(true);
    if (e.target.value.length >= 3) {
      console.log(e.target.value);

      const productosFiltrados = listadoDeProductos.filter((producto) =>
        producto.name.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setListadoDeProductos(productosFiltrados);
      console.log(newProduct);
    } else if (e.target.value.length === 0) {
      getProducts();
    }
  };

  useEffect(() => {
    if (isSearching) {
      return;
    } else {
      getProducts();
    }
  }, [listadoDeProductos]);

  return (
    <div>
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Nuevo Producto
              </button>
              <div className="d-flex my-5">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Buscar..."
                  className="form-control"
                  onChange={(e) => searchHandler(e)}
                />
              </div>
              <table className="table table-striped table-dark table-hover">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {listadoDeProductos.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={"https://catalgo.vercel.app" + item.image}
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>
                        <h5> {item.name}</h5>
                      </td>
                      <td onClick={() => router.push("/edit/" + item.id)}>
                        <div className="m-auto">
                          <FaRegEdit size={25} style={{ cursor: "pointer" }} />
                        </div>
                      </td>
                      <td onClick={() => deleteHandler(item.id)}>
                        <div className="m-auto">
                          <FaTrash size={25} style={{ cursor: "pointer" }} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">
                Crear Nuevo Producto
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="" onSubmit={submitHandler}>
              <div className="modal-body text-dark">
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
                      onChange={(e) => {
                        setNewProduct({
                          ...newProduct,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="image" className="form-label">
                      Imagen
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="image"
                      name="image"
                      onChange={(e) => {
                        setNewProduct({
                          ...newProduct,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="category" className="form-label">
                      Categoria
                    </label>
                    <select
                      name="category"
                      id="category"
                      className="form-control"
                      onChange={(e) => {
                        setNewProduct({
                          ...newProduct,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    >
                      <option hidden>- Seleccione -</option>
                      {SIDEBAR_CATEGORIES.map((item) =>
                        item.subCategories.map((item, index) => (
                          <option key={index} value={item.urlTag}>
                            {item.label}
                          </option>
                        ))
                      )}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="region" className="form-label">
                      Origen (Departamento)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="region"
                      name="region"
                      onChange={(e) => {
                        setNewProduct({
                          ...newProduct,
                          [e.target.name]: e.target.value,
                        });
                      }}
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
                      onChange={(e) => {
                        setNewProduct({
                          ...newProduct,
                          [e.target.name]: e.target.value,
                        });
                      }}
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
                      onChange={(e) => {
                        setNewProduct({
                          ...newProduct,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button type="submit" className="btn btn-primary">
                  Crear Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listado;
