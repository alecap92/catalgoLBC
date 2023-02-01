import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import ProductList from "@/components/ProductList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProductsBySearchQuery } from "@/utils/products";
import { Searchbar } from "@/components/Searchbar";
import ProductsLayout from "@/layouts/ProductsLayout";

export default function Buscador() {
  const router = useRouter()
  const { q: searchQuery } = router.query
  const [showedProducts, setShowedProducts] = useState([])

  useEffect(() => {
    getProductsBySearchQuery(searchQuery)
      .then(products => setShowedProducts(products))
      .catch(() => setShowedProducts([]))
  }, [searchQuery])

  return (
    <>
      <div style={{ margin: "40px 0px", maxWidth: "500px" }}>
        <Searchbar />
      </div>
      <p>CATEGORY: { searchQuery?.toUpperCase()}</p>
      <hr style={{ border: "2px solid white", opacity: 1 }} />
      <ProductList products={ showedProducts } />
    </>
  );
}

Buscador.getLayout = function getLayout(page) {
  return (
    <ProductsLayout title="LatinAmerica Business Center">
      { page }
    </ProductsLayout>
  )
}