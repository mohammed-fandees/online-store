import "./product.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import Loading from "../../images/Loading_icon.gif";

export default function Product(props) {
  const { product } = props;

  const productContent = (
    <>
      <div className="image overflow-hidden align-items-center rounded-2 mb-3">
        {product.image ? (
          <img className="img-fluid" src={product.image} />
        ) : (
          <img className="img-fluid" style={{maxHeight: 130}} src={Loading} />
        )}
      </div>
      <h3 className="title">{product.title}</h3>
      <p className="description mb-2">{product.description}</p>
    </>
  );

  return (
    <div className={`col-lg-6 ${props.className}`}>
      <div
        className="card product rounded-2 p-3 mb-3"
        style={{ maxHeight: 400, height: 400 }}
      >
        {!props.link ? (
          productContent
        ) : (
          <Link to={`/products/${product.id}`}>{productContent}</Link>
        )}

        <ul className="d-flex justify-content-between align-items-center">
          <li className="fw-bold">${product.price}</li>
          {product.rating && (
            <li className="rating">
              <BsFillStarFill /> {product.rating.rate} -
              <span className="count"> {product.rating.count}</span>
            </li>
          )}
        </ul>
        <div className="actions d-flex justify-content-between mt-2">
          <Button variant="success">Buy</Button>{" "}
          <Button variant="primary">Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
