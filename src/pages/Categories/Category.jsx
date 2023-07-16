import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import { Product } from "../../components";

export default function Category() {
  const params = useParams().catName;

  let products = useContext(ProductsContext);

  return (
    <div className="container-fluid">
      <div className="row mt-4" style={{ minHeight: "calc(100vh - 80px)" }}>
        {products &&
          products
            .filter((product) => product.category === params)
            .map((product) => (
              <Product link={true} key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}
