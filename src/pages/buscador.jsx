import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import ProductList from "@/components/ProductList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProductsBySearchQuery } from "@/utils/products";
import { Searchbar } from "@/components/Searchbar";

export default function Home() {
  const router = useRouter()
  const { q: searchQuery } = router.query
  const [showedProducts, setShowedProducts] = useState([])

  useEffect(() => {
    setShowedProducts(getProductsBySearchQuery(searchQuery))
  }, [searchQuery])

  return (
    <>
      <Head>
        <title>LatinAmerica Business Center</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-8 my-5">
          <div style={{ margin: "40px 0px", maxWidth: "500px" }}>
            <Searchbar />
          </div>
          <p>CATEGORY: { searchQuery?.toUpperCase()}</p>
          <hr style={{ border: "2px solid white", opacity: 1 }} />
          <ProductList products={ showedProducts } />
        </div>
      </div>
    </>
  );
}
