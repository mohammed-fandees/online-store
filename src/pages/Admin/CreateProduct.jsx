import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import axios from "axios";

export default function CreateProduct() {
  const [validated, setValidated] = useState(false);
  const categories = useContext(CategoriesContext);

  let newProduct = {
    id: "",
    title: "",
    price: "",
    description: "",
    category: "electronics",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      axios
        .post("http://localhost:9000/products", newProduct)
        .then((res) => console.log(`Product Created Successesfully`))
        .catch((err) => console.log(err));
    }
    setValidated(true);
  };

  return (
    <div className="manage">
      <div className="container-fluid">
        <h2 className="mt-3">Createing New Product</h2>
        <div className="body mt-4">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Product ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => {
                    newProduct.id = e.target.value;
                  }}
                />
                <Form.Control.Feedback>Valid ID</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => {
                    newProduct.title = e.target.value;
                  }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Product Price</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="text"
                    required
                    onChange={(e) => {
                      newProduct.price = e.target.value;
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please put an appropriate price
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    newProduct.category = e.target.value;
                  }}
                >
                  {categories &&
                    categories.map((cat) => (
                      <option value={cat} key={cat}>
                        {cat}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="8" controlId="validationCustom04">
                <Form.Label>Product Image URL</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => {
                    newProduct.image = e.target.value;
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid url.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationsCutom04">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="7"
                  required
                  onChange={(e) => {
                    newProduct.description = e.target.value;
                  }}
                />
                <Form.Control.Feedback type="valid">
                  Nice Description!
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Create</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
