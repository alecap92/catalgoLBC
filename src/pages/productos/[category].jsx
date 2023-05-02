import ProductList from "@/components/ProductList";
import { PRODUCT_CATEGORIES } from "@/constants/products";
import { Searchbar } from "@/components/Searchbar";
import ProductsLayout from "@/layouts/ProductsLayout";

export default function Products({ products, category }) {
  return (
    <>
      <div style={{ margin: "40px 0px", maxWidth: "500px" }}>
        <Searchbar />
      </div>
      <p>CATEGORY: {category?.toUpperCase()}</p>
      <hr style={{ border: "2px solid white", opacity: 1 }} />
      <ProductList products={products} />
    </>
  );
}

Products.getLayout = function getLayout(page) {
  return <ProductsLayout title="LatinAmerica Business Center">{page}</ProductsLayout>;
};

export async function getStaticPaths() {
  const allCategories = PRODUCT_CATEGORIES.map((category) => ({
    params: {
      category,
    },
  }));

  return {
    paths: allCategories,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let products = [];

  try {
    const response = await fetch("https://newccacnodemongodb-production.up.railway.app/api/v1/products");
    const data = await response.json();

    if (Array.isArray(data?.products)) {
      products = data.products.filter((product) => product.category === params.category);
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      products,
      category: params.category,
    },
  };
}
