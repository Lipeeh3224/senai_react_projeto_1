import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

function CadastroExercise(){

return(
<>
<Container>
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="email" placeholder="Digite seu Nome aqui" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control type="email" placeholder="E-Mail" />
        <Alert variant="dark">
         Seu E-Mail nunca será compartilhado com ninguém.
        </Alert>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
    </Container>
    </>

)
}
export default CadastroExercise;