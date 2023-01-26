import { ListadoDeProductos } from "@/data/productList";
import React from "react";

const Edit = () => {
  return (
    <div>
      <h1 className="my-5">Listado de productos</h1>
      <div className="ms-5">
        <div>
          <table className="table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th> name</th>
                <th> caracteristicas</th>
                <th> description</th>
                <th> image</th>
                <th> tags</th>
                <th> category</th>
                <th> subCategory</th>
                <th> region</th>
                <th> countryOfOrigin</th>
                <th> type</th>
                <th> sizeOfPackage</th>
              </tr>
            </thead>
            <tbody>
              {ListadoDeProductos.map((item) => (
                <tr>
                  <td>
                    <textarea name="" id="" style={{ background: "none", color: "white", border: "none" }} defaultValue={item.id}></textarea>
                  </td>
                  <td>
                    <textarea name="" id="" style={{ background: "none", color: "white", border: "none" }} defaultValue={item.name}></textarea>
                  </td>
                  <td>
                    <textarea
                      name=""
                      id=""
                      style={{ background: "none", color: "white", border: "none" }}
                      defaultValue={item.caracteristicas.toString()}
                    ></textarea>
                  </td>
                  <td>
                    <textarea name="" id="" style={{ background: "none", color: "white", border: "none" }} defaultValue={item.description}></textarea>
                  </td>
                  <td>
                    <textarea name="" id="" style={{ background: "none", color: "white", border: "none" }} defaultValue={item.image}></textarea>
                  </td>
                  <td>
                    <textarea name="" id="" style={{ background: "none", color: "white", border: "none" }} defaultValue={item.tags}></textarea>
                  </td>
                  <td>
                    <textarea name="" id="" style={{ background: "none", color: "white", border: "none" }} defaultValue={item.category}></textarea>
                  </td>
                  <td>
                    <textarea name="" id="" style={{ background: "none", color: "white", border: "none" }} defaultValue={item.subCategory}></textarea>
                  </td>
                  <td>
                    <textarea name="" id="" style={{ background: "none", color: "white", border: "none" }} defaultValue={item.region}></textarea>
                  </td>
                  <td>
                    <textarea
                      name=""
                      id=""
                      style={{ background: "none", color: "white", border: "none" }}
                      defaultValue={item.countryOfOrigin}
                    ></textarea>
                  </td>
                  <td>
                    <textarea
                      name=""
                      id=""
                      style={{ background: "none", color: "white", border: "none" }}
                      defaultValue={item.type.toString()}
                    ></textarea>
                  </td>
                  <td>
                    <textarea
                      name=""
                      id=""
                      style={{ background: "none", color: "white", border: "none" }}
                      defaultValue={item.sizeOfPackage.toString()}
                    ></textarea>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Edit;
