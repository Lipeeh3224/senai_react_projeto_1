import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import axios from 'axios';

const BemVindoExercise = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function buscarFilmes() {
            try {
                const response = await axios.get("http://143.198.156.185/api/home");
                setFilmes(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        buscarFilmes();
    }, []);

    return (
        <Container>
            <Row className="mt-4 justify-content-center">
                <Col xs={12} className="text-center">
                    <h1 style={{ textShadow: '1px 1px #fec029' }}>Bem-vindo ao nosso site!</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Carousel>
                        {filmes.map((filme, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={filme.imagens[2]}
                                    alt={filme.titulo}
                                />
                                <Carousel.Caption>
                                    <h3 style={{ textShadow: '1px 1px #fec029' }}>{filme.title}</h3>
                                    <p>{filme.sinopse}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col className="text-center">
                    <h2 style={{ textShadow: '1px 1px #fec029', borderBottom: '2px solid #fec029', paddingBottom: '5px', width: 'fit-content', margin: '0 auto' }}>Filmes</h2>
                </Col>
            </Row>
            <Row className="pt-2 pb-3 justify-content-center">
                {filmes.map((filme, index) => (
                    <Col key={index} xs={6} sm={4} md={3} lg={2} className="text-center">
                        <Card style={{ border: '2px solid #fec029', borderRadius: '10px', marginBottom: '15px' }}>
                            <Card.Img variant="top" src={filme.url_thumbnail} />
                            <Card.Body>
                                <Card.Title>{filme.titulo}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="mt-4">
                <Col className="text-center">
                    <h2 style={{ textShadow: '1px 1px #fec029', borderBottom: '2px solid #fec029', paddingBottom: '5px', width: 'fit-content', margin: '0 auto' }}>Livros</h2>
                </Col>
            </Row>
            <Row className="pt-2 pb-3 justify-content-center">
                {filmes.map((filme, index) => (
                    <Col key={index} xs={6} sm={4} md={3} lg={2} className="text-center">
                        <Card style={{ border: '2px solid #fec029', borderRadius: '10px', marginBottom: '15px' }}>
                            <Card.Img variant="top" src={filme.url_thumbnail} />
                            <Card.Body>
                                <Card.Title>{filme.titulo}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BemVindoExercise;
