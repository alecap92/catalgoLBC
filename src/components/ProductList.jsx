import { ListadoDeProductos } from "@/data/productList.js";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const ProductList = ({ subCategory }) => {
  const [listadoPro, setListadoPro] = useState([]);

  const getProductos = () => {
    const listadoFiltrado = ListadoDeProductos.filter((item) => {
      return item.subCategory === subCategory;
    });

    setListadoPro(listadoFiltrado);
  };

  useEffect(() => {
    getProductos();
  }, [subCategory]);

  return (
    <div className="m-3">
      <Cards productos={listadoPro} subCategory={subCategory} />
    </div>
  );
};

export default ProductList;
