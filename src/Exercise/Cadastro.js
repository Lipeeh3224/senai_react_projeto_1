import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import axios from 'axios';
import './Login.css';

function CadastroExercise() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);

    const config = {
      method: 'post',
      url: 'http://143.198.156.185/api/auth/register',
      data: data
    };

    try {
      const response = await axios(config);
      setSuccess('Cadastro realizado com sucesso!');
      setError(null);
    } catch (error) {
      setError('Erro ao Cadastrar.');
      setSuccess(null);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card className="w-50">
        <Card.Header className="text-center">Cadastro</Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite seu Nome aqui" 
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Digite seu E-Mail aqui" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              <Alert variant="warning" className="mt-2">
                Seu E-Mail nunca será compartilhado com ninguém.
              </Alert>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Digite sua Senha aqui" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <div className="d-grid">
              <Button variant="warning" type="submit">
                Cadastrar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CadastroExercise;