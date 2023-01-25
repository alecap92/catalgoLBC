import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import ProductList from "@/components/ProductList";
import { useRouter } from "next/router";
import { ListadoDeProductos } from "@/data/productList.js";
import { PRODUCT_CATEGORIES } from "@/constants/products";

export default function Products({ products, category }) {
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
                <input
                type="text"
                name=""
                className="form-control"
                id=""
                placeholder="Search Product"
                />
            </div>
            <p>CATEGORY: { category?.toUpperCase() }</p>
            <hr style={{ border: "2px solid white", opacity: 1 }} />
            <ProductList products={ products } />
            </div>
        </div>
        </>
    );
}

export async function getStaticPaths() {
    const allCategories = PRODUCT_CATEGORIES.map(category  => ({
        params: {
            category
        }
    }))

    return {
        paths: allCategories,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const products = ListadoDeProductos.filter((product) => product.subCategory?.toLocaleLowerCase() === params.category);

    return {
        props: {
          products,
          category: params.category
        },
    };
}