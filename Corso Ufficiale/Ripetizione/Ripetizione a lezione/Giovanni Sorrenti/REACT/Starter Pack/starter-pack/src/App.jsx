import useFetch from "./components/customHooks/useFetch";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import { useState } from "react";

function App() {
  const { error, data } = useFetch();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  console.log(data);
  return (
    <>
      <div
        className="d-flex justify-content-center .align-items-baseline
    align-content-around flex-wrap gap-3 position-relative"
      >
        {data &&
          data.map((product) => (
            <Card key={product.id} style={{ width: "18rem" }}>
              <Card.Img
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                variant="top"
                src={product.image}
                role="button"
                style={{ width: "286px", height: "180px" }}
                className="object-fit-contain"
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.category}</Card.Text>
                <Card.Text
                  id="text"
                  className={
                    isHovered
                      ? "oerflow-hidden visible opacity-100 h-auto"
                      : "oerflow-hidden invisible"
                  }
                >
                  {product.description}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}

export default App;
