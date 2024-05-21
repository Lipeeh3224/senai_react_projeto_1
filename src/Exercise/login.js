import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import { useState } from "react";

function LoginExercise(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  async function handleSubmit(e){
    e.preventDefault();

    let response = await axios.post ('http://143.198.156.185/api/auth/login')
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }


return(
<>
<Container>
<Form>
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Manter Conectado" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Logar
      </Button>
    </Form>
    </Container>
    </>
)
}
export default LoginExercise;