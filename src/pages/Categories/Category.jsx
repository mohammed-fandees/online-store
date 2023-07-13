import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../components";
import Loading from "../../images/Loading_icon.gif";

export default function Category() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cats = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/products/category/${cats.categoryName}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mt-4" style={{minHeight: "calc(100vh - 80px)"}}>
        {loading ? (
          <img src={Loading} className="d-block m-auto" style={{width: 200}} alt="Spinner" />
          ) : (
          products.map((product) => (
            <Product link={true} key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
