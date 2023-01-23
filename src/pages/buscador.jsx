import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import ProductList from "@/components/ProductList";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { subCategory } = router.query;

  return (
    <>
      <Head>
        <title>Catalogo de productos LBC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
      </Head>
      <section>
        <div className="row">
          <div className="col-md-2 col-sm-0">
            <Sidebar />
          </div>
          <div className="col-md-9 my-5">
            <div style={{ margin: "40px 0px", maxWidth: "500px" }}>
              <input
                type="text"
                name=""
                className="form-control"
                id=""
                placeholder="Buscar producto"
              />
            </div>
            <p>CATEGORY: {subCategory?.toUpperCase()}</p>
            <hr style={{ border: "2px solid white", opacity: 1 }} />
            <ProductList subCategory={subCategory} />
          </div>
        </div>
      </section>
    </>
  );
}
