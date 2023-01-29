import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import DetalleProducto from "@/components/DetalleProducto";
import { ListadoDeProductos } from "@/data/productList";
import { companyList } from "@/data/companyList";
import ProductsLayout from "@/layouts/ProductsLayout";
import { getProductById } from "@/utils/products";

const DetalleProductoPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState(undefined);

  const { id } = router.query;

  useEffect(() => {
    getProductById(id)
      .then(product => setProduct(product))
      .catch(err => console.log(err))
  }, [id]);

  return (
    <DetalleProducto product={product} />
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
