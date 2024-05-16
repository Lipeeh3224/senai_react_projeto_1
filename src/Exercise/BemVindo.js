import Carousel from 'react-bootstrap/Carousel';


function BemVindoExercise(){

return(
<>
<div className = "container"></div>
    <div className = "col"></div>
    <div class="container mt-4">
    <div class="text-center">
    <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img src= "../homem1.png" text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../homem2.png"  text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../homem3.png" text="Third slide" />
      </Carousel.Item>
    </Carousel>
    </div>
         </div>

</>
)
}
export default BemVindoExercise;