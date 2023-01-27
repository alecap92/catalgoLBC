import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import ProductList from "@/components/ProductList";
import { useRouter } from "next/router";
import { ListadoDeProductos } from "@/data/productList.js";
import { PRODUCT_CATEGORIES } from "@/constants/products";
import { Searchbar } from "@/components/Searchbar";
import ProductsLayout from "@/layouts/ProductsLayout";

export default function Products({ products, category }) {
    return (
        <>
            <div style={{ margin: "40px 0px", maxWidth: "500px" }}>
                <Searchbar />
            </div>
            <p>CATEGORY: { category?.toUpperCase() }</p>
            <hr style={{ border: "2px solid white", opacity: 1 }} />
            <ProductList products={ products } />
        </>
    );
}

Products.getLayout = function getLayout(page) {
    return (
      <ProductsLayout title="LatinAmerica Business Center">
        { page }
      </ProductsLayout>
    )
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