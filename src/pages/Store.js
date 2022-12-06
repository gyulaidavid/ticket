import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { productsArray } from "../productStore";
import ProductCard from "../components/ProductCard";
import Carousel from 'react-bootstrap/Carousel';

function Store() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1>Welcome to the store!</h1>
     <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            {productsArray.map((product, idx) => (
              <Col align='center' key={idx}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

render (<Store/>) ;
