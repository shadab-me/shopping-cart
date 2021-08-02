import Product from "./Product";
const Products = ({ products }) => {
  return (
    <main className="products flex  flex-wrap justify-content">
      {products.map((product) => {
        return <Product></Product>;
      })}
    </main>
  );
};

export default Products;
