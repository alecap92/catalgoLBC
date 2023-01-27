import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import DetalleProducto from "@/components/DetalleProducto";
import { ListadoDeProductos } from "@/data/productList";
import { companyList } from "@/data/companyList";
import ProductsLayout from "@/layouts/ProductsLayout";

const DetalleProductoPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [listadoEmpresas, setListadoEmpresas] = useState();

  const { id } = router.query;

  const GetProduct = () => {
    const productos = ListadoDeProductos.filter((item) => {
      return item.id === id;
    });

    setProducts(productos[0]);
  };

  const getCompanyList = () => {
    const listado = companyList.filter((item) => {
      return item.productos.includes(parseInt(id));
    });
    setListadoEmpresas(listado);
  };

  useEffect(() => {
    GetProduct();
    getCompanyList();
  }, [id]);

  return (
    <DetalleProducto producto={products} />
  );
};

DetalleProductoPage.getLayout = function getLayout(page) {
  return (
    <ProductsLayout title="Catalogo de productos LBC">
      { page }
    </ProductsLayout>
  )
}

export default DetalleProductoPage;
