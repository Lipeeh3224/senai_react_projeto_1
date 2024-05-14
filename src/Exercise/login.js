import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import { Form } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import InputGroup from 'react-bootstrap/InputGroup';


function LoginExercise(){

return(
<>
<InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">E-Mail</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Senha</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </>
)
}
export default LoginExercise;