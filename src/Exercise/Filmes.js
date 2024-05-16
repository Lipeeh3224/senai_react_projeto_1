import Carousel from 'react-bootstrap/Carousel';


function BemVindoExercise(){

return(
<>
<div className = "container"></div>
    <div className = "col"></div>
    <div class="container mt-4">
    <div class="text-center">
    <Carousel data-bs-theme="dark"  >
      <Carousel.Item>
        <img src= "../homem1.png" text="First slide" width={350} height={350} />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../homem2.png"  text="Second slide" width={350} height={350} />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../homem3.png" text="Third slide" width={350} height={350} />
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
        <img src= "../carros1.png" text="First slide" width={350} height={350} />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../carros2.png"  text="Second slide" width={350} height={350} />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../carros3.png" text="Third slide" width={350} height={350} />
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
        <img src= "../velozes1.png" text="First slide" width={350} height={350} />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../velozes2.png"  text="Second slide" width={350} height={350} />
      </Carousel.Item>
      <Carousel.Item>
        <img src= "../velozes3.png" text="Third slide" width={350} height={350} />
      </Carousel.Item>
    </Carousel>
    </div>
         </div>

</>
)
}
export default BemVindoExercise;