import { ListadoDeProductos } from "@/data/productList.js";
import React from "react";
import Cards from "./Cards";

const ProductList = () => {
  return (
    <div className="m-3">
      <Cards productos={ListadoDeProductos} />
    </div>
  );
};

export default ProductList;
