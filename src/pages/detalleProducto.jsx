import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import DetalleProducto from "@/components/DetalleProducto";
import { ListadoDeProductos } from "@/data/productList";
import { companyList } from "@/data/companyList";

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
    <div>
      <Head>
        <title>Catalogo de productos LBC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <DetalleProducto producto={products} />
        </div>
      </div>
    </div>
  );
};

export default DetalleProductoPage;
