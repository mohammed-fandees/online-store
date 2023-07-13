import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../components";
import "./product-details.css";

export default function ProductDetails() {
  let params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/products/${params.productId}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="container">
      <Product
        link={false}
        className="product-details w-100"
        product={product}
      />
    </div>
  );
}
