import Card from "./Card";

const ProductList = ({ products }) => {
  return (
    <div className="m-3">
      <div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products?.map((product) => (
            <Card product={ product } key={ product.id } />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
