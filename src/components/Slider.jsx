import Carousel from 'react-bootstrap/Carousel';

















function IndividualIntervalsExample({Event1,SRC1,dec1,Event2,SRC2,dec2,Event3,SRC3,dec3,Event4,SRC4,dec4,Event5,SRC5,dec5}) {
  return (
    <Carousel className="slider">
      <Carousel.Item className='sliderimg' interval={5000}>
        <img
          className="d-block w-100"
          src={SRC1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{Event1}</h3>
          <p>{dec1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='sliderimg' interval={5000}>
        <img
          className="d-block w-100"
          src={SRC2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>{Event2}</h3>
          <p>{dec2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='sliderimg' interval={5000}>
        <img
          className="d-block w-100"
          src={SRC3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>{Event3}</h3>
          <p>{dec3}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='sliderimg' interval={5000}>
        <img
          className="d-block w-100"
          src={SRC4}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>{Event4}</h3>
          <p>{dec4}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='sliderimg' interval={5000}>
        <img
          className="d-block w-100"
          src={SRC5}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>{Event5}</h3>
          <p>{dec5}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;