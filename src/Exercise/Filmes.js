import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css';

const carouselData = [
  {
    images: [
      { src: "../homem1.png", alt: "Homem 1" },
      { src: "../homem2.png", alt: "Homem 2" },
      { src: "../homem3.png", alt: "Homem 3" },
    ],
  },
  {
    images: [
      { src: "../carros1.png", alt: "Carro 1" },
      { src: "../carros2.png", alt: "Carro 2" },
      { src: "../carros3.png", alt: "Carro 3" },
    ],
  },
  {
    images: [
      { src: "../velozes1.png", alt: "Velozes 1" },
      { src: "../velozes2.png", alt: "Velozes 2" },
      { src: "../velozes3.png", alt: "Velozes 3" },
    ],
  },
];

function FilmesExercise() {
  return (
    <Container className="mt-5">
      {carouselData.map((carousel, index) => (
        <Row className="mb-5" key={index}>
          <Col className="text-center">
            <Carousel data-bs-theme="dark">
              {carousel.images.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block mx-auto carousel-image"
                    src={image.src}
                    alt={image.alt}
                    style={{ maxHeight: '350px', width: '300px' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default FilmesExercise;
