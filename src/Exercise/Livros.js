import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import { Form } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

function LivrosExercise(){

return(
<>
<div className = "container"></div>
    <div className = "col"></div>
    <div class="container mt-4">
    <div class="text-center">
    <Carousel data-bs-theme="dark"  >
      <Carousel.Item>
        <img src= "../livro1.png" text="First slide" width={300} height={300} />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../livro2.png"  text="Second slide" width={300} height={300} />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../livro3.png" text="Third slide" width={300} height={300} />
      </Carousel.Item>
    </Carousel>
    </div>
         </div>
         <div className = "container"></div>
    <div className = "col"></div>
    <div class="container mt-4">
    <div class="text-center">
    <Carousel data-bs-theme="dark"  >
      <Carousel.Item>
        <img src= "../livro4.png" text="First slide" width={300} height={300} />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../livro5.png"  text="Second slide" width={300} height={300} />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../livro6.png" text="Third slide" width={300} height={300} />
      </Carousel.Item>
    </Carousel>
    </div>
         </div>

</>
)
}
export default LivrosExercise;