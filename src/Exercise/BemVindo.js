import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import axios from 'axios';

const BemVindoExercise = () => {
    const [filmes, setFilmes] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        async function buscarFilmes() {
            try {
                const response = await axios.get("http://143.198.156.185/api/filmes");
                setFilmes(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        buscarFilmes();
    }, []);

    async function buscaLivros() {
        const filmes = axios.get("http://143.198.156.185/api/livros").then(function (value) {
            setLivros(value.data);
        }).catch(function (value) {
            console.log(value);
        });
    }
    buscaLivros();

    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <Carousel style={{ border: '2px solid #fec029', boxShadow: '6px 6px 6px rgba(254, 192, 41, 0.5)' }}>
                        {filmes.map((filme, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={filme.imagens[0].url}
                                    alt={filme.titulo}
                                    style={{ width: '700px', height: '700px' }}
                                />
                                <Carousel.Caption>
                                    <h3 style={{ textShadow: '1px 1px #fec029' }}>{filme.titulo}</h3>
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
                {livros.map((livro, index) => (
                    <Col key={index} xs={6} sm={4} md={3} lg={2} className="text-center">
                        <Card style={{ border: '2px solid #fec029', borderRadius: '10px', marginBottom: '15px' }}>
                            <Card.Img variant="top" src={livro.url_thumbnail} />
                            <Card.Body>
                                <Card.Title>{livro.titulo}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BemVindoExercise;
