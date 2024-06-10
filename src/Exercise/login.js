import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useState } from "react";
import './Login.css';

function LoginExercise() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    let response = await axios.post('http://143.198.156.185/api/auth/login', {
      email: email,
      password: password
    }).then(function (value) {
      setSuccess(`Seja bem-vindo, ${value.data.user.name}!`);
      setError(null);
    })
      .catch(function (value) {
        console.log(value);
        setError(value.response.data.error);
        setSuccess(null);
      });
  }

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card className="w-50">
        <Card.Header className="text-center">Login</Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="warning">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua Senha aqui"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div className="d-grid">
              <Button variant="warning" type="submit">
                Entrar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginExercise;
