import { useParams } from "react-router-dom";
import { Product } from "../../components";
import "./product-details.css";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function ProductDetails() {
  let params = useParams().productId;
  const product = useContext(ProductsContext);

  return (
    <div className="container">
      {product &&
        product
          .filter((target) => target.id == params)
          .map((product) => (
            <Product
              link={false}
              key={product.id}
              product={product}
              className="product-details w-100"
            />
          ))}
    </div>
  );
}
