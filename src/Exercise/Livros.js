import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css';

const carouselData = [
  {
    images: [
      { src: "../livro1.png", alt: "Livro 1" },
      { src: "../livro2.png", alt: "Livro 2" },
      { src: "../livro3.png", alt: "Livro 3" },
    ],
  },
  {
    images: [
      { src: "../livro4.png", alt: "Livro 1" },
      { src: "../livro5.png", alt: "Livro 2" },
      { src: "../livro6.png", alt: "Livro 3" },
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
