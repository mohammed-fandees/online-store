import { useContext, useEffect } from "react";
import { Product } from "../../components";

import { ProductsContext } from "../../contexts/ProductsContext";
export default function Home() {
  const products = useContext(ProductsContext);

  return (
    <div className="home container-fluid">
      <div className="row mt-4">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} link={true} />
          ))}
      </div>
    </div>
  );
}
